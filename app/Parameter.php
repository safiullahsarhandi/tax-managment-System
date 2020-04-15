<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Parameter extends Model {
	//
	protected $appends = ['expiry_date', 'table_name'];
	protected $table = 'tax_parameters';


	function getExpiryDateAttribute() {
		return date('Ymd', strtotime($this->effective_date));
	}

	public function getTableNameAttribute(){
		return 'tax_parameters';
	}
}
