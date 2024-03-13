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
        Schema::table('user_password_reset_token', function (Blueprint $table) {
            $table->foreign(['users_id'], 'user_password_reset_token_ibfk_2')->references(['id'])->on('users')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['password_reset_tokens_id'], 'user_password_reset_token_ibfk_1')->references(['id'])->on('password_reset_tokens')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_password_reset_token', function (Blueprint $table) {
            $table->dropForeign('user_password_reset_token_ibfk_2');
            $table->dropForeign('user_password_reset_token_ibfk_1');
        });
    }
};
