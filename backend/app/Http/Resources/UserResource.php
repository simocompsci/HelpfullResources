<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'email' => $this->email,
            'username' => $this->username,
            'role' => $this->role,

            // Relationships (only if loaded)
            'collections' => CollectionResource::collection(
                $this->whenLoaded('collections')
            ),

            'resources' => ResourceResource::collection(
                $this->whenLoaded('resources')
            ),

            'created_at' => $this->created_at,
        ];
    }
}