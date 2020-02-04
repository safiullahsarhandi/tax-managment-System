<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTaxDurationColInTaxCustomers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tax_customers', function (Blueprint $table) {
            $table->string('tax_duration')->nullable()->default('Monthly')->after('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tax_customers', function (Blueprint $table) {
            $table->dropColumn('tax_duration');
        });
    }
}
