<?php

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
Route::group(['prefix' => ''], function () {
	Route::get('get-officers', 'ApplicationController@get_officers');
	Route::post('add-officer', 'ApplicationController@add_officer');
	Route::post('update-officer', 'ApplicationController@update_officer');
});
Route::get('/{any}', 'ApplicationController')->where('any', '.*');
