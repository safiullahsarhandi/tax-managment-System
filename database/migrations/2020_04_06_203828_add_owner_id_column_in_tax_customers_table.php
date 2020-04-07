<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOwnerIdColumnInTaxCustomersTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('tax_customers', function (Blueprint $table) {
			//
			$table->string('owner_id')->nullable()->after('id');
			$table->foreign('owner_id')->references('owner_id')->on('owners')->onDelete('cascade');

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
			$table->dropForeign('tax_customers_owner_id_foreign');
			$table->dropColumn('owner_id');
		});
	}
}
