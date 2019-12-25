<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTaxCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tax_comments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('comment_id', 36)->unique();
            $table->string('object_id', 36)->comment('admin_id, supervisor, officer_id');
            $table->string('type', 10)->comment('value are: admin, officer, supervisor');
            $table->text('comment')->nullable();
            $table->boolean('status')->default(false);
            $table->timestamps();
        });

        Schema::dropIfExists('status_manages');

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tax_comments');
    }
}
