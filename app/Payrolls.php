<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payrolls extends Model
{
    protected $table ='employees_payrolls';
    protected $casts=[
    	'additional_fields' => 'array'
    ];

    public function tax()
    {
        return $this->belongsTo(Tax::class, 'tax_id', 'tax_id');
    }

    public function employee()
    {
    	return $this->belongsTo(CustomerEmployee::class, 'employee_id', 'employee_id');

    }
}
