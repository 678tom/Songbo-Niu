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
        Schema::create('user_review_documents', function (Blueprint $table) {
            $table->integer('review_documents_id')->index('fk_user_review_documents_review_documents1_idx');
            $table->unsignedInteger('users_id')->index('fk_user_review_documents_users1_idx');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_review_documents');
    }
};
