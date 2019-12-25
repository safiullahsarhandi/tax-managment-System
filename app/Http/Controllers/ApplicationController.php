<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Currencies;
use App\CustomerEmployee;
use App\Http\Controllers\Controller;
use App\Officer;
use App\Payrolls;
use App\Purchases;
use App\Sales;
use App\Settings;
use App\Supervisor;
use App\Tax;
use App\TaxCustomers;
use App\TaxOfficer;
use Excel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Session;

class ApplicationController extends Controller {
	public function __invoke() {
		return view('application');
	}
	public function get_average_rate() {
		$rate = Settings::where('key', 'average_rate')->first();
		return $rate->value;
	}
	public function get_login_user(Request $request) {
		$admin = Admin::whereManagerId($request->user)->first();
		$request->session()->put('admin', $admin);
		return response()->json($admin);
	}
	//login
	public function login(Request $request) {
		// return bcrypt('secret');
		$admin = Admin::where('email', $request->email)->first();
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
		if ($res = TaxCustomers::whereTaxCardNum($request->tax_card_num)->first()) {
			return response()->json(['status' => "error", 'msg' => "Account with this tax card number already exist"]);
		}
		if ($res = TaxCustomers::whereTinNo($request->tin_no)->first()) {
			return response()->json(['status' => "error", 'msg' => "Account with this tax card number already exist"]);
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

	public function add_multiple_customer(Request $request) {

		if ($request->hasFile('file')) {
			$emailCount = $taxCardNo = $tinNo = 0;
			$reader = Excel::selectSheetsByIndex(0)->load($request->file('file'), function ($reader) use (&$emailCount, &$taxCardNo, &$tinNo) {

			})->get();
			// Getting all results
			$customers = $reader->toArray();
			$headers = $reader->getHeading();
			$possibleVals = ['name_khmer', 'name_english', 'tax_id_no', 'tin_no', 'incorporation_date', 'address', 'street', 'group', 'village', 'sangkat', 'district', 'province', 'muncipality', 'tel', 'email', 'industry'];
			$possibleValsCount = count($possibleVals);
			$uploadedHeaderCount = count(array_intersect($possibleVals, $headers));
			if ($possibleValsCount != $uploadedHeaderCount) {
				return response()->json(['status' => false, 'msg' => 'upload cannot be processed. <br> please upload file which contain same columns as defined in sample file also uploaded file must contain some data'], 422);
			}
			foreach ($customers as $key => $value) {

				settype($value['tax_id_no'], 'Integer');
				$tax_id_no = $value['tax_id_no'];

				settype($value['tin_num'], 'Integer');
				$tin_no = $value['tin_no'];

				settype($value['tel'], 'Integer');
				$tel = $value['tel'];

				if ($res = TaxCustomers::whereEmail($value['email'])->orwhere('tax_card_num', $tax_id_no)->orwhere('tin_no', $tin_no)->first()) {
					$emailCount++;
					$tinNo++;
					$taxCardNo++;
					continue;
				}
				/*if ($res = TaxCustomers::whereTaxCardNum($tax_id_no)->first()) {
							continue;

						}
						if ($res = TaxCustomers::whereTinNo($tin_no)->first()) {
							continue;

					*/
				$customer = new TaxCustomers;
				$customer->customer_id = (String) Str::uuid();
				$customer->name_english = $value['name_english'];
				$customer->name_khmer = $value['name_khmer'];
				$customer->tax_card_num = $tax_id_no;
				$customer->tin_no = $tin_no;
				$customer->address = $value['address'];
				$customer->street = $value['street'];
				$customer->group = $value['group'];
				$customer->sangkat = $value['sangkat'];
				$customer->district = $value['district'];
				$customer->province = $value['province'];
				$customer->muncipality = $value['muncipality'];
				$customer->telephone = '+' . $tel;
				$customer->email = $value['email'];
				$customer->industry = $value['industry'];
				$customer->incorporation_date = $value['incorporation_date'];
				$customer->village = $value['village'];
				$result = $customer->save();

			}
			$totalAddedCount = $reader->count();
			$totalAddedCount -= $emailCount;
			return response()->json(['status' => 'success', 'msg' => "$totalAddedCount new companies added. <br> $emailCount email already exists, <br> $taxCardNo tax card No. already associated with companies <br> $tinNo Tin No. already associated with companies."]);
		}
	}

	public function get_customers(Request $request) {

		if (session('admin.type') == 'Admin') {

			$customers = TaxCustomers::all();
		} else if (session('admin.type') == 'Supervisor') {
			$customers = TaxCustomers::whereRaw('customer_id IN (SELECT customer_id from tax_managment where supervisor_id = ?)', ['supervisor_id' => session('admin.manager_id')])->get();
		} else {
			$customers = TaxCustomers::whereRaw('customer_id IN (SELECT customer_id from tax_managment where tax_id IN (SELECT tax_id from tax_officers where officer_id = ?) )', ['officer_id' => session('admin.manager_id')])->get();

		}
		return response()->json(compact('customers'));
	}
	public function get_customer(Request $request) {
		$customer = TaxCustomers::withCount('active_employees', 'taxes')->where('customer_id', $request->customer_id)->first();
		return response()->json(compact('customer'));
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
	public function get_employee(Request $request) {
		$data = CustomerEmployee::whereEmployeeId($request->id)->first();
		return response()->json(compact('data'));
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
		$admins = Admin::latest('id')->get();
		return response()->json(compact('admins'));
	}
	public function get_member_detail($id) {
		$member = Admin::with('taxes.tax.supervisor')->withCount(['taxes', 'taxes as active_taxes' => function ($q) {
			$q->where('status', 1);
		}])->where('manager_id', $id)->first();
		return response()->json(compact('member'));
	}
	public function add_admin(Request $request) {
		if (Admin::where('email', $request->email)->exists()) {
			return response()->json(['status' => 'false', 'msg' => 'account with this email already exists'], 200);
		}
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
		if ($request->roll == 'Admin') {
			$admin->type = 1; // 1 means admin

		} elseif ($request->roll == 'Supervisor') {
			$admin->type = 2; // 2 means Supervisor

		} else {
			$admin->type = 3; // 1 means officer

		}
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

		if(!$ar=Settings::where('key','annual_rate')->first()){
			$data = new Settings();
			$data->key = 'annual_rate';
			$data->value = 0;
			$data->save();
		}
		if(!$ar=Settings::where('key','average_rate')->first()){
			$data = new Settings();
			$data->key = 'average_rate';
			$data->value = 0;
			$data->save();
		}
		if(!$ar=Settings::where('key','salary_rate')->first()){
			$data = new Settings();
			$data->key = 'salary_rate';
			$data->value = 0;
			$data->save();
		}
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
	public function update_tax_team(Request $request) {

		$officers = explode(',', $request->officers);
		TaxOfficer::where('tax_id', $request->tax_id)->delete();
		foreach ($officers as $key => $officer) {
			$taxOfficer = new TaxOfficer;
			$taxOfficer->tax_officer_id = (String) Str::uuid();
			$taxOfficer->tax_id = $request->tax_id;
			$taxOfficer->officer_id = $officer;
			$taxOfficer->save();
		}
		$supervisor = Supervisor::whereRaw('manager_id = (SELECT supervisor_id from tax_managment WHERE tax_id = ?)', ['tax_id' => $request->tax_id])->first();
		$team = TaxOfficer::with('detail')->where('tax_id', $request->tax_id)->get()->toArray();
		$team = array_prepend($team, $supervisor);
		if (session('admin.type') == 'Supervisor') {
		}
		return response()->json(compact('team'));

	}

	public function get_taxes(Request $request) {
		if (session('admin.type') == 'Admin') {

			$taxes = Tax::with('supervisor')->withCount('officers')->where('customer_id', $request->customer_id)->get();
		} elseif (session('admin.type') == 'Supervisor') {

			$taxes = Tax::with('supervisor')->withCount('officers')->where('customer_id', $request->customer_id)->where('supervisor_id', session('admin.manager_id'))->where('status', 0)->get();
		} else {
			$taxes = Tax::with('supervisor')->withCount('officers')->where('customer_id', $request->customer_id)->whereRaw('tax_id IN (SELECT tax_id from tax_officers where officer_id = ?)', ['officer_id' => session('admin.manager_id')])->get();

		}
		return response()->json(compact('taxes'));
	}

	public function get_tax(Request $request) {
		$tax = Tax::with('supervisor', 'officers')->withCount('officers', 'sales', 'purchases', 'payrolls')->where('tax_id', $request->tax_id)->first();
		if (session('admin.type') == 'Supervisor') {
		}

		$approval_payrolls = Payrolls::with('officer', 'employee')->where('officer_confirmed', 1)->where('supervisor_confirmed', 0)->where('tax_id', $request->tax_id)->count();
		$approval_purchases = Purchases::with('officer')->where('officer_confirmed', 1)->where('supervisor_confirmed', 0)->where('tax_id', $request->tax_id)->count();
		$approval_sales = Sales::with('officer')->where('officer_confirmed', 1)->where('supervisor_confirmed', 0)->where('tax_id', $request->tax_id)->count();

		return response()->json(compact('tax', 'approval_sales', 'approval_purchases', 'approval_payrolls'));
	}
	public function get_tax_team(Request $request) {
		$supervisor = Supervisor::whereRaw('manager_id = (SELECT supervisor_id from tax_managment WHERE tax_id = ?)', ['tax_id' => $request->tax_id])->first();
		$team = TaxOfficer::with('detail')->where('tax_id', $request->tax_id)->get()->toArray();
		$team = array_prepend($team, $supervisor);
		if (session('admin.type') == 'Supervisor') {
		}

		return response()->json(compact('team'));
	}

	public function get_customer_profile(Request $request) {

		$customer = TaxCustomers::whereCustomerId($request->id)->first();
		return response()->json(['data' => $customer]);
	}

	public function add_purchase(Request $request) {

		$purchase = new Purchases();

		$purchase->purchase_id = (String) Str::uuid();
		$purchase->tax_id = $request->tax_id;
		$purchase->customer_id = $request->customer_id;
		$purchase->branch_name = $request->branch_name;
		$purchase->tax_period = $request->tax_period;
		$purchase->invoice_date = $request->invoice_date;
		$purchase->invoice_num = $request->invoice_number;
		$purchase->description = $request->good_desc;
		$purchase->quantity = $request->quantity;
		$purchase->local_purchase_tax_val = $request->taxable_value_local;
		// $purchase->local_purchase_vat = $request->vat_local;
		$purchase->imports_taxable_val = $request->taxable_value_import;
		// $purchase->imports_vat = $request->vat_import;
		$purchase->subject = $request->item_subject_taxes;
		$purchase->comments = $request->comments_3e_fii;
		$purchase->top_comments = $request->comments_for_top;
		$purchase->client_responses = $request->client_responses;
		$purchase->non_taxable_purchases = $request->non_taxable_purchases;
		$purchase->supplier = $request->supplier;
		$purchase->additional_fields = $request->additional_field;
		$purchase->status = 0;
		if ($request->has('supervisor_id')) {
			$purchase->supervisor_id = $request->supervisor_id;
			$purchase->officer_confirmed = 1;
		} else {
			$purchase->tax_officer_id = $request->officer_id;
		}
		$purchase->save();

		return response()->json(['status' => 'success']);
	}

	public function get_purchases(Request $request) {
		$purchases = Purchases::orderBy('created_at', 'desc')->where('tax_id', $request->tax_id)->get();
		return response()->json(compact('purchases'));
	}

	public function add_sale(Request $request) {

		$sale = new Sales();

		$sale->sale_id = (String) Str::uuid();
		$sale->tax_id = $request->tax_id;
		$sale->customer_id = $request->customer_id;
		$sale->account_code = $request->account_code;
		$sale->account_description = $request->account_description;
		$sale->accounting_reference = $request->account_ref;
		$sale->signature_date = $request->sign_date;
		$sale->branch_name = $request->branch_name;
		$sale->tax_period = $request->tax_period;
		$sale->invoice_date = $request->invoice_date;
		$sale->invoice_num = $request->invoice_number;
		$sale->description = $request->description;
		$sale->quantity = $request->quantity;
		$sale->taxes_subject = $request->item_subject_taxes;
		$sale->comments = $request->comments_3e_fii;
		$sale->top_comments = $request->comments_for_top;
		$sale->client_response = $request->client_responses;
		$sale->non_taxable_sales = $request->non_taxable_sales;
		$sale->vat = $request->export_value;
		if ($request->has('supervisor_id')) {
			$sale->supervisor_id = $request->supervisor_id;
			$sale->officer_confirmed = 1;
		} else {
			$sale->tax_officer_id = $request->officer_id;

		}

		if (!is_null($request->person_non_taxable_sales)) {
			$sale->taxable_person_sales = $request->person_non_taxable_sales;
		}

		if (!is_null($request->customer_non_taxable_sales)) {
			$sale->cust_sales = $request->customer_non_taxable_sales;
		}

		$sale->additional_fields = $request->additional_field;
		$sale->status = 0;

		$sale->save();

		return response()->json(['status' => 'success', 'data' => $sale]);
	}

	public function get_sales(Request $request) {
		$sales = Sales::orderBy('created_at', 'desc')->where('tax_id', $request->tax_id)->get();
		return response()->json(compact('sales'));
	}
	public function get_pending_sales(Request $request) {
		$sales = Sales::with('officer')->where('officer_confirmed', 1)->where('supervisor_confirmed', 0)->where('tax_id', $request->tax_id)->get();
		return response()->json(compact('sales'));
	}

	public function get_pending_purchases(Request $request) {
		$purchases = Purchases::with('officer')->where('officer_confirmed', 1)->where('supervisor_confirmed', 0)->where('tax_id', $request->tax_id)->get();
		return response()->json(compact('purchases'));
	}
	public function get_pending_payrolls(Request $request) {
		$payrolls = Payrolls::with('officer', 'employee')->where('officer_confirmed', 1)->where('supervisor_confirmed', 0)->where('tax_id', $request->tax_id)->get();
		return response()->json(compact('payrolls'));
	}

	public function update_sale(Request $request) {

		$sale = Sales::whereSaleId($request->id)->first();

		$sale->account_code = $request->account_code;
		$sale->account_description = $request->account_description;
		$sale->accounting_reference = $request->account_ref;
		$sale->signature_date = $request->sign_date;
		$sale->branch_name = $request->branch_name;
		$sale->tax_period = $request->tax_period;
		$sale->invoice_date = $request->invoice_date;
		$sale->invoice_num = $request->invoice_number;
		$sale->client_name = $request->client_name;
		$sale->client_tin = $request->client_tin;
		$sale->description = $request->description;
		$sale->quantity = $request->quantity;
		$sale->taxes_subject = $request->item_subject_taxes;
		$sale->comments = $request->comments_3e_fii;
		$sale->top_comments = $request->comments_for_top;
		$sale->client_response = $request->client_responses;
		$sale->non_taxable_sales = $request->non_taxable_sales;
		$sale->vat = $request->export_value;

		if (!is_null($request->person_non_taxable_sales)) {
			$sale->taxable_person_sales = $request->person_non_taxable_sales;
		}

		if (!is_null($request->person_export_value)) {
			$sale->taxable_person_vat = $request->person_export_value;
		}

		if (!is_null($request->customer_non_taxable_sales)) {
			$sale->cust_sales = $request->customer_non_taxable_sales;
		}

		if (!is_null($request->customer_export_value)) {
			$sale->cust_sales_vat = $request->customer_export_value;
		}

		$sale->total_taxable_value = $request->total_taxable_value;

		$customfields = $request->additional_field;
		if ($request->has('additional_field')) {

			for ($i = 1; $i <= count($request->additional_field); $i++) {
				if (($key = array_search(null, $customfields)) !== false) {
					unset($customfields[$key]);
				}
			}

			$sale->additional_fields = $customfields;
		}

		$sale->save();

		return response()->json(['status' => 'success', 'data' => $sale]);
	}

	public function logout(Request $request) {
		Session::forget('admin');
		return response()->json(['status' => 'success', 'msg' => 'Logged out successfully']);
	}

	public function get_sale(Request $request) {
		$sale = Sales::whereSaleId($request->id)->first();
		return response()->json(compact('sale'));
	}

	public function get_purchase(Request $request) {
		$purchase = Purchases::wherePurchaseId($request->id)->first();
		return response()->json(compact('purchase'));
	}

	public function update_purchase(Request $request) {

		$purchase = Purchases::wherePurchaseId($request->id)->first();

		$purchase->branch_name = $request->branch_name;
		$purchase->tax_period = $request->tax_period;
		$purchase->invoice_date = $request->invoice_date;
		$purchase->invoice_num = $request->invoice_number;
		$purchase->description = $request->good_desc;
		$purchase->quantity = $request->quantity;

		if (!is_null($request->taxable_value_local)) {
			$purchase->local_purchase_tax_val = $request->taxable_value_local;
		}
		if (!is_null($request->vat_local)) {
			$purchase->local_purchase_vat = $request->vat_local;
		}

		if (!is_null($request->taxable_value_import)) {
			$purchase->imports_taxable_val = $request->taxable_value_import;
		}
		if (!is_null($request->vat_import)) {
			$purchase->imports_vat = $request->vat_import;
		}
		$purchase->total_vat = $request->total_vat;
		$purchase->subject = $request->item_subject_taxes;
		$purchase->comments = $request->comments_3e_fii;
		$purchase->top_comments = $request->comments_for_top;
		$purchase->client_responses = $request->client_responses;
		$purchase->non_taxable_purchases = $request->non_taxable_purchases;
		$purchase->supplier = $request->supplier;
		$purchase->vat_tin = $request->vat_tin;

		$customfields = $request->additional_field;
		for ($i = 1; $i <= count($request->additional_field); $i++) {
			if (($key = array_search(null, $customfields)) !== false) {
				unset($customfields[$key]);
			}
		}

		$purchase->additional_fields = $customfields;
		$purchase->save();

		return response()->json(['status' => 'success', 'data' => $purchase]);
	}

	public function add_payroll(Request $request) {

		$pr = new Payrolls();
		$pr->payroll_id = (String) Str::uuid();
		$pr->tax_id = $request->tax_id;
		$pr->employee_id = $request->employee_id;
		$pr->basic_salary = $request->basic_salary;
		$pr->bonus = $request->bonus;
		$pr->over_time = $request->overtime;
		$pr->commissions = $request->commission;
		$pr->seniority_payment = $request->seniority_payment;
		$pr->severance_pay = $request->severance_pay;
		$pr->maternity_leave = $request->maternity_leave;
		$pr->paid_annual_leave = $request->paid_annual_leave;
		$pr->food_allowance = $request->food_allowance;
		$pr->transport_allowance = $request->transport_allowance;
		$pr->others = $request->other_allowance;
		$pr->deduction_advance = $request->deduction_advance;
		$pr->salary_adjusment = $request->salary_adjustment;
		$pr->remark = $request->remark;
		$pr->additional_fields = $request->additional_field;
		if ($request->has('supervisor_id')) {
			$pr->supervisor_id = $request->supervisor_id;
			$pr->officer_confirmed = 1;

		} else {
			$pr->tax_officer_id = $request->officer_id;
		}
		$pr->save();

		return response()->json(['status' => 'success', 'data' => $pr, 'msg' => 'Payroll Added Successfully']);
	}

	public function get_payrolls(Request $request) {

		$data = Payrolls::with(['employee'])->whereTaxId($request->tax_id)->get();

		return response()->json(['data' => $data]);

	}

	public function get_payroll(Request $request) {

		$data = Payrolls::with(['employee'])->wherePayrollId($request->id)->first();

		return response()->json(['data' => $data]);

	}

	public function update_payroll(Request $request) {

		$pr = Payrolls::wherePayrollId($request->payroll_id)->first();

		$pr->basic_salary = $request->basic_salary;
		$pr->bonus = $request->bonus;
		$pr->over_time = $request->overtime;
		$pr->commissions = $request->commission;
		$pr->seniority_payment = $request->seniority_payment;
		$pr->severance_pay = $request->severance_pay;
		$pr->maternity_leave = $request->maternity_leave;
		$pr->paid_annual_leave = $request->paid_annual_leave;
		$pr->food_allowance = $request->food_allowance;
		$pr->transport_allowance = $request->transport_allowance;
		$pr->others = $request->other_allowance;
		$pr->deduction_advance = $request->deduction_advance;
		$pr->salary_adjusment = $request->salary_adjustment;
		$pr->remark = $request->remark;

		$customfields = $request->additional_field;
		for ($i = 1; $i <= count($request->additional_field); $i++) {
			if (($key = array_search(null, $customfields)) !== false) {
				unset($customfields[$key]);
			}
		}

		$pr->additional_fields = $customfields;

		$pr->save();

		return response()->json(['status' => 'success', 'msg' => 'Payroll Updated Successfully']);

	}

	public function add_multiple_employee(Request $request, $id) {

		if ($request->hasFile('file')) {
			$data = Excel::load($request->file('file'), function ($reader) use ($id) {

			})->get();
			// Getting all results

			$employees = $data->toArray();
			$headers = $data->getHeading();
			$possibleVals = ['nssf_no', 'employee_no', 'name_english', 'name_khmer', 'nationality', 'dob', 'joining_date', 'position', 'sex', 'contract_type', 'spouse'];
			$possibleValsCount = count($possibleVals);
			$uploadedHeaderCount = count(array_intersect($possibleVals, $headers));
			if ($possibleValsCount != $uploadedHeaderCount) {
				return response()->json(['status' => false, 'msg' => 'upload cannot be processed. <br> please upload file which contain same columns as defined in sample file also uploaded file must contain some data'], 422);
			}
			foreach ($employees as $key => $value) {

				if ($find = CustomerEmployee::whereEmployeeNum($value['employee_no'])->orWhere('nssf_num', $value['nssf_no'])->exists()) {
					continue;
				}

				$customer_id = $id;

				$employee = new CustomerEmployee;
				$employee->employee_id = (String) Str::uuid();
				$employee->tax_customer_id = $customer_id;
				$employee->nssf_num = $value['nssf_no'];
				$employee->employee_num = $value['employee_no'];
				$employee->name_english = $value['name_english'];
				$employee->name_khmer = $value['name_khmer'];
				$employee->nationality = $value['nationality'];
				$employee->dob = $value['dob'];
				$employee->joining_date = $value['joining_date'];
				$employee->position = $value['position'];
				$employee->sex = $value['sex'];
				$employee->contract_type = $value['contract_type'];
				$employee->spouse = $value['spouse'];
				$result = $employee->save();
			}
			$totalAddedCount = $data->count();
			return response()->json(['status' => 'success', 'msg' => "$totalAddedCount new Employee(s) added."]);
		}
	}

	public function add_multiple_sales(Request $request, $customer_id, $tax_id, $type, $userLoginId) {

		if ($request->hasFile('file')) {
			$data = Excel::selectSheetsByIndex(0)->load($request->file('file'))->get();

			// Getting all results
			$sales = $data->toArray();
			$headers = $data->getHeading();
			$possibleVals = ['account_code', 'account_description', 'account_reference', 'signature_date', 'branch_name', 'tax_period', 'invoice_date', 'invoice_number', 'description', 'quantity', 'item_subject_to_taxes', 'non_taxable_sales', 'value_of_exports', 'sales_to_taxable_person_value', 'sales_to_consumer_value'];
			$possibleValsCount = count($possibleVals);
			$uploadedHeaderCount = count(array_intersect($possibleVals, $headers));
			if ($possibleValsCount != $uploadedHeaderCount) {
				return response()->json(['status' => false, 'msg' => 'upload cannot be processed. <br> please upload file which contain same columns as defined in sample file also uploaded file must contain some data'], 422);
			}
			foreach ($sales as $key => $value) {

				$sale = new Sales();

				$sale->sale_id = (String) Str::uuid();
				$sale->tax_id = $tax_id;
				$sale->customer_id = $customer_id;
				$sale->account_code = $value['account_code'];
				$sale->account_description = $value['account_description'];
				$sale->accounting_reference = $value['account_reference'];
				$sale->signature_date = $value['signature_date'];
				$sale->branch_name = $value['branch_name'];
				$sale->tax_period = $value['tax_period'];
				$sale->invoice_date = $value['invoice_date'];
				$sale->invoice_num = $value['invoice_number'];
				$sale->description = $value['description'];
				$sale->quantity = $value['quantity'];
				$sale->taxes_subject = $value['item_subject_to_taxes'];
				$sale->non_taxable_sales = $value['non_taxable_sales'];
				$sale->vat = $value['value_of_exports'];
				$sale->taxable_person_sales = $value['sales_to_taxable_person_value'];
				$sale->cust_sales = $value['sales_to_consumer_value'];
				if ($type == 'supervisor') {
					$sale->supervisor_id = $userLoginId;
					$sale->officer_confirmed = 1;
				} else {
					$sale->tax_officer_id = $userLoginId;
				}

				if ($value['sales_to_taxable_person_value'] ?? false) {
				}

				/*if ($value['person_export_value'] ?? false) {
					$sale->taxable_person_vat = $value['person_export_value'];
				}*/

				if ($value['sales_to_consumer_value'] ?? false) {
				}

				/*if ($value['customer_export_value']) {
					$sale->cust_sales_vat = $value['customer_export_value'];
				}*/

				// $sale->total_taxable_value = $value['total_taxable_value'];

				$sale->status = 0;

				$sale->save();

			}
			$totalAddedCount = $data->count();
			return response()->json(['status' => 'success', 'msg' => "$totalAddedCount new Sale(s) added."]);
		}

	}

	public function add_multiple_payrolls(Request $request, $employee_id, $tax_id, $type, $userLoginId) {

		if ($request->hasFile('file')) {
			$data = Excel::load($request->file('file'), function ($reader) use ($employee_id, $tax_id, $type, $userLoginId) {
				// Getting all results

			})->get();

			$payrolls = $data->toArray();
			$headers = $data->getHeading();
			$possibleVals = ['nssf_no', 'employee_no', 'name_english', 'name_khmer', 'nationality', 'dob', 'joining_date', 'position', 'sex', 'contract_type', 'spouse'];
			$possibleValsCount = count($possibleVals);
			$uploadedHeaderCount = count(array_intersect($possibleVals, $headers));
			if ($possibleValsCount != $uploadedHeaderCount) {
				return response()->json(['status' => false, 'msg' => 'upload cannot be processed. <br> please upload file which contain same columns as defined in sample file also uploaded file must contain some data'], 422);
			}
			foreach ($payrolls as $key => $value) {

				$pr = new Payrolls();
				$pr->payroll_id = (String) Str::uuid();
				$pr->tax_id = $tax_id;
				$pr->employee_id = $employee_id;
				$pr->basic_salary = $value['basic_salary'];
				$pr->bonus = $value['bonus'];
				$pr->over_time = $value['over_time'];
				$pr->commissions = $value['commission'];
				$pr->seniority_payment = $value['seniority_payment'];
				$pr->severance_pay = $value['severance_pay'];
				$pr->maternity_leave = $value['maternity_leave'];
				$pr->paid_annual_leave = $value['paid_annual_leave'];
				$pr->food_allowance = $value['food_allowance'];
				$pr->transport_allowance = $value['transport_allowance'];
				$pr->others = $value['other_allowance'];
				$pr->deduction_advance = $value['deduction_advance'];
				$pr->salary_adjusment = $value['salary_adjustment'];
				$pr->remark = $value['remark'];
				if ($type == 'supervisor') {
					$pr->supervisor_id = $userLoginId;
					$pr->officer_confirmed = 1;
				} else {
					$pr->tax_officer_id = $userLoginId;
				}
				// $pr->additional_fields = $value['additional_field'];

				$pr->save();

			}
			$totalAddedCount = $data->count();
			return response()->json(['status' => 'success', 'msg' => "$totalAddedCount new Payroll(s) added."]);
		}
	}

	public function add_multiple_purchases(Request $request, $customer_id, $tax_id, $type, $userLoginId) {

		if ($request->hasFile('file')) {
			$data = Excel::selectSheetsByIndex(0)->load($request->file('file'))->get();
			$purchases = $data->toArray();
			// dd($data);
			$headers = $data->getHeading();
			$possibleVals = ['branch_name', 'tax_period', 'invoice_date', 'invoice_number', 'goods_description', 'quantity', 'local_purchase_taxable_value', 'imports_taxable_value', 'item_subject_to_taxes', 'non_taxable_purchases', 'supplier'];
			$possibleValsCount = count($possibleVals);
			$uploadedHeaderCount = count(array_intersect($possibleVals, $headers));
			if ($possibleValsCount != $uploadedHeaderCount) {
				return response()->json(['status' => false, 'msg' => 'upload cannot be processed. <br> please upload file which contain same columns as defined in sample file also uploaded file must contain some data'], 422);
			}

			// Getting all results
			foreach ($purchases as $key => $value) {

				$purchase = new Purchases();

				$purchase->purchase_id = (String) Str::uuid();
				$purchase->tax_id = $tax_id;
				$purchase->customer_id = $customer_id;
				$purchase->branch_name = $value['branch_name'];
				$purchase->tax_period = $value['tax_period'];
				$purchase->invoice_date = $value['invoice_date'];
				$purchase->invoice_num = $value['invoice_number'];
				$purchase->description = $value['goods_description'];
				$purchase->quantity = $value['quantity'];
				$purchase->local_purchase_tax_val = $value['local_purchase_taxable_value'];
				$purchase->imports_taxable_val = $value['imports_taxable_value'];
				$purchase->subject = $value['item_subject_to_taxes'];
				$purchase->non_taxable_purchases = $value['non_taxable_purchases'];
				$purchase->supplier = $value['supplier'];
				$purchase->status = 0;
				if ($type == 'supervisor') {
					$purchase->supervisor_id = $userLoginId;
					$purchase->officer_confirmed = 1;
				} else {
					$purchase->tax_officer_id = $userLoginId;
				}
				$purchase->save();

			}
			$totalAddedCount = $data->count();
			return response()->json(['status' => 'success', 'msg' => "$totalAddedCount new Purchase(s) added."]);
		}
	}

	public function status_update_sale(Request $request){

		$sale = Sales::whereSaleId($request->id)->whereTaxId($request->tax_id)->first();

		$msg = '';
		if($sale->status == 1){
			$sale->status = 0;
			$sale->save();
			$msg = 'Status Disabled Successfully';
		}else{
			$sale->status = 1;
			$sale->save();
			$msg = 'Status Enabled Successfully';
		}

		return response()->json(['status' => true, 'msg' => $msg, 'response' => $sale->status]);

	}

	public function status_update_purchase(Request $request){

		$purchase = Purchases::wherePurchaseId($request->id)->whereTaxId($request->tax_id)->first();

		$msg = '';
		if($purchase->status == 1){
			$purchase->status = 0;
			$purchase->save();
			$msg = 'Status Disabled Successfully';
		}else{
			$purchase->status = 1;
			$purchase->save();
			$msg = 'Status Enabled Successfully';
		}

		return response()->json(['status' => true, 'msg' => $msg, 'response' => $purchase->status]);

	}

	public function status_update_payroll(Request $request){

		$res = Payrolls::wherePayrollId($request->id)->whereTaxId($request->tax_id)->first();

		$msg = '';
		if($res->status == 1){
			$res->status = 0;
			$res->save();
			$msg = 'Status Disabled Successfully';
		}else{
			$res->status = 1;
			$res->save();
			$msg = 'Status Enabled Successfully';
		}

		return response()->json(['status' => true, 'msg' => $msg, 'response' => $res->status]);

	}

}
