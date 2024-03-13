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
        Schema::create('user_password_reset_token', function (Blueprint $table) {
            $table->integer('password_reset_tokens_id')->index('fk_user_password_rest_token_token');
            $table->unsignedInteger('users_id')->index('fk_user_password_rest_token_users1_idx');

            $table->primary(['users_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_password_reset_token');
    }
};
