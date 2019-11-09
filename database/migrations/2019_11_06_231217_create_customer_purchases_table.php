<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerPurchasesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('customer_purchases', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('purchase_id')->unique();
			$table->string('customer_id')->nullable();
			$table->foreign('customer_id')->references('customer_id')->on('tax_customers')->onDelete('cascade');
			$table->string('branch_name')->nullable();
			$table->string('tax_period')->nullable();
			$table->string('invoice_date')->nullable();
			$table->string('invoice_num')->nullable();
			$table->string('description')->nullable();
			$table->string('quantity')->nullable();
			$table->string('local_purchase_tax_val')->nullable();
			$table->string('local_purchase_vat')->nullable();
			$table->string('imports_taxable_val')->nullable();
			$table->string('imports_vat')->nullable();
			$table->string('total_vat')->nullable();
			$table->string('subject')->nullable();
			$table->text('comments')->nullable();
			$table->text('client_response')->nullable();
			$table->text('top_comments')->nullable();
			$table->text('additional_fields')->nullable();
			$table->boolean('officer_confirmed')->nullable()->default(false);
			$table->boolean('supervisor_confirmed')->nullable()->default(false);
			$table->boolean('management_confirmed')->nullable()->default(false);
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
		Schema::dropIfExists('customer_purchases');
	}
}
