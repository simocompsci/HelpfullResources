<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthenticationRequest as RequestsAuthenticationRequest;
use App\Http\Requests\RegisterUserRequest as RequestsRegisterUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException as ValidationValidationException;
use League\Config\Exception\ValidationException;
use Nette\Schema\ValidationException as SchemaValidationException;

class AuthController extends Controller
{
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

    public function register(RequestsRegisterUserRequest $request) {}

    public function logout() {}

    public function me() {}


    // will probably add these later
    // logoutAll()	POST /auth/logout-all	revoke all tokens
    // refreshToken()	POST /auth/refresh	issue new token
    // changePassword()	POST /auth/change-password	update password
    // forgotPassword()	POST /auth/forgot-password	send reset email
    // resetPassword()  POST /auth/reset-password   reset password


}
