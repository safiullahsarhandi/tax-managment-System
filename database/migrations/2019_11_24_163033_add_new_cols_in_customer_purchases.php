<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNewColsInCustomerPurchases extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customer_purchases', function (Blueprint $table) {
            $table->string('client_responses')->nullable();
            $table->string('non_taxable_purchases')->nullable();
            $table->string('supplier')->nullable();
            $table->string('vat_tin')->nullable();
            $table->text('additional_field')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('customer_purchases', function (Blueprint $table) {
            $table->dropColumn(['client_responses','non_taxable_purchases','supplier','vat_tin','additional_field',]);
        });
    }
}
