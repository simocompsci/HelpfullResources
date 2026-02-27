<?php

namespace App\Services;

use App\Models\Resource;
use App\Models\User;
use App\Models\Collection;

class ResourceService
{
    public function getResources(int $page = 1, int $perPage = 20)
    {
        $perPage = min($perPage, 100);
        return Resource::paginate($perPage, ['*'], 'page', $page);
    }

    public function addResource(array $data)
    {
        User::findOrFail($data['user_id']);

        if (!empty($data['collection_id'])) {
            Collection::findOrFail($data['collection_id']);
        }

        return Resource::create($data);
    }

    public function getResource(string $id)
    {
        return Resource::findOrFail($id);
    }

    public function getAllUserResources(string $userId, ?string $title, ?string $type)
    {
        return Resource::where('user_id', $userId)
            ->when($title, fn($q) => $q->where('title', $title))
            ->when($type, fn($q) => $q->where('type', $type))
            ->get();
    }

    public function getByUserAndCollection(string $userId, string $collectionId)
    {
        return Resource::where('user_id', $userId)
            ->where('collection_id', $collectionId)
            ->get();
    }

    public function updateResource(array $data, string $id)
    {
        $resource = Resource::findOrFail($id);
        $resource->update($data);
        return $resource;
    }

    public function deleteById(string $id)
    {
        Resource::findOrFail($id)->delete();
    }
}