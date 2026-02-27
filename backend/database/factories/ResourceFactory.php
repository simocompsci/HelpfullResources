<?php

namespace Database\Factories;

use App\Models\Resource;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Resource>
 */
class ResourceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Resource::class;

    public function definition(): array
    {
        return [
            'id' => $this->faker->uuid(),
            'user_id' => User::factory(),
            'collection_id' => null, // optional
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(),
            'url' => $this->faker->url(),
            'type' => $this->faker->randomElement(['VIDEO', 'ARTICLE', 'IMAGE']),
        ];
    }

}
