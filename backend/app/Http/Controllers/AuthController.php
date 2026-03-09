<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthenticationRequest as RequestsAuthenticationRequest;
use App\Http\Requests\RegisterUserRequest as RequestsRegisterUserRequest;
use App\Models\User;
use AuthenticationRequest;
use Illuminate\Http\Request;
use RegisterUserRequest;

class AuthController extends Controller
{
    public function login(RequestsAuthenticationRequest $request){
        $user = User::where('username' , $request->username)->first();
    }

    public function register(RequestsRegisterUserRequest $request){}

    public function logout(){}

    public function me(){}


    // will probably add these later
    // logoutAll()	POST /auth/logout-all	revoke all tokens
    // refreshToken()	POST /auth/refresh	issue new token
    // changePassword()	POST /auth/change-password	update password
    // forgotPassword()	POST /auth/forgot-password	send reset email
    // resetPassword()  POST /auth/reset-password   reset password
}
