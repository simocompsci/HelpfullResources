<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Str;

class UserService
{
    public function createAdmin(array $data): User
    {
        return User::create([
            'id' => Str::uuid(),
            'firstname' => $data['firstname'],
            'lastname' => $data['lastname'],
            'username' => $data['username'],
            'email' => $data['email'],
            'role' => 'ADMIN',
            'password' => Hash::make($data['password']),
        ]);
    }

    public function createUser(array $data): User
    {
        return User::create([
            'id' => Str::uuid(),
            'firstname' => $data['firstname'],
            'lastname' => $data['lastname'],
            'username' => $data['username'],
            'email' => $data['email'],
            'role' => 'USER',
            'password' => Hash::make($data['password']),
        ]);
    }

    public function getUsers()
    {
        return User::all();
    }

    public function getUser(string $id): User
    {
        return User::findOrFail($id);
    }

    public function updateUser(array $data, string $id): User
    {
        $user = User::findOrFail($id);

        if ($user->email !== $data['email']) {
            if (User::where('email', $data['email'])->exists()) {
                throw new \Exception("Email already in use");
            }
        }

        $user->update([
            'username' => $data['username'],
        ]);

        return $user;
    }

    public function deleteUser(string $id): void
    {
        User::findOrFail($id)->delete();
    }
}