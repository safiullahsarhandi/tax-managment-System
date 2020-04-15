<?php

namespace App\Http\Controllers;

use App\Admin;
use App\CustomerEmployee;
use App\Payrolls;
use App\Purchases;
use App\Sales;
use App\Tax;
use App\TaxCustomers;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

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
		$payrolls = Payrolls::with('employee', 'created_by')->where('tax_id', $tax_id)->get()->map(function ($payroll) {
			return ['Employee Name (English)' => $payroll->employee->name_english, 'Employee Name (Khmer)' => $payroll->employee->name_khmer, 'NSSF NO' => $payroll->employee->nssf_num, 'Employee NO' => $payroll->employee->employee_num, 'Basic Salary' => $payroll->basic_salary, 'Basic Salary' => $payroll->bonus, 'Over Time' => $payroll->over_time, 'Commissions' => $payroll->commissions, 'Seniority Payment' => $payroll->seniority_payment, 'Severance Pay' => $payroll->severance_pay, 'Maternity' => $payroll->maternity_leave, 'Paid Annual Leave' => $payroll->paid_annual_leave, 'Food Allowance' => $payroll->food_allowance, 'Transport Allowance' => $payroll->transport_allowance, 'Other Allowance' => $payroll->others, 'Deduction Advance' => $payroll->deduction_advance, 'Salary Adjustment' => $payroll->salary_adjusment];
		});

		Excel::create($customer->name_english . '-tax-' . $tax->title . '-payrolls', function ($excel) use ($tax, $payrolls) {
			$excel->sheet($tax->title . ' Payrolls', function ($sheet) use ($payrolls) {
				if (count($payrolls) == 0) {
					$sheet->prependRow(['Employee Name (English)', 'Employee Name (Khmer)', 'NSSF NO', 'Employee NO', 'Basic Salary', 'Basic Salary', 'Over Time', 'Commissions', 'Seniority Payment', 'Severance Pay', 'Maternity', 'Paid Annual Leave', 'Food Allowance', 'Transport Allowance', 'Other Allowance', 'Deduction Advance', 'Salary Adjustment']);
				}
				$sheet->getStyle('A1:Q1')->getFont()->setBold(true);
				$sheet->fromArray($payrolls);
			});
		})->export('xlsx');

	}

	public function export_purchases($customer_id, $tax_id) {
		$customer = TaxCustomers::whereCustomerId($customer_id)->first();
		$tax = Tax::whereTaxId($tax_id)->first();
		$purchases = Purchases::with('created_by')->where('tax_id', $tax_id)->get()->map(function ($purchase) {
			return ['Branch Name' => $purchase->branch_name, 'Tax Period' => $purchase->tax_period, 'Invoice Date' => $purchase->invoice_date, 'Invoice Number' => $purchase->invoice_num, 'Supplier' => $purchase->supplier, 'Goods Description' => $purchase->description, 'Quantity' => $purchase->quantity, 'Non Taxable Purchases' => $purchase->non_taxable_purchases, 'Local Purchase (Taxable Value)' => $purchase->local_purchase_tax_val, 'Imports (Taxable Value)' => $purchase->imports_taxable_val];
		});

		Excel::create($customer->name_english . '-tax-' . $tax->title . '-purchases', function ($excel) use ($tax, $purchases) {
			$excel->sheet($tax->title . ' purchases', function ($sheet) use ($purchases) {
				if (count($purchases) == 0) {
					$sheet->prependRow(['Branch Name', 'Tax Period', 'Invoice Date', 'Invoice Number', 'Supplier', 'Goods Description', 'Quantity', 'Non Taxable Purchases', 'Local Purchase (Taxable Value)', 'Imports (Taxable Value)']);
				}
				$sheet->getStyle('A1:J1')->getFont()->setBold(true);
				$sheet->fromArray($purchases);
			});
		})->export('xlsx');

	}

	public function export_sales($customer_id, $tax_id) {
		$customer = TaxCustomers::whereCustomerId($customer_id)->first();
		$tax = Tax::whereTaxId($tax_id)->first();
		$sales = Sales::with('created_by')->where('tax_id', $tax_id)->get()->map(function ($sale) {
			return ['Account Code' => $sale->account_code, 'Account Description' => $sale->account_description, 'Account Reference' => $sale->accounting_reference, 'Signature Date' => $sale->signature_date, 'Branch Name' => $sale->branch_name, 'Tax Period' => $sale->tax_period, 'Invoice Date' => $sale->invoice_date, 'Invoice Number' => $sale->invoice_num, 'Description' => $sale->description, 'Quantity' => $sale->quantity, 'Non Taxable sales' => $sale->non_taxable_sales, 'Sales to taxable person (Value)' => $sale->taxable_person_sales, 'Sales to Consumer (Value)' => $sale->cust_sales];
		});

		Excel::create($customer->name_english . '-tax-' . $tax->title . '-sales', function ($excel) use ($tax, $sales) {
			$excel->sheet($tax->title . ' sales', function ($sheet) use ($sales) {
				if (count($sales) == 0) {
					$sheet->prependRow(['Account Code', 'Account Description', 'Account Reference', 'Signature Date', 'Branch Name', 'Tax Period', 'Invoice Date', 'Invoice Number', 'Description', 'Quantity', 'Non Taxable sales', 'Sales to taxable person (Value)', 'Sales to Consumer (Value)']);
				}
				$sheet->getStyle('A1:M1')->getFont()->setBold(true);
				$sheet->fromArray($sales);
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
}
