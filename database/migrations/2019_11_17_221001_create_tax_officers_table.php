<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxOfficersTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('tax_officers', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('tax_officer_id')->unique();
			$table->string('tax_id')->nullable();
			$table->foreign('tax_id')->references('tax_id')->on('tax_managment')->onDelete('cascade');
			$table->string('officer_id')->nullable();
			$table->foreign('officer_id')->references('manager_id')->on('tax_managers')->onDelete('cascade');
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
		Schema::dropIfExists('tax_officers');
	}
}
