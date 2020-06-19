<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaxSubject extends Model
{
    //
    public function parameter()
    {
        return $this->belongsTo(Parameter::class, 'param_id', 'id');
    }
}
