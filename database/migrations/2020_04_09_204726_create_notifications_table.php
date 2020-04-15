<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationsTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('notifications', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('transmitted_by')->nullable();
			$table->foreign('transmitted_by')->references('manager_id')->on('tax_managers')->onDelete('cascade');
			$table->string('transmitted_for')->nullable();
			$table->foreign('transmitted_for')->references('manager_id')->on('tax_managers')->onDelete('cascade');
			$table->string('notification')->nullable();
			$table->text('description')->nullable();
			$table->boolean('is_checked')->nullable()->default(false);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('notifications');
	}
}
