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
	// officers routes
	Route::get('get-officers', 'ApplicationController@get_officers');
	Route::post('add-officer', 'ApplicationController@add_officer');
	Route::post('update-officer', 'ApplicationController@update_officer');

	// supervisors routes
	Route::get('get-supervisors', 'ApplicationController@get_supervisors');
	Route::post('add-supervisor', 'ApplicationController@add_supervisor');
	Route::post('update-supervisor', 'ApplicationController@update_supervisor');
	// admins routes
	Route::get('get-admins', 'ApplicationController@get_admins');
	Route::post('add-admin', 'ApplicationController@add_admin');
	Route::post('update-admin', 'ApplicationController@update_admin');
	// Customers
	Route::post('add-customer', 'ApplicationController@add_customer');
	Route::get('get-customers', 'ApplicationController@get_customers');
	Route::post('update-customer', 'ApplicationController@update_customer');

});
Route::get('/{any}', 'ApplicationController')->where('any', '.*');
