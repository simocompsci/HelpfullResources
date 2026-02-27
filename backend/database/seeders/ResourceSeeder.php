<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Resource;
use App\Models\Collection;
use App\Models\User;

class ResourceSeeder extends Seeder
{
    public function run(): void
    {
        User::all()->each(function ($user) {
            // 5 resources per user without collection
            Resource::factory()->count(5)->create([
                'user_id' => $user->id
            ]);

            // 3 resources per collection
            Collection::where('user_id', $user->id)->each(function ($collection) use ($user) {
                Resource::factory()->count(3)->create([
                    'user_id' => $user->id,
                    'collection_id' => $collection->id
                ]);
            });
        });
    }
}