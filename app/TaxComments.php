<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaxComments extends Model {
	//
	public function member_info() {
		return $this->belongsTo(Admin::class, 'member_id', 'manager_id');
	}
}
