<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use App\Http\Requests\RegisterUserRequest;
use App\Http\Requests\UpdateUserRequest;

class UserController extends Controller
{
    private UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    // GET /api/users
    public function index()
    {
        return response()->json(
            $this->userService->getUsers()
        );
    }

    // GET /api/users/{id}
    public function show(string $id)
    {
        return response()->json(
            $this->userService->getUser($id)
        );
    }

    // POST /api/users
    public function store(RegisterUserRequest $request)
    {
        return response()->json(
            $this->userService->createUser($request->validated()),
            201
        );
    }

    // PUT /api/users/{id}
    public function update(UpdateUserRequest $request, string $id)
    {
        return response()->json(
            $this->userService->updateUser($request->validated(), $id)
        );
    }

    // DELETE /api/users/{id}
    public function destroy(string $id)
    {
        $this->userService->deleteUser($id);
        return response()->json(null, 204);
    }
}