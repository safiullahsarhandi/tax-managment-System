<template>
	<div>
		<!-- {{ typrOf(searchedData) }} -->
		<div v-for="item,indextr in searchedData">
			
			<vx-card v-if="item.result.table_name == 'tax_customers'" class="mt-3 card-dimension" >
				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 1, item.result.customer_id)">

					{{ item.result.name_english!=null?'Name(english): '+item.result.name_english+' | ':'' }}
					{{ item.result.name_khmer!=null?'Name(Khmer): '+item.result.name_khmer+' | ':'' }}
					{{ item.result.address!=null?'Address: '+item.result.street:'' }}
					{{ '(Company)' }}

			</a>

				<p style="font-size: 12px">
					{{ item.result.owner!=null?'Owner Name: '+item.result.owner.name_english+', ':'' }}
					{{ item.result.owner!=null?'Owner Email: '+item.result.owner.email+', ':'' }}
					{{ item.result.street!=null?'Street: '+item.result.street+', ':'' }}
					{{ item.result.sangkat!=null?'Sangkat: '+item.result.sangkat+', ':'' }}
					{{ item.result.district!=null?'District: '+item.result.district+', ':'' }}
					{{ item.result.province!=null?'Province: '+item.result.province+', ':'' }}
					{{ item.result.muncipality!=null?'Muncipality: '+item.result.muncipality+', ':'' }}
					{{ item.result.industry!=null?'Industry: '+item.result.industry+', ':'' }}					
					{{ item.result.incorporation_date!=null?'Incorporation Date: '+item.result.incorporation_date+', ':'' }}
					{{ item.result.village!=null?'Village: '+item.result.village+', ':'' }}
					{{ item.result.telephone!=null?'Telephone: '+item.result.telephone+', ':'' }}
					{{ item.result.tax_duration!=null?'Tax Duration: '+item.result.tax_duration:'' }}

				</p>


				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 1, item.result.customer_id)">
					<vs-icon icon-pack="feather" icon="icon-map" color="primary"></vs-icon> tax-managemet{{ makeUrl(item.result) }}
				</a>
			</vx-card>

			<vx-card v-if="item.result.table_name == 'tax_management'" class="mt-3 card-dimension" >

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 1, item.result.customer_id)">

					{{ item.result.title!=null?'Title: '+item.result.title+', ':'' }}
					{{ item.result.description!=null?'Description: '+item.result.description:'' }}
					{{ '(Tax)' }}
				</a>


				<p style="font-size: 12px">
					{{ item.result.title!=null?'Title: '+item.result.title+', ':'' }}
					{{ item.result.description!=null?'Description: '+item.result.description+', ':'' }}
					{{ item.result.duration!=null?'Duration: '+item.result.duration+', ':'' }}
					{{ item.result.type!=null?'Tax Type: '+item.result.type:'' }}
				</p>

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 1, item.result.customer_id)">
					<vs-icon icon-pack="feather" icon="icon-map" color="primary"></vs-icon> tax-managemet{{ makeUrl(item.result) }}
				</a>	
			</vx-card>

			<vx-card v-if="item.result.table_name == 'tax_managers' && activeUserRole != 'Officer'" class="mt-3 card-dimension" >

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 0, null)">
					
					{{ item.result.full_name!=null?'Tax Manager Name: '+item.result.full_name+', ':'' }}
					{{ item.result.email!=null?'Email: '+item.result.email:'' }}
					{{'(Team Member)' }}
				</a>


				<p style="font-size: 12px">
					{{ item.result.full_name!=null?'Full Name: '+item.result.full_name+', ':'' }}
					{{ item.result.email!=null?'Email: '+item.result.email+', ':'' }}
					{{ item.result.gender!=null?'Gender: '+item.result.gender+', ':'' }}
					{{ item.result.phone!=null?'Phone: '+item.result.phone+', ':'' }}
					{{ item.result.address!=null?'Address: '+item.result.address+', ':'' }}
					{{ item.result.state!=null?'State: '+item.result.state+', ':'' }}
					{{ item.result.city!=null?'City: '+item.result.city+', ':'' }}
					{{ item.result.zip_code!=null?'Zip Code: '+item.result.zip_code:'' }}
				</p>

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 0, null)">
					<vs-icon icon-pack="feather" icon="icon-map" color="primary"></vs-icon> tax-managemet{{ makeUrl(item.result) }}
				</a>
			</vx-card>

			<vx-card v-if="item.result.table_name == 'customers_employees'" class="mt-3 card-dimension" >

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 1, item.result.tax_customer_id)">

					{{ item.result.name_english!=null?'Name: '+item.result.name_english+', ':'' }}
					{{ item.result.name_khmer!=null?'Name(Khmer): '+item.result.name_khmer+', ':'' }}
					{{ item.result.nationality!=null?'Nationality: '+item.result.nationality:'' }}

				</a>

				<p style="font-size: 12px">
					{{ item.result.name_english!=null?'Name: '+item.result.name_english+', ':'' }}
					{{ item.result.employee_num!=null?'Employee Number: '+item.result.employee_num+', ':'' }}
					{{ item.result.nssf_num!=null?'NSSF Number: '+item.result.nssf_num+', ':'' }}
					{{ item.result.dob!=null?'Date of birth: '+item.result.dob+', ':'' }}
					{{ item.result.position!=null?'Position: '+item.result.position+', ':'' }}
					{{ item.result.joining_date!=null?'Joining Date: '+item.result.joining_date+', ':'' }}
					{{ item.result.sex!=null?'Sex: '+item.result.sex+', ':'' }}
					{{ item.result.contract_type!=null?'Contract Type: '+item.result.contract_type+', ':'' }}
					{{ item.result.spouse!=null?'Spouse: '+item.result.spouse:'' }}
				</p>

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 1, item.result.tax_customer_id)">
					<vs-icon icon-pack="feather" icon="icon-map" color="primary"></vs-icon> tax-managemet{{ makeUrl(item.result) }}
				</a>
			</vx-card>

			<vx-card v-if="item.result.table_name == 'sales'" class="mt-3 card-dimension" >

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 1, item.result.customer_id)">

					{{ item.result.account_description!=null?'Account Description: '+item.result.account_description+', ':'' }}
					{{ item.result.accounting_reference!=null?'Accounting Reference: '+item.result.accounting_reference+', ':'' }}
					{{ item.result.account_code!=null?'Account Code: '+item.result.account_code:'' }}
					{{ "(Sales)" }}
				</a>

				<p style="font-size: 12px">
					{{ item.result.account_description!=null?'Account Description: '+item.result.account_description+', ':'' }}
					{{ item.result.accounting_reference!=null?'Accounting Reference: '+item.result.accounting_reference+', ':'' }}
					{{ item.result.account_code!=null?'Account Code: '+item.result.account_code+', ':'' }}
					{{ item.result.signature_date!=null?'Signature Date: '+item.result.signature_date+', ':'' }}
					{{ item.result.branch_name!=null?'Branch Bame: '+item.result.branch_name+', ':'' }}
					{{ item.result.tax_period!=null?'Tax Period: '+item.result.tax_period+', ':'' }}
					{{ item.result.invoice_date!=null?'Invoice Date: '+item.result.invoice_date+', ':'' }}
					{{ item.result.invoice_num!=null?'Invoice Number: '+item.result.invoice_num+', ':'' }}
					{{ item.result.description!=null?'Description: '+item.result.description+', ':'' }}
					{{ item.result.quantity!=null?'Quantity: '+item.result.quantity+', ':'' }}
					{{ item.result.non_taxable_sales!=null?'Non Taxable Sales: '+item.result.non_taxable_sales+', ':'' }}
					{{ item.result.vat!=null?'VAT: '+item.result.vat+', ':'' }}
					{{ item.result.taxable_person_sales!=null?'Taxable Person Sales: '+item.result.taxable_person_sales+', ':'' }}
					{{ item.result.taxable_person_vat!=null?'Taxable Person VAT: '+item.result.taxable_person_vat+', ':'' }}
					{{ item.result.cust_sales_vat!=null?'Customer Sales VAT: '+item.result.cust_sales_vat+', ':'' }}
					{{ item.result.total_taxable_value!=null?'Total Taxable Value: '+item.result.total_taxable_value+', ':'' }}
					{{ item.result.taxes_subject!=null?'Taxes Subject: '+item.result.taxes_subject+', ':'' }}
					{{ item.result.comments!=null?'Comments: '+item.result.comments+', ':'' }}
					{{ item.result.client_response!=null?'Client Response: '+item.result.client_response+', ':'' }}
					{{ item.result.top_comments!=null?'Top Comments: '+item.result.top_comments:'' }}

				</p>

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 1, item.result.customer_id)">
					<vs-icon icon-pack="feather" icon="icon-map" color="primary"></vs-icon> tax-managemet{{ makeUrl(item.result) }}
				</a>	
			</vx-card>

			<vx-card v-if="item.result.table_name == 'purchases'" class="mt-3 card-dimension" >

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 1, item.result.customer_id)">
					{{ item.result.branch_name!=null?'Branch Name: '+item.result.branch_name+', ':'' }}
					{{ item.result.description!=null?'Description: '+item.result.description+', ':'' }}
					{{ item.result.invoice_num!=null?'Invoice Number: '+item.result.invoice_num:'' }}
					{{ '(Purchases)' }}

				 </a>

				<p style="font-size: 12px">
					{{ item.result.branch_name!=null?'Branch Name: '+item.result.branch_name+', ':'' }}
					{{ item.result.tax_period!=null?'Tax Period: '+item.result.tax_period+', ':'' }}
					{{ item.result.invoice_date!=null?'Invoice Date: '+item.result.invoice_date+', ':'' }}
					{{ item.result.invoice_num!=null?'Invoice Number: '+item.result.invoice_num+', ':'' }}
					{{ item.result.description!=null?'Description: '+item.result.description+', ':'' }}
					{{ item.result.quantity!=null?'Quantity: '+item.result.quantity+', ':'' }}
					{{ item.result.comments!=null?'Comments: '+item.result.comments+', ':'' }}
					{{ item.result.top_comments!=null?'Top Comments: '+item.result.top_comments+', ':'' }}
					{{ item.result.client_responses!=null?'Client Responses: '+item.result.client_responses+', ':'' }}
					{{ item.result.local_purchase_tax_val!=null?'Local Purchase Tax Value: '+item.result.local_purchase_tax_val+', ':'' }}
					{{ item.result.local_purchase_vat!=null?'Local Purchase VAT: '+item.result.local_purchase_vat+', ':'' }}
					{{ item.result.imports_taxable_val!=null?'Imports Taxable Value: '+item.result.imports_taxable_val+', ':'' }}
					{{ item.result.imports_vat!=null?'Imports VAT: '+item.result.imports_vat+', ':'' }}
					{{ item.result.total_vat!=null?'Total VAT: '+item.result.total_vat+', ':'' }}
					{{ item.result.subject!=null?'Subject: '+item.result.subject+', ':'' }}
					{{ item.result.non_taxable_purchases!=null?'Non Taxable Purchases: '+item.result.non_taxable_purchases+', ':'' }}
					{{ item.result.supplier!=null?'Supplier: '+item.result.supplier+', ':'' }}
					{{ item.result.vat_tin!=null?'VAT TIN: '+item.result.vat_tin:'' }}
				</p>
			

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 1, item.result.customer_id)">
					<vs-icon icon-pack="feather" icon="icon-map" color="primary"></vs-icon> tax-managemet{{ makeUrl(item.result) }}
				</a>
					
			</vx-card>


			<vx-card v-if="item.result.table_name == 'employees_payrolls'" class="mt-3 card-dimension" >

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 1, item.result.customer_id)">

					{{ item.result.basic_salary!=null?'Basic Salary: '+item.result.basic_salary+', ':'' }}
					{{ item.result.bonus!=null?'Bonus: '+item.result.bonus+', ':'' }}
					{{ item.result.over_time!=null?'Over Time: '+item.result.over_time:'' }}
					{{ '(Payrolls)' }}

				</a>

				<p style="font-size: 12px">

					{{ item.result.basic_salary!=null?'Basic Salary: '+item.result.basic_salary+', ':'' }}
					{{ item.result.bonus!=null?'Bonus: '+item.result.bonus+', ':'' }}
					{{ item.result.over_time!=null?'Over Time: '+item.result.over_time+', ':'' }}
					{{ item.result.commissions!=null?'Commissions: '+item.result.commissions+', ':'' }}
					{{ item.result.seniority_payment!=null?'Seniority Payment: '+item.result.seniority_payment+', ':'' }}
					{{ item.result.severance_pay!=null?'Severance Pay: '+item.result.severance_pay+', ':'' }}
					{{ item.result.maternity_leave!=null?'Maternity Leave: '+item.result.maternity_leave+', ':'' }}
					{{ item.result.paid_annual_leave!=null?'Paid Annual Leave: '+item.result.paid_annual_leave+', ':'' }}
					{{ item.result.food_allowance!=null?'Food Allowance: '+item.result.food_allowance+', ':'' }}
					{{ item.result.transport_allowance!=null?'Transport Allowance: '+item.result.transport_allowance+', ':'' }}
					{{ item.result.others!=null?'Others: '+item.result.others+', ':'' }}
					{{ item.result.deduction_advance!=null?'Deduction Advance: '+item.result.deduction_advance+', ':'' }}
					{{ item.result.salary_adjusment!=null?'Salary Adjusment: '+item.result.salary_adjusment+', ':'' }}
					{{ item.result.remark!=null?'Remarks: '+item.result.remark:'' }}

				</p>
			

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 1, item.result.customer_id)">
					<vs-icon icon-pack="feather" icon="icon-map" color="primary"></vs-icon> tax-managemet{{ makeUrl(item.result) }}
				</a>
					
			</vx-card>

			<vx-card v-if="item.result.table_name == 'currencies'" class="mt-3 card-dimension" >

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 0, null)">
					{{ item.result.country!=null?'Country: '+item.result.country+', ':'' }}
					{{ item.result.currency!=null?'Currency: '+item.result.currency:'' }}
					{{ '(Currency)' }}

				</a>

				<p style="font-size: 12px">
					{{ 'Country:  '+item.result.country }}
				</p>

				<p style="font-size: 12px">
					{{ 'Currency: ' + item.result.currency }}
				</p>

				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 0, null)">
					<vs-icon icon-pack="feather" icon="icon-map" color="primary"></vs-icon> tax-managemet{{ makeUrl(item.result) }}
				</a>
					
			</vx-card>

			<vx-card v-if="item.result.table_name == 'tax_parameters'" class="mt-3 card-dimension" >

				<a style="color: #1a0dab; font-weight: bold; font-size: 12px; letter-spacing: 2px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 0, null)">
					{{ item.result.english_description!=null?'Description: '+item.result.english_description:'' }}
					{{  '(Tax Parameters)' }}

				</a>

				<p style="font-size: 12px">

					{{ item.result.english_description=null?'English Description: '+item.result.english_description+', ':'' }}
					{{ item.result.khmer_description!=null?'Khmer Description: '+item.result.khmer_description+', ':'' }}
					{{ item.result.tax_code!=null?'Tax Code: '+item.result.tax_code+', ':'' }}
					{{ item.result.rate!=null?'Rate: '+item.result.rate+', ':'' }}
					{{ item.result.base_tax!=null?'Base Tax: '+item.result.base_tax+', ':'' }}
					{{ item.result.tax_type!=null?'Tax Type: '+item.result.tax_type+', ':'' }}
					{{ item.result.effective_date!=null?'Effective Date: '+item.result.effective_date+', ':'' }}
					{{ item.result.amount_min!=null?'Minimum Amount: '+item.result.amount_min+', ':'' }}
					{{ item.result.amount_max!=null?'Maximum Amount: '+item.result.amount_max+', ':'' }}
					{{ item.result.remarks!=null?'Remarks: '+item.result.remarks:'' }}

				</p>
			
				<a style="color: #1a0dab; font-size: 11px; letter-spacing: 1px; margin-top: 15px" href="javascript:void(0)" @click="goFind(makeUrl(item.result), 0, null)">
					<vs-icon icon-pack="feather" icon="icon-map" color="primary" ></vs-icon> tax-managemet{{ makeUrl(item.result) }}
				</a>
					
			</vx-card>


		</div>	
		<h1 style="margin-top: 10%; text-align: center; color: #909090" v-if="objectLength <= 0 ">  No record found! </h1>
	</div>
</template>

<script>
export default{
	
	data() {
		return {
			searchedRecord: [],
			msg: true,
			activeUserRole: '',
			objectLength: 0

		}
	},
	
	created(){
		this.activeUserRole = this.$store.state.AppActiveUser.type;
	},
	methods: {
		getData(){
			var searchedDatalength = this.$store.state.searchedData;
			this.objectLength = Object.keys(searchedDatalength).length;
		},
		makeUrl(obj){ 

			let activeUserRole = this.$store.state.AppActiveUser.type;

			if(obj.table_name == 'tax_customers'){
				// localStorage.setItem('customer', obj.customer_id);
				// localStorage.setItem('currentDetail', '/company-detail/'+obj.customer_id);
				return '/company-detail/'+obj.customer_id;
			
			}else if(obj.table_name == 'tax_management'){
				// localStorage.setItem('customer', obj.customer_id);
				// localStorage.setItem('currentDetail', '/company-detail/'+obj.customer_id);
				return '/tax-collection/'+obj.tax_id;
			
			}else if(obj.table_name == 'tax_managers'){
			
				if(activeUserRole == 'Supervisor'){
					return '/my-team';
				}else if(activeUserRole == 'Super Admin'){
					return '/member-detail/'+obj.manager_id;
				}
			
			}else if(obj.table_name == 'customers_employees'){
			
				// localStorage.setItem('customer', obj.tax_customer_id);
				// localStorage.setItem('currentDetail', '/company-detail/'+obj.customer_id);
				return '/employees-list';
			
			}else if(obj.table_name == 'sales'){
			
				// localStorage.setItem('customer', obj.customer_id);
				// localStorage.setItem('currentDetail', '/company-detail/'+obj.customer_id);
				return '/sale-detail/'+obj.sale_id;
			
			}else if(obj.table_name == 'purchases'){
				
				// localStorage.setItem('customer', obj.customer_id);
				// localStorage.setItem('currentDetail', '/company-detail/'+obj.customer_id);
				return '/purchase-detail/'+obj.purchase_id;

			}else if(obj.table_name == 'employees_payrolls'){
				
				// localStorage.setItem('customer', obj.customer_id);
				// localStorage.setItem('currentDetail', '/company-detail/'+obj.customer_id);
				return '/payroll-detail/'+obj.payroll_id;
			
			}else if(obj.table_name == 'currencies'){
			
				return '/currencies';
			
			}else if(obj.table_name == 'tax_parameters'){
			
				return '/tax-parameters';
			
			} 

		},
		goFind(path, status, id){
			if(status == 1){
				localStorage.setItem('customer', id);
				localStorage.setItem('currentDetail', '/company-detail/'+id);
			}
			this.$router.push(path);
		}
	},
	computed:{
		searchedData() {
			this.getData();
			this.searchedDatalength = this.$store.state.searchedData;
			return this.$store.state.searchedData;
		} 
	}
	
}
</script>

<style type="text/css">
	.card-dimension{
		width: 100% !important;
		min-height: 100px !important;
	}
</style>