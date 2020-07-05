<template>
<div>
        <vx-card title="List of Employees">
            <template slot="actions">
                <vs-button :href="{url : `export-customer-employees/${tax_customer_id}`}" color="primary" type="border" icon-pack="feather" icon="icon-download"></vs-button>
            </template>
            <vs-table search pagination max-items="10" :data="employees">
                <template slot="thead">
                    <vs-th>Employee No.</vs-th>
                    <vs-th>Name(English)</vs-th>
                    <vs-th>Name(Khmer)</vs-th>
                    <vs-th>Sex</vs-th>
                    <vs-th>Joining Date</vs-th>
                    <vs-th>Position</vs-th>
                    <vs-th>Contract Type </vs-th>
                    <vs-th>Status</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">
                        <vs-td :data="tr.employee_num">{{tr.employee_num}}</vs-td>
                        <vs-td :data="tr.name_english">{{tr.name_english}}</vs-td>
                        <vs-td :data="tr.name_khmer">{{tr.name_khmer}}</vs-td>
                        <vs-td :data="tr.sex">{{tr.sex}}</vs-td>
                        <vs-td :data="tr.joining_date">{{tr.joining_date}}</vs-td>
                        <vs-td :data="tr.position">{{tr.position}}</vs-td>
                        <vs-td :data="tr.contract_type">{{tr.contract_type}}</vs-td>
                        <vs-td :data="tr.status"><vs-switch @click="statusUpdate(tr.id)" v-model="tr.status"/></vs-td>
                            
                        <vs-td>
                            <vs-button size="small" type="border" icon-pack="feather" icon="icon-edit" @click="editEmployee(tr.id)"></vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>

        <vs-popup :active.sync="editEmployeeModal" title="Update Employee">
            <form ref="editEmployeeForm" @submit.prevent="updateEmployee($event)" autocomplete="off" data-vv-scope="editform">
                <vs-row>
                    
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        
                            <input type="hidden" name="id" v-model="tax_customer_id" data-vv-scope="editform">
                            <input type="hidden" name="employee_id" v-model="employee_id" data-vv-scope="editform">
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="nssf_num" v-model="nssf_num" label-placeholder="NSSF No." data-vv-scope="editform"/>
                            <span class="text-danger" v-show="errors.has('editform.nssf_num')">{{errors.first('editform.nssf_num')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="employee_num" v-model="employee_num" label-placeholder="Employee No." data-vv-scope="editform"/>
                            <span class="text-danger" v-show="errors.has('editform.employee_num')">{{errors.first('editform.employee_num')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="name_eng" v-model="name_english" label-placeholder="Name (English)" data-vv-scope="editform"/>
                            <span class="text-danger" v-show="errors.has('editform.name_eng')">{{errors.first('editform.name_eng')}}</span>
                        </vx-input-group>
                       
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="name_khmer" v-model="name_khmer" label-placeholder="Name (Khmer)" data-vv-scope="editform"/>
                            <span class="text-danger" v-show="errors.has('editform.name_khmer')">{{errors.first('editform.name_khmer')}}</span>
                        </vx-input-group>
                        
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="nationality" v-model="nationality" label-placeholder="Nationality" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.nationality')">{{errors.first('editform.nationality')}}</span>
                        </vx-input-group>
                        
                        <vx-input-group class="mt-2">
                            <!-- <vs-input v-validate="'required'" name="dob" v-model="dob" label-placeholder="dob" data-vv-scope="editform" /> -->
                            <label class="text-sm" v-if="dob != ''">Date of Birth</label>
                            <datepicker name="dob" v-validate="`required`" input-class="vs-inputx vs-input--input normal" v-model="dob" :wrapper-class="dob == ''?'mt-5':''" placeholder="Date of Birth" data-vv-as="Date of Birth" calendar-class="w-auto" :format="format"></datepicker>
                            <span class="text-danger" v-show="errors.has('editform.dob')">{{errors.first('editform.dob')}}</span>
                        </vx-input-group>

                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                    	<vx-input-group class="mt-2">
                            <label class="text-sm" v-if="joining_date != ''">Joining Date</label>
                            <datepicker name="joining_date" v-validate="`required`" input-class="vs-inputx vs-input--input normal" v-model="joining_date" calendar-class="w-auto" :wrapper-class="joining_date == ''?'mt-5':''" placeholder="Joining Date" data-vv-as="Joining Date"  :format="format"></datepicker>
                            <!-- <vs-input v-validate="'required'" name="joining_date" v-model="joining_date" label-placeholder="Joining Date" data-vv-scope="editform" /> -->
                            <span class="text-danger" v-show="errors.has('editform.joining_date')">{{errors.first('editform.joining_date')}}</span>
                        </vx-input-group>
                    	<vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="position" v-model="position" label-placeholder="Position" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.position')">{{errors.first('editform.position')}}</span>
                        </vx-input-group>

                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="sex" v-model="sex" label-placeholder="Sex" ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.sex')">{{errors.first('editform.sex')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="contract_type" v-model="contract_type" label-placeholder="Contract Type" ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.contract_type')">{{errors.first('editform.contract_type')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="`required|numeric|min:1|max:2`" name="spouse" v-model="spouse" label-placeholder="Spouse" ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.spouse')">{{errors.first('editform.spouse')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input name="children" v-validate="`required|numeric|min:1|max:2`" label-placeholder="children" v-model="children" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.children')">{{errors.first('editform.children')}}</span>
                    </vs-col>
                    <vs-col>
                        <vx-input-group>
                            <vs-select autocomplete class="w-full" v-validate="'required'" v-model="employeeType" name="employeeType" data-vv-as="Employee Type" label="Employee Type" placeholder="Select Employee Type">
                                <vs-select-item value="RD" text="Resident"></vs-select-item>
                                <vs-select-item value="NRD" text="Non Resident"></vs-select-item>
                            </vs-select>
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('employeeType')">{{errors.first('employeeType')}}</span>
                    </vs-col>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                    <br>
                        <vs-button button="submit" class="float-right" type="gradient">Update Information</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>

    </div>
</template>
<script>
    import Datepicker from 'vuejs-datepicker';
	import { mapState , mapActions, mapGetters} from 'vuex';
	export default{
		data () {
		  return {
            format: "d MMMM yyyy",
		  	editEmployeeModal : false,
		    tax_customer_id:'',
		    employee_id:'',
		    employee_num:'',
		    nssf_num : '',
		    name_english:'',
		    name_khmer:'',
		    nationality:'',
		    dob:'',
		    joining_date:'',
		    position:'',
		    contract_type:'',
		    sex:'',
            spouse : 0,
		    children : 0,
            employeeType : '',
		  };
		},
        components : {
            Datepicker,
        },
		computed: {
		  ...mapState('employees',['employees']),
		  ...mapGetters('employees',['findEmployee']),
		},	
		beforeCreate(){
		},
		created(){
            this.tax_customer_id = this.$store.state.rootUrl.split('/')[2];
			this.getEmployees(this.tax_customer_id);
		},
		mounted(){
			const  attributes = {
				attributes : {
					nssf_num : 'NSSF No.',
					employee_num : 'Employee No.',
					contract_type : 'Contract Type',
					joining_date : 'Joining Date',
					name_eng : 'name (english)',
					name_khmer : 'name (Khmer)',
				}
			}
			this.$validator.localize('en',attributes)
		},
		methods: {
		  ...mapActions({
		  	getEmployees : 'employees/getEmployees',
		  	update : 'employees/updateEmployee',
		  	updateStatus : 'employees/statusUpdate',
		  }),
		  editEmployee(id){
            var employee = this.findEmployee(id);
            this.employee_id = employee.employee_id;
            this.employee_num = employee.employee_num;
            this.nssf_num = employee.nssf_num;
            this.name_english = employee.name_english;
            this.name_khmer = employee.name_khmer;
            this.nationality = employee.nationality;
            this.dob = employee.dob;
            this.joining_date = employee.joining_date;
            this.position = employee.position;
            this.sex = employee.sex;
            this.contract_type = employee.contract_type;
            this.spouse = employee.spouse;
            this.children = employee.children;
            this.employeeType = employee.employee_type;
            this.editEmployeeModal = true;
        },
        updateEmployee(e) {
            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.editEmployeeForm);
                    fd.append('employee_type', this.employeeType);
                    this.update(fd).then( (res) => {
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.editEmployeeModal = false;
                            this.$vs.notify({title:'Success',text:'Employee Updated Successfully',color:'success',position:'top-right'})
                            this.$vs.loading.close();
                        }
                    })
                }
            })
        },
        statusUpdate(id){
            this.$vs.loading();
            let data = {
            	id : id,
            	close : this.$vs.loading.close,
            	notify : this.$vs.notify
            } 
            this.updateStatus(data);
        },
		}

	}
</script>