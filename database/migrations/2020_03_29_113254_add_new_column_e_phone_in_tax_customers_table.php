<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewColumnEPhoneInTaxCustomersTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('tax_customers', function (Blueprint $table) {
			//
			$table->string('e_phone')->nullable()->after('telephone');
			$table->string('customer_status')->nullable()->after('status');
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
			$table->dropColumn(['e_phone', 'customer_status']);
		});
	}
}
