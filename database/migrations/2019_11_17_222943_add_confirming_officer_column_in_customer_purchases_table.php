<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddConfirmingOfficerColumnInCustomerPurchasesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('customer_purchases', function (Blueprint $table) {
			$table->string('tax_officer_id')->nullable()->after('management_confirmed');
			$table->foreign('tax_officer_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
			$table->string('supervisor_id')->nullable()->after('tax_officer_id');
			$table->foreign('supervisor_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
			$table->string('admin_id')->nullable()->after('management_confirmed');
			$table->foreign('admin_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
		});
		Schema::table('customers_sales', function (Blueprint $table) {
			$table->string('tax_officer_id')->nullable()->after('management_confirmed');
			$table->foreign('tax_officer_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
			$table->string('supervisor_id')->nullable()->after('tax_officer_id');
			$table->foreign('supervisor_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
			$table->string('admin_id')->nullable()->after('management_confirmed');
			$table->foreign('admin_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
		});

		Schema::table('employees_payrolls', function (Blueprint $table) {
			$table->boolean('officer_confirmed')->nullable()->default(false)->after('additional_fields');
			$table->boolean('supervisor_confirmed')->nullable()->default(false)->after('additional_fields');
			$table->boolean('management_confirmed')->nullable()->default(false)->after('additional_fields');
			$table->string('tax_officer_id')->nullable()->after('management_confirmed');
			$table->foreign('tax_officer_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
			$table->string('supervisor_id')->nullable()->after('tax_officer_id');
			$table->foreign('supervisor_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
			$table->string('admin_id')->nullable()->after('management_confirmed');
			$table->foreign('admin_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
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
			$table->dropForeign('customer_purchases_tax_officer_id_foreign');
			$table->dropForeign('customer_purchases_supervisor_id_foreign');
			$table->dropForeign('customer_purchases_admin_id_foreign');
			$table->dropColumn(['tax_officer_id', 'supervisor_id', 'admin_id']);
		});
		Schema::table('customers_sales', function (Blueprint $table) {
			//
			$table->dropForeign('customers_sales_tax_officer_id_foreign');
			$table->dropForeign('customers_sales_supervisor_id_foreign');
			$table->dropForeign('customers_sales_admin_id_foreign');
			$table->dropColumn(['tax_officer_id', 'supervisor_id', 'admin_id']);
		});
		Schema::table('employees_payrolls', function (Blueprint $table) {
			//
			$table->dropForeign('employees_payrolls_tax_officer_id_foreign');
			$table->dropForeign('employees_payrolls_supervisor_id_foreign');
			$table->dropForeign('employees_payrolls_admin_id_foreign');
			$table->dropColumn(['tax_officer_id', 'supervisor_id', 'admin_id']);
		});
	}
}
