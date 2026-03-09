<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthenticationRequest as RequestsAuthenticationRequest;
use App\Http\Requests\RegisterUserRequest as RequestsRegisterUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException as ValidationValidationException;
use League\Config\Exception\ValidationException;
use Nette\Schema\ValidationException as SchemaValidationException;

class AuthController extends Controller
{
    public function login(RequestsAuthenticationRequest $request)
    {
        $user = User::where('username', $request->username)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
        return response()->json([
            'token' => $user->createToken($request->device_name)->plainTextToken
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
