<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Http\Controllers\Controller;
use App\Officer;
use App\Supervisor;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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

}
