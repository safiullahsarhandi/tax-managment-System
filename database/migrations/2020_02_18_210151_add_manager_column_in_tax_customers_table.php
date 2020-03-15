<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddManagerColumnInTaxCustomersTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('tax_customers', function (Blueprint $table) {
			//
			$table->string('manager')->nullable();
			$table->string('supervisor')->nullable();
			$table->string('created_by');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('tax_customers', function (Blueprint $table) {
			//
			$table->dropColumn(['supervisor', 'manager', 'created_by']);
		});
	}
}
