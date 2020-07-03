<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddEmployeeTypeColumnInCustomersEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customers_employees', function (Blueprint $table) {
            //
            $table->string('employee_type')->nullable()->default('RD')->after('children');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('customers_employees', function (Blueprint $table) {
            //
            $table->dropColumn('employee_type');
        });
    }
}
