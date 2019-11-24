<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    protected $table='customers_sales';

    protected $casts = [
    	'additional_fields' => 'array',
    ];
}
