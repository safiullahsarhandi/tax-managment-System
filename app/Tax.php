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
}
