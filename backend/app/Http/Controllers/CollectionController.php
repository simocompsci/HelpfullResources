<?php

namespace App\Http\Controllers;

use App\Services\CollectionService;
use App\Http\Requests\CreateCollectionRequest;
use App\Http\Requests\UpdateCollectionRequest;

class CollectionController extends Controller
{
    private CollectionService $collectionService;

    public function __construct(CollectionService $collectionService)
    {
        $this->collectionService = $collectionService;
    }

    public function index()
    {
        return response()->json(
            $this->collectionService->getCollections()
        );
    }

    public function show(string $id)
    {
        return response()->json(
            $this->collectionService->getCollection($id)
        );
    }

    public function store(CreateCollectionRequest $request)
    {
        return response()->json(
            $this->collectionService->addCollection($request->validated()),
            201
        );
    }

    public function getByUser(string $userId)
    {
        return response()->json(
            $this->collectionService->getByUserId($userId)
        );
    }

    public function getByUserAndParent(string $userId, string $parentId)
    {
        return response()->json(
            $this->collectionService->getByUserAndParent($userId, $parentId)
        );
    }

    public function update(UpdateCollectionRequest $request, string $id)
    {
        return response()->json(
            $this->collectionService->updateCollection($request->validated(), $id)
        );
    }

    public function destroy(string $id)
    {
        $this->collectionService->deleteById($id);
        return response()->json(null, 204);
    }
}