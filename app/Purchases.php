<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchases extends Model {
	protected $table = 'customer_purchases';

	protected $casts = [
		'additional_fields' => 'array',
	];
	protected $appends = ['officer_confirmation', 'table_name'];
	public function getOfficerConfirmationAttribute() {
		if ($this->officer_confirmed == 0) {
			return 'Working';
		} elseif ($this->officer_confirmed == 1) {
			return 'Submitted to supervisor';
		} elseif ($this->officer_confirmed == 2) {
			return 'Disapproved by supervisor';
		} elseif ($this->officer_confirmed == 3) {
			return 'Approved by Supervisor';
		} elseif ($this->officer_confirmed == 4) {
			return 'Disapproved by admin';
		} elseif ($this->officer_confirmed == 5) {
			return 'Approved by admin';
		}

	}
	public function officer() {
		return $this->belongsTo(Officer::class, 'tax_officer_id', 'manager_id');
	}

	public function getTableNameAttribute($val) {
		return 'purchases';
	}
	public function created_by() {
		return $this->belongsTo(Admin::class, 'created_by', 'manager_id');
	}
	public function customer() {
		return $this->belongsTo(TaxCustomers::class, 'customer_id', 'customer_id');
	}
	public function taxes_subject()
	{
	    return $this->hasMany(TaxSubject::class, 'object_id', 'purchase_id');
	}
}
