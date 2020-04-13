<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewColumnTokenInTaxManagersTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('tax_managers', function (Blueprint $table) {
			//
			$table->text('token')->nullable()->after('password');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('tax_managers', function (Blueprint $table) {
			//
			$table->dropColumn('token');
		});
	}
}
