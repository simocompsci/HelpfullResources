<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CollectionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'user_id' => $this->user_id,
            'parent_id' => $this->parent_id,

            'children' => CollectionResource::collection(
                $this->whenLoaded('children')
            ),

            'resources' => ResourceResource::collection(
                $this->whenLoaded('resources')
            ),

            'created_at' => $this->created_at,
        ];
    }
}