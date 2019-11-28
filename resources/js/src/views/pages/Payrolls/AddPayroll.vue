<template>
	<div>
        <vx-card title="Add Employee" subtitle="Add Information Of Customer OR company's Employee which payrolls will be managed by system" noShadow noRadius>
            <form autocomplete="off" ref="addEmployeeForm" @submit.prevent="addEmployee($event)">
            	<vs-row>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="nssf_num" v-validate="`required`" label-placeholder="NSSF NO." :disabled="true" :value="employeeVal.nssf_num" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="employee_num" v-validate="`required`" label-placeholder="Employee NO." :disabled="true" :value="employeeVal.employee_num" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('employee_num')">{{errors.first('employee_num')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="name_eng" v-validate="`required`" label-placeholder="Name (English)" :disabled="true" :value="employeeVal.name_eng" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('name_eng')">{{errors.first('name_eng')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="name_khmer" v-validate="`required`" label-placeholder="Name (Khmer)" :disabled="true" :value="employeeVal.name_khmer" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('name_khmer')">{{errors.first('name_khmer')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="nationality" v-validate="`required`" label-placeholder="Nationality" :disabled="true" :value="employeeVal.nationality" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('nationality')">{{errors.first('nationality')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="dob" v-validate="`required`" label-placeholder="dob" :disabled="true" :value="employeeVal.dob" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('dob')">{{errors.first('dob')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="joining_date" v-validate="`required`" label-placeholder="Joining Date" :disabled="true" :value="employeeVal.joining_date" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('joining_date')">{{errors.first('joining_date')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="position" v-validate="`required`" label-placeholder="Position" :disabled="true" :value="employeeVal.position" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('position')">{{errors.first('position')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="sex" v-validate="`required`" label-placeholder="Sex" :disabled="true" :value="employeeVal.sex" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('sex')">{{errors.first('sex')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="contract_type" v-validate="`required`" label-placeholder="Contract Type" :disabled="true" :value="employeeVal.contract_type" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('contract_type')">{{errors.first('contract_type')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="spouse" v-validate="`required`" label-placeholder="spouse" :disabled="true" :value="employeeVal.spouse" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('spouse')">{{errors.first('spouse')}}</span>
            		</vs-col>
            	</vs-row>
            	<vs-row>
            		<vs-col class="text-center" vs-lg='12' vs-md='12'>
            			<vs-col class="text-center" vs-md="12" vs-lg="12">
            				<vs-button button="submit" class="mt-5" type="gradient">Save</vs-button>
            			</vs-col>
            			<vs-col class="text-center" vs-md="12" vs-lg="12">
            			<vs-button class="mt-5" type="gradient" button="button">Upload Excel Sheet</vs-button>
            		</vs-col>	
            		</vs-col>
            	</vs-row>

            </form>
        </vx-card>
        <vs-popup :active.sync="selectEmployeeModal" title="Select Employee">
        	<vx-input-group>
        		<vs-select   width="100%" placeholder="Search and select" class="selectExample" label="Employees" label-placeholder="Select Employee" v-model="employee">
                    <vs-select-item value="" :disabled="true" text="Select Employee"></vs-select-item>
                    <vs-select-item :key="index" :value="item.employee_id" :text="item.name_english" v-for="(item,index) in employees" />
                </vs-select>
            </vx-input-group>

                <vs-button @click="getEmployee" class="mt-base float-right">
                	Select Employee
                </vs-button>
        </vs-popup>
    </div>
</template>
<script>
	import {mapState,mapActions,mapGetters} from 'vuex';
	export default{
		data () {
		  return {
		    tax_customer_id:'',
		    selectEmployeeModal: true,
		    employee : '',
		    buttonClicked : false,
		    employeeVal : {},
		  };
		},
		created(){
			this.tax_customer_id = this.$store.state.rootUrl.split('/')[2];
			this.getEmployees(this.tax_customer_id)
		},
		computed: {
		  	...mapState('employees/',['employees']),
		  	...mapGetters('employees/',['findEmployee']),
		},
		watch: {
		  selectEmployeeModal(val, oldVal){
		  	alert(this.buttonClicked)
		  	if((this.buttonClicked == false &&  this.employee == '') || (this.buttonClicked == false &&  this.employee != '')){
		  		this.selectEmployeeModal = true;
		  	} 
		  }
		},
		methods: {
			...mapActions({
				create : 'employees/create',
				getEmployees : 'employees/getActiveEmployees'
			}),
			getEmployee(){
				if(this.employee != ''){

				var employee = this.findEmployee(this.employee);
				this.employeeVal = employee;
				}
		  },
		  addEmployee (e) {
		    this.$validator.validateAll().then(result=>{
		    	if(result){
		    		this.$vs.loading();
		    		let fd = new FormData(this.$refs.addEmployeeForm); 
		    		fd.append('customer_id',this.tax_customer_id);
		    		let data = {
		    			fd : fd,
		    			close : this.$vs.loading.close,
		    			notify : this.$vs.notify,
		    		};
		    		self = this;
		    		this.create(data).then(function(res){
		    			if(res.data.status == 'success'){
		    self.nssf_num = self.employee_num = self.name_khmer = self.name_eng = self.nationality = self.joining_date = self.position = self.sex = self.contract_type = self.spouse = '';
		    				e.target.reset();
		    				self.$validator.reset();
		    			}
		    		});
		    	}
		    })
		  }
		}

	}
</script>