<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTaxIdColumnInHistoryTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('history', function (Blueprint $table) {
			//
			$table->string('tax_id')->nullable()->after('object_id');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('history', function (Blueprint $table) {
			//
			$table->dropColumn(['tax_id']);
		});
	}
}
