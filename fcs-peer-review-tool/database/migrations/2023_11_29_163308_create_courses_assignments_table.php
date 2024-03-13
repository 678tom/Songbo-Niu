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
        Schema::create('courses_assignments', function (Blueprint $table) {
            $table->integer('course_id')->index('fk_courses_assignments_courses1_idx');
            $table->integer('Assignment_id')->index('fk_courses_assignments_Assignments1_idx');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses_assignments');
    }
};
