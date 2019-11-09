<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxCustomersTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('tax_customers', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('customer_id')->unique();
			$table->string('name_english')->nullable();
			$table->string('name_khmer')->nullable();
			$table->string('tax_card_num')->nullable();
			$table->string('tin_no')->nullable();
			$table->string('address')->nullable();
			$table->string('street')->nullable();
			$table->string('group')->nullable();
			$table->string('sangkat')->nullable();
			$table->string('district')->nullable();
			$table->string('province')->nullable();
			$table->string('muncipality')->nullable();
			$table->string('telephone')->nullable();
			$table->string('email')->unique();
			$table->string('industry')->nullable();
			$table->text('additional_fields')->nullable();
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('tax_customers');
	}
}
