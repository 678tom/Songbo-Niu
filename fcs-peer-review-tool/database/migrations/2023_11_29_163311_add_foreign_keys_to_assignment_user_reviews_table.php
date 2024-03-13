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
        Schema::table('assignment_user_reviews', function (Blueprint $table) {
            $table->foreign(['peer_reviews_id'], 'fk_assignment_user_reviews_peer_reviews1')->references(['id'])->on('peer_reviews')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['subject_user_id'], 'fk_assignment_user_reviews_users2')->references(['id'])->on('users')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['Assignments_id'], 'fk_assignment_user_reviews_Assignments1')->references(['id'])->on('assignments')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['author_user_id'], 'fk_assignment_user_reviews_users1')->references(['id'])->on('users')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('assignment_user_reviews', function (Blueprint $table) {
            $table->dropForeign('fk_assignment_user_reviews_peer_reviews1');
            $table->dropForeign('fk_assignment_user_reviews_users2');
            $table->dropForeign('fk_assignment_user_reviews_Assignments1');
            $table->dropForeign('fk_assignment_user_reviews_users1');
        });
    }
};
