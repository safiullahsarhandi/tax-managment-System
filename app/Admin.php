<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model {
	protected $table = 'tax_managers';

	public function taxes() {
		return $this->hasMany(TaxOfficer::class, 'officer_id', 'manager_id');
	}
	public function customer()
	{
	    return $this->belongsTo(TaxCustomers::class, 'customer_id', 'customer_id');
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
