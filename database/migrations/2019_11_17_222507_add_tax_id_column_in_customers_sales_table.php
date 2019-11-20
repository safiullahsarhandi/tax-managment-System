<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTaxIdColumnInCustomersSalesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('customers_sales', function (Blueprint $table) {
			//
			$table->string('tax_id')->nullable()->after('sale_id');
			$table->foreign('tax_id')->references('tax_id')->on('tax_managment')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('customers_sales', function (Blueprint $table) {
			//
			$table->dropForeign('customers_sales_tax_id_foreign');
			$table->dropColumn('tax_id');
		});
	}
}
