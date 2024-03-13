<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assignment_review_counts', function (Blueprint $table) {
            $table->integer('review_count_id')->index('fk_assignment_review_counts_review_count1_idx');
            $table->integer('Assignments_id')->index('fk_assignment_review_counts_Assignments1_idx');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('assignment_review_counts');
    }
};
