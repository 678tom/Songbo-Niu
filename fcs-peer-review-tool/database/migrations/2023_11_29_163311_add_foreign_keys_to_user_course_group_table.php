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
        Schema::table('user_course_group', function (Blueprint $table) {
            $table->foreign(['group_id'], 'fk_user_course_group_3')->references(['id'])->on('groups')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['course_id'], 'fk_user_course_group_2')->references(['id'])->on('courses')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['users_id'], 'user_course_group_ibfk_1')->references(['id'])->on('users')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_course_group', function (Blueprint $table) {
            $table->dropForeign('fk_user_course_group_3');
            $table->dropForeign('fk_user_course_group_2');
            $table->dropForeign('user_course_group_ibfk_1');
        });
    }
};
