<?php

namespace App\Http\Controllers;

use App\Services\ResourceService;
use App\Http\Requests\CreateResourceRequest;
use App\Http\Requests\UpdateResourceRequest;
use App\Http\Resources\ResourceResource;
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
        $resources = $this->resourceService->getResources(
            $request->get('page', 1),
            $request->get('per_page', 20)
        );

        return ResourceResource::collection($resources);
    }

    public function show(string $id)
    {
        return new ResourceResource(
            $this->resourceService->getResource($id)
        );
    }

    public function store(CreateResourceRequest $request)
    {
        $resource = $this->resourceService
            ->addResource($request->validated());

        return new ResourceResource($resource);
    }

    public function getUserResources(Request $request, string $userId)
    {
        $resources = $this->resourceService->getAllUserResources(
            $userId,
            $request->query('title'),
            $request->query('type')
        );

        return ResourceResource::collection($resources);
    }

    public function getByUserAndCollection(string $userId, string $collectionId)
    {
        return ResourceResource::collection(
            $this->resourceService
                ->getByUserAndCollection($userId, $collectionId)
        );
    }

    public function update(UpdateResourceRequest $request, string $id)
    {
        $resource = $this->resourceService
            ->updateResource($request->validated(), $id);

        return new ResourceResource($resource);
    }

    public function destroy(string $id)
    {
        $this->resourceService->deleteById($id);

        return response()->json(null, 204);
    }
}