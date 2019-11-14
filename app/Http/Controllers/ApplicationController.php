<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Officer;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ApplicationController extends Controller {
	public function __invoke() {
		return view('application');
	}

	public function get_officers(Request $request) {
		$officers = Officer::all();
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
		return response()->json(['status' => true, 'officers' => $officers]);
	}
}
