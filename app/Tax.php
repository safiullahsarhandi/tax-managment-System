<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tax extends Model {
	protected $table = 'tax_managment';

	public function supervisor() {
		return $this->belongsTo(Supervisor::class, 'supervisor_id', 'manager_id');
	}

	public function officers() {
		return $this->hasMany(TaxOfficer::class, 'tax_id', 'tax_id');
	}
	public function sales() {
		return $this->hasMany(Sales::class, 'tax_id', 'tax_id');
	}

	public function purchases() {
		return $this->hasMany(Purchases::class, 'tax_id', 'tax_id');
	}
	public function payrolls() {
		return $this->hasMany(Payrolls::class, 'tax_id', 'tax_id');
	}
	public function customer()
	{
	    return $this->belongsTo(TaxCustomers::class, 'customer_id', 'customer_id');
	}
}
