<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersSalesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('customers_sales', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('sale_id')->unique();
			$table->string('customer_id')->nullable();
			$table->foreign('customer_id')->references('customer_id')->on('tax_customers')->onDelete('cascade');
			$table->string('account_code')->nullable();
			$table->string('account_description')->nullable();
			$table->string('accounting_reference')->nullable();
			$table->string('signature_date')->nullable();
			$table->string('branch_name')->nullable();
			$table->string('tax_period')->nullable();
			$table->string('invoice_date')->nullable();
			$table->string('invoice_num')->nullable();
			$table->string('description')->nullable();
			$table->string('quantity')->nullable();
			$table->string('non_taxable_sales')->nullable();
			$table->string('vat')->nullable();
			$table->string('taxable_person_sales')->nullable();
			$table->string('taxable_person_vat')->nullable();
			$table->string('cust_sales')->nullable();
			$table->string('cust_sales_vat')->nullable();
			$table->string('taxes_subject')->nullable();
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
		Schema::dropIfExists('customers_sales');
	}
}
