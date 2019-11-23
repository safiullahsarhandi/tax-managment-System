<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Http\Controllers\Controller;
use App\Officer;
use App\Supervisor;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\TaxCustomers;
use App\Settings;
use App\Currencies;

class ApplicationController extends Controller {
	public function __invoke() {
		return view('application');
	}
	// officers methods
	public function get_officers(Request $request) {
		$officers = Officer::whereType(3)->get();
		return response()->json(compact('officers'));
	}
	public function add_officer(Request $request) {
		if($res=Officer::whereEmail($request->email)->first()){
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
		if($res=TaxCustomers::whereEmail($request->email)->first()){
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
		$customer->telephone = $request->telephone;
		$customer->industry = $request->industry;
		$customer->tax_card_num = $request->tax_id;
		$customer->tin_no = $request->tin_no;
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
		for ($i=1; $i <= count($request->additional_field); $i++) { 
			if (($key = array_search(null, $customfields)) !== false) {
			    unset($customfields[$key]);
			}
		}

		$customer->additional_fields = $customfields;

		$result = $customer->save();
		return response()->json(['status' => 'success', 'customer' => $customer], 200);
	}

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
	public function status_update_customer(Request $request){
		$customer = TaxCustomers::whereCustomerId($request->id)->first();
		if($customer->status == 1){
			$customer->status = 0;
			$customer->save();
			$msg = 'Disabled Successfully';
		}else{
			$customer->status = 1;
			$customer->save();
			$msg = 'Enabled Successfully';
		}
		return response()->json(['status' => 'success', 'msg' => $msg], 200);
	}

	public function status_update_officer(Request $request){
		$officer = Officer::whereManagerId($request->id)->first();
		if($officer->status == 1){
			$officer->status = 0;
			$officer->save();
			$msg = 'Disabled Successfully';
		}else{
			$officer->status = 1;
			$officer->save();
			$msg = 'Enabled Successfully';
		}
		return response()->json(['status' => 'success', 'msg' => $msg], 200);
	}

	public function status_update_supervisor(Request $request){
		$supervisor = Supervisor::whereManagerId($request->id)->first();
		if($supervisor->status == 1){
			$supervisor->status = 0;
			$supervisor->save();
			$msg = 'Disabled Successfully';
		}else{
			$supervisor->status = 1;
			$supervisor->save();
			$msg = 'Enabled Successfully';
		}
		return response()->json(['status' => 'success', 'msg' => $msg], 200);
	}
		
	public function status_update_admin(Request $request){

		$admin = Admin::whereManagerId($request->id)->first();
		if($admin->status == 1){
			$admin->status = 0;
			$admin->save();
			$msg = 'Disabled Successfully';
		}else{
			$admin->status = 1;
			$admin->save();
			$msg = 'Enabled Successfully';
		}
		return response()->json(['status' => 'success', 'msg' => $msg], 200);

	}

	public function get_exchange_rates(){

		$setting = Settings::all();
		$rates = $setting;
		return response()->json(compact('rates'));
	}

	public function update_exchange_rates(Request $request){
		$annual_rate = Settings::where('key','annual_rate')->update(['value'=> $request->annual_rate]);
		$average_rate = Settings::where('key','average_rate')->update(['value'=> $request->average_rate]);
		$salary_rate = Settings::where('key','salary_rate')->update(['value'=> $request->salary_rate]);
		return response()->json(['status' => 'success']);
	}

	public function get_currencies(){
		$currencies = Currencies::all();
		return response()->json(compact('currencies'));
	}

	public function status_update_currency(Request $request){

		$admin = Currencies::whereId($request->id)->first();
		if($admin->status == 1){
			$admin->status = 0;
			$admin->save();
			$msg = 'Disabled';
		}else{
			$admin->status = 1;
			$admin->save();
			$msg = 'Enabled';
		}
		return response()->json(['status' => 'success', 'msg' => 'Currency '.$msg.' Successfully'], 200);

	}

}
