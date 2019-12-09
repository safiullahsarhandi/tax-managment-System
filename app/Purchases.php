<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchases extends Model {
	protected $table = 'customer_purchases';

	protected $casts = [
		'additional_fields' => 'array',
	];

	public function officer() {
		return $this->belongsTo(Officer::class, 'tax_officer_id', 'manager_id');
	}
}
