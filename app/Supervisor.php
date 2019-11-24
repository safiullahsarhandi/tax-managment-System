<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Supervisor extends Model {
	//
	protected $appends = ['full_name'];
	protected $table = 'tax_managers';

	public function getFullNameAttribute() {
		return "{$this->first_name} {$this->last_name}";
	}
}
