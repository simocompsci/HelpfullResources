<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\ResourceController;
use Illuminate\Routing\Route;

Route::prefix('v1')->group(function () {

    Route::apiResource('users', UserController::class);
    Route::apiResource('collections', CollectionController::class);
    Route::apiResource('resources', ResourceController::class);

    // Custom routes
    Route::get('users/{userId}/collections', [CollectionController::class, 'getByUser']);
    Route::get('users/{userId}/collections/{parentId}', [CollectionController::class, 'getByUserAndParent']);

    Route::get('users/{userId}/resources', [ResourceController::class, 'getUserResources']);
    Route::get('users/{userId}/collections/{collectionId}/resources', [ResourceController::class, 'getByUserAndCollection']);

});