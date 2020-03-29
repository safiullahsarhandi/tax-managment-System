<?php

namespace App\Http\Controllers;

use App\Admin;
use App\CustomerEmployee;
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
