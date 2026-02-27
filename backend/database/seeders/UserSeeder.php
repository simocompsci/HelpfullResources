<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    
    public function run(): void
    {
        // 10 random users
        User::factory()->count(10)->create();

        // Optional: create an admin
        User::factory()->create([
            'email' => 'admin@example.com',
            'role' => 'ADMIN',
            'password' => bcrypt('admin123'),
        ]);
    }
}
