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

	Route::get('get-dashboard-data', 'ApplicationController@get_dashboard_data');
	Route::get('get-average-rate', 'ApplicationController@get_average_rate');
	Route::get('login-user', 'ApplicationController@get_login_user');
	Route::post('login', 'ApplicationController@login');

	// officers routes
	Route::get('get-officers', 'ApplicationController@get_officers');
	Route::get('get-my-officers', 'ApplicationController@get_my_officers');
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
	Route::get('get-member-detail/{id}', 'ApplicationController@get_member_detail');

	Route::post('add-admin', 'ApplicationController@add_admin');
	Route::post('update-admin', 'ApplicationController@update_admin');
	Route::post('status-update-admin', 'ApplicationController@status_update_admin');

	// Owners
	Route::get('get-owners', 'ApplicationController@get_owners');
	Route::post('add-owner', 'ApplicationController@add_owner');
	Route::post('update-owner', 'ApplicationController@update_owner');

	// Customers
	Route::post('add-customer', 'ApplicationController@add_customer');
	Route::post('add-multiple-customer', 'ApplicationController@add_multiple_customer');

	Route::get('get-customers', 'ApplicationController@get_customers');
	Route::get('get-customer', 'ApplicationController@get_customer');
	Route::post('get-customer-profile', 'ApplicationController@get_customer_profile');
	Route::post('update-customer', 'ApplicationController@update_customer');
	Route::post('status-update-customer', 'ApplicationController@status_update_customer');
	Route::post('update-customer-status', 'ApplicationController@update_customer_status');

	// Customers
	Route::post('add-employee', 'ApplicationController@add_employee');
	Route::get('get-employees', 'ApplicationController@get_employees');
	Route::post('get-employee', 'ApplicationController@get_employee');
	Route::get('get-active-employees', 'ApplicationController@get_active_employees');
	Route::post('update-employee', 'ApplicationController@update_employee');
	Route::post('status-update-employee', 'ApplicationController@status_update_employee');
	Route::post('add-multiple-employees/{id}', 'ApplicationController@add_multiple_employee');

	// Tax
	Route::post('add-tax', 'ApplicationController@add_tax');
	Route::post('add-parameter', 'ApplicationController@add_parameter');
	Route::post('update-parameter', 'ApplicationController@update_parameter');
	Route::post('update-tax', 'ApplicationController@update_tax');
	Route::get('get-taxes', 'ApplicationController@get_taxes');
	Route::get('get-parameters', 'ApplicationController@get_parameters');
	Route::get('get-tax', 'ApplicationController@get_tax');
	Route::get('get-tax-team', 'ApplicationController@get_tax_team');
	Route::post('update-tax-team', 'ApplicationController@update_tax_team');
	Route::post('tax/get-tax', 'ApplicationController@get_edittax');

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
	Route::post('get-purchase', 'ApplicationController@get_purchase');
	Route::get('get-pending-purchases', 'ApplicationController@get_pending_purchases');
	Route::post('get-single-purchase', 'ApplicationController@get_purchase');
	Route::post('update-purchase', 'ApplicationController@update_purchase');
	Route::post('add-multiple-purchases/{customer_id}/{tax_id}/{type}/{userLoginId}', 'ApplicationController@add_multiple_purchases');

	// Sales
	Route::post('add-sale', 'ApplicationController@add_sale');
	Route::get('get-sales', 'ApplicationController@get_sales');
	Route::get('get-sale', 'ApplicationController@get_sale');
	Route::post('get-comments', 'ApplicationController@get_comments');
	Route::post('send-comment', 'ApplicationController@send_comment');

	Route::get('get-pending-sales', 'ApplicationController@get_pending_sales');
	Route::post('get-single-sale', 'ApplicationController@get_sale');
	Route::post('update-sale', 'ApplicationController@update_sale');
	Route::post('add-multiple-sales/{customer_id}/{tax_id}/{type}/{userLoginId}', 'ApplicationController@add_multiple_sales');

	// Payrolls
	Route::post('add-payroll', 'ApplicationController@add_payroll');
	Route::get('get-payrolls', 'ApplicationController@get_payrolls');
	Route::get('get-pending-payrolls', 'ApplicationController@get_pending_payrolls');
	Route::post('get-payroll', 'ApplicationController@get_payroll');
	Route::post('update-payroll', 'ApplicationController@update_payroll');
	Route::post('add-multiple-payrolls/{employee_id}/{tax_id}/{type}/{userLoginId}', 'ApplicationController@add_multiple_payrolls');

	Route::post('status-update-spp', 'ApplicationController@status_updateSPP');
	Route::post('status-change-management', 'ApplicationController@status_change_management');

	Route::get('logout', 'ApplicationController@logout');

	Route::post('change-password', 'ApplicationController@change_password');

	Route::get('vat-one', 'ApplicationController@vat_one');
	Route::get('ppt-one', 'ApplicationController@ppt_one');
	// Route::get('pdf2', 'ApplicationController@invoice2');

	Route::post('forgot-password', 'ApplicationController@forgot_password');
	Route::post('verify-code-and-change-password', 'ApplicationController@verify_code_change_password');

	Route::post('search-data', 'ApplicationController@search_data');

	Route::get('export-customers', 'ExportController@export_customers');
	Route::get('export-team-members', 'ExportController@export_team_members');
	Route::get('export-payroll/{customer_id}/{tax_id}', 'ExportController@export_payroll');
	Route::get('export-purchases/{customer_id}/{tax_id}', 'ExportController@export_purchases');
	Route::get('export-sales/{customer_id}/{tax_id}', 'ExportController@export_sales');
	Route::get('export-customer-employees/{customer_id}', 'ExportController@export_customer_employees');
	Route::post('get-faqs', 'ApplicationController@get_faqs');
	Route::post('update-faqs', 'ApplicationController@update_faqs');

	Route::get('get-notifications', 'ApplicationController@get_notifications');
	Route::post('mark-as-read', 'ApplicationController@mark_as_read');
	Route::post('sendTokenToServer', 'ApplicationController@sendTokenToServer');
	Route::get('testingGoogleAuth', 'ApplicationController@testingGoogleAuth');

	Route::post('delete-spp', 'ApplicationController@deleteSpp');
});
Route::get('/{any}', 'ApplicationController')->where('any', '.*');
