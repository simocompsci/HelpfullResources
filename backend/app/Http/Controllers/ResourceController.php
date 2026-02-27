<?php

namespace App\Http\Controllers;

use App\Services\ResourceService;
use Illuminate\Http\Request;

class ResourceController extends Controller
{
    private ResourceService $resourceService;

    public function __construct(ResourceService $resourceService)
    {
        $this->resourceService = $resourceService;
    }

    // GET /api/resources?page=1&per_page=20
    public function index(Request $request)
    {
        return response()->json(
            $this->resourceService->getResources(
                $request->get('page', 1),
                $request->get('per_page', 20)
            )
        );
    }

    // GET /api/resources/{id}
    public function show(string $id)
    {
        return response()->json(
            $this->resourceService->getResource($id)
        );
    }

    // POST /api/resources
    public function store(Request $request)
    {
        return response()->json(
            $this->resourceService->addResource($request->all()),
            201
        );
    }

    // GET /api/users/{userId}/resources?title=...&type=...
    public function getUserResources(Request $request, string $userId)
    {
        return response()->json(
            $this->resourceService->getAllUserResources(
                $userId,
                $request->query('title'),
                $request->query('type')
            )
        );
    }

    // GET /api/users/{userId}/collections/{collectionId}/resources
    public function getByUserAndCollection(string $userId, string $collectionId)
    {
        return response()->json(
            $this->resourceService->getByUserAndCollection($userId, $collectionId)
        );
    }

    // PUT /api/resources/{id}
    public function update(Request $request, string $id)
    {
        return response()->json(
            $this->resourceService->updateResource($request->all(), $id)
        );
    }

    // DELETE /api/resources/{id}
    public function destroy(string $id)
    {
        $this->resourceService->deleteById($id);
        return response()->json(null, 204);
    }
}