<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Collection;
use App\Models\User;

class CollectionSeeder extends Seeder
{
    public function run(): void
    {
        // For each user, create 3 root collections and 2 child collections each
        User::all()->each(function ($user) {
            $rootCollections = Collection::factory()->count(3)->create([
                'user_id' => $user->id
            ]);

            $rootCollections->each(function ($root) {
                Collection::factory()->count(2)->childOf($root)->create();
            });
        });
    }
}