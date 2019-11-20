<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxMangmentTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('tax_managment', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('tax_id')->unique();
			$table->string('customer_id')->nullable();
			$table->foreign('customer_id')->references('customer_id')->on('tax_customers')->onDelete('cascade');
			$table->string('title')->nullable();
			$table->text('description')->nullable();
			$table->string('duration')->nullable();
			$table->string('type')->nullable()->comment = 'monthly or yearly';
			$table->string('supervisor_id')->nullable();
			$table->foreign('supervisor_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
			$table->boolean('status')->nullable()->default(false);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('tax_managment');
	}
}
