<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Admin extends Model {
	protected $table = 'tax_managers';
	protected $appends = ['full_name'];
	public function taxes() {
		return $this->hasMany(TaxOfficer::class, 'officer_id', 'manager_id');
	}

	public function customer() {
		return $this->belongsTo(TaxCustomers::class, 'customer_id', 'customer_id');
	}
	public function reportingTo() {
		return $this->belongsTo(Admin::class, 'reports_to', 'manager_id');
	}
	public function getFullNameAttribute() {
		$firstName = Str::ucfirst($this->first_name);
		$lastName = Str::ucfirst($this->last_name);
		return $firstName . ' ' . $lastName;
	}

	public function getTypeAttribute($val) {

		if ($val == 1) {
			return 'Super Admin';
		} elseif ($val == 4) {
			return 'Admin';
		} elseif ($val == 2) {
			return 'Supervisor';
		} elseif ($val == 3) {
			return 'Officer';
		}

	}

}
