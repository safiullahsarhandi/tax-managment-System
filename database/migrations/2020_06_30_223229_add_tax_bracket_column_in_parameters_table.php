<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTaxBracketColumnInParametersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tax_parameters', function (Blueprint $table) {
            //
            $table->bigInteger('tax_bracket')->nullable()->default(0)->after('amount_max');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tax_parameters', function (Blueprint $table) {
            //
            $table->dropColumn('tax_bracket');
        });
    }
}
