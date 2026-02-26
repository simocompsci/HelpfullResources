<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('resources', function (Blueprint $table) {
            $table->uuid()->primary();
            $table->foreignUuid('user_id')
                  ->constrained('users')
                  ->cascadeOnDelete();
            $table->foreignUuid('collection_id')
                  ->nullable()
                  ->constrained('collections')
                  ->nullOnDelete();
                  
            $table->string('title');
            $table->string('url');
            $table->string('type' , 30)->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resources');
    }
};
