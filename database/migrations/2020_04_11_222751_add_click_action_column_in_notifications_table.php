<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddClickActionColumnInNotificationsTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('notifications', function (Blueprint $table) {
			//
			$table->string('click_action')->nullable()->after('description');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('notifications', function (Blueprint $table) {
			//
			$table->dropColumn(['click_action']);
		});
	}
}
