<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchases extends Model
{
    protected $table='customer_purchases';

    protected $casts = [
    	'additional_fields' => 'array',
    ];
}
