<template>
	<div>
		<!-- {{ typrOf(searchedData) }} -->
		<div v-for="item,indextr in searchedData">
			
			<vx-card v-if="item.result.table_name == 'tax_customers'" class="mt-3" style="width: 100%; height: 100px">
				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)">
				{{ item.result.name_english+ ' ' + item.result.name_khmer+ ' ' + item.result.address+ ' ' + '(Customer)' }}</a>

				<p style="font-size: 12px">
					{{ item.result.street + ' ' + item.result.sangkat+ ' ' + item.result.district+ ' ' + item.result.province + ' ' + item.result.muncipality + ' ' + item.result.industry+ ' ' + item.result.incorporation_date+ ' ' + item.result.village+ ' ' + item.result.telephone+ ' ' + item.result.tax_duration }}
				</p>


				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result))">
					tax-managemet{{ makeUrl(item.result) }}
				</a>
			</vx-card>

			<vx-card v-if="item.result.table_name == 'tax_management'" class="mt-3" style="width: 100%; height: 100px">

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)">
				{{ item.result.title+ ' ' + item.result.description+ ' ' + '(Tax)' }}</a>

				<p style="font-size: 12px">
					{{ item.result.title + ' ' + item.result.description+ ' ' + item.result.duration+ ' ' + item.result.type }}
				</p>

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result))">
					tax-managemet{{ makeUrl(item.result) }}
				</a>	
			</vx-card>

			<vx-card v-if="item.result.table_name == 'tax_managers'" class="mt-3" style="width: 100%; height: 100px">

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)">
				{{ item.result.full_name+ ' ' + item.result.email+ ' ' + '(Tax Manager '+ item.result.type +' )' }}</a>

				<p style="font-size: 12px">
					{{ item.result.full_name + ' ' + item.result.gender+ ' ' + item.result.email+ ' ' + item.result.phone + ' ' + item.result.type+ ' ' + item.result.address+ ' ' + item.result.state+ ' ' + item.result.city+ ' ' + item.result.zip_code}}
				</p>

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result))">
					tax-managemet{{ makeUrl(item.result) }}
				</a>
			</vx-card>

			<vx-card v-if="item.result.table_name == 'customers_employees'" class="mt-3" style="width: 100%; height: 100px">

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)" >
				{{ item.result.name_english+ ' ' + item.result.name_khmer + ' ' + item.result.nationality}}</a>

				<p style="font-size: 12px">
					{{ item.result.name_english + ' ' + item.result.employee_num+ ' ' + item.result.nssf_num+ ' ' + item.result.dob + ' ' + item.result.position+ ' ' + item.result.joining_date+ ' ' + item.result.sex+ ' ' + item.result.contract_type+ ' ' + item.result.spouse}}
				</p>

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result))">
					tax-managemet{{ makeUrl(item.result) }}
				</a>
			</vx-card>

			<vx-card v-if="item.result.table_name == 'sales'" class="mt-3" style="width: 100%; height: 100px">

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)">
				{{ item.result.account_description+ ' ' + item.result.accounting_reference + ' ' + item.result.account_code}} ( Sales )</a>

				<p style="font-size: 12px">
					{{ item.result.account_description + ' ' + 
					   item.result.accounting_reference+ ' ' + 
					   item.result.account_code+ ' ' + 
					   item.result.signature_date+ ' ' + 
					   item.result.branch_name + ' ' + 
					   item.result.tax_period+ ' ' +
					   item.result.invoice_date+ ' ' + 
					   item.result.invoice_num+ ' ' + 
					   item.result.description+ ' ' + 
					   item.result.quantity+ ' ' +
					   item.result.non_taxable_sales+ ' ' + 
					   item.result.vat+ ' ' + 
					   item.result.taxable_person_sales+ ' ' + 
					   item.result.taxable_person_vat+ ' ' + 
					   item.result.cust_sales_vat+ ' ' + 
					   item.result.total_taxable_value+ ' ' + 
					   item.result.taxes_subject+ ' ' + 
					   item.result.comments+ ' ' + 
					   item.result.client_response+ ' ' + 
					   item.result.top_comments
					}}
				</p>

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result))">
					tax-managemet{{ makeUrl(item.result) }}
				</a>	
			</vx-card>

			<vx-card v-if="item.result.table_name == 'purchases'" class="mt-3" style="width: 100%; height: 100px">

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)">
				{{ item.result.branch_name+ ' ' + item.result.description + ' ' + item.result.invoice_num }} ( Purchases ) </a>

				<p style="font-size: 12px">
					{{ item.result.branch_name + ' ' + 
					   item.result.tax_period+ ' ' +
					   item.result.invoice_date+ ' ' + 
					   item.result.invoice_num+ ' ' + 
					   item.result.description+ ' ' + 
					   item.result.quantity+ ' ' +
					   item.result.comments+ ' ' + 
					   item.result.top_comments+ ' ' +
					   item.result.client_responses+ ' ' + 
					   item.result.local_purchase_tax_val+ ' ' + 
					   item.result.local_purchase_vat+ ' ' + 
					   item.result.imports_taxable_val+ ' ' + 
					   item.result.imports_vat+ ' ' + 
					   item.result.total_vat+ ' ' + 
					   item.result.subject+ ' ' + 
					   item.result.non_taxable_purchases+ ' ' + 
					   item.result.supplier+ ' ' + 
					   item.result.vat_tin }}
				</p>
			

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result))">
					tax-managemet{{ makeUrl(item.result) }}
				</a>
					
			</vx-card>


			<vx-card v-if="item.result.table_name == 'employees_payrolls'" class="mt-3" style="width: 100%; height: 100px">

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)">
				{{ 'Basic Salary '+item.result.basic_salary+ ', Bonus ' + item.result.bonus + ', Overtime ' + item.result.over_time }} ( Payrols ) </a>

				<p style="font-size: 12px">
					{{ item.result.basic_salary + ' ' + 
					   item.result.bonus+ ' ' +
					   item.result.over_time+ ' ' + 
					   item.result.commissions+ ' ' + 
					   item.result.seniority_payment+ ' ' + 
					   item.result.severance_pay+ ' ' +
					   item.result.maternity_leave+ ' ' + 
					   item.result.paid_annual_leave+ ' ' +
					   item.result.food_allowance+ ' ' + 
					   item.result.transport_allowance+ ' ' + 
					   item.result.others+ ' ' + 
					   item.result.deduction_advance+ ' ' + 
					   item.result.salary_adjusment+ ' ' + 
					   item.result.remark }}
				</p>
			

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result))">
					tax-managemet{{ makeUrl(item.result) }}
				</a>
					
			</vx-card>

			<vx-card v-if="item.result.table_name == 'currencies'" class="mt-3" style="width: 100%; height: 100px">

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)">
				{{ item.result.country+ ' ' + item.result.currency }} ( Currency ) </a>

				<p style="font-size: 12px">
					{{ 'Country:  '+item.result.country }}
				</p>

				<p style="font-size: 12px">
					{{ 'Currency: ' + item.result.currency }}
				</p>

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" :to="'/currencies'" href="javascript:void(0)" @click="goFind(makeUrl(item.result))">
					tax-managemet{{ makeUrl(item.result) }}
				</a>
					
			</vx-card>

			<vx-card v-if="item.result.table_name == 'tax_parameters'" class="mt-3" style="width: 100%; height: 100px">

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)">
				{{ 'Description: '+item.result.english_description }} ( Tax Parameters ) </a>

				<p style="font-size: 12px">
					{{ item.result.english_description + ' ' + 
					   item.result.khmer_description+ ' ' +
					   item.result.tax_code+ ' ' + 
					   item.result.rate+ ' ' + 
					   item.result.base_tax+ ' ' + 
					   item.result.tax_type+ ' ' +
					   item.result.effective_date+ ' ' + 
					   item.result.amount_min+ ' ' +
					   item.result.amount_max+ ' ' + 
					   item.result.remarks }}
				</p>
			
				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result))">
					tax-managemet{{ makeUrl(item.result) }}
				</a>
					
			</vx-card>


		</div>	
		<h1 style="margin-top: 10%; text-align: center; color: #909090" v-if="msg">  No record found! </h1>
	</div>
</template>

<script>
export default{
	
	data() {
		return {
			searchedRecord: [],
			msg: true
		}
	},
	watch: {
		searchedData: function(val){
			if(val.length <= 0){
				this.msg = true;
			}else{
				this.msg = false;
			}
		}
		
	},
	created(){

		// if(this.$store.state.searchedData.length <= 0 ){
		// 	// this.$router.go(-1);
		// 	console.log('no record found');
		// }
		// this.searchedRecord = this.$store.state.searchedData;

	},
	methods: {
		makeUrl(obj){

			if(obj.table_name == 'tax_customers'){
				localStorage.setItem('customer', obj.customer_id);
				localStorage.setItem('currentDetail', '/customer-detail/'+obj.customer_id);
				return '/customer-detail/'+obj.customer_id;
			
			}else if(obj.table_name == 'tax_management'){
				localStorage.setItem('customer', obj.customer_id);
				localStorage.setItem('currentDetail', '/customer-detail/'+obj.customer_id);
				return '/tax-collection/'+obj.tax_id;
			
			}else if(obj.table_name == 'tax_managers'){
			
				return '/member-detail/'+obj.manager_id;
			
			}else if(obj.table_name == 'customers_employees'){
			
				localStorage.setItem('customer', obj.tax_customer_id);
				localStorage.setItem('currentDetail', '/customer-detail/'+obj.customer_id);
				return '/';
			
			}else if(obj.table_name == 'sales'){
			
				localStorage.setItem('customer', obj.customer_id);
				localStorage.setItem('currentDetail', '/customer-detail/'+obj.customer_id);
				return '/sale-detail/'+obj.sale_id;
			
			}else if(obj.table_name == 'purchases'){
				
				localStorage.setItem('customer', obj.customer_id);
				localStorage.setItem('currentDetail', '/customer-detail/'+obj.customer_id);
				return '/purchase-detail/'+obj.purchase_id;

			}else if(obj.table_name == 'employees_payrolls'){
				
				localStorage.setItem('customer', obj.customer_id);
				localStorage.setItem('currentDetail', '/customer-detail/'+obj.customer_id);
				return '/payroll-detail/'+obj.payroll_id;
			
			}else if(obj.table_name == 'currencies'){
			
				return '/currencies';
			
			}else if(obj.table_name == 'tax_parameters'){
			
				return '/tax-parameters';
			
			} 

		},
		goFind(path){
			this.$router.push(path);
		}
	},
	computed:{
		searchedData() {
			return this.$store.state.searchedData;
		} 
	}
	
}
</script>