<template>
    <div>
        <multi-uploads @error='hasError' @uploaded="successMultipleUpload" ref="multiUploads" :action="multipleRoute" sample-url="./public/samples/payroll.xlsx" :active="multipleUploadPopup"></multi-uploads>
        <vx-card title="Add Payroll" noShadow noRadius>
            <template slot="actions">
                <vs-button @click="selectEmployeeModal = true" class="mt-5" type="gradient" button="button">Select Employee</vs-button>
                <!-- <vs-button @click="showUploader()" class="mt-5" type="gradient" button="button">Upload Excel Sheet</vs-button> -->
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
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input label-placeholder="Children" :disabled="true" :value="employeeVal.children" />
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input label-placeholder="Employee Type" :disabled="true" :value="Object.keys(employeeVal).length > 0?employeeVal.employee_type == 'RD'?'Resident':'Non Resident':''" />
                        </vx-input-group>
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
                            <vs-input name="basic_salary" data-vv-as="Basic Salary" v-validate="`required|decimal:2|min_value:1`" label-placeholder="Basic Salary" v-model="basic_salary" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('basic_salary')">{{errors.first('basic_salary')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="bonus" data-vv-as="Bonus" v-validate="`required`" label-placeholder="Bonus" v-model="bonus" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('bonus')">{{errors.first('bonus')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="over_time" data-vv-as="Over Time" v-validate="`required`" label-placeholder="Over Time" v-model="overtime" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('over_time')">{{errors.first('over_time')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="commissions" data-vv-as="Commission" v-validate="`required`" label-placeholder="Commission" v-model="commission" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('commissions')">{{errors.first('commissions')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="seniority_payment" data-vv-as="Seniority Payment" v-validate="`required`" label-placeholder="Seniority Payment" v-model="seniority_payment" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('seniority_payment')">{{errors.first('seniority_payment')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="severance_pay" data-vv-as="Severance Pay" v-validate="`required`" label-placeholder="Severance Pay" v-model="severance_pay" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('severance_pay')">{{errors.first('severance_pay')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="maternity_leave" data-vv-as="Maternity Leave" v-validate="`required`" label-placeholder="Maternity Leave" v-model="maternity_leave" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('maternity_leave')">{{errors.first('maternity_leave')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="paid_annual_leave" data-vv-as="Paid Annual Leave" v-validate="`required`" label-placeholder="Paid Annual Leave" v-model="paid_annual_leave" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('paid_annual_leave')">{{errors.first('paid_annual_leave')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="food_allowance" data-vv-as="Food Allowance" v-validate="`required`" label-placeholder="Food Allowance" v-model="food_allowance" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('food_allowance')">{{errors.first('food_allowance')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="transport_allowance" data-vv-as="Transport Allowance" v-validate="`required`" label-placeholder="Transport Allowance" v-model="transport_allowance" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('transport_allowance')">{{errors.first('transport_allowance')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="other_allowance" data-vv-as="Other Allowance" v-validate="`required`" label-placeholder="Other Allowance" v-model="other_allowance" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('other_allowance')">{{errors.first('other_allowance')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="deduction_advance" data-vv-as="Deduction Advance" v-validate="`required`" label-placeholder="Deduction Advance" v-model="deduction_advance" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('deduction_advance')">{{errors.first('deduction_advance')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="salary_adjusment" data-vv-as="Salary Adjustment" v-validate="`required`" label-placeholder="Salary Adjustment" v-model="salary_adjustment" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('salary_adjusment')">{{errors.first('salary_adjusment')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="remark" label-placeholder="Remarks" v-model="remark" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('remark')">{{errors.first('remark')}}</span>
                    </vs-col>
                </vs-row>
                <vs-row style="padding-left: 20px; color: gray">
                    <br>
                    Tax Detail
                </vs-row>
                <br>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled label-placeholder="Salary to be paid (Riel)" v-model="basic_salary_riel" />
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled label-placeholder="Allowance" v-model="allowance" />
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled label-placeholder="Salary Tax Calculation  Base" v-model="salary_tax_calculation_base" />
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled label-placeholder="Tax Rate" v-model="parameter_rate" />
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled label-placeholder="Tax on Salary" v-model="tax_on_salary" />
                        </vx-input-group>
                    </vs-col>
                </vs-row>
                <vs-row>
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
                <vs-select width="100%" placeholder="Search and select" autocomplete class="selectExample" label="Employees" label-placeholder="Select Employee" v-model="employee">
                    <vs-select-item value="" :disabled="true" text="Select Employee"></vs-select-item>
                    <vs-select-item :key="index" :value="item.employee_id" :text="item.name_english" v-for="(item,index) in employees" />
                </vs-select>
            </vx-input-group>
            <vs-button @click="getEmployee" class="mt-base float-right">
                Select Employee
            </vs-button>
        </vs-popup>
        <payrolls class="mt-base"></payrolls>
    </div>
</template>
<script>
const Payrolls = () => import('@/views/pages/Payrolls/Payrolls.vue')
const multiUploads = () => import('@/components/MultiUploads.vue')
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            multipleUploadPopup: false,
            customField: [],
            tax_customer_id: '',
            tax_id: '',
            selectEmployeeModal: false,
            employee: '',
            buttonClicked: false,
            employeeVal: {},
            basic_salary: 0,
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
            multipleRoute: '',
            basic_salary_riel: 0,
            allowance: 0,
            salary_tax_calculation_base: 0,
            parameter: {},
            parameter_rate: '0%',
            tax_on_salary: 0,
        };
    },
    created() {
        this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.tax_customer_id = localStorage.getItem('customer');
        this.$store.dispatch('getSalaryRate');
        this.getParameters('Payrolls');
        this.getEmployees(this.tax_customer_id);

    },

    components: {
        multiUploads,
        Payrolls,
    },

    computed: {
        ...mapState('employees/', ['employees']),
        ...mapState('taxes', ['parameters']),
        ...mapGetters('employees/', ['findEmployee']),
        salaryRate() {
            return this.$store.state.salaryRate;
        },
    },
    watch: {
        basic_salary(val, oldVal) {
            this.basic_salary_riel = parseFloat(parseFloat(val) * this.salaryRate).toFixed(2);
        },
        basic_salary_riel(val, oldVal) {
            this.salary_tax_calculation_base = Math.abs(parseFloat(val) - this.allowance);
        },
        salary_tax_calculation_base(val, oldVal) {
            if (Object.keys(this.employeeVal).length == 0) {
                this.$vs.notify({
                    position: 'right-top',
                    text: 'please select employee first',
                    color: 'danger',
                });
            } else {
                // console.log(val);
                if (val !== NaN) {
                    this.parameter = {};
                    if (this.employeeVal.employee_type === 'NRD') {

                        this.parameter = _.find(this.parameters, (o) => { return o.tax_param_id == "TOSNRD" });
                        this.tax_on_salary = (val * this.rateToPercent(this.parameter.rate));
                    } else if (this.employeeVal.employee_type === 'RD') {

                        this.parameter = _.find(this.parameters, (o) => {
                            if (o.tax_param_id != "TOSNRD" && (val >= Number(o.amount_min) && val <= Number(o.amount_max))) {

                                return o;
                            } else if (o.tax_param_id != "TOSNRD" && (val >= Number(o.amount_min) && o.amount_max == null)) {
                                return o;

                            }
                        });
                        this.tax_on_salary = (val * this.rateToPercent(this.parameter.rate)) - this.parameter.tax_bracket;
                    }
                    this.parameter_rate = this.parameter.rate + '%';
                }
            }

        }
    },
    methods: {
        ...mapActions({
            create: 'payrolls/create',
            getEmployees: 'employees/getActiveEmployees',
            getParameters: 'taxes/getParameters',
        }),
        showUploader() {
            this.$refs.multiUploads.isShown = true;
        },
        addMoreFeild() {
            this.customField.push({ name: 'additional_fields[]', value: '', type: 'text' });
        },
        rateToPercent(rate) {
            return (rate / 100)
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
                    this.allowance = (Number(employee.spouse) + Number(employee.children)) * 150000
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
                    if (this.employee == '') {
                        this.$vs.notify({
                            position: 'right-top',
                            text: 'Please select employee',
                            title: 'Missing Information',
                            icon: 'warning',
                        });
                        return false;
                    }
                    this.$vs.loading();
                    let fd = new FormData(this.$refs.addPayrollForm);
                    fd.append('employee_id', this.employee);
                    fd.append('tax_id', this.tax_id);
                    fd.append('created_by', this.$store.state.AppActiveUser.manager_id);
                    fd.append('creator_type', this.$store.state.AppActiveUser.type);
                    fd.append('tax_param', this.parameter.id)
                    /*if (this.$store.state.AppActiveUser.type == 'Supervisor') {
                    } else {
                        fd.append('officer_id', this.$store.state.AppActiveUser.manager_id);
                    }*/
                    let data = {
                        fd: fd,
                        close: this.$vs.loading.close,
                        notify: this.$vs.notify,
                    };
                    self = this;
                    this.create(data).then(function(res) {
                        alert()
                        if (res.data.status == 'success') {
                            self.employeeVal = {};
                            self.basic_salary = self.bonus = self.overtime = self.commission = self.seniority_payment = self.severance_pay = self.maternity_leave = self.paid_annual_leave = self.transport_allowance = self.other_allowance = self.deduction_advance = self.salary_adjustment = self.remark = self.food_allowance = '';
                            self.parameter = {};
                            self.parameter_rate = '0%';
                            self.allowance = 0;
                            self.tax_on_salary = 0;
                            /*self.nssf_num = self.employee_num = self.name_khmer = self.name_eng = self.nationality = self.joining_date = self.position = self.sex = self.contract_type = self.spouse = '';*/
                            e.target.reset();
                            self.$validator.reset();
                            self.$validator.reset()
                        }
                    });
                }
            })
        }
    }

}

</script>
