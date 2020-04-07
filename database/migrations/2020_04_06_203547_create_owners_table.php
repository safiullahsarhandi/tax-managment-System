<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOwnersTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('owners', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('owner_id')->unique();
			$table->string('name_english')->nullable();
			$table->string('name_khmer')->nullable();
			$table->string('email')->nullable();
			$table->string('phone_number')->nullable();
			$table->string('nic')->nullable();
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
		Schema::dropIfExists('owners');
	}
}
