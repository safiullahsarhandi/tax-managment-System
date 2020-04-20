<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsInHistoryTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('history', function (Blueprint $table) {
			//
			$table->string('history_id')->unique()->after('id');
			$table->string('object_id')->nullable()->after('history_id');
			$table->string('type')->nullable()->after('object_id')->comment = 'sale,purchase,payroll,company';
			$table->longText('changes')->nullable()->after('type');
			$table->text('description')->nullable()->after('changes');
			$table->string('event')->nullable()->default('create')->after('description')->comment = 'create,update';
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
			$table->dropColumn(['history_id', 'object_id', 'type', 'changes', 'description', 'event']);
		});
	}
}
