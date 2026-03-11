<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthenticationRequest as RequestsAuthenticationRequest;
use App\Http\Requests\RegisterUserRequest as RequestsRegisterUserRequest;
use App\Http\Resources\UserResource;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    private UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function login(RequestsAuthenticationRequest $request)
    {
        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $user = $request->user();

        return response()->json([
            'user' => new UserResource($user),
            'token' => $user->createToken('api-token')->plainTextToken
        ]);
    }

    public function register(RequestsRegisterUserRequest $request)
    {
        $user = $this->userService
            ->createUser($request->validated());

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'data' => [
                'user' => new UserResource($user),
                'token' => $token
            ],
            'message' => 'User created successfully'
        ], 201);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }

    public function me(Request $request)
    {
        return response()->json([
            'user' => new UserResource($request->user())
        ]);
    }


    // will probably add these later
    // logoutAll()	POST /auth/logout-all	revoke all tokens
    // refreshToken()	POST /auth/refresh	issue new token
    // changePassword()	POST /auth/change-password	update password
    // forgotPassword()	POST /auth/forgot-password	send reset email
    // resetPassword()  POST /auth/reset-password   reset password


}
