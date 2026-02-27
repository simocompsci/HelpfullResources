<?php

namespace App\Services;

use App\Models\Collection;
use App\Models\User;

class CollectionService
{
    public function getCollections()
    {
        return Collection::all();
    }

    public function addCollection(array $data)
    {
        $user = User::findOrFail($data['user_id']);

        $parent = null;
        if (!empty($data['parent_id'])) {
            $parent = Collection::findOrFail($data['parent_id']);
        }

        return Collection::create([
            'user_id' => $user->id,
            'parent_id' => $parent?->id,
            'name' => $data['name'],
        ]);
    }

    public function getCollection(string $id)
    {
        return Collection::findOrFail($id);
    }

    public function getByParentId(string $parentId)
    {
        return Collection::where('parent_id', $parentId)->get();
    }

    public function getByUserId(string $userId)
    {
        return Collection::where('user_id', $userId)
                         ->whereNull('parent_id')
                         ->get();
    }

    public function getByUserAndParent(string $userId, string $parentId)
    {
        return Collection::where('user_id', $userId)
                         ->where('parent_id', $parentId)
                         ->get();
    }

    public function getByUserIdAndName(string $userId, string $name)
    {
        return Collection::where('user_id', $userId)
                         ->where('name', $name)
                         ->firstOrFail();
    }

    public function updateCollection(array $data, string $id)
    {
        $collection = Collection::findOrFail($id);
        $collection->update([
            'name' => $data['name']
        ]);

        return $collection;
    }

    public function deleteById(string $id)
    {
        Collection::findOrFail($id)->delete();
    }
}