<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaxCustomers extends Model {
	protected $table = 'tax_customers';
	protected $casts = [
		'additional_fields' => 'array',
	];

	public function taxes() {
		return $this->hasMany(Tax::class, 'customer_id', 'customer_id');
	}
	public function active_employees() {
		return $this->hasMany(CustomerEmployee::class, 'tax_customer_id', 'customer_id')->whereStatus(1);
	}
	public function total_employees() {
		return $this->hasMany(CustomerEmployee::class, 'tax_customer_id', 'customer_id');
	}

	public function supervisor() {
		return $this->belongsTo(Admin::class, 'supervisor', 'manager_id');
	}

	public function created_by() {
		return $this->belongsTo(Admin::class, 'created_by', 'manager_id');
	}
	public function officer() {
		return $this->belongsTo(Admin::class, 'manager', 'manager_id');
	}
}
