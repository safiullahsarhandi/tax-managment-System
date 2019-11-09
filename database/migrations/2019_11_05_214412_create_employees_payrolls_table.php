<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesPayrollsTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('employees_payrolls', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('payroll_id')->unique();
			$table->string('employee_id')->nullable();
			$table->foreign('employee_id')->references('employee_id')->on('customers_employees')->onDelete('cascade');
			$table->string('basic_salary')->nullable();
			$table->string('bonus')->nullable();
			$table->string('over_time')->nullable();
			$table->string('commissions')->nullable();
			$table->string('seniority_payment')->nullable();
			$table->string('severance_pay')->nullable();
			$table->string('maternity_leave')->nullable();
			$table->string('paid_annual_leave')->nullable();
			$table->string('food_allowance')->nullable();
			$table->string('transport_allowance')->nullable();
			$table->string('others')->nullable();
			$table->string('deduction_advance')->nullable();
			$table->string('salary_adjusment')->nullable();
			$table->string('remark')->nullable();
			$table->text('additional_fields')->nullable();
			$table->boolean('status')->nullable()->default(true);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('employees_payrolls');
	}
}
