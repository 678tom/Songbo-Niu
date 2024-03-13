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
        Schema::create('user_system_role', function (Blueprint $table) {
            $table->integer('system_roles_id')->nullable()->index('fk_user_system_role_system_roles1_idx');
            $table->unsignedInteger('users_id')->index('fk_user_system_role_users1_idx');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_system_role');
    }
};
