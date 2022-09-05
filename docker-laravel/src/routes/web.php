<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/sample', function () {
    return view('sample');
});

// (SPAクッキー認証）ユーザー登録 / ログイン / ログアウト
Route::post('/api-register', [\App\Http\Controllers\ApiAuthController::class, 'register']);
Route::post('/api-login'   , [\App\Http\Controllers\ApiAuthController::class, 'login']);
Route::post('/api-logout'   , [\App\Http\Controllers\ApiAuthController::class, 'logout']);

