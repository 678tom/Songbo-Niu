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
        Schema::create('assignment_user_reviews', function (Blueprint $table) {
            $table->integer('peer_reviews_id')->index('fk_assignment_user_reviews_peer_reviews1_idx');
            $table->integer('Assignments_id')->index('fk_assignment_user_reviews_Assignments1_idx');
            $table->unsignedInteger('author_user_id')->index('fk_assignment_user_reviews_users1_idx');
            $table->unsignedInteger('subject_user_id')->index('fk_assignment_user_reviews_users2_idx');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('assignment_user_reviews');
    }
};
