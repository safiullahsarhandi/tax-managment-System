<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class RemoveAdminsTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		//
		Schema::dropIfExists('admins');
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		//
		Schema::create('admins', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('admin_id')->unique();
			$table->string('email')->unique();
			$table->string('password');
			$table->string('first_name')->nullable();
			$table->string('last_name')->nullable();
			$table->string('gender', 6)->nullable();
			$table->string('address')->nullable();
			$table->string('street')->nullable();
			$table->string('state')->nullable();
			$table->string('city')->nullable();
			$table->string('phone')->nullable();
			$table->boolean('status')->nullable()->default(true);
			$table->timestamps();
		});
	}
}
