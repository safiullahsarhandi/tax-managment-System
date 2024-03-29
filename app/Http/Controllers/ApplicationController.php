<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Currencies;
use App\CustomerEmployee;
use App\History;
use App\Http\Controllers\Controller;
use App\Http\Controllers\MyValueBinder;
use App\Notification;
use App\Officer;
use App\Owner;
use App\Parameter;
use App\PasswordReset;
use App\Payrolls;
use App\Purchases;
use App\Sales;
use App\Settings;
use App\Supervisor;
use App\Tax;
use App\TaxComments;
use App\TaxCustomers;
use App\TaxOfficer;
use App\TaxSubject;
use Excel;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use PDF;
use Session;

class ApplicationController extends Controller {
	public function __invoke() {
		return view('application');
	}
	public function get_average_rate() {
		$rate = Settings::where('key', 'average_rate')->first();
		return $rate->value;
	}
	public function get_salary_rate() {
		$rate = Settings::where('key', 'salary_rate')->first();
		return $rate->value;
	}
	public function get_dashboard_data(Request $request) {
		$manager = Admin::where('manager_id', $request->manager)->first();
		// return TaxCustomers::where()->get();
		if ($manager->type == 'Admin') {

		}
		// TaxCustomers::where('type', 'Monthly');
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
				if ($admin->status == 0) {
					return response()->json(['status' => 'error', 'msg' => 'Sorry! you have not permission to access controls. please contact your Administration']);
				}
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
	public function get_my_officers(Request $request) {
		$officers = Officer::whereType(3)->where('reports_to', $request->supervisor)->get();
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
			return response()->json(['status' => "error", 'msg' => "Company with this tax card number already exist"]);
		}
		if ($res = TaxCustomers::whereTinNo($request->tin_no)->first()) {
			return response()->json(['status' => "error", 'msg' => "Company with this tax card number already exist"]);
		}
		$customer = new TaxCustomers;
		$customer->customer_id = (String) Str::uuid();
		$customer->name_english = $request->name_english;
		$customer->name_khmer = $request->name_khmer;
		$customer->owner_id = $request->owner_id;
		$customer->tax_card_num = $request->tax_card_num;
		$customer->tin_no = $request->tin_no;
		$customer->address = $request->address;
		$customer->street = $request->street;
		$customer->group = $request->group;
		$customer->sangkat = $request->sangkat;
		$customer->district = $request->district;
		$customer->province = $request->province;
		$customer->muncipality = $request->muncipality;
		$customer->telephone = $request->telephone;
		$customer->e_phone = $request->e_phone;
		$customer->email = $request->email;
		$customer->industry = $request->industry;
		$customer->incorporation_date = $request->incorporation_date;
		$customer->village = $request->village;
		$customer->customer_status = $request->customer_status;
		$customer->additional_fields = $request->additional_fields;
		// $customer->tax_duration = $request->tax_duration;

		$created_by = Admin::where('manager_id', $request->created_by)->first();
		if ($created_by->type == 'Supervisor') {
			$customer->manager = $request->manager;
			$customer->supervisor = $request->created_by;
			$customer->created_by = $request->created_by;
		} else {
			$customer->manager = $request->created_by;
			$customer->supervisor = $created_by->reports_to;
			$customer->created_by = $request->created_by;
		}

		$result = $customer->save();
		// creating activity log that who created
		$history = new History;
		$history->history_id = (String) Str::uuid();
		$history->object_id = $customer->customer_id;
		$history->type = 'company';
		$history->event = 'create';
		$history->changes = $request->all();
		$history->description = 'A company enititled as Name (English) ' . $customer->name_english . ', Name (Khmer): ' . $customer->name_khmer . ' is created by ' . session('admin.type') . ': ' . session('admin.full_name');

		if ($created_by->type == 'Supervisor') {
			$officer = Admin::where('manager_id', $request->manager)->first();
			$history->description .= ' & assigned to Officer: ' . $officer->full_name;
		}
		$history->save();
		// initiating notification for web to associated team members
		if ($created_by->type == 'Supervisor') {

			// sending notification to officer
			$notification = new Notification;
			$notification->transmitted_for = $customer->manager;
			$notification->transmitted_by = $created_by->manager_id;
			$notification->notification = 'new company alert';
			$notification->description = 'new company ' . $customer->name_english . ' has been created by  ' . $created_by->full_name . ': which were assigned to you';
			$notification->click_action = "/company-detail/" . $customer->customer_id;
			$save = $notification->save();
			$officer = Admin::where('manager_id', $customer->manager)->first();
			if ($save) {
				$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

				$fields = array(
					// "content_available" => true,
					"to" => $officer->token,
					'priority' => 'high',
					"data" => array(
						"title" => $notification->notification,
						"body" => $notification->description,
						"icon" => "icon.png",
						"click_action" => $notification->click_action,
					),
					"notification" => array(
						"title" => $notification->notification,
						"body" => $notification->description,
						"icon" => "icon.png",
						"click_action" => $notification->click_action,
					),
				);
				$data_string = json_encode($fields);
				$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
				curl_setopt($ch, CURLOPT_POST, true);
				curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
				$result = curl_exec($ch);
				curl_close($ch);
			}

			// sending notification to Admins
			$admins = Admin::where('manager_id', $created_by->reports_to)->orWhere('type', 1)->get();
			foreach ($admins as $key => $admin) {
				$notification = new Notification;
				$notification->transmitted_for = $admin->manager_id;
				$notification->transmitted_by = $created_by->manager_id;
				$notification->notification = 'new company alert';
				$notification->description = 'new company ' . $customer->name_english . ' has been created by  Supervisor: ' . $created_by->full_name . ': which were assigned to ' . $officer->full_name;
				$notification->click_action = "/company-detail/" . $customer->customer_id;
				$save = $notification->save();
				if ($save) {
					$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

					$fields = array(
						"to" => $admin->token,
						'priority' => 'high',
						"data" => array(
							"title" => $notification->notification,
							"body" => $notification->description,
							"icon" => "icon.png",
							"click_action" => $notification->click_action,
						),
						"notification" => array(
							"title" => $notification->notification,
							"body" => $notification->description,
							"icon" => "icon.png",
							"click_action" => $notification->click_action,
						),
					);
					$data_string = json_encode($fields);
					$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
					$ch = curl_init();
					curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
					curl_setopt($ch, CURLOPT_POST, true);
					curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
					curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
					$result = curl_exec($ch);
					curl_close($ch);
				}
			}

		} elseif ($created_by->type == 'Officer') {
			$supervisor = Admin::where('manager_id', $customer->manager)->first();
			// sending notification to Admins
			$admins = Admin::where('manager_id', $created_by->reports_to)->orWhere('type', 1)->orWhere('manager_id', $supervisor->reports_to)->get();
			foreach ($admins as $key => $admin) {
				$notification = new Notification;
				$notification->transmitted_for = $admin->manager_id;
				$notification->transmitted_by = $created_by->manager_id;
				$notification->notification = 'new company alert';
				$notification->description = 'new company ' . $customer->name_english . ' has been created by  Officer: ' . $created_by->full_name . '';
				$notification->click_action = "/company-detail/" . $customer->customer_id;
				$save = $notification->save();
				if ($save) {
					$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

					$fields = array(
						"to" => $admin->token,
						'priority' => 'high',
						"data" => array(
							"title" => $notification->notification,
							"body" => $notification->description,
							"icon" => "icon.png",
							"click_action" => $notification->click_action,
						),
						"notification" => array(
							"title" => $notification->notification,
							"body" => $notification->description,
							"icon" => "icon.png",
							"click_action" => $notification->click_action,
						),
					);
					$data_string = json_encode($fields);
					$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
					$ch = curl_init();
					curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
					curl_setopt($ch, CURLOPT_POST, true);
					curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
					curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
					$result = curl_exec($ch);
					curl_close($ch);
				}
			}
		}
		return response()->json(['status' => 'success', 'customers' => $customer]);
	}

	public function add_owner(Request $request) {
		if ($res = Owner::whereEmail($request->email)->first()) {
			return response()->json(['status' => "error", 'msg' => "email already exists"]);
		}
		if ($res = Owner::whereNic($request->nic)->first()) {
			return response()->json(['status' => "error", 'msg' => "Account with given NIC already exist"]);
		}
		$owner = new Owner;
		$owner->owner_id = (String) Str::uuid();
		$owner->name_english = $request->name_english;
		$owner->name_khmer = $request->name_khmer;
		$owner->email = $request->email;
		$owner->phone_number = $request->phone_number;
		$owner->nic = $request->nic;
		$owner->save();
		return response()->json(['status' => 'success', 'msg' => 'New customer added successfully', 'customers' => $owner]);
	}
	public function update_owner(Request $request) {
		if ($res = Owner::whereEmail($request->email)->where('owner_id', '!=', $request->owner_id)->first()) {
			return response()->json(['status' => "error", 'msg' => "email already exists"]);
		}
		if ($res = Owner::whereNic($request->nic)->where('owner_id', '!=', $request->owner_id)->first()) {
			return response()->json(['status' => "error", 'msg' => "Account with given NIC already exist"]);
		}
		$owner = Owner::withCount('companies')->where('owner_id', $request->owner_id)->first();
		$owner->name_english = $request->name_english;
		$owner->name_khmer = $request->name_khmer;
		$owner->email = $request->email;
		$owner->phone_number = $request->phone_number;
		$owner->nic = $request->nic;
		$owner->save();
		return response()->json(['status' => 'success', 'msg' => 'customer information updated successfully', 'owner' => $owner]);
	}

	public function add_multiple_customer(Request $request) {

		$created_by = Admin::where('manager_id', $request->created_by)->first();
		if ($created_by->type == 'Supervisor' && empty($request->manager)) {
			return response()->json(['status' => false, 'msg' => 'please select officer'], 422);
		}
		if ($request->hasFile('file')) {
			$counter = $emailCount = $taxCardNo = $tinNo = 0;
			$reader = Excel::selectSheetsByIndex(0)->load($request->file('file'), function ($reader) use (&$emailCount, &$taxCardNo, &$tinNo) {

				$reader->sheet("company", function ($sheet) {
				});
			})->get();

			$customers = $reader;
			$headers = $reader->getHeading();
			$possibleVals = ['name_khmer', 'name_english', 'tax_id_no', 'tin_no', 'incorporation_date', 'address', 'street', 'group', 'village', 'sangkat', 'district', 'province', 'muncipality', 'tel', 'ephone', 'email', 'industry', 'tax_duration'];
			$possibleValsCount = count($possibleVals);
			$uploadedHeaderCount = count(array_intersect($possibleVals, $headers));
			if ($possibleValsCount != $uploadedHeaderCount) {
				return response()->json(['status' => false, 'msg' => 'upload cannot be processed. <br> please upload file which contain same columns as defined in sample file also uploaded file must contain some data'], 422);
			}
			foreach ($customers as $key => $value) {
				// if (!$value->filter()->isNotEmpty()) {
				if (empty($value)) {
					continue;
				}
				// dd($value->set);
				$tax_id_no = $value['tax_id_no'];
				list($tax_id_no) = explode(".", "$tax_id_no");

				$street = $value['street'];
				list($street) = explode(".", "$street");

				$tin_no = $value['tin_no'];
				list($tin_no) = explode(".", "$tin_no");

				$tel = $value['tel'];
				list($tel) = explode(".", "$tel");

				$ePhone = $value['ephone'];
				list($ePhone) = explode(".", "$ePhone");
				if ($res = TaxCustomers::whereEmail($value['email'])->first()) {
					$emailCount++;
					continue;
				}

				if ($res = TaxCustomers::whereTaxCardNum($tax_id_no)->first()) {
					$taxCardNo++;
					continue;

				}
				if ($res = TaxCustomers::whereTinNo($tin_no)->first()) {
					$tinNo++;
					continue;
				}

				$customer = new TaxCustomers();
				$customer->customer_id = (String) Str::uuid();
				$customer->name_english = $value['name_english'];
				$customer->name_khmer = $value['name_khmer'];
				$customer->tax_card_num = $tax_id_no;
				$customer->tin_no = $tin_no;
				$customer->address = $value['address'];
				$customer->street = $street;
				$customer->group = $value['group'];
				$customer->sangkat = $value['sangkat'];
				$customer->district = $value['district'];
				$customer->province = $value['province'];
				$customer->muncipality = $value['muncipality'];
				$customer->telephone = '+' . $tel;
				$customer->e_phone = $ePhone;
				$customer->email = $value['email'];
				$customer->industry = $value['industry'];
				$customer->incorporation_date = $value['incorporation_date'];
				$customer->village = $value['village'];
				$customer->tax_duration = $value['tax_duration'];
				// $customer->manager = $request->manager;

				if ($created_by->type == 'Supervisor') {
					$customer->manager = $request->manager;
					$customer->supervisor = $request->created_by;
					$customer->created_by = $request->created_by;
				} else {
					$customer->manager = $request->created_by;
					$customer->supervisor = $created_by->reports_to;
					$customer->created_by = $request->created_by;
				}
				$result = $customer->save();
				$counter++;
				// creating activity log that who created
				$history = new History;
				$history->history_id = (String) Str::uuid();
				$history->object_id = $customer->customer_id;
				$history->type = 'company';
				$history->event = 'create';
				$history->changes = $value;
				$history->description = 'A company enititled as Name (English) ' . $customer->name_english . ', Name (Khmer): ' . $customer->name_khmer . ' is created by ' . session('admin.type') . ': ' . session('admin.full_name');

				if ($created_by->type == 'Supervisor') {
					$officer = Admin::where('manager_id', $request->manager)->first();
					$history->description .= ' & assigned to Officer: ' . $officer->full_name;
				}
				$history->save();

			}
			$totalAddedCount = $counter;
			if ($totalAddedCount > 0) {
				if ($created_by->type == 'Supervisor') {

					// sending notification to officer
					$notification = new Notification;
					$notification->transmitted_for = $customer->manager;
					$notification->transmitted_by = $created_by->manager_id;
					$notification->notification = 'new company alert';
					$notification->description = $totalAddedCount . ' new companies has been created by  ' . $created_by->full_name . ': which were assigned to you';
					$notification->click_action = "/companies";
					$save = $notification->save();
					$officer = Admin::where('manager_id', $request->manager)->first();
					if ($save) {
						$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

						$fields = array(
							// "content_available" => true,
							"to" => $officer->token,
							'priority' => 'high',
							"data" => array(
								"title" => $notification->notification,
								"body" => $notification->description,
								"icon" => "icon.png",
								"click_action" => $notification->click_action,
							),
							"notification" => array(
								"title" => $notification->notification,
								"body" => $notification->description,
								"icon" => "icon.png",
								"click_action" => $notification->click_action,
							),
						);
						$data_string = json_encode($fields);
						$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
						$ch = curl_init();
						curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
						curl_setopt($ch, CURLOPT_POST, true);
						curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
						curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
						curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
						$result = curl_exec($ch);
						curl_close($ch);
					}

					// sending notification to Admins
					$admins = Admin::where('manager_id', $created_by->reports_to)->orWhere('type', 1)->get();
					foreach ($admins as $key => $admin) {
						$notification = new Notification;
						$notification->transmitted_for = $admin->manager_id;
						$notification->transmitted_by = $created_by->manager_id;
						$notification->notification = 'new company alert';
						$notification->description = $totalAddedCount . ' new companies has been created by  Supervisor: ' . $created_by->full_name . ': which were assigned to ' . $officer->full_name;
						$notification->click_action = "/companies";
						$save = $notification->save();
						if ($save) {
							$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

							$fields = array(
								"to" => $admin->token,
								'priority' => 'high',
								"data" => array(
									"title" => $notification->notification,
									"body" => $notification->description,
									"icon" => "icon.png",
									"click_action" => $notification->click_action,
								),
								"notification" => array(
									"title" => $notification->notification,
									"body" => $notification->description,
									"icon" => "icon.png",
									"click_action" => $notification->click_action,
								),
							);
							$data_string = json_encode($fields);
							$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
							$ch = curl_init();
							curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
							curl_setopt($ch, CURLOPT_POST, true);
							curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
							curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
							curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
							$result = curl_exec($ch);
							curl_close($ch);
						}
					}

				} elseif ($created_by->type == 'Officer') {
					$supervisor = Admin::where('manager_id', $created_by->reports_to)->first();
					// sending notification to Admins
					$admins = Admin::where('manager_id', $created_by->reports_to)->orWhere('type', 1)->orWhere('manager_id', $supervisor->reports_to)->get();
					foreach ($admins as $key => $admin) {
						$notification = new Notification;
						$notification->transmitted_for = $admin->manager_id;
						$notification->transmitted_by = $created_by->manager_id;
						$notification->notification = 'new company alert';
						$notification->description = $totalAddedCount . ' new companies has been created by  Officer: ' . $created_by->full_name . '';
						$notification->click_action = "/companies";
						$save = $notification->save();
						if ($save) {
							$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

							$fields = array(
								"to" => $admin->token,
								'priority' => 'high',
								"data" => array(
									"title" => $notification->notification,
									"body" => $notification->description,
									"icon" => "icon.png",
									"click_action" => $notification->click_action,
								),
								"notification" => array(
									"title" => $notification->notification,
									"body" => $notification->description,
									"icon" => "icon.png",
									"click_action" => $notification->click_action,
								),
							);
							$data_string = json_encode($fields);
							$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
							$ch = curl_init();
							curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
							curl_setopt($ch, CURLOPT_POST, true);
							curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
							curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
							curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
							$result = curl_exec($ch);
							curl_close($ch);
						}
					}
				}
			}
			return response()->json(['status' => 'success', 'msg' => "$totalAddedCount new companies added. <br> $emailCount email already exists, <br> $taxCardNo tax card No. already associated with companies <br> $tinNo Tin No. already associated with companies."]);
		}
	}

	public function get_customers(Request $request) {

		if (session('admin.type') == 'Admin' || session('admin.type') == 'Super Admin') {

			$customers = TaxCustomers::with('supervisor', 'officer', 'created_by')->whereCustomerStatus($request->status)->orderBy('created_at', 'desc')->get();

		} else if (session('admin.type') == 'Supervisor') {
			$customers = TaxCustomers::with('supervisor', 'officer', 'created_by')->whereCustomerStatus($request->status)->where('supervisor', session('admin.manager_id'))->get();
		} else {
			$customers = TaxCustomers::where(['manager' => session('admin.manager_id')])->whereCustomerStatus($request->status)->get();

		}

		return response()->json(compact('customers'));
	}

	public function get_owners(Request $request) {

		$owners = Owner::withCount('companies')->orderBy('created_at', 'desc')->get();

		return response()->json(compact('owners'));
	}
	public function get_customer(Request $request) {
		$customer = TaxCustomers::withCount('active_employees', 'taxes')->with('officer', 'supervisor', 'created_by')->where('customer_id', $request->customer_id)->first();
		return response()->json(compact('customer'));
	}

	public function update_customer(Request $request) {

		$customer = TaxCustomers::whereCustomerId($request->id)->first();
		$differenceArray = [];
		array_where($request->all(), function ($item, $key) use ($customer, &$differenceArray) {
			// dd($item, $key);
			if ($item != $customer[$key]) {

				$differenceArray = Arr::add($differenceArray, $key, ['new_value' => $item, 'old_value' => $customer[$key]]);

			}
		});
		$customer->name_english = $request->name_english;
		$customer->name_khmer = $request->name_khmer;
		$customer->owner_id = $request->owner;
		$customer->email = $request->email;
		$customer->telephone = $request->tel;
		$customer->e_phone = $request->e_phone;
		$customer->industry = $request->industry;
		$customer->tax_card_num = $request->tax_card_num;
		$customer->tin_no = $request->tin_no;
		$customer->address = $request->address;
		$customer->muncipality = $request->muncipality;
		$customer->district = $request->district;
		$customer->province = $request->province;
		$customer->sangkat = $request->sangkat;
		$customer->group = $request->group;
		$customer->street = $request->street;
		$customer->village = $request->village;
		// $customer->tax_duration = $request->tax_duration;
		$customer->incorporation_date = $request->incorporation_date;

		if ($request->has('additional_fields')) {
			$customfields = $request->additional_fields;

			for ($i = 1; $i <= count($request->additional_fields); $i++) {
				if (($key = array_search(null, $customfields)) !== false) {
					unset($customfields[$key]);
				}
			}

			$customer->additional_fields = $customfields;
		}

		$result = $customer->save();
		// creating activity log that who created
		$history = new History;
		$history->history_id = (String) Str::uuid();
		$history->object_id = $customer->customer_id;
		$history->type = 'company';
		$history->event = 'update';
		$history->changes = $differenceArray;
		$history->description = 'A Company were updated by ' . session('admin.type') . ': ' . session('admin.full_name');
		$history->save();
		if ($result) {

			if (session('admin.type') == 'Supervisor') {

				// sending notification to Admins
				$admins = Admin::where('manager_id', session('admin.reports_to'))->orWhere('type', 1)->get();
				foreach ($admins as $key => $admin) {
					$notification = new Notification;
					$notification->transmitted_for = $admin->manager_id;
					$notification->transmitted_by = session('admin.manager_id');
					$notification->notification = 'company update alert';
					$notification->description = 'A detail of company named ' . $customer->name_english . ' has been updated by Supervisor: ' . session('admin.full_name') . '';
					$notification->click_action = "/company-detail/" . $customer->customer_id;
					$save = $notification->save();
					if ($save) {
						$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

						$fields = array(
							"to" => $admin->token,
							'priority' => 'high',
							"data" => array(
								"title" => $notification->notification,
								"body" => $notification->description,
								"icon" => "icon.png",
								"click_action" => $notification->click_action,
							),
							"notification" => array(
								"title" => $notification->notification,
								"body" => $notification->description,
								"icon" => "icon.png",
								"click_action" => $notification->click_action,
							),
						);
						$data_string = json_encode($fields);
						$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
						$ch = curl_init();
						curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
						curl_setopt($ch, CURLOPT_POST, true);
						curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
						curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
						curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
						$result = curl_exec($ch);
						curl_close($ch);
					}
				}
			} elseif (session('admin.type') == 'Officer') {
				$supervisor = Admin::where('manager_id', $customer->manager)->first();
				// sending notification to Admins
				$admins = Admin::where('manager_id', session('admin.reports_to'))->orWhere('type', 1)->orWhere('manager_id', $supervisor->reports_to)->get();
				foreach ($admins as $key => $admin) {
					$notification = new Notification;
					$notification->transmitted_for = $admin->manager_id;
					$notification->transmitted_by = $created_by->manager_id;
					$notification->notification = 'company update alert';
					$notification->description = 'A detail of company named ' . $customer->name_english . ' has been updated by  Officer: ' . $created_by->full_name . '';
					$notification->click_action = "/company-detail/" . $customer->customer_id;
					$save = $notification->save();
					if ($save) {
						$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

						$fields = array(
							"to" => $admin->token,
							'priority' => 'high',
							"data" => array(
								"title" => $notification->notification,
								"body" => $notification->description,
								"icon" => "icon.png",
								"click_action" => $notification->click_action,
							),
							"notification" => array(
								"title" => $notification->notification,
								"body" => $notification->description,
								"icon" => "icon.png",
								"click_action" => $notification->click_action,
							),
						);
						$data_string = json_encode($fields);
						$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
						$ch = curl_init();
						curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
						curl_setopt($ch, CURLOPT_POST, true);
						curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
						curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
						curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
						$result = curl_exec($ch);
						curl_close($ch);
					}
				}
			}
		}
		return response()->json(['status' => 'success', 'customer' => $customer], 200);
	}

	// Customer Employees method
	public function add_employee(Request $request) {
		if ($res = CustomerEmployee::whereNssfNum($request->nssf_num)->where('tax_customer_id', $request->customer_id)->first()) {
			return response()->json(['status' => "error", 'msg' => "Employee with this NSSF No already exists"]);
		}
		if ($res = CustomerEmployee::where('employee_num', '=', $request->employee_num)->where('tax_customer_id', $request->customer_id)->first()) {
			return response()->json(['status' => "error", 'msg' => "Employee with this Employee No already exists"]);
		}
		$employee = new CustomerEmployee;
		$employee->employee_id = (String) Str::uuid();
		$employee->tax_customer_id = $request->customer_id;
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
		$employee->children = $request->children;
		$employee->employee_type = $request->employee_type;
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
		$employees = CustomerEmployee::whereTaxCustomerId($request->customer_id)->where('status', 1)->get();
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
		$employee->employee_type = $request->employee_type;
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
		if (session('admin.type') == 'Supervisor') {
			$admins = Admin::with('reportingTo')->where('manager_id', '!=', session('admin.manager_id'))->where('reports_to', session('admin.manager_id'))->where('type', 3)->latest('id')->get();

		} elseif (session('admin.type') == 'Admin' || session('admin.type') == 'Super Admin') {
			$admins = Admin::with('reportingTo')->where('manager_id', '!=', session('admin.manager_id'))->latest('id')->get();
		} else {
			$admins = [];
		}
		return response()->json(compact('admins'));
	}

	public function get_member_detail($id) {
		$member = Admin::with(['taxes' => function ($taxes) {
			$taxes->with(['tax' => function ($tax) {
				$tax->with(['supervisor', 'customer']);
			}]);
		}])->withCount(['taxes', 'taxes as active_taxes' => function ($q) {
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
			$admin->reports_to = $request->reports_to;

		} else {
			$admin->type = 3; // 3 means officer
			$admin->reports_to = $request->reports_to;

		}
		$result = $admin->save();
		$admins = Admin::all();
		if ($admin->type == 'Officer') {

			// sending notification to supervisor

			// sending notification to officer
			$notification = new Notification;
			$notification->transmitted_for = $request->reports_to;
			$notification->transmitted_by = session('admin.manager_id');
			$notification->notification = 'New Officer Assigned';
			$notification->description = 'new officer ' . $admin->full_name . ' has been added in your team by ' . session('admin.full_name') . ':';
			$notification->click_action = "/my-team";
			$save = $notification->save();
			$supervisor = Admin::where('manager_id', $request->reports_to)->first();
			if ($save) {
				$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

				$fields = array(
					// "content_available" => true,
					"to" => $supervisor->token,
					'priority' => 'high',
					"data" => array(
						"title" => $notification->notification,
						"body" => $notification->description,
						"icon" => "icon.png",
						"click_action" => $notification->click_action,
					),
					"notification" => array(
						"title" => $notification->notification,
						"body" => $notification->description,
						"icon" => "icon.png",
						"click_action" => $notification->click_action,
					),
				);
				$data_string = json_encode($fields);
				$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
				curl_setopt($ch, CURLOPT_POST, true);
				curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
				$result = curl_exec($ch);
				curl_close($ch);
			}
		} elseif ($admin->type == 'Supervisor' && session('admin.manager_id') != $admin->reports_to) {

			// sending notification to admin
			$notification = new Notification;
			$notification->transmitted_for = $request->reports_to;
			$notification->transmitted_by = session('admin.manager_id');
			$notification->notification = 'New Supervisor Assigned';
			$notification->description = 'new Supervisor ' . $admin->full_name . ' has been added in your team by ' . session('admin.full_name') . ':';
			$notification->click_action = "/my-team";
			$save = $notification->save();
			$admin = Admin::where('manager_id', $request->reports_to)->first();
			if ($save) {
				$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

				$fields = array(
					// "content_available" => true,
					"to" => $admin->token,
					'priority' => 'high',
					"data" => array(
						"title" => $notification->notification,
						"body" => $notification->description,
						"icon" => "icon.png",
						"click_action" => $notification->click_action,
					),
					"notification" => array(
						"title" => $notification->notification,
						"body" => $notification->description,
						"icon" => "icon.png",
						"click_action" => $notification->click_action,
					),
				);
				$data_string = json_encode($fields);
				$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
				curl_setopt($ch, CURLOPT_POST, true);
				curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
				$result = curl_exec($ch);
				curl_close($ch);
			}
		}
		return response()->json(['status' => 'success', 'admins' => $admins], 200);
	}

	public function update_admin(Request $request) {
		$admin = Admin::whereManagerId($request->id)->first();
		$previousReportsTo = $admin->reports_to;
		$admin->first_name = $request->first_name;
		$admin->last_name = $request->last_name;
		$admin->gender = $request->gender;
		$admin->address = $request->address;
		$admin->city = $request->city;
		$admin->state = $request->state;
		$admin->zip_code = $request->zip_code;
		$admin->phone = $request->phone;
		if ($admin->type == 'Officer' && $request->role != 'Officer') {
			TaxCustomers::where('manager', $request->id)->update(['manager' => NULL]);
		} elseif ($admin->type == 'Supervisor' && $request->role != 'Supervisor') {
			TaxCustomers::where('supervisor', $request->id)->update(['supervisor' => NULL]);
			Admin::where('reports_to', $request->id)->update(['reports_to' => NULL]);
		}
		if ($request->role == 'Admin') {
			$admin->type = 1; // 1 means admin

		} elseif ($request->role == 'Supervisor') {
			$admin->type = 2; // 2 means Supervisor

		} else {
			$admin->type = 3; // 3 means officer
			$admin->reports_to = $request->reports_to;

		}
		$result = $admin->save();
		if ($previousReportsTo != $request->reports_to) {
			if ($admin->type == 'Officer') {

				// sending notification to supervisor
				$supervisors = Admin::whereIn('manager_id', [$request->reports_to, $previousReportsTo])->get();
				foreach ($supervisors as $supervisor) {
					$notification = new Notification;
					$notification->transmitted_by = session('admin.manager_id');
					if ($supervisor->manager_id == $previousReportsTo) {
						$notification->transmitted_for = $supervisor->manager_id;
						$notification->notification = 'Officer Removed';
						$notification->description = 'Officer: ' . $admin->full_name . ' has been removed from your team by ' . session('admin.full_name') . ':';
					} else {
						$notification->transmitted_for = $supervisor->manager_id;
						$notification->notification = 'New Officer Assigned';
						$notification->description = 'New officer ' . $admin->full_name . ' has been added in your team by ' . session('admin.full_name') . ':';

					}
					$notification->click_action = "/my-team";
					$save = $notification->save();

					if ($save) {
						$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

						$fields = array(
							// "content_available" => true,
							"to" => $supervisor->token,
							'priority' => 'high',
							"data" => array(
								"title" => $notification->notification,
								"body" => $notification->description,
								"icon" => "icon.png",
								"click_action" => $notification->click_action,
							),
							"notification" => array(
								"title" => $notification->notification,
								"body" => $notification->description,
								"icon" => "icon.png",
								"click_action" => $notification->click_action,
							),
						);
						$data_string = json_encode($fields);
						$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
						$ch = curl_init();
						curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
						curl_setopt($ch, CURLOPT_POST, true);
						curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
						curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
						curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
						$result = curl_exec($ch);
						curl_close($ch);
					}

				}
			} elseif ($admin->type == 'Supervisor') {

				// sending notification to admin
				$admins = Admin::whereIn('manager_id', [$request->reports_to, $previousReportsTo])->get();
				foreach ($admins as $admin) {
					if ($admin->manager_id != session('admin.manager_id')) {
						$notification = new Notification;
						$notification->transmitted_by = session('admin.manager_id');
						$notification->click_action = "/my-team";
						if ($supervisor->manager_id == $previousReportsTo) {
							$notification->transmitted_for = $supervisor->manager_id;
							$notification->notification = 'Supervisor Removed';
							$notification->description = 'Supervisor: ' . $admin->full_name . ' has been removed from your team by ' . session('admin.full_name') . ':';
						} else {
							$notification->transmitted_for = $supervisor->manager_id;
							$notification->notification = 'New Supervisor Assigned';
							$notification->description = 'new Supervisor ' . $admin->full_name . ' has been added in your team by ' . session('admin.full_name') . ':';
						}
						$save = $notification->save();
						$admin = Admin::where('manager_id', $request->reports_to)->first();
						if ($save) {
							$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

							$fields = array(
								// "content_available" => true,
								"to" => $admin->token,
								'priority' => 'high',
								"data" => array(
									"title" => $notification->notification,
									"body" => $notification->description,
									"icon" => "icon.png",
									"click_action" => $notification->click_action,
								),
								"notification" => array(
									"title" => $notification->notification,
									"body" => $notification->description,
									"icon" => "icon.png",
									"click_action" => $notification->click_action,
								),
							);
							$data_string = json_encode($fields);
							$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
							$ch = curl_init();
							curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
							curl_setopt($ch, CURLOPT_POST, true);
							curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
							curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
							curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
							$result = curl_exec($ch);
							curl_close($ch);
						}
					}
				}
			}
		}
		$admin = Admin::with('reportingTo')->where('manager_id', $admin->manager_id)->latest('id')->first();
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

	public function update_customer_status(Request $request) {
		$customer = TaxCustomers::whereCustomerId($request->customer_id)->first();
		$customer->customer_status = $request->status;
		$customer->save();
		return response()->json(['status' => 'success', 'msg' => 'Customer status updated successfully'], 200);
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

		if ($admin->type == 'Officer') {

			// sending notification to Admins
			$supervisor = Admin::where('manager_id', $admin->reports_to)->first();
			// sending notification to Admins
			$notification = new Notification;
			$notification->transmitted_for = $supervisor->manager_id;
			$notification->transmitted_by = session('admin.manager_id');
			$notification->notification = 'Officer Status change alert';
			$status = $admin->status == 1 ? "Enabled" : 'Disabled';
			$notification->description = 'Officer: ' . $admin->full_name . ' account has been ' . $status . ' by ' . session('admin.full_name') . '' . ($status == 'Disabled' ? ' who is  no more available to work with you' : ' who is now available to work with you');
			$notification->click_action = "/my-team";
			$save = $notification->save();
			if ($save) {
				$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

				$fields = array(
					"to" => $supervisor->token,
					'priority' => 'high',
					"data" => array(
						"title" => $notification->notification,
						"body" => $notification->description,
						"icon" => "icon.png",
						"click_action" => $notification->click_action,
					),
					"notification" => array(
						"title" => $notification->notification,
						"body" => $notification->description,
						"icon" => "icon.png",
						"click_action" => $notification->click_action,
					),
				);
				$data_string = json_encode($fields);
				$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
				curl_setopt($ch, CURLOPT_POST, true);
				curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
				$result = curl_exec($ch);
				curl_close($ch);
			}

		}
		return response()->json(['status' => 'success', 'msg' => $msg], 200);

	}

	public function get_exchange_rates() {

		if (!$ar = Settings::where('key', 'annual_rate')->first()) {
			$data = new Settings();
			$data->key = 'annual_rate';
			$data->value = 0;
			$data->save();
		}
		if (!$ar = Settings::where('key', 'average_rate')->first()) {
			$data = new Settings();
			$data->key = 'average_rate';
			$data->value = 0;
			$data->save();
		}
		if (!$ar = Settings::where('key', 'salary_rate')->first()) {
			$data = new Settings();
			$data->key = 'salary_rate';
			$data->value = 0;
			$data->save();
		}
		if (!$ar = Settings::where('key', 'daily_rate')->first()) {
			$data = new Settings();
			$data->key = 'daily_rate';
			$data->value = 0;
			$data->save();
		}
		$setting = Settings::where('key', '!=', 'faqs')->get();
		$rates = $setting;

		return response()->json(compact('rates'));
	}

	public function update_exchange_rates(Request $request) {
		$annual_rate = Settings::where('key', 'annual_rate')->update(['value' => $request->annual_rate]);
		$average_rate = Settings::where('key', 'average_rate')->update(['value' => $request->average_rate]);
		$salary_rate = Settings::where('key', 'salary_rate')->update(['value' => $request->salary_rate]);
		$salary_rate = Settings::where('key', 'daily_rate')->update(['value' => $request->daily_rate]);
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
		// $tax->duration = $request->duration;
		$cust = TaxCustomers::whereCustomerId($request->customer_id)->first();
		$tax->type = $request->type;
		$tax->tax_code = $request->tax_code;
		$tax->notes = $request->notes;
		$tax->created_by = $request->created_by;
		// $tax->supervisor_id = $request->supervisor_id;
		if ($request->resubmission_type == 'Recall') {
			$tax->is_recall = 1;
		}
		$save = $tax->save();

		if ($save && $request->resubmission_type == 'Recall') {
			$recall_tax_id = $request->recall_tax_id;

			$getSales = Sales::where('tax_id', $recall_tax_id)->get();
			if (!empty($getSales)) {
				foreach ($getSales as $key => $sale) {
					$sale->replicate();
					$sale->tax_id = $tax->tax_id;
					$sale->sale_id = (String) Str::uuid();
					$sale->save();
				}
			}

			$getPurchases = Purchases::where('tax_id', $recall_tax_id)->get();
			if (!empty($getPurchases)) {
				foreach ($getPurchases as $key => $purchase) {
					$purchase->replicate();
					$purchase->tax_id = $tax->tax_id;
					$purchase->purchase_id = (String) Str::uuid();
					$purchase->save();
				}
			}

			$getPayrolls = Payrolls::where('tax_id', $recall_tax_id)->get();
			if (!empty($getPayrolls)) {
				foreach ($getPayrolls as $key => $payroll) {
					$payroll->replicate();
					$payroll->tax_id = $tax->tax_id;
					$payroll->payroll_id = (String) Str::uuid();
					$payroll->save();
				}
			}

		}

		$history = new History;
		$history->history_id = (String) Str::uuid();
		$history->object_id = $tax->tax_id;
		$history->type = 'tax';
		$history->event = 'create';
		$history->tax_id = $request->tax_id;
		$history->changes = $request->except(['created_by', 'customer_id']);
		$history->description = 'A new Tax Entitled ' . $tax->title . ' were created by ' . session('admin.type') . ': ' . session('admin.full_name');
		$history->save();
		if ($save) {
			if (session('admin.type') == 'Supervisor') {

				$managers = Admin::whereIn('manager_id', [$cust->manager, session('admin.reports_to')])->get();
			} else {
				$supervisor = Admin::where('manager_id', $cust->supervisor)->first();
				$supervisorAdmin = Admin::where('manager_id', $supervisor->reports_to)->first();
				$managers = Admin::whereIn('manager_id', [$cust->supervisor, $supervisorAdmin->manager_id])->get();
			}
			foreach ($managers as $key => $manager) {
				# code...
				// sending notification to officer
				$notification = new Notification;
				$notification->transmitted_for = $manager->manager_id;
				$notification->transmitted_by = session('admin.manager_id');
				$notification->notification = 'new tax creation alert';
				$notification->description = 'new tax collection of company ' . $cust->name_english . ' has been created by ' . session('admin.full_name') . ':';
				$notification->click_action = "/tax-collection/" . $tax->tax_id;
				$save = $notification->save();
				if ($save) {
					$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

					$fields = array(
						// "content_available" => true,
						"to" => $manager->token,
						'priority' => 'high',
						"data" => array(
							"title" => $notification->notification,
							"body" => $notification->description,
							"icon" => "icon.png",
							"click_action" => $notification->click_action,
						),
						"notification" => array(
							"title" => $notification->notification,
							"body" => $notification->description,
							"icon" => "icon.png",
							"click_action" => $notification->click_action,
						),
					);
					$data_string = json_encode($fields);
					$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
					$ch = curl_init();
					curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
					curl_setopt($ch, CURLOPT_POST, true);
					curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
					curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
					$result = curl_exec($ch);
					curl_close($ch);
				}
			}
			return response()->json(['status' => 'success', 'msg' => 'Tax Created Successfully'], 200);
		}

	}

	public function update_tax(Request $request) {

		$tax = Tax::whereTaxId($request->tax_id)->first();
		$differenceArray = [];
		array_where($request->except('id'), function ($item, $key) use ($tax, &$differenceArray) {
			// dd($item, $key);
			if ($item != $tax[$key]) {

				$differenceArray = Arr::add($differenceArray, $key, ['new_value' => $item, 'old_value' => $tax[$key]]);
			}
		});
		$tax->title = $request->title;
		$tax->description = $request->description;
		$tax->notes = $request->notes;
		$tax->type = $request->type;
		$tax->tax_code = $request->tax_code;
		$save = $tax->save();

		if (count($differenceArray) > 0) {
			$history = new History;
			$history->history_id = (String) Str::uuid();
			$history->object_id = $tax->tax_id;
			$history->type = 'tax';
			$history->event = 'update';
			$history->tax_id = $tax->tax_id;
			$history->changes = $request->except(['created_by', 'customer_id']);
			$history->description = 'A Tax Entitled ' . $tax->title . ' were updated by ' . session('admin.type') . ': ' . session('admin.full_name');
			$history->save();
		}
		$cust = TaxCustomers::whereCustomerId($tax->customer_id)->first();
		if ($save) {
			if (session('admin.type') == 'Supervisor') {

				$managers = Admin::whereIn('manager_id', [$cust->manager, session('admin.reports_to')])->get();
			} else {
				$supervisor = Admin::where('manager_id', $cust->supervisor)->first();
				$supervisorAdmin = Admin::where('manager_id', $supervisor->reports_to)->first();
				$managers = Admin::whereIn('manager_id', [$cust->supervisor, $supervisorAdmin->manager_id])->get();
			}
			foreach ($managers as $key => $manager) {
				# code...
				// sending notification to officer
				$notification = new Notification;
				$notification->transmitted_for = $manager->manager_id;
				$notification->transmitted_by = session('admin.manager_id');
				$notification->notification = 'tax update alert';
				$notification->description = 'Tax collection detail' . ' of company ' . $cust->name_english . ' entitled ' . $tax->title . ' has been updated by ' . session('admin.type') . ': ' . session('admin.full_name') . '';
				$notification->click_action = "/tax-collection/" . $tax->tax_id;
				$save = $notification->save();
				if ($save) {
					$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

					$fields = array(
						// "content_available" => true,
						"to" => $manager->token,
						'priority' => 'high',
						"data" => array(
							"title" => $notification->notification,
							"body" => $notification->description,
							"icon" => "icon.png",
							"click_action" => $notification->click_action,
						),
						"notification" => array(
							"title" => $notification->notification,
							"body" => $notification->description,
							"icon" => "icon.png",
							"click_action" => $notification->click_action,
						),
					);
					$data_string = json_encode($fields);
					$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
					$ch = curl_init();
					curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
					curl_setopt($ch, CURLOPT_POST, true);
					curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
					curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
					$result = curl_exec($ch);
					curl_close($ch);
				}
			}
			return response()->json(['status' => 'success', 'msg' => 'Tax Updated Successfully'], 200);
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
		$taxes = Tax::with('created_by')->where('customer_id', $request->customer_id)
			->where('type', $request->status)
			->latest('id')->get();
		/*if (session('admin.type') == 'Admin') {

				$taxes = Tax::with('supervisor')->withCount('officers')->where('customer_id', $request->customer_id)->get();
			} elseif (session('admin.type') == 'Supervisor') {

			} else {
				$taxes = Tax::with('supervisor')->withCount('officers')->where('customer_id', $request->customer_id)->whereRaw('tax_id IN (SELECT tax_id from tax_officers where officer_id = ?)', ['officer_id' => session('admin.manager_id')])->get();

		*/
		return response()->json(compact('taxes'));
	}
	public function get_recall_taxes(Request $request) {
		$type = 'not found';
		if ($request->type == 'Monthly Resubmission Tax') {
			$type = 'Monthly Tax';
		}
		if ($request->type == 'Annual Resubmission Tax') {
			$type = 'Annual Tax';
		}
		$taxes = Tax::with('created_by')->where('customer_id', $request->customer_id)
			->where('type', $type)
			->latest('id')->get();
		return response()->json(compact('taxes'));
	}
	public function get_parameters(Request $request, Parameter $parameter) {
		$parameters = $parameter->orderBy('status', 'desc')->orderBy('id', 'desc');
		if ($request->has('where') && !empty($request->where)) {
			$parameters->where('tax_type', $request->where);
		}
		$parameters = $parameters->get();
		return response()->json(compact('parameters'));
	}
	public function get_tax(Request $request) {
		$tax = Tax::with('supervisor', 'officer', 'created_by')->withCount('sales', 'purchases', 'payrolls')->where('tax_id', $request->tax_id)->first();
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

	public function get_edittax(Request $request) {
		$tax = Tax::where('tax_id', $request->id)->first();

		return response()->json(compact('tax'));
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
		$purchase->invoice_num = $request->invoice_num;
		$purchase->description = $request->description;
		$purchase->quantity = $request->quantity;
		$purchase->local_purchase_tax_val = $request->local_purchase_tax_val;
		// $purchase->local_purchase_vat = $request->vat_local;
		$purchase->imports_taxable_val = $request->taxable_value_import;
		// $purchase->imports_vat = $request->vat_import;
		// $purchase->subject = $request->item_subject_taxes;
		$purchase->comments = $request->comments;
		$purchase->top_comments = $request->top_comments;
		$purchase->client_responses = $request->client_responses;
		$purchase->non_taxable_purchases = $request->non_taxable_purchases;
		$purchase->supplier = $request->supplier;
		$purchase->additional_fields = $request->additional_fields;
		$purchase->status = 0;
		$purchase->created_by = $request->created_by;

		if ($request->creator_type == 'Supervisor') {
			$purchase->officer_confirmed = 1;
		}
		if ($request->creator_type == 'Super Admin' || $request->creator_type == 'Admin') {
			$purchase->officer_confirmed = 1;
			$purchase->supervisor_confirmed = 1;
			$purchase->management_confirmed = 0;
		}
		if ($purchase->save()) {
			foreach ($request->tax_params as $key => $param) {
				$taxSubject = new TaxSubject;
				$taxSubject->subject_id = (String) Str::uuid();
				$taxSubject->param_id = $param;
				$taxSubject->object_id = $purchase->purchase_id;
				$taxSubject->type = 'purchases';
				$taxSubject->save();
			}

			$history = new History;
			$history->history_id = (String) Str::uuid();
			$history->object_id = $purchase->purchase_id;
			$history->type = 'purchase';
			$history->event = 'create';
			$history->tax_id = $request->tax_id;
			$history->changes = $request->except(['created_by', 'customer_id', 'tax_id']);
			$history->description = 'A purchase with invoice No : ' . $purchase->invoice_num . ' is created by ' . session('admin.type') . ': ' . session('admin.full_name');
			$history->save();
		}
		$purchase = Purchases::with(['created_by'])->where('purchase_id', $purchase->purchase_id)->first();
		return response()->json(['status' => 'success','data'=>$purchase]);
	}

	public function get_purchases(Request $request) {
		$purchases = Purchases::with(['created_by'])->latest('id')->where('tax_id', $request->tax_id)->get();
		return response()->json(compact('purchases'));
	}

	public function add_sale(Request $request) {

		$sale = new Sales();

		$sale->sale_id = (String) Str::uuid();
		$sale->tax_id = $request->tax_id;
		$sale->customer_id = $request->customer_id;
		$sale->account_code = $request->account_code;
		$sale->account_description = $request->account_description;
		$sale->accounting_reference = $request->accounting_reference;
		$sale->signature_date = $request->signature_date;
		$sale->branch_name = $request->branch_name;
		$sale->tax_period = $request->tax_period;
		$sale->invoice_date = $request->invoice_date;
		$sale->invoice_num = $request->invoice_num;
		$sale->description = $request->description;
		$sale->quantity = $request->quantity;
		$sale->taxes_subject = $request->item_subject_taxes;
		$sale->comments = $request->comments;
		$sale->top_comments = $request->top_comments;
		$sale->client_response = $request->client_response;
		$sale->non_taxable_sales = $request->non_taxable_sales;
		$sale->vat = $request->vat;
		$sale->created_by = $request->created_by;
		if ($request->creator_type == 'Supervisor') {
			$sale->officer_confirmed = 1;
		}
		if ($request->creator_type == 'Super Admin' || $request->creator_type == 'Admin') {
			$sale->officer_confirmed = 1;
			$sale->supervisor_confirmed = 1;
			$sale->management_confirmed = 1;
		}

		if (!is_null($request->taxable_person_sales)) {
			$sale->taxable_person_sales = $request->taxable_person_sales;
		}

		if (!is_null($request->cust_sales)) {
			$sale->cust_sales = $request->cust_sales;
		}

		$sale->additional_fields = $request->additional_fields;
		$sale->status = 0;

		if ($sale->save()) {
			foreach ($request->tax_params as $key => $param) {
				$taxSubject = new TaxSubject;
				$taxSubject->subject_id = (String) Str::uuid();
				$taxSubject->param_id = $param;
				$taxSubject->object_id = $sale->sale_id;
				$taxSubject->type = 'sales';
				$taxSubject->save();
			}

			$history = new History;
			$history->history_id = (String) Str::uuid();
			$history->object_id = $sale->sale_id;
			$history->type = 'sale';
			$history->event = 'create';
			$history->tax_id = $request->tax_id;
			$history->changes = $request->except(['customer_id', 'tax_id', 'created_by']);
			$history->description = 'A sale with invoice No : ' . $sale->invoice_num . ' is created by ' . session('admin.type') . ': ' . session('admin.full_name');
			$history->save();
		}
		$sale = Sales::with(['created_by'])->where('sale_id', $sale->sale_id)->first();
		return response()->json(['status' => 'success', 'data' => $sale]);
	}

	public function get_sales(Request $request) {
		$sales = Sales::with(['created_by'])->latest('id')->where('tax_id', $request->tax_id)->get();
		return response()->json(compact('sales'));
	}
	public function get_pending_sales(Request $request) {
		$sales = Sales::with('created_by')->where('officer_confirmed', 1)->where('supervisor_confirmed', 0)->where('tax_id', $request->tax_id)->get();
		return response()->json(compact('sales'));
	}

	public function get_pending_purchases(Request $request) {
		$purchases = Purchases::with('created_by')->where('officer_confirmed', 1)->where('supervisor_confirmed', 0)->where('tax_id', $request->tax_id)->get();
		return response()->json(compact('purchases'));
	}
	public function get_pending_payrolls(Request $request) {
		$payrolls = Payrolls::with('created_by', 'employee')->where('officer_confirmed', 1)->where('supervisor_confirmed', 0)->where('tax_id', $request->tax_id)->get();
		return response()->json(compact('payrolls'));
	}

	public function update_sale(Request $request) {

		$sale = Sales::whereSaleId($request->id)->first();

		$differenceArray = [];
		array_where($request->except('id'), function ($item, $key) use ($sale, &$differenceArray) {
			// dd($item, $key);
			if ($item != $sale[$key]) {
				$differenceArray = Arr::add($differenceArray, $key, ['new_value' => $item, 'old_value' => $sale[$key]]);
				// array_push($differenceArray, [$key => ['new_value' => $item, 'old_value' => $sale[$key]]]);

			}
		});
		$sale->account_code = $request->account_code;
		$sale->account_description = $request->account_description;
		$sale->accounting_reference = $request->accounting_reference;
		$sale->signature_date = $request->signature_date;
		$sale->branch_name = $request->branch_name;
		$sale->tax_period = $request->tax_period;
		$sale->invoice_date = $request->invoice_date;
		$sale->invoice_num = $request->invoice_num;
		$sale->client_name = $request->client_name;
		$sale->client_tin = $request->client_tin;
		$sale->description = $request->description;
		$sale->quantity = $request->quantity;
		$sale->comments = $request->comments_3e_fii;
		$sale->top_comments = $request->comments_for_top;
		$sale->client_response = $request->client_responses;
		$sale->non_taxable_sales = $request->non_taxable_sales;
		$sale->vat = $request->vat;

		if (!is_null($request->taxable_person_sales)) {
			$sale->taxable_person_sales = $request->taxable_person_sales;
		}

		if (!is_null($request->cust_sales)) {
			$sale->cust_sales = $request->cust_sales;
		}
		$sale->total_taxable_value = $request->total_taxable_value;

		$customfields = $request->additional_fields;
		if ($request->has('additional_fields')) {

			for ($i = 1; $i <= count($request->additional_fields); $i++) {
				if (($key = array_search(null, $customfields)) !== false) {
					unset($customfields[$key]);
				}
			}

			$sale->additional_fields = $customfields;
		}

		$sale->save();
		if ($request->has('tax_params') && count($request->tax_params)) {
			TaxSubject::where('object_id', $sale->sale_id)->delete();
			foreach ($request->tax_params as $key => $param) {
				$taxSubject = new TaxSubject;
				$taxSubject->subject_id = (String) Str::uuid();
				$taxSubject->param_id = $param;
				$taxSubject->object_id = $sale->sale_id;
				$taxSubject->type = 'sales';
				$taxSubject->save();
			}
		}
		if (count($differenceArray) > 0) {
			$history = new History;
			$history->history_id = (String) Str::uuid();
			$history->object_id = $request->id;
			$history->type = 'sale';
			$history->event = 'update';
			$history->tax_id = $sale->tax_id;
			$history->changes = $differenceArray;
			$history->description = 'A sale with invoice No : ' . $sale->invoice_num . ' was updated by ' . session('admin.type') . ': ' . session('admin.full_name');
			$history->save();

		}
		return response()->json(['status' => 'success', 'data' => $sale]);
	}

	public function logout(Request $request) {
		Session::forget('admin');
		return response()->json(['status' => 'success', 'msg' => 'Logged out successfully']);
	}

	public function get_sale(Request $request) {
		$sale = Sales::with(['officer', 'created_by', 'taxes_subject.parameter'])->whereSaleId($request->id)->first();
		return response()->json(compact('sale'));
	}

	public function get_purchase(Request $request) {
		$purchase = Purchases::with(['officer', 'created_by', 'taxes_subject.parameter'])->wherePurchaseId($request->id)->first();
		return response()->json(compact('purchase'));
	}

	public function update_purchase(Request $request) {

		$purchase = Purchases::wherePurchaseId($request->id)->first();
		$differenceArray = [];
		array_where($request->except('id'), function ($item, $key) use ($purchase, &$differenceArray) {
			// dd($item, $key);
			if ($item != $purchase[$key]) {

				$differenceArray = Arr::add($differenceArray, $key, ['new_value' => $item, 'old_value' => $purchase[$key]]);

			}
		});
		$purchase->branch_name = $request->branch_name;
		$purchase->tax_period = $request->tax_period;
		$purchase->invoice_date = $request->invoice_date;
		$purchase->invoice_num = $request->invoice_num;
		$purchase->description = $request->description;
		$purchase->quantity = $request->quantity;

		if (!is_null($request->local_purchase_tax_val)) {
			$purchase->local_purchase_tax_val = $request->local_purchase_tax_val;
		}
		/*if (!is_null($request->vat_local)) {
			$purchase->local_purchase_vat = $request->vat_local;
		}*/

		if (!is_null($request->imports_taxable_val)) {
			$purchase->imports_taxable_val = $request->imports_taxable_val;
		}
		/*if (!is_null($request->vat_import)) {
			$purchase->imports_vat = $request->vat_import;
		}*/
		$purchase->total_vat = $request->total_vat;
		// $purchase->subject = $request->item_subject_taxes;
		$purchase->comments = $request->comments;
		$purchase->top_comments = $request->top_comments;
		$purchase->client_responses = $request->client_responses;
		$purchase->non_taxable_purchases = $request->non_taxable_purchases;
		$purchase->supplier = $request->supplier;
		// $purchase->vat_tin = $request->vat_tin;
		if ($request->has('additional_fields')) {

			$customfields = $request->additional_fields;
			for ($i = 1; $i <= count($request->additional_fields); $i++) {
				if (($key = array_search(null, $customfields)) !== false) {
					unset($customfields[$key]);
				}
			}

			$purchase->additional_fields = $customfields;
		}
		$purchase->save();
		if ($request->has('tax_params') && count($request->tax_params)) {
			TaxSubject::where('object_id', $purchase->purchase_id)->delete();
			foreach ($request->tax_params as $key => $param) {
				$taxSubject = new TaxSubject;
				$taxSubject->subject_id = (String) Str::uuid();
				$taxSubject->param_id = $param;
				$taxSubject->object_id = $purchase->purchase_id;
				$taxSubject->type = 'purchases';
				$taxSubject->save();
			}
		}
		if (count($differenceArray) > 0) {
			$history = new History;
			$history->history_id = (String) Str::uuid();
			$history->object_id = $request->id;
			$history->type = 'purchase';
			$history->event = 'update';
			$history->tax_id = $purchase->tax_id;
			$history->changes = $differenceArray;
			$history->description = 'A purchase with invoice No : ' . $purchase->invoice_num . ' was updated by ' . session('admin.type') . ': ' . session('admin.full_name');
			$history->save();

		}
		return response()->json(['status' => 'success', 'data' => $purchase]);
	}

	public function add_payroll(Request $request) {

		$pr = new Payrolls();
		$pr->payroll_id = (String) Str::uuid();
		$pr->tax_id = $request->tax_id;
		$pr->employee_id = $request->employee_id;
		$pr->basic_salary = $request->basic_salary;
		$pr->bonus = $request->bonus;
		$pr->over_time = $request->over_time;
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
		$pr->additional_fields = $request->additional_fields;
		$pr->created_by = $request->created_by;
		/*if ($request->has('supervisor_id')) {
				$pr->officer_confirmed = 1;

			} else {
				$pr->tax_officer_id = $request->officer_id;
		*/
		if ($request->creator_type == 'Supervisor') {
			$pr->officer_confirmed = 1;
		}
		if ($request->creator_type == 'Super Admin' || $request->creator_type == 'Admin') {
			$pr->officer_confirmed = 1;
			$pr->supervisor_confirmed = 1;
			$pr->management_confirmed = 0;
		}
		if ($pr->save()) {
			$taxSubject = new TaxSubject;
			$taxSubject->subject_id = (String) Str::uuid();
			$taxSubject->param_id = $request->tax_param;
			$taxSubject->object_id = $pr->payroll_id;
			$taxSubject->type = 'payrolls';
			$taxSubject->save();
			// creating activity log that who created
			$history = new History;
			$history->history_id = (String) Str::uuid();
			$history->object_id = $pr->payroll_id;
			$history->type = 'payroll';
			$history->event = 'create';
			$history->tax_id = $pr->tax_id;
			$history->changes = $request->except(['created_by', 'tax_id']);
			$history->description = 'A payroll of employee: ' . $pr->employee->name_english . ' with Employee No. ' . $pr->employee->employee_num . ' were created by ' . session('admin.full_name');
			$history->save();

			$pr = Payrolls::with(['created_by', 'employee'])->wherePayrollId($pr->payroll_id)->first();
			return response()->json(['status' => 'success', 'data' => $pr, 'msg' => 'Payroll Added Successfully']);
		}
	}

	public function get_payrolls(Request $request) {

		$data = Payrolls::with(['created_by', 'employee'])->whereTaxId($request->tax_id)->latest('id')->get();

		return response()->json(['data' => $data]);

	}

	public function get_payroll(Request $request) {

		$data = Payrolls::with(['employee', 'officer', 'customer', 'created_by', 'tax_subject.parameter'])->wherePayrollId($request->id)->first();

		return response()->json(['data' => $data]);

	}

	public function update_payroll(Request $request) {

		$pr = Payrolls::with('employee')->wherePayrollId($request->payroll_id)->first();
		$differenceArray = [];
		array_where($request->all(), function ($item, $key) use ($pr, &$differenceArray) {
			// dd($item, $key);
			if ($item != $pr[$key]) {

				$differenceArray = Arr::add($differenceArray, $key, ['new_value' => $item, 'old_value' => $pr[$key]]);

			}
		});
		$pr->basic_salary = $request->basic_salary;
		$pr->bonus = $request->bonus;
		$pr->over_time = $request->over_time;
		$pr->commissions = $request->commissions;
		$pr->seniority_payment = $request->seniority_payment;
		$pr->severance_pay = $request->severance_pay;
		$pr->maternity_leave = $request->maternity_leave;
		$pr->paid_annual_leave = $request->paid_annual_leave;
		$pr->food_allowance = $request->food_allowance;
		$pr->transport_allowance = $request->transport_allowance;
		$pr->others = $request->others;
		$pr->deduction_advance = $request->deduction_advance;
		$pr->salary_adjusment = $request->salary_adjusment;
		$pr->remark = $request->remark;
		if ($request->has('additional_fields')) {
			$customfields = $request->additional_fields;
			for ($i = 1; $i <= count($request->additional_fields); $i++) {
				if (($key = array_search(null, $customfields)) !== false) {
					unset($customfields[$key]);
				}
			}

			/*if (count($customfields) > count($pr->additional_fields)) {
				foreach ($customfields as $key => $field) {

				}
			}*/
			$pr->additional_fields = $customfields;

		}
			$pr->save();
			$subject_id = array_first(array_keys($request->tax_param));
			// dd($subject_id);
			$taxSubject = TaxSubject::find($subject_id);
			$taxSubject->param_id = $request->tax_param[$subject_id];
			$taxSubject->save();
		if (count($differenceArray) > 0) {
			$history = new History;
			$history->history_id = (String) Str::uuid();
			$history->object_id = $request->payroll_id;
			$history->type = 'payroll';
			$history->event = 'update';
			$history->tax_id = $pr->tax_id;
			$history->changes = $differenceArray;
			$history->description = 'A payroll of Employee: ' . $pr->employee->name_english . ' with Employee No. ' . $pr->employee->employee_num . ' were updated by ' . session('admin.full_name');
			$history->save();

		}

		return response()->json(['status' => 'success', 'msg' => 'Payroll Updated Successfully']);

	}

	public function add_multiple_employee(Request $request, $id) {

		if ($request->hasFile('file')) {
			$myValueBinder = new MyValueBinder;
			$data = Excel::setValueBinder($myValueBinder)->load($request->file('file'), function ($reader) use ($id) {

			})->get();
			// Getting all results
			$employees = $data->toArray();
			$counter = 0;
			$headers = $data->getHeading();
			$possibleVals = ['nssf_no', 'employee_no', 'name_english', 'name_khmer', 'nationality', 'dob', 'joining_date', 'position', 'sex', 'contract_type', 'spouse', 'children'];
			$possibleValsCount = count($possibleVals);
			$uploadedHeaderCount = count(array_intersect($possibleVals, $headers));
			if ($possibleValsCount != $uploadedHeaderCount) {
				return response()->json(['status' => false, 'msg' => 'upload cannot be processed. <br> please upload file which contain same columns as defined in sample file also uploaded file must contain some data'], 422);
			}
			foreach ($employees as $key => $value) {
				// if (!$value->filter()->isNotEmpty()) {
				if (empty($value)) {
					continue;
				}
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
				$employee->children = $value['children'];
				$result = $employee->save();
				$counter++;
			}
			$totalAddedCount = $data->count();
			return response()->json(['status' => 'success', 'msg' => "$counter new Employee(s) added."]);
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
			$counter = 0;
			foreach ($sales as $key => $value) {
				// if (!$value->filter()->isNotEmpty()) {
				if (empty($value)) {
					continue;
				}
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
					$sale->created_by = $userLoginId;
					$sale->officer_confirmed = 1;
				} else {
					$sale->created_by = $userLoginId;
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
				$counter++;
				$history = new History;
				$history->history_id = (String) Str::uuid();
				$history->object_id = $request->id;
				$history->type = 'sale';
				$history->event = 'create';
				$history->tax_id = $request->tax_id;
				$history->changes = $value;
				$history->description = 'A sale with invoice No : ' . $sale->invoice_num . ' is created by ' . session('admin.type') . ': ' . session('admin.full_name');
				$history->save();

			}
			$totalAddedCount = $data->count();
			return response()->json(['status' => 'success', 'msg' => "$counter new Sale(s) added."]);
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
			$counter = 0;
			foreach ($payrolls as $key => $value) {
				// if (!$value->filter()->isNotEmpty()) {
				if (empty($value)) {
					continue;
				}
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
					$pr->created_by = $userLoginId;
					$pr->officer_confirmed = 1;
				} else {
					$pr->created_by = $userLoginId;
				}
				// $pr->additional_fields = $value['additional_field'];

				$pr->save();
				$counter++;
				// creating activity log that who created
				$history = new History;
				$history->history_id = (String) Str::uuid();
				$history->object_id = $pr->payroll_id;
				$history->type = 'payroll';
				$history->event = 'create';
				$history->tax_id = $pr->tax_id;
				$history->changes = $value;
				$history->description = 'A payroll of employee: ' . $pr->employee->name_english . ' with Employee No. ' . $pr->employee->employee_num . ' were created by ' . session('admin.full_name');
				$history->save();
			}
			$totalAddedCount = $data->count();
			return response()->json(['status' => 'success', 'msg' => "$counter new Payroll(s) added."]);
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
			$counter = 0;
			// Getting all results
			foreach ($purchases as $key => $value) {
				// if (!$value->filter()->isNotEmpty()) {
				if (empty($value)) {

					continue;
				}
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
					$purchase->created_by = $userLoginId;
					$purchase->officer_confirmed = 1;
				} else {
					$purchase->created_by = $userLoginId;
				}
				$purchase->save();
				$counter++;
				$history = new History;
				$history->history_id = (String) Str::uuid();
				$history->object_id = $request->id;
				$history->type = 'purchase';
				$history->event = 'create';
				$history->tax_id = $tax_id;
				$history->changes = $value;
				$history->description = 'A purchase with invoice No : ' . $purchase->invoice_num . ' is created by ' . session('admin.type') . ': ' . session('admin.full_name');
				$history->save();
			}
			$totalAddedCount = $data->count();
			return response()->json(['status' => 'success', 'msg' => "$counter new Purchase(s) added."]);
		}
	}

	public function get_comments(Request $request) {

		$object_types = ['Purchase', 'Sale', 'Payroll'];

		if (!in_array($request->type, $object_types)) {
			return response()->json(['status' => false, 'msg' => 'Invalid object type']);
		}

		$comments = TaxComments::with('member_info')->where('object_id', $request->object_id)
			->whereObjectType($request->type)
			->orderBy('created_at', 'asc')
			->get();

		return response()->json(compact('comments'));
	}
	public function send_comment(Request $request) {
		$comment = new TaxComments;
		$comment->comment_id = (String) Str::uuid();
		$comment->object_id = $request->object_id;
		$comment->object_type = $request->type;
		$comment->member_id = $request->sender;
		$comment->member_type = $request->senderType;
		$comment->comment = $request->comment;
		$comment->save();
		$comments = TaxComments::where('object_id', $request->object_id)->get();
		return response()->json(compact('comments'));
	}
	public function status_updateSPP(Request $request) {

		// dd($request->all());

		$data = array();
		if ($request->type == 'sale') {
			$data = Sales::whereSaleId($request->id)->whereTaxId($request->tax_id)->first();
		}
		if ($request->type == 'purchase') {
			$data = Purchases::wherePurchaseId($request->id)->whereTaxId($request->tax_id)->first();
		}
		if ($request->type == 'payroll') {
			$data = Payrolls::wherePayrollId($request->id)->whereTaxId($request->tax_id)->first();
		}

		if (is_null($data)) {
			return response()->json(['status' => false, 'msg' => 'server not response, please try again or reload page', 'response' => 'undefined']);
		}

		$msg = '';
		$tax = Tax::with('customer')->whereTaxId($request->tax_id)->first();
		if ($data->supervisor_confirmed == 2) {
			return response()->json(['status' => false, 'msg' => 'You cannot change ' . $request->type . ' status, Current ' . $request->type . ' is under supervisor reviewing']);
		}
		if ($data->supervisor_confirmed == 0 || $data->supervisor_confirmed == 3) {
			// 0 = pending, 3 = rejected

			if ($data->officer_confirmed == 1) {
				$data->officer_confirmed = 0;
				$data->save();
				$msg = $request->type . ' submission revoked Successfully';
			} else {
				// $supervisor = Admin::whereManagerId(session('admin.reports_to'))->first();
				$data->supervisor_confirmed = 0; // resumission status changed from rejected to submitted
				$data->officer_confirmed = 1;
				$data->save();
				$msg = $request->type . ' Submitted Successfully';

				$notification = new Notification;
				$notification->transmitted_for = session('admin.reports_to');
				$notification->transmitted_by = session('admin.manager_id');
				$notification->notification = 'new ' . $request->type . ' submission alert';
				$notification->description = 'new ' . $request->type . ' in ' . $tax->title . ' with in company: ' . $tax->customer->name_english . ' has been submitted by officer: ' . session('admin.full_name');
				$notification->click_action = '/' . $request->type . "-detail/" . $request->id;

				if ($notification->save()) {

					$tokens = Admin::where('manager_id', session('admin.reports_to'))->first();
					// 	dd($tokens);
					$url = "https://fcm.googleapis.com//v1/projects/taxportal-d57de/messages:send";
					// 	$token = "your device token";
					$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

					$fields = array(
						// "content_available" => true,
						"to" => $tokens->token,
						'priority' => 'high',
						"data" => array(
							"title" => $notification->notification,
							"body" => $notification->description,
							"icon" => "icon.png",
							"click_action" => $notification->click_action,
						),
						"notification" => array(
							"title" => $notification->notification,
							"body" => $notification->description,
							"icon" => "icon.png",
							"click_action" => $notification->click_action,
						),
					);
					$data_string = json_encode($fields);
					// echo "The Json Data : " . $data_string;
					$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
					$ch = curl_init();
					curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
					curl_setopt($ch, CURLOPT_POST, true);
					curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
					curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
					$result = curl_exec($ch);
					curl_close($ch);
				}
			}
		} else {

			return response()->json(['status' => false, 'msg' => 'Your ' . $request->type . ' status approved by supervisor.', 'response' => $data->officer_confirmed]);
		}

		return response()->json(['status' => true, 'msg' => $msg, 'response' => $data->officer_confirmed]);
	}

	public function status_change_management(Request $request) {

		$data = array();
		if ($request->tax_type == 'sale') {
			$data = Sales::with('customer')->whereSaleId($request->id)->whereTaxId($request->tax_id)->first();
		}
		if ($request->tax_type == 'purchase') {
			$data = Purchases::with('customer')->wherePurchaseId($request->id)->whereTaxId($request->tax_id)->first();
		}
		if ($request->tax_type == 'payroll') {
			$data = Payrolls::with('customer')->wherePayrollId($request->id)->whereTaxId($request->tax_id)->first();
		}

		if (is_null($data)) {
			return response()->json(['status' => false, 'msg' => 'server not response, please try again or reload page', 'response' => 'undefined']);
		}

		$msg = '';
		$tax = Tax::with('customer')->whereTaxId($request->tax_id)->first();
		$tax_type = $request->tax_type;

		if ($request->by == 'supervisor') {

			if ($data->officer_confirmed == 1) {

				if ($data->management_confirmed == 2) {
					return response()->json(['status' => false, 'msg' => 'You cannot change ' . $tax_type . ' status, Current ' . $tax_type . ' is under adminstration review']);
				}

				if ($data->management_confirmed == 0 || $data->management_confirmed == 3) {
					$data->supervisor_confirmed = $request->status;
					$data->save();
					if ($request->status == 1) {
						$admins = Admin::whereIn('manager_id', [$data->customer->manager, session('admin.reports_to')])->orWhere('status', 1)->get();

						foreach ($admins as $key => $admin) {

							$notification = new Notification;
							$notification->transmitted_for = $admin->manager_id;
							$notification->transmitted_by = session('admin.manager_id');
							$notification->notification = 'new ' . $request->tax_type . ' submission alert';
							if ($admin->type == 'Officer') {
								$notification->description = 'your submitted ' . $request->tax_type . ' in ' . $tax->title . ' of company: ' . $tax->customer->name_english . ' has been approved by Supervisor:' . session('admin.full_name');
							} else {
								$notification->description = $supervisor->full_name . ' has submitted ' . $request->tax_type . ' in ' . $tax->title . ' of company: ' . $tax->customer->name_english . ' for Review';

							}
							$notification->click_action = '/' . $request->tax_type . "-detail/" . $request->id;

							if ($notification->save()) {

								$url = "https://fcm.googleapis.com//v1/projects/taxportal-d57de/messages:send";
								// 	$token = "your device token";
								$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

								$fields = array(
									// "content_available" => true,
									"to" => $admin->token,
									'priority' => 'high',
									"data" => array(
										"title" => $notification->notification,
										"body" => $notification->description,
										"icon" => "icon.png",
										"click_action" => $notification->click_action,
									),
									"notification" => array(
										"title" => $notification->notification,
										"body" => $notification->description,
										"icon" => "icon.png",
										"click_action" => $notification->click_action,
									),
								);
								$data_string = json_encode($fields);
								// echo "The Json Data : " . $data_string;
								$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
								$ch = curl_init();
								curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
								curl_setopt($ch, CURLOPT_POST, true);
								curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
								curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
								curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
								$result = curl_exec($ch);
								curl_close($ch);
							}
						}
					} elseif ($request->status == 2) {

						$notification = new Notification;
						$notification->transmitted_for = $data->created_by;
						$notification->transmitted_by = session('admin.manager_id');
						$notification->notification = $request->tax_type . ' review alert';
						$notification->description = 'A ' . $request->tax_type . ' in ' . $tax->title . ' of company: ' . $tax->customer->name_english . ' were marked for review by supervisor: ' . session('admin.full_name');
						$notification->click_action = '/' . $request->tax_type . "-detail/" . $request->id;

						if ($notification->save()) {
							/*$fields = [];
							$headers = [''];*/
							$tokens = Admin::where('manager_id', $notification->transmitted_for)->first();
							// 	dd($tokens);
							$url = "https://fcm.googleapis.com//v1/projects/taxportal-d57de/messages:send";
							// 	$token = "your device token";
							$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

							$fields = array(
								// "content_available" => true,
								"to" => $tokens->token,
								'priority' => 'high',
								"data" => array(
									"title" => $notification->notification,
									"body" => $notification->description,
									"icon" => "icon.png",
									"click_action" => $notification->click_action,
								),
								"notification" => array(
									"title" => $notification->notification,
									"body" => $notification->description,
									"icon" => "icon.png",
									"click_action" => $notification->click_action,
								),
							);
							$data_string = json_encode($fields);
							// echo "The Json Data : " . $data_string;
							$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
							$ch = curl_init();
							curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
							curl_setopt($ch, CURLOPT_POST, true);
							curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
							curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
							curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
							$result = curl_exec($ch);
							curl_close($ch);
						}
					} elseif ($request->status == 3) {

						$notification = new Notification;
						$notification->transmitted_for = $data->created_by;
						$notification->transmitted_by = session('admin.manager_id');
						$notification->notification = $request->tax_type . ' submission revoke alert';
						$notification->description = 'your submitted ' . $request->tax_type . ' in ' . $tax->title . ' of company: ' . $tax->customer->name_english . ' has been revoked by supervisor: ' . session('admin.full_name') . ' please check comments';
						$notification->click_action = '/' . $request->tax_type . "-detail/" . $request->id;

						if ($notification->save()) {
							/*$fields = [];
							$headers = [''];*/
							$tokens = Admin::where('manager_id', $notification->transmitted_for)->first();
							// 	dd($tokens);
							$url = "https://fcm.googleapis.com//v1/projects/taxportal-d57de/messages:send";
							// 	$token = "your device token";
							$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

							$fields = array(
								// "content_available" => true,
								"to" => $tokens->token,
								'priority' => 'high',
								"data" => array(
									"title" => $notification->notification,
									"body" => $notification->description,
									"icon" => "icon.png",
									"click_action" => $notification->click_action,
								),
								"notification" => array(
									"title" => $notification->notification,
									"body" => $notification->description,
									"icon" => "icon.png",
									"click_action" => $notification->click_action,
								),
							);
							$data_string = json_encode($fields);
							// echo "The Json Data : " . $data_string;
							$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
							$ch = curl_init();
							curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
							curl_setopt($ch, CURLOPT_POST, true);
							curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
							curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
							curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
							$result = curl_exec($ch);
							curl_close($ch);
						}
					}
				} else {
					return response()->json(['status' => false, 'msg' => '' . $request->tax_type . ' approved by admin you can not revoke submission until admin revoke it.', 'response' => $data->status]);
				}
			} else {
				return response()->json(['status' => false, 'msg' => '' . $request->tax_type . ' still not completed by officer. please check later.', 'response' => $data->status]);
			}

		} else if ($request->by == 'admin') {
			if ($data->supervisor_confirmed == 2) {
				return response()->json(['status' => false, 'msg' => 'You cannot change ' . $tax_type . ' status, Current ' . $tax_type . ' is under supervisor reviewing']);
			}

			if ($data->supervisor_confirmed == 3) {
				return response()->json(['status' => false, 'msg' => 'You cannot change ' . $tax_type . ' status, Current ' . $tax_type . ' is rejected by supervisor']);
			}

			if ($data->supervisor_confirmed == 1) {
				$data->management_confirmed = $request->status;
				$data->save();
				$supervisor = Admin::where('manager_id', $data->customer->supervisor)->first();
				$admins = Admin::whereIn('manager_id', [$data->customer->supervisor, $supervisor->reports_to])->orWhere('status', 1)->get();
				if ($request->status == 1) {

					foreach ($admins as $key => $admin) {
						if ($admin->manager_id != session('admin.manager_id')) {

							$notification = new Notification;
							$notification->transmitted_for = $admin->manager_id;
							$notification->transmitted_by = session('admin.manager_id');
							$notification->notification = 'new ' . $request->tax_type . ' submission alert';
							if ($admin->manager_id == $supervisor->manager_id) {
								$notification->description = 'your submitted ' . $request->tax_type . ' in ' . $tax->title . ' of company: ' . $tax->customer->name_english . ' has been approved by Admin:' . session('admin.full_name');
							} else {
								$notification->description = $supervisor->full_name . ' submitted ' . $request->tax_type . ' in ' . $tax->title . ' of company: ' . $tax->customer->name_english . ' has been approved by Admin:' . session('admin.full_name');

							}
							$notification->click_action = '/' . $request->tax_type . "-detail/" . $request->id;

							if ($notification->save()) {

								$url = "https://fcm.googleapis.com//v1/projects/taxportal-d57de/messages:send";
								// 	$token = "your device token";
								$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

								$fields = array(
									// "content_available" => true,
									"to" => $admin->token,
									'priority' => 'high',
									"data" => array(
										"title" => $notification->notification,
										"body" => $notification->description,
										"icon" => "icon.png",
										"click_action" => $notification->click_action,
									),
									"notification" => array(
										"title" => $notification->notification,
										"body" => $notification->description,
										"icon" => "icon.png",
										"click_action" => $notification->click_action,
									),
								);
								$data_string = json_encode($fields);
								// echo "The Json Data : " . $data_string;
								$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
								$ch = curl_init();
								curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
								curl_setopt($ch, CURLOPT_POST, true);
								curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
								curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
								curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
								$result = curl_exec($ch);
								curl_close($ch);
							}
						}
					}
				} elseif ($request->status == 2) {

					foreach ($admins as $key => $admin) {
						if ($admin->manager_id != session('admin.manager_id')) {

							$notification = new Notification;
							$notification->transmitted_for = $admin->manager_id;
							$notification->transmitted_by = session('admin.manager_id');
							if ($admin->manager_id == $supervisor->manager_id) {
								$notification->notification = $request->tax_type . ' review alert';
								$notification->description = 'A ' . $request->tax_type . ' in ' . $tax->title . ' of company: ' . $tax->customer->name_english . ' were marked for review by Admin: ' . session('admin.full_name');
							} else {
								$notification->notification = $request->tax_type . ' review alert';
								$notification->description = $supervisor->full_name . ' submitted ' . $request->tax_type . ' in ' . $tax->title . ' of company: ' . $tax->customer->name_english . ' has been approved by Admin:' . session('admin.full_name');

							}
							$notification->click_action = '/' . $request->tax_type . "-detail/" . $request->id;

							if ($notification->save()) {

								$url = "https://fcm.googleapis.com//v1/projects/taxportal-d57de/messages:send";
								// 	$token = "your device token";
								$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

								$fields = array(
									// "content_available" => true,
									"to" => $admin->token,
									'priority' => 'high',
									"data" => array(
										"title" => $notification->notification,
										"body" => $notification->description,
										"icon" => "icon.png",
										"click_action" => $notification->click_action,
									),
									"notification" => array(
										"title" => $notification->notification,
										"body" => $notification->description,
										"icon" => "icon.png",
										"click_action" => $notification->click_action,
									),
								);
								$data_string = json_encode($fields);
								// echo "The Json Data : " . $data_string;
								$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
								$ch = curl_init();
								curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
								curl_setopt($ch, CURLOPT_POST, true);
								curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
								curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
								curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
								$result = curl_exec($ch);
								curl_close($ch);
							}
						}
					}
				} elseif ($request->status == 3) {

					foreach ($admins as $key => $admin) {
						if ($admin->manager_id != session('admin.manager_id')) {

							$notification = new Notification;
							$notification->transmitted_for = $admin->manager_id;
							$notification->transmitted_by = session('admin.manager_id');
							if ($admin->manager_id == $supervisor->manager_id) {
								$notification->notification = $request->tax_type . ' submission revoke alert';
								$notification->description = 'your submitted ' . $request->tax_type . ' in ' . $tax->title . ' of company: ' . $tax->customer->name_english . ' has been revoked by Admin: ' . session('admin.full_name') . ' please check comments';
							} else {
								$notification->notification = $request->tax_type . ' submission revoke alert';
								$notification->description = $supervisor->full_name . '\'s submitted ' . $request->tax_type . ' in ' . $tax->title . ' of company: ' . $tax->customer->name_english . ' has been revoked by Admin: ' . session('admin.full_name') . ' please check comments';

							}
							$notification->click_action = '/' . $request->tax_type . "-detail/" . $request->id;

							if ($notification->save()) {

								$url = "https://fcm.googleapis.com//v1/projects/taxportal-d57de/messages:send";
								// 	$token = "your device token";
								$serverKey = 'AAAAgeVzr0Y:APA91bEmWlwJYVm0AvnjccKdnomUmn_zMQ9_tQIpO6VUMp0hP-VdvtrrGxrPoCdTd2fzwIPp-kD14rrpCsuiVC0pKKEb_EoP4kZWfUhMH9HYseeM-NX2ehhREmQwmBZOMBc2ZF--79Wp';

								$fields = array(
									// "content_available" => true,
									"to" => $admin->token,
									'priority' => 'high',
									"data" => array(
										"title" => $notification->notification,
										"body" => $notification->description,
										"icon" => "icon.png",
										"click_action" => $notification->click_action,
									),
									"notification" => array(
										"title" => $notification->notification,
										"body" => $notification->description,
										"icon" => "icon.png",
										"click_action" => $notification->click_action,
									),
								);
								$data_string = json_encode($fields);
								// echo "The Json Data : " . $data_string;
								$headers = array('Authorization: key=' . $serverKey, 'Content-Type: application/json');
								$ch = curl_init();
								curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
								curl_setopt($ch, CURLOPT_POST, true);
								curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
								curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
								curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
								$result = curl_exec($ch);
								curl_close($ch);
							}
						}
					}
				}
			} else {
				return response()->json(['status' => false, 'msg' => '' . $request->tax_type . ' still not approved by Supervisor. please check later.', 'response' => $data->status]);
			}
		}

		return response()->json(['status' => true, 'msg' => 'Changes successfully', 'response' => $request->status]);
	}

	public function status_update_tax(Request $request) {
		$data = array();

		//count of total sales , purchases , payrolls in particular tax collection
		$totalSales = Sales::whereTaxId($request->id)->count();
		$totalPurchases = Purchases::whereTaxId($request->id)->count();
		$totalPayrolls = Payrolls::whereTaxId($request->id)->count();
		$totalTaxChilds = $totalSales + $totalPurchases + $totalPayrolls;

		//count of total approved sales , purchases , payrolls by both supervisor and admin
		$totalApprovedSale = Sales::whereTaxId($request->id)->whereSupervisorConfirmed(2)->whereManagementConfirmed(2)->count();
		$totalApprovedPurchase = Purchases::whereTaxId($request->id)->whereSupervisorConfirmed(2)->whereManagementConfirmed(2)->count();
		$totalApprovedPayrolls = Purchases::whereTaxId($request->id)->whereSupervisorConfirmed(2)->whereManagementConfirmed(2)->count();
		$totalTaxApprovedChilds = $totalApprovedSale + $totalApprovedPurchase + $totalApprovedPayrolls;

		$tax = Tax::where('tax_id', $request->id)->first();
		if ($totalTaxApprovedChilds >= $totalTaxChilds && $totalTaxChilds != 0) {
			if ($request->status <= 1 && $tax->status > 1) {
				$tax->rivision += $tax->rivision;
			}
			$tax->status = $request->status;
			$tax->save();
			return response()->json(['status' => true, 'msg' => 'tax has been completed successfully', 'tax' => $tax]);

		} else {
			return response()->json(['status' => false, 'msg' => 'all sales, purchases payrolls should be approved to mark as completed ', 'tax' => $tax]);
		}
	}

	public function change_password(Request $request) {

		$id = $request->id;
		$current_password = $request->current_password;
		$new_password = $request->new_password;
		$confirm_password = $request->confirm_password;

		if ($new_password != $confirm_password) {
			return response()->json(['status' => false, 'msg' => 'Confirm password mis-match']);
		}

		$getUser = Supervisor::where('manager_id', $id)->first();

		if (!$check = Hash::check($current_password, $getUser->password)) {
			return response()->json(['status' => false, 'msg' => 'invalid current password']);
		} else {
			$getUser->password = bcrypt($new_password);
			$getUser->save();
			return response()->json(['status' => true, 'msg' => 'Password changed successfully']);
		}

	}
	public function add_parameter(Request $request) {
		if (Parameter::where('tax_param_id', $request->tax_code . $request->tax_id)->where('tax_type', $request->tax_type)->where('status', 1)->exists()) {
			return response()->json(['status' => 'error', 'msg' => 'You cannot add new Tax Parameter until previous added parameter has not been expired']);
		}
		$tax = new Parameter;
		$tax->tax_param_id = $request->tax_code . $request->tax_id;
		$tax->khmer_description = $request->description_khmer;
		$tax->english_description = $request->description_english;
		$tax->tax_code = $request->tax_code;
		$tax->rate = $request->rate;
		$tax->base_tax = $request->base_tax;
		$tax->tax_type = $request->type;
		$tax->effective_date = $request->effective_date;
		$tax->amount_min = $request->amount_min;
		$tax->amount_max = $request->amount_max;
		$tax->tax_bracket = $request->tax_bracket;
		$tax->remarks = $request->remarks;
		$save = $tax->save();
		if ($save) {
			return response()->json(['status' => 'success', 'msg' => 'Parameter Added Successfully'], 200);
		}
	}

	public function update_parameter(Request $request) {
		if (Parameter::where('tax_param_id', $request->tax_code . $request->tax_id)->where('id', '!=', $request->identifier)->where('tax_type', $request->tax_type)->exists()) {
			return response()->json(['status' => 'error', 'msg' => 'You cannot add new Tax Parameter until previous added parameter has not been expired']);
		}
		$parameter = Parameter::find($request->identifier);
		$parameter->tax_param_id = $request->tax_code . $request->tax_id;
		$parameter->khmer_description = $request->description_khmer;
		$parameter->english_description = $request->description_english;
		$parameter->tax_code = $request->tax_code;
		$parameter->rate = $request->rate;
		$parameter->base_tax = $request->base_tax;
		$parameter->tax_type = $request->type;
		$parameter->effective_date = $request->effective_date;
		$parameter->amount_min = $request->amount_min;
		$parameter->amount_max = $request->amount_max;
		$parameter->tax_bracket = $request->tax_bracket;
		$parameter->remarks = $request->remarks;
		$save = $parameter->save();
		if ($save) {
			return response()->json(['status' => 'success', 'msg' => 'Parameter updated successfully', 'parameter' => $parameter], 200);
		}

	}

	public function vat_one() {
		// return view('pdf.vat-1');
		$data = array();
		$pdf = PDF::loadView('pdf.vat-1', $data);
		$customPaper = array(0, 0, 800, 1300);
		$pdf->setPaper($customPaper);
		return $pdf->stream('VAT-1.pdf');
	}

	public function ppt_one() {
		$data = array();
		$pdf = PDF::loadView('pdf.ppt-1', $data);
		$customPaper = array(0, 0, 800, 1300);
		$pdf->setPaper($customPaper);
		return $pdf->stream('PPT-1.pdf');
	}

	public function forgot_password(Request $request) {

		$data = Admin::whereEmail($request->email)->first();

		if (empty($data)) {
			return response()->json(['status' => 'error', 'msg' => 'Email does not exist'], 200);
		}

		$code = substr(time(), 5, -1);

		PasswordReset::whereEmail($request->email)->delete();
		$pr = new PasswordReset();
		$pr->email = $request->email;
		$pr->token = $code;
		$save = $pr->save();

		if ($save) {
			Mail::send('mail.passwordreset', ['user' => $data, 'code' => $code], function ($message) use ($data) {
				$message->
					to($data['email'], $data['first_name'] . ' ' . $data['last_name'])->
					subject('Tax Management | Automatic Generated Email: Password Reset Code');
			});
		}

		return response()->json(['status' => 'success', 'msg' => 'Verification code sent to provided email.'], 200);
	}

	public function verify_code_change_password(Request $request) {

		$pr = PasswordReset::whereEmail($request->email)->whereToken($request->code)->first();
		if (empty($pr)) {
			return response()->json(['status' => false, 'msg' => 'Invalid verification code.'], 200);
		}

		$data = Admin::whereEmail($request->email)->first();

		if (empty($data)) {
			return response()->json(['status' => false, 'msg' => 'un authorized action'], 200);
		}

		$data->password = bcrypt($request->password);
		$data->save();

		return response()->json(['status' => true, 'msg' => 'Password changed successfully'], 200);
	}

	public function search_data(Request $request) {

		$query = $request['query'];
		$searchResult = array();
		$loginUser = Session::get('admin');
		$perPage = 10;
		$offset = ($request->page - 1) * $perPage;
		$type = '';
		if ($loginUser->type == "Super Admin" || $loginUser->type == "Admin") {
			$type = 'admin';
		} elseif ($loginUser->type == "Supervisor") {
			$type = 'supervisor';
		} elseif ($loginUser->type == "Officer") {
			$type = 'officer';
		}

		if ($type == 'supervisor') {

			$taxCustomersCount = TaxCustomers::with(['owner'])->where('supervisor', $loginUser->manager_id)
				->where(function ($q) use ($query) {
					$q->where('name_english', 'like', '%' . $query . '%')
						->orWhere('name_khmer', 'like', '%' . $query . '%')
						->orWhere('tax_card_num', 'like', '%' . $query . '%')
						->orWhere('tin_no', 'like', '%' . $query . '%')
						->orWhere('address', 'like', '%' . $query . '%')
						->orWhere('street', 'like', '%' . $query . '%')
						->orWhere('group', 'like', '%' . $query . '%')
						->orWhere('sangkat', 'like', '%' . $query . '%')
						->orWhere('district', 'like', '%' . $query . '%')
						->orWhere('province', 'like', '%' . $query . '%')
						->orWhere('muncipality', 'like', '%' . $query . '%')
						->orWhere('telephone', 'like', '%' . $query . '%')
						->orWhere('industry', 'like', '%' . $query . '%')
						->orWhere('incorporation_date', 'like', '%' . $query . '%')
						->orWhere('tax_duration', 'like', '%' . $query . '%');
				})
				->count();

			$taxCustomers = TaxCustomers::with(['owner'])->where('supervisor', $loginUser->manager_id)
				->where(function ($q) use ($query) {
					$q->where('name_english', 'like', '%' . $query . '%')
						->orWhere('name_khmer', 'like', '%' . $query . '%')
						->orWhere('tax_card_num', 'like', '%' . $query . '%')
						->orWhere('tin_no', 'like', '%' . $query . '%')
						->orWhere('address', 'like', '%' . $query . '%')
						->orWhere('street', 'like', '%' . $query . '%')
						->orWhere('group', 'like', '%' . $query . '%')
						->orWhere('sangkat', 'like', '%' . $query . '%')
						->orWhere('district', 'like', '%' . $query . '%')
						->orWhere('province', 'like', '%' . $query . '%')
						->orWhere('muncipality', 'like', '%' . $query . '%')
						->orWhere('telephone', 'like', '%' . $query . '%')
						->orWhere('industry', 'like', '%' . $query . '%')
						->orWhere('incorporation_date', 'like', '%' . $query . '%')
						->orWhere('tax_duration', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();

			$taxCount = Tax::where('supervisor_id', $loginUser->manager_id)
				->where(function ($q) use ($query) {
					$q->where('title', 'like', '%' . $query . '%')
						->orWhere('description', 'like', '%' . $query . '%')
						->orWhere('duration', 'like', '%' . $query . '%')
						->orWhere('type', 'like', '%' . $query . '%')
						->orWhere('tax_code', 'like', '%' . $query . '%')
						->orWhere('notes', 'like', '%' . $query . '%');
				})
				->count();
			$tax = Tax::where('supervisor_id', $loginUser->manager_id)
				->where(function ($q) use ($query) {
					$q->where('title', 'like', '%' . $query . '%')
						->orWhere('description', 'like', '%' . $query . '%')
						->orWhere('duration', 'like', '%' . $query . '%')
						->orWhere('type', 'like', '%' . $query . '%')
						->orWhere('tax_code', 'like', '%' . $query . '%')
						->orWhere('notes', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();

			$taxManagersCount = Admin::where('reports_to', $loginUser->manager_id)
				->where(function ($q) use ($query) {
					$q->where('first_name', 'like', '%' . $query . '%')
						->orWhere('last_name', 'like', '%' . $query . '%')
						->orWhere('gender', 'like', '%' . $query . '%')
						->orWhere('email', 'like', '%' . $query . '%')
						->orWhere('phone', 'like', '%' . $query . '%')
						->orWhere('address', 'like', '%' . $query . '%')
						->orWhere('state', 'like', '%' . $query . '%')
						->orWhere('city', 'like', '%' . $query . '%')
						->orWhere('zip_code', 'like', '%' . $query . '%');
				})
				->count();

			$taxManagers = Admin::where('reports_to', $loginUser->manager_id)
				->where(function ($q) use ($query) {
					$q->where('first_name', 'like', '%' . $query . '%')
						->orWhere('last_name', 'like', '%' . $query . '%')
						->orWhere('gender', 'like', '%' . $query . '%')
						->orWhere('email', 'like', '%' . $query . '%')
						->orWhere('phone', 'like', '%' . $query . '%')
						->orWhere('address', 'like', '%' . $query . '%')
						->orWhere('state', 'like', '%' . $query . '%')
						->orWhere('city', 'like', '%' . $query . '%')
						->orWhere('zip_code', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();

			$customerEmployeeCount = CustomerEmployee::whereRaw('tax_customer_id IN (select customer_id from tax_customers where supervisor = ?)', ['supervisor' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('nssf_num', 'like', '%' . $query . '%')
						->orWhere('employee_num', 'like', '%' . $query . '%')
						->orWhere('name_english', 'like', '%' . $query . '%')
						->orWhere('name_khmer', 'like', '%' . $query . '%')
						->orWhere('nationality', 'like', '%' . $query . '%')
						->orWhere('dob', 'like', '%' . $query . '%')
						->orWhere('joining_date', 'like', '%' . $query . '%')
						->orWhere('position', 'like', '%' . $query . '%')
						->orWhere('sex', 'like', '%' . $query . '%')
						->orWhere('contract_type', 'like', '%' . $query . '%')
						->orWhere('spouse', 'like', '%' . $query . '%');
				})
				->count();

			$customerEmployee = CustomerEmployee::whereRaw('tax_customer_id IN (select customer_id from tax_customers where supervisor = ?)', ['supervisor' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('nssf_num', 'like', '%' . $query . '%')
						->orWhere('employee_num', 'like', '%' . $query . '%')
						->orWhere('name_english', 'like', '%' . $query . '%')
						->orWhere('name_khmer', 'like', '%' . $query . '%')
						->orWhere('nationality', 'like', '%' . $query . '%')
						->orWhere('dob', 'like', '%' . $query . '%')
						->orWhere('joining_date', 'like', '%' . $query . '%')
						->orWhere('position', 'like', '%' . $query . '%')
						->orWhere('sex', 'like', '%' . $query . '%')
						->orWhere('contract_type', 'like', '%' . $query . '%')
						->orWhere('spouse', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();

			$salesCount = Sales::whereRaw('customer_id IN (select customer_id from tax_customers where supervisor = ?)', ['supervisor' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('account_code', 'like', '%' . $query . '%')
						->orWhere('account_description', 'like', '%' . $query . '%')
						->orWhere('accounting_reference', 'like', '%' . $query . '%')
						->orWhere('signature_date', 'like', '%' . $query . '%')
						->orWhere('branch_name', 'like', '%' . $query . '%')
						->orWhere('tax_period', 'like', '%' . $query . '%')
						->orWhere('invoice_date', 'like', '%' . $query . '%')
						->orWhere('invoice_num', 'like', '%' . $query . '%')
						->orWhere('description', 'like', '%' . $query . '%')
						->orWhere('quantity', 'like', '%' . $query . '%')
						->orWhere('non_taxable_sales', 'like', '%' . $query . '%')
						->orWhere('vat', 'like', '%' . $query . '%')
						->orWhere('taxable_person_sales', 'like', '%' . $query . '%')
						->orWhere('taxable_person_vat', 'like', '%' . $query . '%')
						->orWhere('cust_sales', 'like', '%' . $query . '%')
						->orWhere('cust_sales_vat', 'like', '%' . $query . '%')
						->orWhere('total_taxable_value', 'like', '%' . $query . '%')
						->orWhere('taxes_subject', 'like', '%' . $query . '%')
						->orWhere('comments', 'like', '%' . $query . '%')
						->orWhere('client_response', 'like', '%' . $query . '%')
						->orWhere('top_comments', 'like', '%' . $query . '%')
						->orWhere('client_name', 'like', '%' . $query . '%')
						->orWhere('client_tin', 'like', '%' . $query . '%');
				})
				->count();

			$sales = Sales::whereRaw('customer_id IN (select customer_id from tax_customers where supervisor = ?)', ['supervisor' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('account_code', 'like', '%' . $query . '%')
						->orWhere('account_description', 'like', '%' . $query . '%')
						->orWhere('accounting_reference', 'like', '%' . $query . '%')
						->orWhere('signature_date', 'like', '%' . $query . '%')
						->orWhere('branch_name', 'like', '%' . $query . '%')
						->orWhere('tax_period', 'like', '%' . $query . '%')
						->orWhere('invoice_date', 'like', '%' . $query . '%')
						->orWhere('invoice_num', 'like', '%' . $query . '%')
						->orWhere('description', 'like', '%' . $query . '%')
						->orWhere('quantity', 'like', '%' . $query . '%')
						->orWhere('non_taxable_sales', 'like', '%' . $query . '%')
						->orWhere('vat', 'like', '%' . $query . '%')
						->orWhere('taxable_person_sales', 'like', '%' . $query . '%')
						->orWhere('taxable_person_vat', 'like', '%' . $query . '%')
						->orWhere('cust_sales', 'like', '%' . $query . '%')
						->orWhere('cust_sales_vat', 'like', '%' . $query . '%')
						->orWhere('total_taxable_value', 'like', '%' . $query . '%')
						->orWhere('taxes_subject', 'like', '%' . $query . '%')
						->orWhere('comments', 'like', '%' . $query . '%')
						->orWhere('client_response', 'like', '%' . $query . '%')
						->orWhere('top_comments', 'like', '%' . $query . '%')
						->orWhere('client_name', 'like', '%' . $query . '%')
						->orWhere('client_tin', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();

			$purchasesCount = Purchases::whereRaw('customer_id IN (select customer_id from tax_customers where supervisor = ?)', ['supervisor' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('branch_name', 'like', '%' . $query . '%')
						->orWhere('tax_period', 'like', '%' . $query . '%')
						->orWhere('invoice_date', 'like', '%' . $query . '%')
						->orWhere('invoice_num', 'like', '%' . $query . '%')
						->orWhere('description', 'like', '%' . $query . '%')
						->orWhere('quantity', 'like', '%' . $query . '%')
						->orWhere('local_purchase_tax_val', 'like', '%' . $query . '%')
						->orWhere('local_purchase_vat', 'like', '%' . $query . '%')
						->orWhere('imports_taxable_val', 'like', '%' . $query . '%')
						->orWhere('imports_vat', 'like', '%' . $query . '%')
						->orWhere('total_vat', 'like', '%' . $query . '%')
						->orWhere('subject', 'like', '%' . $query . '%')
						->orWhere('comments', 'like', '%' . $query . '%')
						->orWhere('client_response', 'like', '%' . $query . '%')
						->orWhere('top_comments', 'like', '%' . $query . '%')
						->orWhere('client_responses', 'like', '%' . $query . '%')
						->orWhere('non_taxable_purchases', 'like', '%' . $query . '%')
						->orWhere('supplier', 'like', '%' . $query . '%')
						->orWhere('vat_tin', 'like', '%' . $query . '%');
				})
				->count();

			$purchases = Purchases::whereRaw('customer_id IN (select customer_id from tax_customers where supervisor = ?)', ['supervisor' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('branch_name', 'like', '%' . $query . '%')
						->orWhere('tax_period', 'like', '%' . $query . '%')
						->orWhere('invoice_date', 'like', '%' . $query . '%')
						->orWhere('invoice_num', 'like', '%' . $query . '%')
						->orWhere('description', 'like', '%' . $query . '%')
						->orWhere('quantity', 'like', '%' . $query . '%')
						->orWhere('local_purchase_tax_val', 'like', '%' . $query . '%')
						->orWhere('local_purchase_vat', 'like', '%' . $query . '%')
						->orWhere('imports_taxable_val', 'like', '%' . $query . '%')
						->orWhere('imports_vat', 'like', '%' . $query . '%')
						->orWhere('total_vat', 'like', '%' . $query . '%')
						->orWhere('subject', 'like', '%' . $query . '%')
						->orWhere('comments', 'like', '%' . $query . '%')
						->orWhere('client_response', 'like', '%' . $query . '%')
						->orWhere('top_comments', 'like', '%' . $query . '%')
						->orWhere('client_responses', 'like', '%' . $query . '%')
						->orWhere('non_taxable_purchases', 'like', '%' . $query . '%')
						->orWhere('supplier', 'like', '%' . $query . '%')
						->orWhere('vat_tin', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();

			$payrollsCount = Payrolls::whereRaw('employee_id IN (select employee_id from customers_employees where  tax_customer_id IN (select customer_id from tax_customers where supervisor = ? ))', ['supervisor' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('basic_salary', 'like', '%' . $query . '%')
						->orWhere('bonus', 'like', '%' . $query . '%')
						->orWhere('over_time', 'like', '%' . $query . '%')
						->orWhere('commissions', 'like', '%' . $query . '%')
						->orWhere('seniority_payment', 'like', '%' . $query . '%')
						->orWhere('severance_pay', 'like', '%' . $query . '%')
						->orWhere('maternity_leave', 'like', '%' . $query . '%')
						->orWhere('paid_annual_leave', 'like', '%' . $query . '%')
						->orWhere('food_allowance', 'like', '%' . $query . '%')
						->orWhere('transport_allowance', 'like', '%' . $query . '%')
						->orWhere('others', 'like', '%' . $query . '%')
						->orWhere('deduction_advance', 'like', '%' . $query . '%')
						->orWhere('salary_adjusment', 'like', '%' . $query . '%')
						->orWhere('remark', 'like', '%' . $query . '%');
				})
				->count();

			$payrolls = Payrolls::whereRaw('employee_id IN (select employee_id from customers_employees where  tax_customer_id IN (select customer_id from tax_customers where supervisor = ? ))', ['supervisor' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('basic_salary', 'like', '%' . $query . '%')
						->orWhere('bonus', 'like', '%' . $query . '%')
						->orWhere('over_time', 'like', '%' . $query . '%')
						->orWhere('commissions', 'like', '%' . $query . '%')
						->orWhere('seniority_payment', 'like', '%' . $query . '%')
						->orWhere('severance_pay', 'like', '%' . $query . '%')
						->orWhere('maternity_leave', 'like', '%' . $query . '%')
						->orWhere('paid_annual_leave', 'like', '%' . $query . '%')
						->orWhere('food_allowance', 'like', '%' . $query . '%')
						->orWhere('transport_allowance', 'like', '%' . $query . '%')
						->orWhere('others', 'like', '%' . $query . '%')
						->orWhere('deduction_advance', 'like', '%' . $query . '%')
						->orWhere('salary_adjusment', 'like', '%' . $query . '%')
						->orWhere('remark', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();
		}

		if ($type == 'officer') {

			$taxCustomersCount = TaxCustomers::with(['owner'])->where('manager', $loginUser->manager_id)
				->where(function ($q) use ($query) {
					$q->where('name_english', 'like', '%' . $query . '%')
						->orWhere('name_khmer', 'like', '%' . $query . '%')
						->orWhere('tax_card_num', 'like', '%' . $query . '%')
						->orWhere('tin_no', 'like', '%' . $query . '%')
						->orWhere('address', 'like', '%' . $query . '%')
						->orWhere('street', 'like', '%' . $query . '%')
						->orWhere('group', 'like', '%' . $query . '%')
						->orWhere('sangkat', 'like', '%' . $query . '%')
						->orWhere('district', 'like', '%' . $query . '%')
						->orWhere('province', 'like', '%' . $query . '%')
						->orWhere('muncipality', 'like', '%' . $query . '%')
						->orWhere('telephone', 'like', '%' . $query . '%')
						->orWhere('industry', 'like', '%' . $query . '%')
						->orWhere('incorporation_date', 'like', '%' . $query . '%')
						->orWhere('tax_duration', 'like', '%' . $query . '%');
				})
				->count();
			$taxCustomers = TaxCustomers::with(['owner'])->where('manager', $loginUser->manager_id)
				->where(function ($q) use ($query) {
					$q->where('name_english', 'like', '%' . $query . '%')
						->orWhere('name_khmer', 'like', '%' . $query . '%')
						->orWhere('tax_card_num', 'like', '%' . $query . '%')
						->orWhere('tin_no', 'like', '%' . $query . '%')
						->orWhere('address', 'like', '%' . $query . '%')
						->orWhere('street', 'like', '%' . $query . '%')
						->orWhere('group', 'like', '%' . $query . '%')
						->orWhere('sangkat', 'like', '%' . $query . '%')
						->orWhere('district', 'like', '%' . $query . '%')
						->orWhere('province', 'like', '%' . $query . '%')
						->orWhere('muncipality', 'like', '%' . $query . '%')
						->orWhere('telephone', 'like', '%' . $query . '%')
						->orWhere('industry', 'like', '%' . $query . '%')
						->orWhere('incorporation_date', 'like', '%' . $query . '%')
						->orWhere('tax_duration', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();

			$taxCount = Tax::whereRaw('customer_id IN (select customer_id from tax_customers where manager = ?)', ['manager' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('title', 'like', '%' . $query . '%')
						->orWhere('description', 'like', '%' . $query . '%')
						->orWhere('duration', 'like', '%' . $query . '%')
						->orWhere('type', 'like', '%' . $query . '%')
						->orWhere('tax_code', 'like', '%' . $query . '%')
						->orWhere('notes', 'like', '%' . $query . '%');
				})
				->count();

			$tax = Tax::whereRaw('customer_id IN (select customer_id from tax_customers where manager = ?)', ['manager' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('title', 'like', '%' . $query . '%')
						->orWhere('description', 'like', '%' . $query . '%')
						->orWhere('duration', 'like', '%' . $query . '%')
						->orWhere('type', 'like', '%' . $query . '%')
						->orWhere('tax_code', 'like', '%' . $query . '%')
						->orWhere('notes', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();

			$taxManagersCount = Supervisor::where('manager_id', $loginUser->manager_id)
				->where(function ($q) use ($query) {
					$q->where('first_name', 'like', '%' . $query . '%')
						->orWhere('last_name', 'like', '%' . $query . '%')
						->orWhere('gender', 'like', '%' . $query . '%')
						->orWhere('email', 'like', '%' . $query . '%')
						->orWhere('phone', 'like', '%' . $query . '%')
						->orWhere('address', 'like', '%' . $query . '%')
						->orWhere('state', 'like', '%' . $query . '%')
						->orWhere('city', 'like', '%' . $query . '%')
						->orWhere('zip_code', 'like', '%' . $query . '%');
				})
				->count();

			$taxManagers = Supervisor::where('manager_id', $loginUser->manager_id)
				->where(function ($q) use ($query) {
					$q->where('first_name', 'like', '%' . $query . '%')
						->orWhere('last_name', 'like', '%' . $query . '%')
						->orWhere('gender', 'like', '%' . $query . '%')
						->orWhere('email', 'like', '%' . $query . '%')
						->orWhere('phone', 'like', '%' . $query . '%')
						->orWhere('address', 'like', '%' . $query . '%')
						->orWhere('state', 'like', '%' . $query . '%')
						->orWhere('city', 'like', '%' . $query . '%')
						->orWhere('zip_code', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();

			$customerEmployeeCount = CustomerEmployee::whereRaw('tax_customer_id IN (select customer_id from tax_customers where manager = ?)', ['manager' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('nssf_num', 'like', '%' . $query . '%')
						->orWhere('employee_num', 'like', '%' . $query . '%')
						->orWhere('name_english', 'like', '%' . $query . '%')
						->orWhere('name_khmer', 'like', '%' . $query . '%')
						->orWhere('nationality', 'like', '%' . $query . '%')
						->orWhere('dob', 'like', '%' . $query . '%')
						->orWhere('joining_date', 'like', '%' . $query . '%')
						->orWhere('position', 'like', '%' . $query . '%')
						->orWhere('sex', 'like', '%' . $query . '%')
						->orWhere('contract_type', 'like', '%' . $query . '%')
						->orWhere('spouse', 'like', '%' . $query . '%');
				})
				->count();

			$customerEmployee = CustomerEmployee::whereRaw('tax_customer_id IN (select customer_id from tax_customers where manager = ?)', ['manager' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('nssf_num', 'like', '%' . $query . '%')
						->orWhere('employee_num', 'like', '%' . $query . '%')
						->orWhere('name_english', 'like', '%' . $query . '%')
						->orWhere('name_khmer', 'like', '%' . $query . '%')
						->orWhere('nationality', 'like', '%' . $query . '%')
						->orWhere('dob', 'like', '%' . $query . '%')
						->orWhere('joining_date', 'like', '%' . $query . '%')
						->orWhere('position', 'like', '%' . $query . '%')
						->orWhere('sex', 'like', '%' . $query . '%')
						->orWhere('contract_type', 'like', '%' . $query . '%')
						->orWhere('spouse', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();

			$salesCount = Sales::whereRaw('customer_id IN (select customer_id from tax_customers where manager = ?)', ['manager' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('account_code', 'like', '%' . $query . '%')
						->orWhere('account_description', 'like', '%' . $query . '%')
						->orWhere('accounting_reference', 'like', '%' . $query . '%')
						->orWhere('signature_date', 'like', '%' . $query . '%')
						->orWhere('branch_name', 'like', '%' . $query . '%')
						->orWhere('tax_period', 'like', '%' . $query . '%')
						->orWhere('invoice_date', 'like', '%' . $query . '%')
						->orWhere('invoice_num', 'like', '%' . $query . '%')
						->orWhere('description', 'like', '%' . $query . '%')
						->orWhere('quantity', 'like', '%' . $query . '%')
						->orWhere('non_taxable_sales', 'like', '%' . $query . '%')
						->orWhere('vat', 'like', '%' . $query . '%')
						->orWhere('taxable_person_sales', 'like', '%' . $query . '%')
						->orWhere('taxable_person_vat', 'like', '%' . $query . '%')
						->orWhere('cust_sales', 'like', '%' . $query . '%')
						->orWhere('cust_sales_vat', 'like', '%' . $query . '%')
						->orWhere('total_taxable_value', 'like', '%' . $query . '%')
						->orWhere('taxes_subject', 'like', '%' . $query . '%')
						->orWhere('comments', 'like', '%' . $query . '%')
						->orWhere('client_response', 'like', '%' . $query . '%')
						->orWhere('top_comments', 'like', '%' . $query . '%')
						->orWhere('client_name', 'like', '%' . $query . '%')
						->orWhere('client_tin', 'like', '%' . $query . '%');
				})
				->count();

			$sales = Sales::whereRaw('customer_id IN (select customer_id from tax_customers where manager = ?)', ['manager' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('account_code', 'like', '%' . $query . '%')
						->orWhere('account_description', 'like', '%' . $query . '%')
						->orWhere('accounting_reference', 'like', '%' . $query . '%')
						->orWhere('signature_date', 'like', '%' . $query . '%')
						->orWhere('branch_name', 'like', '%' . $query . '%')
						->orWhere('tax_period', 'like', '%' . $query . '%')
						->orWhere('invoice_date', 'like', '%' . $query . '%')
						->orWhere('invoice_num', 'like', '%' . $query . '%')
						->orWhere('description', 'like', '%' . $query . '%')
						->orWhere('quantity', 'like', '%' . $query . '%')
						->orWhere('non_taxable_sales', 'like', '%' . $query . '%')
						->orWhere('vat', 'like', '%' . $query . '%')
						->orWhere('taxable_person_sales', 'like', '%' . $query . '%')
						->orWhere('taxable_person_vat', 'like', '%' . $query . '%')
						->orWhere('cust_sales', 'like', '%' . $query . '%')
						->orWhere('cust_sales_vat', 'like', '%' . $query . '%')
						->orWhere('total_taxable_value', 'like', '%' . $query . '%')
						->orWhere('taxes_subject', 'like', '%' . $query . '%')
						->orWhere('comments', 'like', '%' . $query . '%')
						->orWhere('client_response', 'like', '%' . $query . '%')
						->orWhere('top_comments', 'like', '%' . $query . '%')
						->orWhere('client_name', 'like', '%' . $query . '%')
						->orWhere('client_tin', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();

			$purchasesCount = Purchases::whereRaw('customer_id IN (select customer_id from tax_customers where manager = ?)', ['manager' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('branch_name', 'like', '%' . $query . '%')
						->orWhere('tax_period', 'like', '%' . $query . '%')
						->orWhere('invoice_date', 'like', '%' . $query . '%')
						->orWhere('invoice_num', 'like', '%' . $query . '%')
						->orWhere('description', 'like', '%' . $query . '%')
						->orWhere('quantity', 'like', '%' . $query . '%')
						->orWhere('local_purchase_tax_val', 'like', '%' . $query . '%')
						->orWhere('local_purchase_vat', 'like', '%' . $query . '%')
						->orWhere('imports_taxable_val', 'like', '%' . $query . '%')
						->orWhere('imports_vat', 'like', '%' . $query . '%')
						->orWhere('total_vat', 'like', '%' . $query . '%')
						->orWhere('subject', 'like', '%' . $query . '%')
						->orWhere('comments', 'like', '%' . $query . '%')
						->orWhere('client_response', 'like', '%' . $query . '%')
						->orWhere('top_comments', 'like', '%' . $query . '%')
						->orWhere('client_responses', 'like', '%' . $query . '%')
						->orWhere('non_taxable_purchases', 'like', '%' . $query . '%')
						->orWhere('supplier', 'like', '%' . $query . '%')
						->orWhere('vat_tin', 'like', '%' . $query . '%');
				})
				->count();

			$purchases = Purchases::whereRaw('customer_id IN (select customer_id from tax_customers where manager = ?)', ['manager' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('branch_name', 'like', '%' . $query . '%')
						->orWhere('tax_period', 'like', '%' . $query . '%')
						->orWhere('invoice_date', 'like', '%' . $query . '%')
						->orWhere('invoice_num', 'like', '%' . $query . '%')
						->orWhere('description', 'like', '%' . $query . '%')
						->orWhere('quantity', 'like', '%' . $query . '%')
						->orWhere('local_purchase_tax_val', 'like', '%' . $query . '%')
						->orWhere('local_purchase_vat', 'like', '%' . $query . '%')
						->orWhere('imports_taxable_val', 'like', '%' . $query . '%')
						->orWhere('imports_vat', 'like', '%' . $query . '%')
						->orWhere('total_vat', 'like', '%' . $query . '%')
						->orWhere('subject', 'like', '%' . $query . '%')
						->orWhere('comments', 'like', '%' . $query . '%')
						->orWhere('client_response', 'like', '%' . $query . '%')
						->orWhere('top_comments', 'like', '%' . $query . '%')
						->orWhere('client_responses', 'like', '%' . $query . '%')
						->orWhere('non_taxable_purchases', 'like', '%' . $query . '%')
						->orWhere('supplier', 'like', '%' . $query . '%')
						->orWhere('vat_tin', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();

			$payrollsCount = Payrolls::whereRaw('employee_id IN (select employee_id from customers_employees where  tax_customer_id IN (select customer_id from tax_customers where manager = ?))', ['manager' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('basic_salary', 'like', '%' . $query . '%')
						->orWhere('bonus', 'like', '%' . $query . '%')
						->orWhere('over_time', 'like', '%' . $query . '%')
						->orWhere('commissions', 'like', '%' . $query . '%')
						->orWhere('seniority_payment', 'like', '%' . $query . '%')
						->orWhere('severance_pay', 'like', '%' . $query . '%')
						->orWhere('maternity_leave', 'like', '%' . $query . '%')
						->orWhere('paid_annual_leave', 'like', '%' . $query . '%')
						->orWhere('food_allowance', 'like', '%' . $query . '%')
						->orWhere('transport_allowance', 'like', '%' . $query . '%')
						->orWhere('others', 'like', '%' . $query . '%')
						->orWhere('deduction_advance', 'like', '%' . $query . '%')
						->orWhere('salary_adjusment', 'like', '%' . $query . '%')
						->orWhere('remark', 'like', '%' . $query . '%');
				})
				->count();
			$payrolls = Payrolls::whereRaw('employee_id IN (select employee_id from customers_employees where  tax_customer_id IN (select customer_id from tax_customers where manager = ?))', ['manager' => $loginUser->manager_id])
				->where(function ($q) use ($query) {
					$q->where('basic_salary', 'like', '%' . $query . '%')
						->orWhere('bonus', 'like', '%' . $query . '%')
						->orWhere('over_time', 'like', '%' . $query . '%')
						->orWhere('commissions', 'like', '%' . $query . '%')
						->orWhere('seniority_payment', 'like', '%' . $query . '%')
						->orWhere('severance_pay', 'like', '%' . $query . '%')
						->orWhere('maternity_leave', 'like', '%' . $query . '%')
						->orWhere('paid_annual_leave', 'like', '%' . $query . '%')
						->orWhere('food_allowance', 'like', '%' . $query . '%')
						->orWhere('transport_allowance', 'like', '%' . $query . '%')
						->orWhere('others', 'like', '%' . $query . '%')
						->orWhere('deduction_advance', 'like', '%' . $query . '%')
						->orWhere('salary_adjusment', 'like', '%' . $query . '%')
						->orWhere('remark', 'like', '%' . $query . '%');
				})
			/*->skip($offset)
				->take($perPage)*/	->get();
		}

		if ($type == 'admin') {

			$taxCustomersCount = TaxCustomers::with(['owner'])->where('name_english', 'like', '%' . $query . '%')
				->orWhere('name_khmer', 'like', '%' . $query . '%')
				->orWhere('tax_card_num', 'like', '%' . $query . '%')
				->orWhere('tin_no', 'like', '%' . $query . '%')
				->orWhere('address', 'like', '%' . $query . '%')
				->orWhere('street', 'like', '%' . $query . '%')
				->orWhere('group', 'like', '%' . $query . '%')
				->orWhere('sangkat', 'like', '%' . $query . '%')
				->orWhere('district', 'like', '%' . $query . '%')
				->orWhere('province', 'like', '%' . $query . '%')
				->orWhere('muncipality', 'like', '%' . $query . '%')
				->orWhere('telephone', 'like', '%' . $query . '%')
				->orWhere('industry', 'like', '%' . $query . '%')
				->orWhere('incorporation_date', 'like', '%' . $query . '%')
				->orWhere('tax_duration', 'like', '%' . $query . '%')
				->count();
			$taxCustomers = TaxCustomers::with(['owner'])->where('name_english', 'like', '%' . $query . '%')
				->orWhere('name_khmer', 'like', '%' . $query . '%')
				->orWhere('tax_card_num', 'like', '%' . $query . '%')
				->orWhere('tin_no', 'like', '%' . $query . '%')
				->orWhere('address', 'like', '%' . $query . '%')
				->orWhere('street', 'like', '%' . $query . '%')
				->orWhere('group', 'like', '%' . $query . '%')
				->orWhere('sangkat', 'like', '%' . $query . '%')
				->orWhere('district', 'like', '%' . $query . '%')
				->orWhere('province', 'like', '%' . $query . '%')
				->orWhere('muncipality', 'like', '%' . $query . '%')
				->orWhere('telephone', 'like', '%' . $query . '%')
				->orWhere('industry', 'like', '%' . $query . '%')
				->orWhere('incorporation_date', 'like', '%' . $query . '%')
				->orWhere('tax_duration', 'like', '%' . $query . '%')
			/*->skip($offset)
				->take($perPage)*/	->get();

			$taxCount = Tax::where('title', 'like', '%' . $query . '%')
				->orWhere('description', 'like', '%' . $query . '%')
				->orWhere('duration', 'like', '%' . $query . '%')
				->orWhere('type', 'like', '%' . $query . '%')
				->orWhere('tax_code', 'like', '%' . $query . '%')
				->orWhere('notes', 'like', '%' . $query . '%')
				->count();

			$tax = Tax::where('title', 'like', '%' . $query . '%')
				->orWhere('description', 'like', '%' . $query . '%')
				->orWhere('duration', 'like', '%' . $query . '%')
				->orWhere('type', 'like', '%' . $query . '%')
				->orWhere('tax_code', 'like', '%' . $query . '%')
				->orWhere('notes', 'like', '%' . $query . '%')
			/*->skip($offset)
				->take($perPage)*/	->get();

			$taxManagersCount = Supervisor::where('first_name', 'like', '%' . $query . '%')
				->orWhere('last_name', 'like', '%' . $query . '%')
				->orWhere('gender', 'like', '%' . $query . '%')
				->orWhere('email', 'like', '%' . $query . '%')
				->orWhere('phone', 'like', '%' . $query . '%')
				->orWhere('address', 'like', '%' . $query . '%')
				->orWhere('state', 'like', '%' . $query . '%')
				->orWhere('city', 'like', '%' . $query . '%')
				->orWhere('zip_code', 'like', '%' . $query . '%')
				->count();

			$taxManagers = Supervisor::where('first_name', 'like', '%' . $query . '%')
				->orWhere('last_name', 'like', '%' . $query . '%')
				->orWhere('gender', 'like', '%' . $query . '%')
				->orWhere('email', 'like', '%' . $query . '%')
				->orWhere('phone', 'like', '%' . $query . '%')
				->orWhere('address', 'like', '%' . $query . '%')
				->orWhere('state', 'like', '%' . $query . '%')
				->orWhere('city', 'like', '%' . $query . '%')
				->orWhere('zip_code', 'like', '%' . $query . '%')
			/*->skip($offset)
				->take($perPage)*/	->get();

			$customerEmployeeCount = CustomerEmployee::where('nssf_num', 'like', '%' . $query . '%')
				->orWhere('employee_num', 'like', '%' . $query . '%')
				->orWhere('name_english', 'like', '%' . $query . '%')
				->orWhere('name_khmer', 'like', '%' . $query . '%')
				->orWhere('nationality', 'like', '%' . $query . '%')
				->orWhere('dob', 'like', '%' . $query . '%')
				->orWhere('joining_date', 'like', '%' . $query . '%')
				->orWhere('position', 'like', '%' . $query . '%')
				->orWhere('sex', 'like', '%' . $query . '%')
				->orWhere('contract_type', 'like', '%' . $query . '%')
				->orWhere('spouse', 'like', '%' . $query . '%')
				->count();

			$customerEmployee = CustomerEmployee::where('nssf_num', 'like', '%' . $query . '%')
				->orWhere('employee_num', 'like', '%' . $query . '%')
				->orWhere('name_english', 'like', '%' . $query . '%')
				->orWhere('name_khmer', 'like', '%' . $query . '%')
				->orWhere('nationality', 'like', '%' . $query . '%')
				->orWhere('dob', 'like', '%' . $query . '%')
				->orWhere('joining_date', 'like', '%' . $query . '%')
				->orWhere('position', 'like', '%' . $query . '%')
				->orWhere('sex', 'like', '%' . $query . '%')
				->orWhere('contract_type', 'like', '%' . $query . '%')
				->orWhere('spouse', 'like', '%' . $query . '%')
			/*->skip($offset)
				->take($perPage)*/	->get();

			$salesCount = Sales::where('account_code', 'like', '%' . $query . '%')
				->orWhere('account_description', 'like', '%' . $query . '%')
				->orWhere('accounting_reference', 'like', '%' . $query . '%')
				->orWhere('signature_date', 'like', '%' . $query . '%')
				->orWhere('branch_name', 'like', '%' . $query . '%')
				->orWhere('tax_period', 'like', '%' . $query . '%')
				->orWhere('invoice_date', 'like', '%' . $query . '%')
				->orWhere('invoice_num', 'like', '%' . $query . '%')
				->orWhere('description', 'like', '%' . $query . '%')
				->orWhere('quantity', 'like', '%' . $query . '%')
				->orWhere('non_taxable_sales', 'like', '%' . $query . '%')
				->orWhere('vat', 'like', '%' . $query . '%')
				->orWhere('taxable_person_sales', 'like', '%' . $query . '%')
				->orWhere('taxable_person_vat', 'like', '%' . $query . '%')
				->orWhere('cust_sales', 'like', '%' . $query . '%')
				->orWhere('cust_sales_vat', 'like', '%' . $query . '%')
				->orWhere('total_taxable_value', 'like', '%' . $query . '%')
				->orWhere('taxes_subject', 'like', '%' . $query . '%')
				->orWhere('comments', 'like', '%' . $query . '%')
				->orWhere('client_response', 'like', '%' . $query . '%')
				->orWhere('top_comments', 'like', '%' . $query . '%')
				->orWhere('client_name', 'like', '%' . $query . '%')
				->orWhere('client_tin', 'like', '%' . $query . '%')
				->count();

			$sales = Sales::where('account_code', 'like', '%' . $query . '%')
				->orWhere('account_description', 'like', '%' . $query . '%')
				->orWhere('accounting_reference', 'like', '%' . $query . '%')
				->orWhere('signature_date', 'like', '%' . $query . '%')
				->orWhere('branch_name', 'like', '%' . $query . '%')
				->orWhere('tax_period', 'like', '%' . $query . '%')
				->orWhere('invoice_date', 'like', '%' . $query . '%')
				->orWhere('invoice_num', 'like', '%' . $query . '%')
				->orWhere('description', 'like', '%' . $query . '%')
				->orWhere('quantity', 'like', '%' . $query . '%')
				->orWhere('non_taxable_sales', 'like', '%' . $query . '%')
				->orWhere('vat', 'like', '%' . $query . '%')
				->orWhere('taxable_person_sales', 'like', '%' . $query . '%')
				->orWhere('taxable_person_vat', 'like', '%' . $query . '%')
				->orWhere('cust_sales', 'like', '%' . $query . '%')
				->orWhere('cust_sales_vat', 'like', '%' . $query . '%')
				->orWhere('total_taxable_value', 'like', '%' . $query . '%')
				->orWhere('taxes_subject', 'like', '%' . $query . '%')
				->orWhere('comments', 'like', '%' . $query . '%')
				->orWhere('client_response', 'like', '%' . $query . '%')
				->orWhere('top_comments', 'like', '%' . $query . '%')
				->orWhere('client_name', 'like', '%' . $query . '%')
				->orWhere('client_tin', 'like', '%' . $query . '%')
			/*->skip($offset)
				->take($perPage)*/	->get();

			$purchasesCount = Purchases::where('branch_name', 'like', '%' . $query . '%')
				->orWhere('tax_period', 'like', '%' . $query . '%')
				->orWhere('invoice_date', 'like', '%' . $query . '%')
				->orWhere('invoice_num', 'like', '%' . $query . '%')
				->orWhere('description', 'like', '%' . $query . '%')
				->orWhere('quantity', 'like', '%' . $query . '%')
				->orWhere('local_purchase_tax_val', 'like', '%' . $query . '%')
				->orWhere('local_purchase_vat', 'like', '%' . $query . '%')
				->orWhere('imports_taxable_val', 'like', '%' . $query . '%')
				->orWhere('imports_vat', 'like', '%' . $query . '%')
				->orWhere('total_vat', 'like', '%' . $query . '%')
				->orWhere('subject', 'like', '%' . $query . '%')
				->orWhere('comments', 'like', '%' . $query . '%')
				->orWhere('client_response', 'like', '%' . $query . '%')
				->orWhere('top_comments', 'like', '%' . $query . '%')
				->orWhere('client_responses', 'like', '%' . $query . '%')
				->orWhere('non_taxable_purchases', 'like', '%' . $query . '%')
				->orWhere('supplier', 'like', '%' . $query . '%')
				->orWhere('vat_tin', 'like', '%' . $query . '%')
				->count();

			$purchases = Purchases::where('branch_name', 'like', '%' . $query . '%')
				->orWhere('tax_period', 'like', '%' . $query . '%')
				->orWhere('invoice_date', 'like', '%' . $query . '%')
				->orWhere('invoice_num', 'like', '%' . $query . '%')
				->orWhere('description', 'like', '%' . $query . '%')
				->orWhere('quantity', 'like', '%' . $query . '%')
				->orWhere('local_purchase_tax_val', 'like', '%' . $query . '%')
				->orWhere('local_purchase_vat', 'like', '%' . $query . '%')
				->orWhere('imports_taxable_val', 'like', '%' . $query . '%')
				->orWhere('imports_vat', 'like', '%' . $query . '%')
				->orWhere('total_vat', 'like', '%' . $query . '%')
				->orWhere('subject', 'like', '%' . $query . '%')
				->orWhere('comments', 'like', '%' . $query . '%')
				->orWhere('client_response', 'like', '%' . $query . '%')
				->orWhere('top_comments', 'like', '%' . $query . '%')
				->orWhere('client_responses', 'like', '%' . $query . '%')
				->orWhere('non_taxable_purchases', 'like', '%' . $query . '%')
				->orWhere('supplier', 'like', '%' . $query . '%')
				->orWhere('vat_tin', 'like', '%' . $query . '%')
			/*->skip($offset)
				->take($perPage)*/	->get();

			$payrollsCount = Payrolls::where('basic_salary', 'like', '%' . $query . '%')
				->orWhere('bonus', 'like', '%' . $query . '%')
				->orWhere('over_time', 'like', '%' . $query . '%')
				->orWhere('commissions', 'like', '%' . $query . '%')
				->orWhere('seniority_payment', 'like', '%' . $query . '%')
				->orWhere('severance_pay', 'like', '%' . $query . '%')
				->orWhere('maternity_leave', 'like', '%' . $query . '%')
				->orWhere('paid_annual_leave', 'like', '%' . $query . '%')
				->orWhere('food_allowance', 'like', '%' . $query . '%')
				->orWhere('transport_allowance', 'like', '%' . $query . '%')
				->orWhere('others', 'like', '%' . $query . '%')
				->orWhere('deduction_advance', 'like', '%' . $query . '%')
				->orWhere('salary_adjusment', 'like', '%' . $query . '%')
				->orWhere('remark', 'like', '%' . $query . '%')
				->count();

			$payrolls = Payrolls::where('basic_salary', 'like', '%' . $query . '%')
				->orWhere('bonus', 'like', '%' . $query . '%')
				->orWhere('over_time', 'like', '%' . $query . '%')
				->orWhere('commissions', 'like', '%' . $query . '%')
				->orWhere('seniority_payment', 'like', '%' . $query . '%')
				->orWhere('severance_pay', 'like', '%' . $query . '%')
				->orWhere('maternity_leave', 'like', '%' . $query . '%')
				->orWhere('paid_annual_leave', 'like', '%' . $query . '%')
				->orWhere('food_allowance', 'like', '%' . $query . '%')
				->orWhere('transport_allowance', 'like', '%' . $query . '%')
				->orWhere('others', 'like', '%' . $query . '%')
				->orWhere('deduction_advance', 'like', '%' . $query . '%')
				->orWhere('salary_adjusment', 'like', '%' . $query . '%')
				->orWhere('remark', 'like', '%' . $query . '%')
			/*->skip($offset)
				->take($perPage)*/	->get();

		}

		$currenciesCount = Currencies::where('country', 'like', '%' . $query . '%')
			->orWhere('currency', 'like', '%' . $query . '%')
			->count();

		$currencies = Currencies::where('country', 'like', '%' . $query . '%')
			->orWhere('currency', 'like', '%' . $query . '%')
		/*->skip($offset)
				->take($perPage)*/	->get();

		$taxParametersCount = Parameter::where('khmer_description', 'like', '%' . $query . '%')
			->orWhere('english_description', 'like', '%' . $query . '%')
			->orWhere('tax_code', 'like', '%' . $query . '%')
			->orWhere('rate', 'like', '%' . $query . '%')
			->orWhere('base_tax', 'like', '%' . $query . '%')
			->orWhere('tax_type', 'like', '%' . $query . '%')
			->orWhere('effective_date', 'like', '%' . $query . '%')
			->orWhere('amount_min', 'like', '%' . $query . '%')
			->orWhere('amount_max', 'like', '%' . $query . '%')
			->orWhere('remarks', 'like', '%' . $query . '%')
			->count();

		$taxParameters = Parameter::where('khmer_description', 'like', '%' . $query . '%')
			->orWhere('english_description', 'like', '%' . $query . '%')
			->orWhere('tax_code', 'like', '%' . $query . '%')
			->orWhere('rate', 'like', '%' . $query . '%')
			->orWhere('base_tax', 'like', '%' . $query . '%')
			->orWhere('tax_type', 'like', '%' . $query . '%')
			->orWhere('effective_date', 'like', '%' . $query . '%')
			->orWhere('amount_min', 'like', '%' . $query . '%')
			->orWhere('amount_max', 'like', '%' . $query . '%')
			->orWhere('remarks', 'like', '%' . $query . '%')
		/*->skip($offset)
			->take($perPage)*/	->get();

		$data = array_merge($searchResult, compact(
			'taxCustomers',
			'tax',
			'taxManagers',
			'customerEmployee',
			'sales',
			'purchases',
			'payrolls',
			'currencies',
			'taxParameters'
		));

		$totalRecords = array_sum(array(
			$taxCustomersCount,
			$taxCount,
			$taxManagersCount,
			$customerEmployeeCount,
			$salesCount,
			$purchasesCount,
			$payrollsCount,
			$currenciesCount,
			$taxParametersCount));
		/*$totalSearchedCount = array_sum(array(
			count($taxCustomers),
			count($tax),
			count($taxManagers),
			count($customerEmployee),
			count($sales),
			count($purchases),
			count($payrolls),
			count($currencies),
			count($taxParameters)));*/
		$totalPages = (Integer) ceil($totalRecords / 20);
		// dd($totalPages);
		/*$data = new Paginator($data, $totalRecords, 20, $request->page, [
			'path' => $request->url(),
			'query' => $request->query(),
		]);*/
		return response()->json(['status' => true, 'response' => $data, 'totalPages' => $totalPages]);
	}

	public function update_faqs(Request $request) {

		$setting = Settings::firstOrNew(['key' => 'faqs']);
		$setting->value = $request->content;
		$setting->save();
		return response()->json(['status' => true, 'faqs' => $setting->value]);
	}
	public function get_faqs() {
		$faqs = Settings::where('key', 'faqs')->first();
		return $faqs->value;
	}

	public function get_notifications() {
		$notifications = Notification::where('transmitted_for', session('admin.manager_id'))->latest('id')->take(10)->get();
		$totalNotifications = Notification::where('transmitted_for', session('admin.manager_id'))->latest('id')->count();
		return response()->json(compact('notifications', 'totalNotifications'));
	}

	public function get_all_notifications(Request $request) {
		$notifications = Notification::where('transmitted_for', session('admin.manager_id'))->latest('id')->paginate(20);
		$totalNotifications = Notification::where('transmitted_for', session('admin.manager_id'))->latest('id')->where('is_checked', 0)->count();
		return response()->json(compact('notifications', 'totalNotifications'));
	}

	public function mark_as_read(Request $request) {
		$notification = Notification::find($request->id);
		$notification->is_checked = 1;
		$notification->save();
		$notification = Notification::find($request->id);
		$totalNotifications = Notification::where('transmitted_for', session('admin.manager_id'))->latest('id')->where('is_checked', 0)->count();
		return response()->json(compact('notification', 'totalNotifications'));

	}

	public function sendTokenToServer(Request $request) {
		$admin = Admin::where('manager_id', $request->manager_id)->first();
		$admin->token = $request->token;
		$admin->save();
		session(['admin' => $admin]);
		return response()->json(compact('admin'));
	}

	public function deleteSpp(Request $request) {
		$id = $request->id;
		$customer_id = $request->customer_id;
		$type = $request->type;

		if ($type == 'Sale') {
			$data = Sales::where('customer_id', $customer_id)->where('sale_id', $id)->delete();
		} elseif ($type == 'Purchase') {
			$data = Purchases::where('customer_id', $customer_id)->where('purchase_id', $id)->delete();
		} elseif ($type == 'Payroll') {
			$data = Payrolls::where('employee_id', $customer_id)->where('payroll_id', $id)->delete();
		}
		$msg = $type . ' deleted successfully';
		return response()->json(['status' => true, 'msg' => $msg]);

	}

	public function get_tax_logs(Request $request) {
		$logs = History::where('tax_id', $request->tax_id)->get();
		return response()->json(compact('logs'));
	}
	public function get_customer_logs(Request $request) {
		$logs = History::where('object_id', $request->customer_id)->get();
		return response()->json(compact('logs'));
	}

	public function pdf_one() {
		$data = array();
		$pdf = PDF::loadView('pdf.ppt-1', $data);
		$customPaper = array(0, 0, 800, 1300);
		$pdf->setPaper($customPaper);
		return $pdf->stream('PPT-1.pdf');
	}
}
