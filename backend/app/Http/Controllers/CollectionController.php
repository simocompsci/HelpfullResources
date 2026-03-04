<?php

namespace App\Http\Controllers;

use App\Services\CollectionService;
use App\Http\Requests\CreateCollectionRequest;
use App\Http\Requests\UpdateCollectionRequest;
use App\Http\Resources\CollectionResource;

class CollectionController extends Controller
{
    private CollectionService $collectionService;

    public function __construct(CollectionService $collectionService)
    {
        $this->collectionService = $collectionService;
    }

    public function index()
    {
        return CollectionResource::collection(
            $this->collectionService->getCollections()
        );
    }

    public function show(string $id)
    {
        return new CollectionResource(
            $this->collectionService->getCollection($id)
        );
    }

    public function store(CreateCollectionRequest $request)
    {
        $collection = $this->collectionService
            ->addCollection($request->validated());

        return new CollectionResource($collection);
    }

    public function getByUser(string $userId)
    {
        return CollectionResource::collection(
            $this->collectionService->getByUserId($userId)
        );
    }

    public function getByUserAndParent(string $userId, string $parentId)
    {
        return CollectionResource::collection(
            $this->collectionService->getByUserAndParent($userId, $parentId)
        );
    }

    public function update(UpdateCollectionRequest $request, string $id)
    {
        $collection = $this->collectionService
            ->updateCollection($request->validated(), $id);

        return new CollectionResource($collection);
    }

    public function destroy(string $id)
    {
        $this->collectionService->deleteById($id);

        return response()->json(null, 204);
    }
}