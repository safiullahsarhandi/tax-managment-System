<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersPayrollsTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('customers_employees', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('employee_id')->unique();
			$table->string('tax_customer_id')->nullable();
			$table->foreign('tax_customer_id')->references('customer_id')->on('tax_customers')->onDelete('cascade');
			$table->string('nssf_num')->nullable();
			$table->string('employee_num')->nullable()->unique();
			$table->string('name_english')->nullable();
			$table->string('name_khmer')->nullable();
			$table->string('nationality')->nullable();
			$table->string('dob')->nullable();
			$table->string('joining_date')->nullable();
			$table->string('position')->nullable();
			$table->string('sex')->nullable();
			$table->string('contract_type')->nullable();
			$table->string('spouse')->nullable();
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
		Schema::dropIfExists('customers_employees');
	}
}
