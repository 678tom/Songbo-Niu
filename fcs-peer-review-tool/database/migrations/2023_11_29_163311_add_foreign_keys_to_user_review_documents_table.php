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
        Schema::table('user_review_documents', function (Blueprint $table) {
            $table->foreign(['users_id'], 'fk_user_review_documents_users1')->references(['id'])->on('users')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['review_documents_id'], 'fk_user_review_documents_review_documents1')->references(['id'])->on('review_documents')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_review_documents', function (Blueprint $table) {
            $table->dropForeign('fk_user_review_documents_users1');
            $table->dropForeign('fk_user_review_documents_review_documents1');
        });
    }
};
