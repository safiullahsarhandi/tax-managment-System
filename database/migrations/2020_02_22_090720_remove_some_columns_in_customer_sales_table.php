<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveSomeColumnsInCustomerSalesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('customers_sales', function (Blueprint $table) {
			//
			$table->dropForeign('customers_sales_tax_officer_id_foreign');
			$table->dropForeign('customers_sales_supervisor_id_foreign');
			$table->dropForeign('customers_sales_admin_id_foreign');
			// $table->dropForeign(['tax_officer_id', 'supervisor_id', 'admin_id']);
			$table->dropColumn(['tax_officer_id', 'supervisor_id', 'admin_id']);
			$table->string('created_by')->nullable()->after('management_confirmed');
			$table->foreign('created_by')->references('manager_id')->on('tax_managers')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('customers_sales', function (Blueprint $table) {
			$table->string('tax_officer_id')->nullable();
			$table->string('supervisor_id')->nullable();
			$table->string('admin_id')->nullable();
			$table->foreign('tax_officer_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
			$table->foreign('supervisor_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
			$table->foreign('admin_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
			$table->dropForeign(['created_by']);
			$table->dropColumn(['created_by']);
		});
	}
}
