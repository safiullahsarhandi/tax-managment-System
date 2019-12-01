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
}
