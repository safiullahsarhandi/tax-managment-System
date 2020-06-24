<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTaxSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tax_subjects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('subject_id')->unique();
            $table->bigInteger('param_id')->unsigned()->index()->nullable();
            $table->foreign('param_id')->references('id')->on('tax_parameters')->onDelete('cascade');
            $table->string('object_id')->nullable();
            $table->string('type')->nullable();
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
        Schema::dropIfExists('tax_subjects');
    }
}
