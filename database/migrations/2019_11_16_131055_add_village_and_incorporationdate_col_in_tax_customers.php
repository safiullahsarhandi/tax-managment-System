<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddVillageAndIncorporationdateColInTaxCustomers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tax_customers', function (Blueprint $table) {
            $table->string('incorporation_date')->nullable()->after('industry');
            $table->string('village')->nullable()->after('incorporation_date');
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
            $table->dropColumn(['incorporation_date','village']);
        });
    }
}
