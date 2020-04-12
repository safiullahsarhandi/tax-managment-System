<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerEmployee extends Model {
	//
	protected $table = 'customers_employees';

	protected $appends =['table_name'];

	public function getTableNameAttribute(){
		return 'customers_employees';
	}

	public function customer() {
		return $this->belongsTo(TaxCustomers::class, 'tax_customer_id', 'customer_id');
	}
	
}
