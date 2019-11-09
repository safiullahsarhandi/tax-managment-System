<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxManagersTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('tax_managers', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('manager_id')->unique();
			$table->string('first_name')->nullable();
			$table->string('last_name')->nullable();
			$table->string('gender')->nullable();
			$table->string('email')->unique();
			$table->string('password')->nullable();
			$table->string('phone')->nullable();
			$table->string('address')->nullable();
			$table->string('state')->nullable();
			$table->string('city')->nullable();
			$table->string('zip_code')->nullable();
			$table->string('reports_to')->nullable();
			$table->integer('type')->unsigned()->nullable()->comment = '1 for admin 2 for supervisors 3 for officers';
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
		Schema::dropIfExists('tax_managers');
	}
}
