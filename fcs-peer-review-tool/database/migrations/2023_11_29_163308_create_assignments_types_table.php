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
        Schema::create('assignments_types', function (Blueprint $table) {
            $table->integer('Assignments_id')->index('fk_assignments_types_Assignments1_idx');
            $table->integer('assignment_types_id')->index('fk_assignments_types_assignment_types1_idx');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('assignments_types');
    }
};
