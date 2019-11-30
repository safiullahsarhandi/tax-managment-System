<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Currencies;
use App\CustomerEmployee;
use App\Http\Controllers\Controller;
use App\Officer;
use App\Purchases;
use App\Sales;
use App\Settings;
use App\Supervisor;
use App\Tax;
use App\TaxCustomers;
use App\TaxOfficer;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Session;

class ApplicationController extends Controller {
	public function __invoke() {
		return view('application');
	}
	//login
	public function login(Request $request) {
		$admin = Admin::where('email', $request->email)->whereType(1)->first();
		if ($admin) {
			if (Hash::check($request->password, $admin->password)) {
				$request->session()->put('admin', $admin);

				$session = session('admin');
				return response()->json(['status' => 'success', 'msg' => 'Logged in Successfully', 'session' => $session]);
			}
			return response()->json(['status' => 'error', 'msg' => 'Invalid Email OR Password']);
		} else {
			return response()->json(['status' => 'error', 'msg' => 'Invalid Email OR Password']);

		}
	}
	// officers methods
	public function get_officers(Request $request) {
		$officers = Officer::whereType(3)->get();
		return response()->json(compact('officers'));
	}
	public function add_officer(Request $request) {
		if ($res = Officer::whereEmail($request->email)->first()) {
			return response()->json(['status' => "error", 'msg' => "email already exists"]);
		}
		$officer = new Officer;
		$officer->manager_id = (String) Str::uuid();
		$officer->first_name = $request->first_name;
		$officer->last_name = $request->last_name;
		$officer->gender = $request->gender;
		$officer->email = $request->email;
		$officer->password = bcrypt($request->password);
		$officer->address = $request->address;
		$officer->city = $request->city;
		$officer->state = $request->state;
		$officer->zip_code = $request->zip_code;
		$officer->phone = $request->phone;
		$officer->type = 3; // 3 means officer
		$result = $officer->save();
		$officers = Officer::all();
		return response()->json(['status' => 'success', 'officers' => $officers], 200);
	}

	public function update_officer(Request $request) {
		$officer = Officer::whereManagerId($request->id)->first();
		$officer->first_name = $request->first_name;
		$officer->last_name = $request->last_name;
		$officer->gender = $request->gender;
		$officer->address = $request->address;
		$officer->city = $request->city;
		$officer->state = $request->state;
		$officer->zip_code = $request->zip_code;
		$officer->phone = $request->phone;
		$result = $officer->save();
		return response()->json(['status' => 'success', 'officer' => $officer], 200);
	}

	// supervisors methods
	public function get_supervisors(Request $request) {
		$supervisors = Supervisor::whereType(2)->get();
		return response()->json(compact('supervisors'));
	}
	public function add_supervisor(Request $request) {
		$supervisor = new Supervisor;
		$supervisor->manager_id = (String) Str::uuid();
		$supervisor->first_name = $request->first_name;
		$supervisor->last_name = $request->last_name;
		$supervisor->gender = $request->gender;
		$supervisor->email = $request->email;
		$supervisor->password = bcrypt($request->password);
		$supervisor->address = $request->address;
		$supervisor->city = $request->city;
		$supervisor->state = $request->state;
		$supervisor->zip_code = $request->zip_code;
		$supervisor->phone = $request->phone;
		$supervisor->type = 2; // 2 means supervisor
		$result = $supervisor->save();
		$supervisors = Supervisor::all();
		return response()->json(['status' => 'success', 'supervisors' => $supervisors], 200);
	}

	public function update_supervisor(Request $request) {
		$supervisor = Supervisor::whereManagerId($request->id)->first();
		$supervisor->first_name = $request->first_name;
		$supervisor->last_name = $request->last_name;
		$supervisor->gender = $request->gender;
		$supervisor->address = $request->address;
		$supervisor->city = $request->city;
		$supervisor->state = $request->state;
		$supervisor->zip_code = $request->zip_code;
		$supervisor->phone = $request->phone;
		$result = $supervisor->save();
		return response()->json(['status' => 'success', 'supervisor' => $supervisor], 200);
	}
	public function add_customer(Request $request) {
		if ($res = TaxCustomers::whereEmail($request->email)->first()) {
			return response()->json(['status' => "error", 'msg' => "email already exists"]);
		}
		$customer = new TaxCustomers;
		$customer->customer_id = (String) Str::uuid();
		$customer->name_english = $request->name_eng;
		$customer->name_khmer = $request->name_khmer;
		$customer->tax_card_num = $request->tax_id;
		$customer->tin_no = $request->tin_num;
		$customer->address = $request->address;
		$customer->street = $request->street;
		$customer->group = $request->group;
		$customer->sangkat = $request->sangkat;
		$customer->district = $request->district;
		$customer->province = $request->province;
		$customer->muncipality = $request->muncipality;
		$customer->telephone = $request->tel;
		$customer->email = $request->email;
		$customer->industry = $request->industry;
		$customer->incorporation_date = $request->incorporation_date;
		$customer->village = $request->village;
		$customer->additional_fields = $request->additional_field;
		$result = $customer->save();
		return response()->json(['status' => 'success', 'customers' => $customer]);
	}

	public function get_customers(Request $request) {
		$customers = TaxCustomers::all();
		return response()->json(compact('customers'));
	}

	public function update_customer(Request $request) {

		$customer = TaxCustomers::whereCustomerId($request->id)->first();
		$customer->name_english = $request->name_eng;
		$customer->name_khmer = $request->name_khmer;
		$customer->email = $request->email;
		$customer->telephone = $request->tel;
		$customer->industry = $request->industry;
		$customer->tax_card_num = $request->tax_id;
		$customer->tin_no = $request->tin_num;
		$customer->address = $request->address;
		$customer->muncipality = $request->muncipality;
		$customer->district = $request->district;
		$customer->province = $request->province;
		$customer->sangkat = $request->sangkat;
		$customer->group = $request->group;
		$customer->street = $request->street;
		$customer->village = $request->village;
		$customer->incorporation_date = $request->incorporation_date;

		$customfields = $request->additional_field;
		for ($i = 1; $i <= count($request->additional_field); $i++) {
			if (($key = array_search(null, $customfields)) !== false) {
				unset($customfields[$key]);
			}
		}

		$customer->additional_fields = $customfields;

		$result = $customer->save();
		return response()->json(['status' => 'success', 'customer' => $customer], 200);
	}

	// Customer Employees method
	public function add_employee(Request $request) {
		if ($res = CustomerEmployee::whereNssfNum($request->nssf_num)->where('tax_customer_id', $request->tax_customer_id)->first()) {
			return response()->json(['status' => "error", 'msg' => "Employee with this NSSF No already exists"]);
		}
		if ($res = CustomerEmployee::where('employee_num', '=', $request->employee_num)->where('tax_customer_id', $request->tax_customer_id)->first()) {
			return response()->json(['status' => "error", 'msg' => "Employee with this Employee No already exists"]);
		}
		$employee = new CustomerEmployee;
		$employee->employee_id = (String) Str::uuid();
		$employee->tax_customer_id = $request->tax_customer_id;
		$employee->nssf_num = $request->nssf_num;
		$employee->employee_num = $request->employee_num;
		$employee->name_english = $request->name_eng;
		$employee->name_khmer = $request->name_khmer;
		$employee->nationality = $request->nationality;
		$employee->dob = $request->dob;
		$employee->joining_date = $request->joining_date;
		$employee->position = $request->position;
		$employee->sex = $request->sex;
		$employee->contract_type = $request->contract_type;
		$employee->spouse = $request->spouse;
		$result = $employee->save();
		return response()->json(['status' => 'success', 'msg' => 'Employee added successfully']);
	}

	public function get_employees(Request $request) {
		$employees = CustomerEmployee::whereTaxCustomerId($request->tax_customer_id)->get();
		return response()->json(compact('employees'));
	}
	public function get_active_employees(Request $request) {
		$employees = CustomerEmployee::whereTaxCustomerId($request->tax_customer_id)->where('status', 1)->get();
		return response()->json(compact('employees'));
	}
	public function update_employee(Request $request) {
		if ($res = CustomerEmployee::where('nssf_num', '=', $request->nssf_num)->where('tax_customer_id', $request->tax_customer_id)->where('employee_id', '!=', $request->employee_id)->first()) {
			return response()->json(['status' => "error", 'msg' => "Employee with this NSSF No already exists"]);
		}

		if ($res = CustomerEmployee::where('employee_num', '=', $request->employee_num)->where('employee_id', '!=', $request->employee_id)->where('tax_customer_id', $request->tax_customer_id)->first()) {
			return response()->json(['status' => "error", 'msg' => "Employee with this Employee No already exists"]);
		}

		$employee = CustomerEmployee::whereEmployeeId($request->employee_id)->first();
		$employee->nssf_num = $request->nssf_num;
		$employee->employee_num = $request->employee_num;
		$employee->name_english = $request->name_eng;
		$employee->name_khmer = $request->name_khmer;
		$employee->nationality = $request->nationality;
		$employee->dob = $request->dob;
		$employee->joining_date = $request->joining_date;
		$employee->position = $request->position;
		$employee->sex = $request->sex;
		$employee->contract_type = $request->contract_type;
		$employee->spouse = $request->spouse;
		$result = $employee->save();
		return response()->json(['status' => 'success', 'msg' => 'Employee added successfully', 'employee' => $employee]);
	}
	public function status_update_employee(Request $request) {
		$employee = CustomerEmployee::find($request->id);
		if ($employee->status == 1) {
			$employee->status = 0;
			$employee->save();
			$msg = 'Disabled Successfully';
		} else {
			$employee->status = 1;
			$employee->save();
			$msg = 'Enabled Successfully';
		}
		return response()->json(['status' => 'success', 'msg' => $msg, 'employee' => $employee], 200);
	}
	// Customer Employees method end

	// admins methods
	public function get_admins(Request $request) {
		$admins = Admin::whereType(1)->get();
		return response()->json(compact('admins'));
	}
	public function add_admin(Request $request) {
		$admin = new Admin;
		$admin->manager_id = (String) Str::uuid();
		$admin->first_name = $request->first_name;
		$admin->last_name = $request->last_name;
		$admin->gender = $request->gender;
		$admin->email = $request->email;
		$admin->password = bcrypt($request->password);
		$admin->address = $request->address;
		$admin->city = $request->city;
		$admin->state = $request->state;
		$admin->zip_code = $request->zip_code;
		$admin->phone = $request->phone;
		$admin->type = 1; // 2 means admin
		$result = $admin->save();
		$admins = Admin::all();
		return response()->json(['status' => 'success', 'admins' => $admins], 200);
	}

	public function update_admin(Request $request) {
		$admin = Admin::whereManagerId($request->id)->first();
		$admin->first_name = $request->first_name;
		$admin->last_name = $request->last_name;
		$admin->gender = $request->gender;
		$admin->address = $request->address;
		$admin->city = $request->city;
		$admin->state = $request->state;
		$admin->zip_code = $request->zip_code;
		$admin->phone = $request->phone;
		$result = $admin->save();
		return response()->json(['status' => 'success', 'admin' => $admin], 200);
	}
	public function status_update_customer(Request $request) {
		$customer = TaxCustomers::whereCustomerId($request->id)->first();
		if ($customer->status == 1) {
			$customer->status = 0;
			$customer->save();
			$msg = 'Disabled Successfully';
		} else {
			$customer->status = 1;
			$customer->save();
			$msg = 'Enabled Successfully';
		}
		return response()->json(['status' => 'success', 'msg' => $msg], 200);
	}

	public function status_update_officer(Request $request) {
		$officer = Officer::whereManagerId($request->id)->first();
		if ($officer->status == 1) {
			$officer->status = 0;
			$officer->save();
			$msg = 'Disabled Successfully';
		} else {
			$officer->status = 1;
			$officer->save();
			$msg = 'Enabled Successfully';
		}
		return response()->json(['status' => 'success', 'msg' => $msg], 200);
	}

	public function status_update_supervisor(Request $request) {
		$supervisor = Supervisor::whereManagerId($request->id)->first();
		if ($supervisor->status == 1) {
			$supervisor->status = 0;
			$supervisor->save();
			$msg = 'Disabled Successfully';
		} else {
			$supervisor->status = 1;
			$supervisor->save();
			$msg = 'Enabled Successfully';
		}
		return response()->json(['status' => 'success', 'msg' => $msg], 200);
	}

	public function status_update_admin(Request $request) {

		$admin = Admin::whereManagerId($request->id)->first();
		if ($admin->status == 1) {
			$admin->status = 0;
			$admin->save();
			$msg = 'Disabled Successfully';
		} else {
			$admin->status = 1;
			$admin->save();
			$msg = 'Enabled Successfully';
		}
		return response()->json(['status' => 'success', 'msg' => $msg], 200);

	}

	public function get_exchange_rates() {

		$setting = Settings::all();
		$rates = $setting;
		return response()->json(compact('rates'));
	}

	public function update_exchange_rates(Request $request) {
		$annual_rate = Settings::where('key', 'annual_rate')->update(['value' => $request->annual_rate]);
		$average_rate = Settings::where('key', 'average_rate')->update(['value' => $request->average_rate]);
		$salary_rate = Settings::where('key', 'salary_rate')->update(['value' => $request->salary_rate]);
		return response()->json(['status' => 'success']);
	}

	public function get_currencies() {
		$currencies = Currencies::all();
		return response()->json(compact('currencies'));
	}

	public function status_update_currency(Request $request) {

		$admin = Currencies::whereId($request->id)->first();
		if ($admin->status == 1) {
			$admin->status = 0;
			$admin->save();
			$msg = 'Disabled';
		} else {
			$admin->status = 1;
			$admin->save();
			$msg = 'Enabled';
		}
		return response()->json(['status' => 'success', 'msg' => 'Currency ' . $msg . ' Successfully'], 200);

	}

	public function add_tax(Request $request) {

		$tax = new Tax;
		$tax->tax_id = (String) Str::uuid();
		$tax->customer_id = $request->customer_id;
		$tax->title = $request->title;
		$tax->description = $request->description;
		$tax->duration = $request->duration;
		$tax->type = $request->type;
		$tax->supervisor_id = $request->supervisor_id;
		$save = $tax->save();
		if ($save) {
			$officers = explode(',', $request->officers);
			foreach ($officers as $key => $officer) {
				$taxOfficer = new TaxOfficer;
				$taxOfficer->tax_officer_id = (String) Str::uuid();
				$taxOfficer->tax_id = $tax->tax_id;
				$taxOfficer->officer_id = $officer;
				$taxOfficer->save();
			}
			return response()->json(['status' => 'success', 'msg' => 'Tax Created Successfully'], 200);
		}

	}

	public function get_taxes(Request $request) {
		$taxes = Tax::with('supervisor')->withCount('officers')->where('customer_id', $request->customer_id)->get();
		return response()->json(compact('taxes'));
	}

	public function get_customer_profile(Request $request) {

		$customer = TaxCustomers::whereCustomerId($request->id)->first();
		return response()->json(['data' => $customer]);
	}

	public function add_purchase(Request $request) {

		$purchase = new Purchases();

		$purchase->purchase_id = (String) Str::uuid();

	
		$purchase->branch_name 				= $request->branch_name;
		$purchase->tax_period 				= $request->tax_period;
		$purchase->invoice_date 			= $request->invoice_date;
		$purchase->invoice_num 				= $request->invoice_number;
		$purchase->description 				= $request->good_desc;
		$purchase->quantity 				= $request->quantity;
		$purchase->local_purchase_tax_val 	= $request->taxable_value_local;
		$purchase->local_purchase_vat 		= $request->vat_local;
		$purchase->imports_taxable_val 		= $request->taxable_value_import;
		$purchase->imports_vat 				= $request->vat_import;
		$purchase->total_vat 				= $request->total_vat;
		$purchase->subject 					= $request->item_subject_taxes;
		$purchase->comments 				= $request->comments_3e_fii;
		$purchase->top_comments 			= $request->comments_for_top;
		$purchase->client_responses 		= $request->client_responses;
		$purchase->non_taxable_purchases 	= $request->non_taxable_purchases;
		$purchase->supplier 				= $request->supplier;
		$purchase->vat_tin 					= $request->vat_tin;
		$purchase->additional_fields 		= $request->additional_field;
		$purchase->status 					= 0;

		$purchase->save();

		return response()->json(['status' => 'success']);
	}

	public function get_purchases() {
		$purchases = Purchases::orderBy('created_at', 'desc')->get();
		return response()->json(compact('purchases'));
	}

	public function add_sale(Request $request) {

		$sale = new Sales();

		$sale->sale_id = (String) Str::uuid();


		$sale->account_code 			= $request->account_code;
		$sale->account_description 		= $request->account_description;
		$sale->accounting_reference 	= $request->account_ref;
		$sale->signature_date 			= $request->sign_date;
		$sale->branch_name 				= $request->branch_name;
		$sale->tax_period 				= $request->tax_period;
		$sale->invoice_date 			= $request->invoice_date;
		$sale->invoice_num 				= $request->invoice_number;
		$sale->client_name 				= $request->client_name;
		$sale->client_tin 				= $request->client_tin;
		$sale->description 				= $request->description;
		$sale->quantity 				= $request->quantity;
		$sale->taxes_subject 			= $request->item_subject_taxes;
		$sale->comments 				= $request->comments_3e_fii;
		$sale->top_comments 			= $request->comments_for_top;
		$sale->client_response 			= $request->client_responses;
		$sale->non_taxable_sales 		= $request->non_taxable_sales;
		$sale->vat 						= $request->export_value;
		
	if(!is_null($request->person_non_taxable_sales)){
		$sale->taxable_person_sales 	= $request->person_non_taxable_sales;
	}
	
	if(!is_null($request->person_export_value)){
		$sale->taxable_person_vat 		= $request->person_export_value;
	}

	if(!is_null($request->customer_non_taxable_sales)){
		$sale->cust_sales 				= $request->customer_non_taxable_sales;
	}

	if(!is_null($request->customer_export_value)){
		$sale->cust_sales_vat 			= $request->customer_export_value;
	}

		$sale->total_taxable_value 		= $request->total_taxable_value;
		
		$sale->additional_fields 		= $request->additional_field;
		$sale->status 					= 0;


		$sale->save();

		return response()->json(['status' => 'success', 'data' => $sale]);
	}

	public function get_sales() {
		$sales = Sales::orderBy('created_at', 'desc')->get();
		return response()->json(compact('sales'));
	}

	public function update_sale(Request $request){

		$sale = Sales::whereSaleId($request->id)->first();
        
		$sale->account_code 			= $request->account_code;
		$sale->account_description 		= $request->account_description;
		$sale->accounting_reference 	= $request->account_ref;
		$sale->signature_date 			= $request->sign_date;
		$sale->branch_name 				= $request->branch_name;
		$sale->tax_period 				= $request->tax_period;
		$sale->invoice_date 			= $request->invoice_date;
		$sale->invoice_num 				= $request->invoice_number;
		$sale->client_name 				= $request->client_name;
		$sale->client_tin 				= $request->client_tin;
		$sale->description 				= $request->description;
		$sale->quantity 				= $request->quantity;
		$sale->taxes_subject 			= $request->item_subject_taxes;
		$sale->comments 				= $request->comments_3e_fii;
		$sale->top_comments 			= $request->comments_for_top;
		$sale->client_response 			= $request->client_responses;
		$sale->non_taxable_sales 		= $request->non_taxable_sales;
		$sale->vat 						= $request->export_value;
		
	if(!is_null($request->person_non_taxable_sales)){
		$sale->taxable_person_sales 	= $request->person_non_taxable_sales;
	}

	if(!is_null($request->person_export_value)){
		$sale->taxable_person_vat 		= $request->person_export_value;
	}

	if(!is_null($request->customer_non_taxable_sales)){
		$sale->cust_sales 				= $request->customer_non_taxable_sales;
	}

	if(!is_null($request->customer_export_value)){
		$sale->cust_sales_vat 			= $request->customer_export_value;
	}

		$sale->total_taxable_value 		= $request->total_taxable_value;

		$customfields = $request->additional_field;
		for ($i = 1; $i <= count($request->additional_field); $i++) {
			if (($key = array_search(null, $customfields)) !== false) {
				unset($customfields[$key]);
			}
		}
		
		$sale->additional_fields  = $customfields;		

		$sale->save();

		return response()->json(['status' => 'success', 'data' => $sale]);
	}

	public function logout(Request $request) {
		Session::forget('admin');
		return response()->json(['status' => 'success', 'msg' => 'Logged out successfully']);
	}

	public function get_sale(Request $request){
		$sale = Sales::whereSaleId($request->id)->first();
		return response()->json(compact('sale'));
	}

	public function get_purchase(Request $request){
		$purchase = Purchases::wherePurchaseId($request->id)->first();
		return response()->json(compact('purchase'));
	}

	public function update_purchase(Request $request){

		$purchase = Purchases::wherePurchaseId($request->id)->first();
	
		$purchase->branch_name 				= $request->branch_name;
		$purchase->tax_period 				= $request->tax_period;
		$purchase->invoice_date 			= $request->invoice_date;
		$purchase->invoice_num 				= $request->invoice_number;
		$purchase->description 				= $request->good_desc;
		$purchase->quantity 				= $request->quantity;

	if(!is_null($request->taxable_value_local)){
		$purchase->local_purchase_tax_val 	= $request->taxable_value_local;
	}
	if(!is_null($request->vat_local)){
		$purchase->local_purchase_vat 		= $request->vat_local;
	}

	if(!is_null($request->taxable_value_import)){
		$purchase->imports_taxable_val 		= $request->taxable_value_import;
	}
	if(!is_null($request->vat_import)){
		$purchase->imports_vat 				= $request->vat_import;
	}	
		$purchase->total_vat 				= $request->total_vat;
		$purchase->subject 					= $request->item_subject_taxes;
		$purchase->comments 				= $request->comments_3e_fii;
		$purchase->top_comments 			= $request->comments_for_top;
		$purchase->client_responses 		= $request->client_responses;
		$purchase->non_taxable_purchases 	= $request->non_taxable_purchases;
		$purchase->supplier 				= $request->supplier;
		$purchase->vat_tin 					= $request->vat_tin;

		$customfields = $request->additional_field;
		for ($i = 1; $i <= count($request->additional_field); $i++) {
			if (($key = array_search(null, $customfields)) !== false) {
				unset($customfields[$key]);
			}
		}
		
		$purchase->additional_fields  = $customfields;	
		$purchase->save();

		return response()->json(['status' => 'success', 'data' => $purchase]);
	}
	

}
