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
        Schema::table('user_system_role', function (Blueprint $table) {
            $table->foreign(['system_roles_id'], 'user_system_role_ibfk_2')->references(['id'])->on('system_roles')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['users_id'], 'user_system_role_ibfk_1')->references(['id'])->on('users')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_system_role', function (Blueprint $table) {
            $table->dropForeign('user_system_role_ibfk_2');
            $table->dropForeign('user_system_role_ibfk_1');
        });
    }
};
