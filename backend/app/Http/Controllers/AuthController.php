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
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'data' => [
                'user' => new UserResource($user),
                'message' => 'Login success',
                'access_token' => 'Bearer ' . $token,
            ]
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
