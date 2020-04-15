<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Owner extends Model {
	//
	public function companies() {
		return $this->hasOne(TaxCustomers::class, 'owner_id', 'owner_id');
	}
}
