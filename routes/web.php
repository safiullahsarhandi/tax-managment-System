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

	Route::post('login', 'ApplicationController@login');
	// officers routes
	Route::get('get-officers', 'ApplicationController@get_officers');
	Route::post('add-officer', 'ApplicationController@add_officer');
	Route::post('update-officer', 'ApplicationController@update_officer');
	Route::post('status-update-officer', 'ApplicationController@status_update_officer');

	// supervisors routes
	Route::get('get-supervisors', 'ApplicationController@get_supervisors');
	Route::post('add-supervisor', 'ApplicationController@add_supervisor');
	Route::post('update-supervisor', 'ApplicationController@update_supervisor');
	Route::post('status-update-supervisor', 'ApplicationController@status_update_supervisor');

	// admins routes
	Route::get('get-admins', 'ApplicationController@get_admins');
	Route::post('add-admin', 'ApplicationController@add_admin');
	Route::post('update-admin', 'ApplicationController@update_admin');
	Route::post('status-update-admin', 'ApplicationController@status_update_admin');

	// Customers
	Route::post('add-customer', 'ApplicationController@add_customer');
	Route::get('get-customers', 'ApplicationController@get_customers');
	Route::get('get-customer', 'ApplicationController@get_customer');
	Route::post('get-customer-profile', 'ApplicationController@get_customer_profile');
	Route::post('update-customer', 'ApplicationController@update_customer');
	Route::post('status-update-customer', 'ApplicationController@status_update_customer');

	// Customers
	Route::post('add-employee', 'ApplicationController@add_employee');
	Route::get('get-employees', 'ApplicationController@get_employees');
	Route::post('get-employee', 'ApplicationController@get_employee');
	Route::get('get-active-employees', 'ApplicationController@get_active_employees');
	Route::post('update-employee', 'ApplicationController@update_employee');
	Route::post('status-update-employee', 'ApplicationController@status_update_employee');

	// Tax
	Route::post('add-tax', 'ApplicationController@add_tax');
	Route::get('get-taxes', 'ApplicationController@get_taxes');
	Route::post('update-tax', 'ApplicationController@update_tax');
	Route::post('status-update-tax', 'ApplicationController@status_update_tax');

	// Exchange Rates
	Route::get('get-exchange-rates', 'ApplicationController@get_exchange_rates');
	Route::post('update-exchange-rates', 'ApplicationController@update_exchange_rates');

	// Currencies
	Route::get('get-currencies', 'ApplicationController@get_currencies');
	Route::post('status-update-currency', 'ApplicationController@status_update_currency');

	// Purchases
	Route::post('add-purchase', 'ApplicationController@add_purchase');
	Route::get('get-purchases', 'ApplicationController@get_purchases');
	Route::post('get-single-purchase', 'ApplicationController@get_purchase');
	Route::post('update-purchase', 'ApplicationController@update_purchase');

	// Sales
	Route::post('add-sale', 'ApplicationController@add_sale');
	Route::get('get-sales', 'ApplicationController@get_sales');
	Route::post('get-single-sale', 'ApplicationController@get_sale');
	Route::post('update-sale', 'ApplicationController@update_sale');

	// Payrolls
	Route::post('add-payroll', 'ApplicationController@add_payroll');
	Route::post('get-payrolls', 'ApplicationController@get_payrolls');


	Route::get('logout', 'ApplicationController@logout');

});
Route::get('/{any}', 'ApplicationController')->where('any', '.*');
