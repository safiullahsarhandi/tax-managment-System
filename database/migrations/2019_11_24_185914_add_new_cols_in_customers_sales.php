<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNewColsInCustomersSales extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customers_sales', function (Blueprint $table) {
            $table->string('client_name')->nullable();
            $table->string('client_tin')->nullable();
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
            $table->dropColumn(['client_name', 'client_tin']);
        });
    }
}
