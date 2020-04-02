<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payrolls extends Model {
	protected $table = 'employees_payrolls';
	protected $casts = [
		'additional_fields' => 'array',
	];

	protected $appends = ['officer_confirmation'];
	public function tax() {
		return $this->belongsTo(Tax::class, 'tax_id', 'tax_id');
	}

	public function employee() {
		return $this->belongsTo(CustomerEmployee::class, 'employee_id', 'employee_id');

	}

	public function officer() {
		return $this->belongsTo(Officer::class, 'tax_officer_id', 'manager_id');
	}
	public function created_by() {
		return $this->belongsTo(Admin::class, 'created_by', 'manager_id');
	}
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
}
