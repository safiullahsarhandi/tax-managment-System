<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model {
	protected $table = 'tax_managers';
	protected $appends = ['full_name'];
	public function taxes() {
		return $this->hasMany(TaxOfficer::class, 'officer_id', 'manager_id');
	}
<<<<<<< HEAD
	public function customer()
	{
	    return $this->belongsTo(TaxCustomers::class, 'customer_id', 'customer_id');
=======
	public function getFullNameAttribute() {
		return "{$this->first_name} {$this->last_name}";
>>>>>>> ecb8b5cc97035bd976c7eb6aa681180a6cdc5dbc
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
