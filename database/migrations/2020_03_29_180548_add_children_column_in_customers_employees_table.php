<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddChildrenColumnInCustomersEmployeesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('customers_employees', function (Blueprint $table) {
			//
			$table->integer('children')->nullable()->default(0)->after('spouse');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('customers_employees', function (Blueprint $table) {
			//
			$table->dropColumn('children');
		});
	}
}
