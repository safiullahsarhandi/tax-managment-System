<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRivisionColumnInTaxManagmentTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('tax_managment', function (Blueprint $table) {
			//
			$table->bigInteger('rivision')->nullable()->default(0)->after('notes');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('tax_managment', function (Blueprint $table) {
			//
			$table->dropColumn('rivision');
		});
	}
}
