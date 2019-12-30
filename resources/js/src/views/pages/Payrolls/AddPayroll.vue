<template>
    <div>
        <multi-uploads @error='hasError' @uploaded="successMultipleUpload" ref="multiUploads" :action="multipleRoute" sample-url="./public/samples/payroll.xlsx" :active="multipleUploadPopup"></multi-uploads>
        <vx-card title="Add Payroll" noShadow noRadius>
            <template slot="actions">
                <vs-button @click="showUploader()" class="mt-5" type="gradient" button="button">Upload Excel Sheet</vs-button>
            </template>
            <form autocomplete="off" ref="addPayrollForm" @submit.prevent="addPayroll($event)">
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
                            <vs-input name="name_eng" v-validate="`required`" label-placeholder="Name (English)" :disabled="true" :value="employeeVal.name_english" />
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
                <vs-row style="padding-left: 20px; color: gray">
                    <br>
                    Payroll Information
                </vs-row>
                <br>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="basic_salary" v-validate="`required`" label-placeholder="Basic Salary" v-model="basic_salary" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('basic_salary')">{{errors.first('basic_salary')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="bonus" v-validate="`required`" label-placeholder="Bonus" v-model="bonus" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('bonus')">{{errors.first('bonus')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="overtime" v-validate="`required`" label-placeholder="Over Time" v-model="overtime" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('overtime')">{{errors.first('overtime')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="commission" v-validate="`required`" label-placeholder="Commission" v-model="commission" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('commission')">{{errors.first('commission')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="seniority_payment" v-validate="`required`" label-placeholder="Seniority Payment" v-model="seniority_payment" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('seniority_payment')">{{errors.first('seniority_payment')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="severance_pay" v-validate="`required`" label-placeholder="Severance Pay" v-model="severance_pay" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('severance_pay')">{{errors.first('severance_pay')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="maternity_leave" v-validate="`required`" label-placeholder="Maternity Leave" v-model="maternity_leave" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('maternity_leave')">{{errors.first('maternity_leave')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="paid_annual_leave" v-validate="`required`" label-placeholder="Paid Annual Leave" v-model="paid_annual_leave" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('paid_annual_leave')">{{errors.first('paid_annual_leave')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="food_allowance" v-validate="`required`" label-placeholder="Food Allowance" v-model="food_allowance" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('food_allowance')">{{errors.first('food_allowance')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="transport_allowance" v-validate="`required`" label-placeholder="Transport Allowance" v-model="transport_allowance" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('transport_allowance')">{{errors.first('transport_allowance')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="other_allowance" v-validate="`required`" label-placeholder="Other Allowance" v-model="other_allowance" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('other_allowance')">{{errors.first('other_allowance')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="deduction_advance" v-validate="`required`" label-placeholder="Deduction Advance" v-model="deduction_advance" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('deduction_advance')">{{errors.first('deduction_advance')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="salary_adjustment" v-validate="`required`" label-placeholder="Salary Adjustment" v-model="salary_adjustment" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('salary_adjustment')">{{errors.first('salary_adjustment')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="remark" v-validate="`required`" label-placeholder="Remarks" v-model="remark" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('remark')">{{errors.first('remark')}}</span>
                    </vs-col>
                    <!-- <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12"> -->
                    <vs-col v-for="(field,index) in customField" :key="index" class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input :type="field.text" :name="field.name" :label-placeholder="'Custom Field '+(index + 1)" v-model="field.value" />
                        </vx-input-group>
                    </vs-col>
                    <!-- </vs-col> -->
                </vs-row>
                <vs-row>
                    <vs-col class="text-center" vs-lg='12' vs-md='12'>
                        <vs-button class="float-left" @click="addMoreFeild()" type="gradient" button="button">Add More Custom Fields</vs-button>
                        <vs-col class="text-center" vs-md="12" vs-lg="12">
                            <vs-button button="submit" class="mt-5" type="gradient">Save</vs-button>
                        </vs-col>
                    </vs-col>
                </vs-row>
            </form>
        </vx-card>
        <vs-popup :active.sync="selectEmployeeModal" title="Select Employee">
            <vx-input-group>
                <vs-select width="100%" placeholder="Search and select" class="selectExample" label="Employees" label-placeholder="Select Employee" v-model="employee">
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
const multiUploads = () => import('@/components/MultiUploads.vue')
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            multipleUploadPopup: false,
            customField: [],
            tax_customer_id: '',
            tax_id: '',
            selectEmployeeModal: true,
            employee: '',
            buttonClicked: false,
            employeeVal: {},
            basic_salary: '',
            bonus: '',
            overtime: '',
            commission: '',
            seniority_payment: '',
            severance_pay: '',
            maternity_leave: '',
            paid_annual_leave: '',
            food_allowance: '',
            transport_allowance: '',
            other_allowance: '',
            deduction_advance: '',
            salary_adjustment: '',
            remark: '',
            employee_id: '',
            multipleRoute : ''
        };
    },
    created() {
        this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.tax_customer_id = localStorage.getItem('customer');
        this.getEmployees(this.tax_customer_id);

    },

    components: {
        multiUploads
    },

    computed: {
        ...mapState('employees/', ['employees']),
        ...mapGetters('employees/', ['findEmployee']),
    },
    watch: {
        selectEmployeeModal(val, oldVal) {
            if ((this.buttonClicked == false && this.employee == '') || (this.buttonClicked == false && this.employee != '')) {
                this.selectEmployeeModal = true;
            } else {
                this.selectEmployeeModal = false;
            }
        },

    },
    methods: {
        ...mapActions({
            create: 'payrolls/create',
            getEmployees: 'employees/getActiveEmployees',
        }),
        showUploader() {
            this.$refs.multiUploads.isShown = true;
        },
        addMoreFeild() {
            this.customField.push({ name: 'additional_field[]', value: '', type: 'text' });
        },
        hasError(res) {
            this.$vs.notify({
                color: 'danger',
                text: res.msg,
                position: 'right-top',
                fixed: true,
            })
        },
        successMultipleUpload(res) {
            this.$vs.notify({
                color: 'success',
                text: res.msg,
                position: 'right-top',
                fixed: true,
            })
            this.$refs.multiUploads.isShown = false;
        },

        getEmployee() {
            if (this.employee != '') {
                axios.post('get-employee', { id: this.employee }).then(res => {
                    // var employee = this.findEmployee(this.employee);
                    var employee = res.data.data;

                    this.employeeVal = employee;
                    let loginUserId;
                    let loginUsertype;
                    if (this.$store.state.AppActiveUser.type == 'Supervisor') {
                        loginUsertype = 'supervisor';
                    } else {
                        loginUsertype = 'officer';
                    }
                    loginUserId = this.$store.state.AppActiveUser.manager_id;
                    this.multipleRoute = 'add-multiple-payrolls/' + this.employee + '/' + this.tax_id + '/' + loginUsertype + '/' + loginUserId;
                    self = this;
                    self.customField = [];
                    if (employee.additional_fields != null) {
                        if (employee.additional_fields.length > 0) {
                            employee.additional_fields.map(function(val, key) {
                                self.customField.push({ name: 'additional_field[]', value: val, type: 'text' });
                            });
                        }
                    }
                    this.buttonClicked = true;
                    this.selectEmployeeModal = false;
                });
            }
        },
        addPayroll(e) {
            // alert('test');
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$vs.loading();
                    let fd = new FormData(this.$refs.addPayrollForm);
                    fd.append('employee_id', this.employee);
                    fd.append('tax_id', this.tax_id);
                    if (this.$store.state.AppActiveUser.type == 'Supervisor') {
                        fd.append('supervisor_id', this.$store.state.AppActiveUser.manager_id);
                    } else {
                        fd.append('officer_id', this.$store.state.AppActiveUser.manager_id);
                    }
                    let data = {
                        fd: fd,
                        close: this.$vs.loading.close,
                        notify: this.$vs.notify,
                    };
                    self = this;
                    this.create(data).then(function(res) {
                        if (res.data.status == 'success') {
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
