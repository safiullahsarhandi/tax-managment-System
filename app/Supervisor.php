<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Supervisor extends Model {
	//
	protected $appends = ['full_name', 'table_name'];
	protected $table = 'tax_managers';

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

	public function getTableNameAttribute($val){
		return 'tax_managers';
	}
}
