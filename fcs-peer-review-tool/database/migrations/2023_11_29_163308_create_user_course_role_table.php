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
        Schema::create('user_course_role', function (Blueprint $table) {
            $table->integer('course_id')->index('fk_user_course_role_courses1_idx');
            $table->integer('course_roles_id')->index('fk_user_course_role_course_roles1_idx');
            $table->unsignedInteger('users_id')->index('fk_user_course_role_users1_idx');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_course_role');
    }
};
