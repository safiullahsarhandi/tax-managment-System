<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model {
	protected $table = 'tax_managers';
	protected $appends = ['full_name'];
	public function taxes() {
		return $this->hasMany(TaxOfficer::class, 'officer_id', 'manager_id');
	}
	public function getFullNameAttribute() {
		return "{$this->first_name} {$this->last_name}";
	}
	public function getTypeAttribute($val) {

		if ($val == 1) {
			return 'Admin';
		} elseif ($val == 2) {
			return 'Supervisor';
		} elseif ($val == 3) {
			return 'Officer';
		}

	}

}
