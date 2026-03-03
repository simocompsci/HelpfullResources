<?php

namespace App\Http\Controllers;

use App\Services\ResourceService;
use App\Http\Requests\CreateResourceRequest;
use App\Http\Requests\UpdateResourceRequest;
use Illuminate\Http\Request;

class ResourceController extends Controller
{
    private ResourceService $resourceService;

    public function __construct(ResourceService $resourceService)
    {
        $this->resourceService = $resourceService;
    }

    public function index(Request $request)
    {
        return response()->json(
            $this->resourceService->getResources(
                $request->get('page', 1),
                $request->get('per_page', 20)
            )
        );
    }

    public function show(string $id)
    {
        return response()->json(
            $this->resourceService->getResource($id)
        );
    }

    public function store(CreateResourceRequest $request)
    {
        return response()->json(
            $this->resourceService->addResource($request->validated()),
            201
        );
    }

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

    public function getByUserAndCollection(string $userId, string $collectionId)
    {
        return response()->json(
            $this->resourceService->getByUserAndCollection($userId, $collectionId)
        );
    }

    public function update(UpdateResourceRequest $request, string $id)
    {
        return response()->json(
            $this->resourceService->updateResource($request->validated(), $id)
        );
    }

    public function destroy(string $id)
    {
        $this->resourceService->deleteById($id);
        return response()->json(null, 204);
    }
}