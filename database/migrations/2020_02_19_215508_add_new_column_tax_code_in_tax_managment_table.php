<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewColumnTaxCodeInTaxManagmentTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('tax_managment', function (Blueprint $table) {
			//
			$table->string('created_by')->nullable()->after('supervisor_id');
			$table->string('tax_code')->nullable()->after('type');
			$table->text('notes')->nullable()->after('tax_code');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('tax_managment', function (Blueprint $table) {
			$table->dropColumn(['created_by', 'tax_code', 'notes']);
		});
	}
}
