<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTaxIdColumnInEmployeesPayrollsTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('employees_payrolls', function (Blueprint $table) {
			$table->string('tax_id')->nullable()->after('payroll_id');
			$table->foreign('tax_id')->references('tax_id')->on('tax_managment')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('employees_payrolls', function (Blueprint $table) {
			$table->dropForeign('employees_payrolls_tax_id_foreign');
			$table->dropColumn('tax_id');
		});
	}
}
