<?php

namespace App\Http\Controllers;

use App\Admin;
use App\CustomerEmployee;
use App\Parameter;
use App\Payrolls;
use App\Purchases;
use App\Sales;
use App\Settings;
use App\Tax;
use App\TaxCustomers;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use PHPExcel_Style_Alignment;
use PHPExcel_Style_Border;
class ExportController extends Controller {
	//
	public function export_customers(Request $request) {
		$customers = TaxCustomers::latest('id')->get()->map(function ($customer) {
			return ['Name Khmer' => $customer->name_khmer, 'Name English' => $customer->name_english, 'Tax ID NO' => $customer->tax_card_num, 'TIN NO' => $customer->tin_no, 'Incorporation date' => $customer->incorporation_date, 'Address' => $customer->address, 'Street' => $customer->street, 'Group' => $customer->group, 'Village' => $customer->village, 'Sangkat' => $customer->sangkat, 'District' => $customer->district, 'Province' => $customer->province, 'Muncipality' => $customer->muncipality, 'Tel' => $customer->telephone, 'ePhone' => $customer->e_phone, 'Email' => $customer->email, 'Industry' => $customer->industry, 'Tax Duration' => $customer->tax_duration];
		});
		Excel::create('customers', function ($excel) use ($customers) {
			$excel->sheet('customers', function ($sheet) use ($customers) {

				$sheet->getStyle('A1:R1')->getFont()->setBold(true);
				$sheet->fromArray($customers);
			});
		})->export('xlsx');

	}
	public function export_customer_employees($customer_id) {
		$customer = TaxCustomers::where('customer_id', $customer_id)->first();
		$employees = CustomerEmployee::whereTaxCustomerId($customer_id)->latest('id')->get()->map(function ($employee) {
			return ['NSSF No' => $employee->nssf_num, 'Employee No' => $employee->employee_num, 'Name English' => $employee->name_english, 'Name Khmer' => $employee->name_khmer, 'Nationality' => $employee->nationality, 'DOB' => $employee->dob, 'Joining Date' => $employee->joining_date, 'Position' => $employee->position, 'Sex' => $employee->sex, 'Contract Type' => $employee->contract_type, 'Spouse' => $employee->spouse, 'Children' => $employee->children];
		});
		Excel::create($customer->name_english . '- employees', function ($excel) use ($employees) {
			$excel->sheet('Employees', function ($sheet) use ($employees) {
				if (count($employees) == 0) {
					$sheet->prependRow(['NSSF No', 'Employee No', 'Name English', 'Name Khmer', 'Nationality', 'DOB', 'Joining Date', 'Position', 'Sex', 'Contract Type', 'Spouse', 'Children']);
				}
				$sheet->getStyle('A1:L1')->getFont()->setBold(true);
				$sheet->fromArray($employees);
			});
		})->export('xlsx');

	}
	public function export_taxes($customer_id) {
		$customer = TaxCustomers::where('customer_id', $customer_id)->first();
		$employees = CustomerEmployee::whereTaxCustomerId($customer_id)->latest('id')->get()->map(function ($employee) {
			return ['Created By' => $employee->nssf_num, 'Employee No' => $employee->employee_num, 'Name English' => $employee->name_english, 'Name Khmer' => $employee->name_khmer, 'Nationality' => $employee->nationality, 'DOB' => $employee->dob, 'Joining Date' => $employee->joining_date, 'Position' => $employee->position, 'Sex' => $employee->sex, 'Contract Type' => $employee->contract_type, 'Spouse' => $employee->spouse, 'Children' => $employee->children];
		});
		Excel::create($customer->name_english . '- taxes', function ($excel) use ($employees) {
			$excel->sheet('Employees', function ($sheet) use ($employees) {
				if (count($employees) == 0) {
					$sheet->prependRow(['NSSF No', 'Employee No', 'Name English', 'Name Khmer', 'Nationality', 'DOB', 'Joining Date', 'Position', 'Sex', 'Contract Type', 'Spouse', 'Children']);
				}
				$sheet->getStyle('A1:L1')->getFont()->setBold(true);
				$sheet->fromArray($employees);
			});
		})->export('xlsx');

	}

	public function export_payroll($customer_id, $tax_id) {
		$customer = TaxCustomers::whereCustomerId($customer_id)->first();
		$tax = Tax::whereTaxId($tax_id)->first();
		$salary_rate = Settings::where('key','salary_rate')->pluck('value')->first();
		$payrolls = Payrolls::with('employee','tax_subject.parameter')->where('tax_id', $tax_id)->get()->map(function ($payroll) use($salary_rate){
			$basic_salary_riel = $payroll->basic_salary * $salary_rate;
			$allowance = ($payroll->employee->spouse + $payroll->employee->children) * 150000;
			$tax_calculation_base = $basic_salary_riel - $allowance;
			$tax_rate = $payroll->tax_subject->parameter->rate;
			if($payroll->employee->employee_type == 'RD'){

				$tax_on_salary = ($tax_calculation_base * $this->rateToPercent($tax_rate)) - $payroll->tax_subject->parameter->tax_bracket;
			}else{
				$tax_on_salary = ($tax_calculation_base * $this->rateToPercent($tax_rate));	
			}
			return ['Employee Name (English)' => $payroll->employee->name_english, 'Employee Name (Khmer)' => $payroll->employee->name_khmer, 'NSSF NO' => $payroll->employee->nssf_num, 'Employee NO' => $payroll->employee->employee_num,'Basic Salary' => $payroll->basic_salary,'Amount to be paid (Riel)'=>$basic_salary_riel,'Allowance'=>$allowance,'Tax Calculation Base'=>$tax_calculation_base,'Tax Rate'=> $tax_rate.'%','Tax On Salary'=>$tax_on_salary,'Over Time' => $payroll->over_time, 'Commissions' => $payroll->commissions, 'Seniority Payment' => $payroll->seniority_payment, 'Severance Pay' => $payroll->severance_pay, 'Maternity' => $payroll->maternity_leave, 'Paid Annual Leave' => $payroll->paid_annual_leave, 'Food Allowance' => $payroll->food_allowance, 'Transport Allowance' => $payroll->transport_allowance, 'Other Allowance' => $payroll->others, 'Deduction Advance' => $payroll->deduction_advance, 'Salary Adjustment' => $payroll->salary_adjusment];
		});

		Excel::create($customer->name_english . '-tax-' . $tax['title'] . '-payrolls', function ($excel) use ($tax, $payrolls, $customer) {
			$excel->sheet('Payrolls', function ($sheet) use ($payrolls, $customer) {
				$hr_centre = array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

				$address = $customer->address . ', ' . $customer->street . ', ' . $customer->muncipality . ', ' . $customer->sangkat . ', ' . $customer->district . ', ' . $customer->province . ', ' . $customer->group;
				$eng_address = 'Address:​​ ' . $address;
				$khmr_address = 'អាសយដ្ឋានៈ​​ ' . $address;

				$tin = 'VAT TIN: ' . $customer->tin_no;
				$tin_khmer = 'លេខអត្តសញ្ញាណកម្មអតបៈ ' . $customer->tin_no;

				$com_name = $customer->owner != null ? $customer->owner['name_english'] : 'No Name';
				$com_name_khmr = $customer->owner != null ? $customer->owner['name_khmer'] : 'គ្មាន​ឈ្មោះ';

				$company_name = 'Company Name: ' . $com_name;
				$company_name_khmer = 'នាមករណ៍សហគ្រាស: ' . $com_name_khmr;

				$sheet->getStyle('A1:U1')->getFont()->setBold(true);
				$sheet->prependRow([]);

				$sheet->prependRow([$eng_address]);
				$sheet->prependRow([$khmr_address]);
				$sheet->prependRow([$tin]);
				$sheet->prependRow([$tin_khmer]);
				$sheet->prependRow([$company_name]);
				$sheet->prependRow([$company_name_khmer]);

				$sheet->prependRow(['For Feburary 2019']);
				$sheet->prependRow(['SALARY TAX']);
				$sheet->prependRow(['ពន្ធកាត់ទុកលើប្រាក់បៀវត្ស']);

				for ($i = 1; $i <= 11; $i++) {
					$val = 'A' . $i . ':U' . $i;
					$sheet->mergeCells($val);
				}
				for ($i = 1; $i <= 4; $i++) {
					$val = 'A' . $i . ':U' . $i;
					$sheet->getStyle($val)->getAlignment()->applyFromArray($hr_centre);
				}
				$sheet->appendRow(['Employee Name (English)', 'Employee Name (Khmer)', 'NSSF NO', 'Employee NO', 'Basic Salary (USD)','Amount to pe paid (Riel)','Allowance','Tax Calculation Base','Tax Rate','Tax on salary','Over Time', 'Commissions', 'Seniority Payment', 'Severance Pay', 'Maternity', 'Paid Annual Leave', 'Food Allowance', 'Transport Allowance', 'Other Allowance', 'Deduction Advance', 'Salary Adjustment']);
				$sheet->rows($payrolls);
				$sheet->getStyle('A12:U12')->getFont()->setBold(true);
				// $sheet->fromArray($payrolls);
			});
		})->export('xlsx');

	}

	public function export_purchases($customer_id, $tax_id) {
		$headings = ['Branch Name', 'Tax Period', 'Invoice Date', 'Invoice Number', 'Supplier', 'Goods Description', 'Quantity', 'Non Taxable Purchases', 'Local Purchase (Taxable Value)', 'Imports (Taxable Value)','Item Subject To Taxes'];
		$customer = TaxCustomers::with(['owner'])->whereCustomerId($customer_id)->first();
		$tax = Tax::whereTaxId($tax_id)->first();
		$purchases = Purchases::with(['created_by','taxes_subject.parameter'])->where('tax_id', $tax_id)->get()->toArray();
		$exchange_rate = Settings::where('key','average_rate')->pluck('value')->first();
		$purchases = collect($purchases)->map(function ($purchase) use(&$headings,$exchange_rate) {
			
			$purchase = (Object) $purchase;
			$subjects = [];
			if(count($purchase->taxes_subject)){

				foreach ($purchase->taxes_subject as $key => $subject) {
					if($subject['parameter']['tax_code'] == 'FBT'){

						$subjects[$subject['parameter']['tax_code']] = ($purchase->non_taxable_purchases * $this->rateToPercent($subject['parameter']['rate'])); 
						$headings[] = $subject['parameter']['tax_code'];
					}

					if($subject['parameter']['tax_code'] == 'VAT'){
						//Vat local purchase
						$subjects[$subject['parameter']['tax_code'].' (Local Purchase)'] = ($purchase->local_purchase_tax_val * $this->rateToPercent($subject['parameter']['rate'])); 
						$headings[] = $subject['parameter']['tax_code'].' (Local Purchase )';
						
						//Vat for overseas purchase
						$subjects[$subject['parameter']['tax_code'].' (Overseas purchase)'] = ($purchase->imports_taxable_val * $this->rateToPercent($subject['parameter']['rate'])); 
						$headings[] = $subject['parameter']['tax_code'].' (Overseas purchase )';

					}	

					if($subject['parameter']['tax_code'] == 'WHT'){

						$subjects[$subject['parameter']['english_description'].'('.$subject['parameter']['tax_code'].')'] = ($purchase->non_taxable_purchases * $this->rateToPercent($subject['parameter']['rate'])) + ($purchase->local_purchase_tax_val * $this->rateToPercent($subject['parameter']['rate']));
						$headings[] = $subject['parameter']['english_description'].'('.$subject['parameter']['tax_code'].')';

					}

				}
				$item_subject_to_taxes = implode(', ', array_unique(array_pluck($purchase->taxes_subject,'parameter.tax_code') ) );
			}else{
				$item_subject_to_taxes = '';
			}

			$columns =  ['Branch Name' => $purchase->branch_name, 'Tax Period' => $purchase->tax_period, 'Invoice Date' => $purchase->invoice_date, 'Invoice Number' => $purchase->invoice_num, 'Supplier' => $purchase->supplier, 'Goods Description' => $purchase->description, 'Quantity' => $purchase->quantity, 'Non Taxable Purchases' => $purchase->non_taxable_purchases, 'Local Purchase (Taxable Value)' => $purchase->local_purchase_tax_val, 'Imports (Taxable Value)' => $purchase->imports_taxable_val,'Item Subject To Taxes'=>$item_subject_to_taxes];
			return array_merge($columns,$subjects);
		});
		Excel::create($customer->name_english . '-tax-' . $tax['title'] . '-purchases', function ($excel) use ($headings,$tax, $purchases, $customer) {
			$excel->sheet('purchases', function ($sheet) use ($headings,$purchases, $customer) {
				if (count($purchases) == 0) {
					$sheet->prependRow(['Branch Name', 'Tax Period', 'Invoice Date', 'Invoice Number', 'Supplier', 'Goods Description', 'Quantity', 'Non Taxable Purchases', 'Local Purchase (Taxable Value)', 'Imports (Taxable Value)']);
				}
				$hr_centre = array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
				$alphabets = range('A', 'Z');
				$columnIndex = count($headings) - 1;
				$address = $customer->address . ', ' . $customer->street . ', ' . $customer->muncipality . ', ' . $customer->sangkat . ', ' . $customer->district . ', ' . $customer->province . ', ' . $customer->group;
				$eng_address = 'Address:​​ ' . $address;
				$khmr_address = 'អាសយដ្ឋានៈ​​ ' . $address;

				$tin = 'VAT TIN: ' . $customer->tin_no;
				$tin_khmer = 'លេខអត្តសញ្ញាណកម្មអតបៈ ' . $customer->tin_no;

				$com_name = $customer->owner != null ? $customer->owner['name_english'] : 'No Name';
				$com_name_khmr = $customer->owner != null ? $customer->owner['name_khmer'] : 'គ្មាន​ឈ្មោះ';

				$company_name = 'Company Name: ' . $com_name;
				$company_name_khmer = 'នាមករណ៍សហគ្រាស: ' . $com_name_khmr;

				$sheet->prependRow([$eng_address]);
				$sheet->prependRow([$khmr_address]);
				$sheet->prependRow([$tin]);
				$sheet->prependRow([$tin_khmer]);
				$sheet->prependRow([$company_name]);
				$sheet->prependRow([$company_name_khmer]);

				$sheet->prependRow(['For Feburary 2019']);
				// $sheet->prependRow(['សំរាប់ ខែ កុម្ភៈ ឆ្នាំ 2019']);
				$sheet->prependRow(['PURCHASE JOURNAL']);
				$sheet->prependRow(['ទិន្នានុប្បវត្តិទិញ']);

				for ($i = 1; $i <= 11; $i++) {
					$val = 'A' . $i . ':'.$alphabets[$columnIndex] . $i;
					$sheet->mergeCells($val);
				}
				for ($i = 1; $i <= 4; $i++) {
					$val = 'A' . $i . ':'.$alphabets[$columnIndex] . $i;
					$sheet->getStyle($val)->getAlignment()->applyFromArray($hr_centre);
				}
				$sheet->appendRow($headings);
				$sheet->rows($purchases);
				if (count($purchases) == 0) {
				}
				$sheet->getStyle('A12:'.$alphabets[$columnIndex].'12')->getFont()->setBold(true);
				// $sheet->fromArray($purchases);
			});
		})->export('xlsx');

	}
	private function rateToPercent($rate){
		return ($rate / 100); 
	}
	public function export_sales($customer_id, $tax_id) {

		$headings = [
			'ថ្ងៃទី '.PHP_EOL.' Date',
			'លេខវិក្ក័យប័ត្រ'.PHP_EOL.'Invoice No.',
			'អ្នកផ្គត់ផ្គង់'.PHP_EOL.'Supplier',
			'លេខអត្តសញ្ញាណ'.PHP_EOL.'កម្មសារពើពន្'.PHP_EOL.'VAT TIN',
			'បរិយាយ'.PHP_EOL.'Description of goods / services',
			 'បរិមាណ'.PHP_EOL.'Quantity', 
			 'ការផ្គត់ផ្គង់មិនជាប់អាករ'.PHP_EOL.'Nontaxable Sales',
			 'ការផ្គត់ផ្គង់មិនជាប់អាករ'.PHP_EOL.'Nontaxable Sales',
			 'ការនាំចេញ'.PHP_EOL.'Value of Exports', 
			 'ការនាំចេញ'.PHP_EOL.'Value of Exports', 
			 'Sales to taxable person (Value)', 
			 'Sales to Consumer (Value)',
			 'Item Subject To Taxes',
			 'TOTAL (KHM)',
			 'Exchange Rate',
			 'Total (KHR)'
			];
		$customer = TaxCustomers::whereCustomerId($customer_id)->first();
		$tax = Tax::whereTaxId($tax_id)->first();
		$exchange_rate = Settings::where('key','average_rate')->pluck('value')->first();
		$sales = Sales::with(['created_by','taxes_subject.parameter'])->where('tax_id', $tax_id)->get()->toArray();
		$sales = collect($sales);
		$sales = $sales->map(function ($sale) use(&$headings,$exchange_rate,$customer) {
		
			$sale = (Object) $sale;
			$total_in_khmer = ($sale->non_taxable_sales + $sale->vat + $sale->taxable_person_sales + $sale->cust_sales) * $exchange_rate;
			$subjects = [];
			if(count($sale->taxes_subject)){
				foreach ($sale->taxes_subject as $key => $subject) {
					if($subject['parameter']['tax_code'] == 'PPT'){

						$subjects[ $subject['parameter']['tax_code'].'('.$subject['parameter']['rate'].'%)' ] = $total_in_khmer * $this->rateToPercent($subject['parameter']['rate']);
						$headings[] = $subject['parameter']['tax_code'].'('.$subject['parameter']['rate'].'%)';
					}
					if($subject['parameter']['tax_code'] == 'VAT'){

						$subjects[ $subject['parameter']['tax_code'].'('.$subject['parameter']['rate'].'%)' ] = ($sale->taxable_person_sales + $sale->cust_sales) * $exchange_rate * $this->rateToPercent($subject['parameter']['rate']);
						$headings[] = $subject['parameter']['tax_code'].'('.$subject['parameter']['rate'].'%)';
					}

					if($subject['parameter']['tax_code'] == 'ACT'){

						$subjects[ $subject['parameter']['tax_code'] ] = ( ( $sale->taxable_person_sales + $sale->cust_sales) * $exchange_rate / (1 + $this->rateToPercent($subject['parameter']['rate']) ) ) * $this->rateToPercent($subject['parameter']['rate']);
						$headings[] = $subject['parameter']['tax_code'];
					}

					if($subject['parameter']['tax_code'] == 'PLT'){
						
						if($subject['parameter']['tax_param_id'] == 'PLT001'){
							
						$subjects[ $subject['parameter']['tax_code'] ] = ( ( $sale->taxable_person_sales + $sale->cust_sales) * $exchange_rate / (1 + $this->rateToPercent($subject['parameter']['rate']) ) ) * $this->rateToPercent($subject['parameter']['rate']);
						$headings[] = 'Importer & producer ('.$subject['parameter']['tax_code'].')';
						}
						if($subject['parameter']['tax_param_id'] == 'PLT002'){

						$subjects[ 'Distributors ('.$subject['parameter']['tax_code'].')' ] = ( ( $sale->taxable_person_sales + $sale->cust_sales) * $exchange_rate / (1 + $this->rateToPercent($subject['parameter']['base_tax']) * $this->rateToPercent( $subject['parameter']['rate'] ) ) ) * $this->rateToPercent($subject['parameter']['base_tax']) * $this->rateToPercent($subject['parameter']['rate']);
						$headings[] = 'Distributors ('.$subject['parameter']['tax_code'].')';
						}
					}
					if($subject['parameter']['tax_code'] == 'SPT'){

						$subjects[ $subject['parameter']['tax_code'] ] = ( ( $sale->taxable_person_sales + $sale->cust_sales) * $exchange_rate / (1 + $this->rateToPercent($subject['parameter']['base_tax']) * $this->rateToPercent( $subject['parameter']['rate'] ) ) ) * $this->rateToPercent($subject['parameter']['base_tax']) * $this->rateToPercent($subject['parameter']['rate']);
						$headings[] = $subject['parameter']['tax_code'];
						}
				}	
			$item_subject_to_taxes = implode(', ',array_unique(array_pluck($sale->taxes_subject,'parameter.tax_code')));
			}else{
				$item_subject_to_taxes = '';
			}
			$total_dollars = ($sale->non_taxable_sales + $sale->vat + $sale->taxable_person_sales + $sale->cust_sales);

			$columns = [$sale->invoice_date,$sale->invoice_num,$customer->name_english,$customer->tin_no,$sale->description, 'Quantity' => $sale->quantity, 'Non Taxable sales' => $sale->non_taxable_sales,($sale->non_taxable_sales * $exchange_rate),$sale->vat,($sale->vat * $exchange_rate), 'Sales to taxable person (Value)' => $sale->taxable_person_sales, 'Sales to Consumer (Value)' => $sale->cust_sales,'Item Subject To Taxes'=>$item_subject_to_taxes,'TOTAL (KHM)'=>$total_dollars,'Exchange Rate'=>$exchange_rate,'Total (KHR)'=>$total_in_khmer];
			return array_merge($columns,$subjects);
		});
		Excel::create($customer->name_english . '-tax-' . $tax['title'] . '-sales', function ($excel) use ($headings,$tax, $sales, $customer) {
			$excel->sheet('sales', function ($sheet) use ($headings,$sales, $customer,$tax) {

				$hr_centre = array(
					'horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER,
					'vertical'     	=> \PHPExcel_Style_Alignment::VERTICAL_TOP,
					'wrap'	 	=> true
				);

				$address = $customer->address . ', ' . $customer->street . ', ' . $customer->muncipality . ', ' . $customer->sangkat . ', ' . $customer->district . ', ' . $customer->province . ', ' . $customer->group;
				$eng_address = 'Address:​​ ' . $address;
				$khmr_address = 'អាសយដ្ឋានៈ​​ ' . $address;

				$tin = 'VAT TIN: ' . $customer->tin_no;
				$tin_khmer = 'លេខអត្តសញ្ញាណកម្មអតបៈ ' . $customer->tin_no;

				$com_name = $customer->name_english != null ? $customer->name_english : 'No Name';
				$com_name_khmr = $customer->name_khmer != null ? $customer->name_khmer : 'គ្មាន​ឈ្មោះ';

				$company_name = 'Company Name: ' . $com_name;
				$company_name_khmer = 'នាមករណ៍សហគ្រាស: ' . $com_name_khmr;

				$sheet->prependRow([]);

				$sheet->prependRow([$eng_address]);
				$sheet->prependRow([$khmr_address]);
				$sheet->prependRow([$tin]);
				$sheet->prependRow([$tin_khmer]);
				$sheet->prependRow([$company_name]);
				$sheet->prependRow([$company_name_khmer]);

				$sheet->prependRow([$tax->title]);
				// $sheet->prependRow(['សំរាប់ ខែ កុម្ភៈ ឆ្នាំ 2019']);
				$sheet->prependRow(['SALE JOURNAL']);
				$sheet->prependRow(['ទិន្នានុប្បវត្តិលក់']);

				$columns = range('A', 'Z');
				for ($i = 1; $i <= 11; $i++) {
					$val = 'A' . $i . ':'.$columns[ count($headings) - 1 ] . $i;
					$sheet->mergeCells($val);
				}
				for ($i = 1; $i <= 4; $i++) {
					$val = 'A' . $i . ':'.$columns[ count($headings) - 1 ] . $i;
					$sheet->getStyle($val)->getAlignment()->applyFromArray($hr_centre);
				}
				
				$rowCount = 15 + count($sales);
				$sheet->rows([
					['វិក្ក័យប័ត្រ '.PHP_EOL.' Invoice'], //adding 12 rows
					$headings, 	  //adding heading column
					[''],
					['']]);  // adding empty rows
				$sheet->rows($sales);
				$sheet->mergeCells('A12:G12');
				$sheet->mergeCells('H12:S12');
				$sheet->cell('H12', function($cell) {
				    // manipulating 12 row cell
				    $cell->setValue('ការផ្គត់ផ្គង់ '.PHP_EOL.' Suppliers');

				});
				/*$sheet->cell('K13', function($cell) {
				    // manipulating 12 row cell
				    $cell->setValue(' ');

				});
				$sheet->cell('L13', function($cell) {
				    // manipulating 12 row cell
				    $cell->setValue(' ');

				});*/
				// merging rows 13 to 15
				$lastColumn = $columns[ count($headings) - 1 ];
				$sheetColumns = range('A',$lastColumn);
				$sheet->setMergeColumn(array(
					'columns' => $sheetColumns,
				    'rows' => array(
				    	array(13,15),
				    )
				));
				$totalRows = $rowCount;
				for ($i = 12; $i <= $totalRows; $i++) {
				$val = 'A' . $i . ':'.$lastColumn . $i;
				$sheet->getStyle($val)->getAlignment()->applyFromArray($hr_centre);
				if($i <= 15){

				$sheet->getStyle($val)->getFont()->setBold(true);
				}
				$sheet->cells($val,function($cell){
					// $cell->setBorder('thin', 'thin', 'none', 'thin');
					$cell->setBorder(array(
					    'top'   => array(
					        'style' => 'thin'
					    ),
					    'bottom'   => array(
					        'style' => 'thin'
					    ),
					    'right'   => array(
					        'style' => 'thin'
					    ),
					    'left'   => array(
					        'style' => 'thick'
					    ),
					));
				})/*->setAllBorders('thin', 'thin', 'none', 'thin')*/;

				}
				$sheet->cells('G12:G'.$rowCount, function ($cells) {
				    $cells->setBackground('#b6dde8');
				});
				$sheet->cells('O12:O'.$rowCount, function ($cells) {
				    $cells->setBackground('#b6dde8');
				});
				$sheet->cells('P12:P'.$rowCount, function ($cells) {
				    $cells->setBackground('#b6dde8');
				});
				$sheet->setAutoSize(false);
				
				foreach ($sheetColumns as $key => $col) {
					$sheet->setWidth($col, 30);
					// $sheet->setHeight($key, 50);
				}
				for ($count=1; $count <= $rowCount; $count++) { 
					if($count >= 13 && $count <= 15){
						$sheet->setHeight($count, 15);

					}else{
						$sheet->setHeight($count, 20);
					}
					if($count == 12){
						$sheet->setHeight($count, 30);

					}
					
				}

				// dd();
			});
		})->export('xlsx');

	}
	public function export_team_members(Request $request) {
		$managers = Admin::with('reportingTo')->latest('id')->get()->map(function ($manager) {

			return ['First Name' => $manager->first_name, 'Last Name' => $manager->last_name, 'Gender' => $manager->gender, 'email' => $manager->email, 'Address' => $manager->address, 'state' => $manager->state, 'City' => $manager->city, 'Zip Code' => $manager->zip_code, 'Reports To' => $manager->reportingTo->full_name ?? '', 'Type' => $manager->type, 'status' => $manager->status ? 'Approved' : 'Disapproved'];
		});
		Excel::create('team-members', function ($excel) use ($managers) {
			$excel->sheet('Team Members', function ($sheet) use ($managers) {

				$sheet->getStyle('A1:K1')->getFont()->setBold(true);
				$sheet->fromArray($managers);
			});
		})->export('xlsx');
	}

	public function export_tax_parameters() {

		$parameter = Parameter::latest('id')->get()->map(function ($params) {
			return ['Khmer Description' => $params->khmer_description, 'English Description' => $params->english_description, 'Tax Code' => $params->tax_code, 'Rate' => $params->rate, 'Base Tax' => $params->base_tax, 'Tax Type' => $params->tax_type, 'Effective Date' => $params->effective_date, 'Minimum Amount' => $params->amount_min, 'Maximum Amount' => $params->amount_max, 'Remarks' => $params->remarks];
		});
		Excel::create('Tax Parameters', function ($excel) use ($parameter) {
			$excel->sheet('Tax Parameters', function ($sheet) use ($parameter) {
				if (count($parameter) == 0) {
					$sheet->prependRow(['Khmer Description', 'English Description', 'Tax Code', 'Rate', 'Base Tax', 'Tax Type', 'Effective Date', 'Minimum Amount', 'Maximum Amount', 'Remarks']);
				}

				$sheet->getStyle('A1:J1')->getFont()->setBold(true);
				$sheet->fromArray($parameter);
			});
		})->export('xlsx');

	}

	// public function export_soccer_markets() {

	// 	$url = "https://soccer.sportmonks.com/api/v2.0/markets?api_token=dxX0XmyrvgedIuA9xjvtAORr280Ayx2fqYyBppYzYxLtdaM7tCd2wkhXinlY";

	// 	//  Initiate curl
	// 	$ch = curl_init();
	// 	// Will return the response, if false it print the response
	// 	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	// 	// Set the url
	// 	curl_setopt($ch, CURLOPT_URL, $url);
	// 	// Execute
	// 	$result = curl_exec($ch);
	// 	// Closing
	// 	curl_close($ch);

	// 	// Will dump a beauty json :3
	// 	$result = json_decode($result, true);
	// 	$data = $result['data'];
	// 	$meta = $result['meta'];

	// 	$sportsName = 'Sport: ' . $meta['sports'][0]['name'];

	// 	$excelData = array();
	// 	foreach ($data as $key => $value) {
	// 		$excelData[$key]['Id'] = $value['id'];
	// 		$excelData[$key]['Name'] = $value['name'];
	// 	}

	// 	$hr_left = array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_LEFT);

	// 	Excel::create('soccer-market', function ($excel) use ($excelData, $hr_left, $sportsName) {
	// 		$excel->sheet('Soccer Market', function ($sheet) use ($excelData, $hr_left, $sportsName) {

	// 			$sheet->fromArray($excelData);
	// 			$sheet->getStyle("A1:A3000")->getAlignment()->applyFromArray($hr_left);
	// 			$sheet->prependRow([$sportsName]);
	// 			$sheet->mergeCells('A1:B1');
	// 			$sheet->getStyle('A1:B1')->getFont()->setBold(true);

	// 		});
	// 	})->export('xlsx');

	// }
}
