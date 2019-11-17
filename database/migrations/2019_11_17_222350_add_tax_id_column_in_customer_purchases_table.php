<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTaxIdColumnInCustomerPurchasesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('customer_purchases', function (Blueprint $table) {
			//
			$table->string('tax_id')->nullable()->after('purchase_id');
			$table->foreign('tax_id')->references('tax_id')->on('tax_managment')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('customer_purchases', function (Blueprint $table) {
			//
			$table->dropForeign('customer_purchases_tax_id_foreign');
			$table->dropColumn('tax_id');
		});
	}
}
