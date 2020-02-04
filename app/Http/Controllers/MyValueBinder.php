<?php

namespace App\Http\Controllers;
use PHPExcel_Cell;
use PHPExcel_Cell_DataType;
use PHPExcel_Cell_DefaultValueBinder;
use PHPExcel_Cell_IValueBinder;

class MyValueBinder extends PHPExcel_Cell_DefaultValueBinder implements PHPExcel_Cell_IValueBinder {
	public function bindValue(PHPExcel_Cell $cell, $value = null) {
		if (is_numeric($value)) {
			$cell->setValueExplicit($value, PHPExcel_Cell_DataType::TYPE_NUMERIC);
			return true;
		}

		// else return default behavior
		return parent::bindValue($cell, $value);
	}
}