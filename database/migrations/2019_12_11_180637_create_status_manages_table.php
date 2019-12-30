<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStatusManagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('status_manages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('status_id')->unique();
            $table->string('tax_id');
            $table->foreign('tax_id')->references('tax_id')->on('tax_managment')->onDelete('cascade');
            $table->string('changed_by')->nullable();
            $table->boolean('status')->default(false);
            $table->string('object_id')->nullable()->comment('payroll_id, sale_id, purchase_id');
            $table->string('type')->nullable()->comment('payroll, sale, purchase');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('status_manages');
    }
}
