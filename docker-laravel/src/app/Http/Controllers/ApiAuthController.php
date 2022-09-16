<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Models\User;
use \Symfony\Component\HttpFoundation\Response;

class ApiAuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'        => 'required',
            'email'       => 'required|email',
            'password'    => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json('validation error', Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        User::create([
            'name' =>  $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json('User registration completed', Response::HTTP_OK);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // ● cookie
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return new JsonResponse(['message' => 'your login attempt was successful']);
        }
        if ( env('APP_ENV') === 'local' ){
            $email = $request->get('email');
            $password = $request->get('password');
            # return response()->json("User Not Found or password doesn't match. (email:{$email})(password:{$password}) ", Response::HTTP_INTERNAL_SERVER_ERROR);
            return response()->json("User Not Found or password doesn't match.", Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        else {
            return response()->json("User Not Found or password doesn't match.", Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        // ● token
        // if (Auth::attempt($credentials)) {
        //     $user = User::whereEmail($request->email)->first();

        //     $user->tokens()->delete();
        //     $token = $user->createToken("login:user{$user->id}")->plainTextToken;

        //     return response()->json(['token' => $token], Response::HTTP_OK);
        // }
        // return response()->json("User Not Found or password don't match.", Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function logout (Request $request) {
        Auth::logout($request);
        return response(['message' => 'You have been successfully logged out.'], 200);
    }
}