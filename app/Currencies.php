<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Currencies extends Model
{
    protected $table='currencies';
    protected $appends = ['table_name'];

    public function getTableNameAttribute($val){
    	return 'currencies';
    }
}
