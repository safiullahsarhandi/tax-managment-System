<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaxOfficer extends Model {
	protected $table = 'tax_officers';

	public function tax() {
		return $this->belongsTo(Tax::class, 'tax_id', 'tax_id');
	}
}
