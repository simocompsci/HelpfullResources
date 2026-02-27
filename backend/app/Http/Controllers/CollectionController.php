<?php

namespace App\Http\Controllers;

use App\Services\CollectionService;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    private CollectionService $collectionService;

    public function __construct(CollectionService $collectionService)
    {
        $this->collectionService = $collectionService;
    }

    // GET /api/collections
    public function index()
    {
        return response()->json(
            $this->collectionService->getCollections()
        );
    }

    // GET /api/collections/{id}
    public function show(string $id)
    {
        return response()->json(
            $this->collectionService->getCollection($id)
        );
    }

    // POST /api/collections
    public function store(Request $request)
    {
        return response()->json(
            $this->collectionService->addCollection($request->all()),
            201
        );
    }

    // GET /api/users/{userId}/collections
    public function getByUser(string $userId)
    {
        return response()->json(
            $this->collectionService->getByUserId($userId)
        );
    }

    // GET /api/users/{userId}/collections/{parentId}
    public function getByUserAndParent(string $userId, string $parentId)
    {
        return response()->json(
            $this->collectionService->getByUserAndParent($userId, $parentId)
        );
    }

    // PUT /api/collections/{id}
    public function update(Request $request, string $id)
    {
        return response()->json(
            $this->collectionService->updateCollection($request->all(), $id)
        );
    }

    // DELETE /api/collections/{id}
    public function destroy(string $id)
    {
        $this->collectionService->deleteById($id);
        return response()->json(null, 204);
    }
}