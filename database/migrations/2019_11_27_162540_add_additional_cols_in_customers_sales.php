<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAdditionalColsInCustomersSales extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customers_sales', function (Blueprint $table) {
            $table->string('total_taxable_value')->nullable()->after('cust_sales_vat');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('customers_sales', function (Blueprint $table) {
            $table->dropColumn('total_taxable_value');
        });
    }
}
