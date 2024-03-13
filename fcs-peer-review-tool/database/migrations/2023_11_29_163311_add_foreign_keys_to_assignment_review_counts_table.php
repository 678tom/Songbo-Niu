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
        Schema::table('assignment_review_counts', function (Blueprint $table) {
            $table->foreign(['review_count_id'], 'fk_assignment_review_counts_review_count1')->references(['id'])->on('review_count')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['Assignments_id'], 'fk_assignment_review_counts_Assignments1')->references(['id'])->on('assignments')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('assignment_review_counts', function (Blueprint $table) {
            $table->dropForeign('fk_assignment_review_counts_review_count1');
            $table->dropForeign('fk_assignment_review_counts_Assignments1');
        });
    }
};
