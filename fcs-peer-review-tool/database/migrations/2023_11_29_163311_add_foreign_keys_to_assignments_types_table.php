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
        Schema::table('assignments_types', function (Blueprint $table) {
            $table->foreign(['assignment_types_id'], 'fk_assignments_types_assignment_types1')->references(['id'])->on('assignment_types')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['Assignments_id'], 'fk_assignments_types_Assignments1')->references(['id'])->on('assignments')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('assignments_types', function (Blueprint $table) {
            $table->dropForeign('fk_assignments_types_assignment_types1');
            $table->dropForeign('fk_assignments_types_Assignments1');
        });
    }
};
