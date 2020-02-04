<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaxOfficer extends Model {
	protected $table = 'tax_officers';
	protected $appends = ['full_name'];

	public function getFullNameAttribute() {
		return "{$this->first_name} {$this->last_name}";
	}
	public function tax() {
		return $this->belongsTo(Tax::class, 'tax_id', 'tax_id');
	}
	public function detail() {
		return $this->belongsTo(Officer::class, 'officer_id', 'manager_id');
	}
}
