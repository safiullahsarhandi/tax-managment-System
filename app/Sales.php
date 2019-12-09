<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sales extends Model {
	protected $table = 'customers_sales';

	protected $casts = [
		'additional_fields' => 'array',
	];
	public function officer() {
		return $this->belongsTo(Officer::class, 'tax_officer_id', 'manager_id');
	}
}
