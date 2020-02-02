<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxParamteresTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('tax_parameters', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('tax_param_id');
			$table->string('khmer_description');
			$table->string('english_description');
			$table->string('tax_code');
			$table->integer('rate')->nullable()->default(0);
			$table->integer('base_tax')->nullable()->default(0);
			$table->string('tax_type')->nullable();
			$table->string('effective_date');
			$table->string('amount_min')->nullable();
			$table->string('amount_max')->nullable();
			$table->string('remarks')->nullable();
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
		Schema::dropIfExists('tax_parameters');
	}
}
