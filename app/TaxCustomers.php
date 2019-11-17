<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaxCustomers extends Model
{
    protected $table ='tax_customers';
    protected $casts = [
    	'additional_fields' => 'array',
    ];
}
