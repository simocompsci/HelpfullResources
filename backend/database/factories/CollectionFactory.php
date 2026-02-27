<?php

namespace Database\Factories;

use App\Models\Collection;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Collection>
 */
class CollectionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Collection::class;

    public function definition(): array
    {
        return [
            'id' => $this->faker->uuid(),
            'user_id' => User::factory(), // automatically create user if not provided
            'parent_id' => null, // by default root collection
            'name' => $this->faker->words(2, true),
        ];
    }

    // Optional: define a child collection
    public function childOf(Collection $parent)
    {
        return $this->state(function () use ($parent) {
            return [
                'parent_id' => $parent->id,
                'user_id' => $parent->user_id,
            ];
        });
    }
}
