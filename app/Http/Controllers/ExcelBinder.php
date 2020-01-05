<?php

namespace App\Zal\Utils;

use PHPExcel_Cell;
use PHPExcel_Cell_DataType;
use PHPExcel_Cell_DefaultValueBinder;
use PHPExcel_Cell_IValueBinder;

class ExcelCustomFormatBinder extends PHPExcel_Cell_DefaultValueBinder implements PHPExcel_Cell_IValueBinder {
	public function bindValue(PHPExcel_Cell $cell, $value = null) {
		// if (is_numeric($value))
		// {
		//     $cell->setValueExplicit($value, PHPExcel_Cell_DataType::TYPE_STRING); //PHPExcel_Cell_DataType::TYPE_NUMERIC

		//     return true;
		// }

		$cell->setValueExplicit($value, PHPExcel_Cell_DataType::TYPE_STRING);
		return true;

		// else return default behavior
		return parent::bindValue($cell, $value);
	}
}