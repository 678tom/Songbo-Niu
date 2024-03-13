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
        Schema::create('user_course_group', function (Blueprint $table) {
            $table->unsignedInteger('users_id')->nullable()->index('fk_user_course_group_1');
            $table->integer('course_id')->index('fk_user_course_group_2');
            $table->integer('group_id')->index('fk_user_course_group_3');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_course_group');
    }
};
