<template>
    <div>
        <vx-card title="Edit Payroll" noShadow noRadius>
            <form autocomplete="off" ref="editPayrollForm" @submit.prevent="updatePayroll($event)">
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
                            <vs-input name="basic_salary" data-vv-as="Basic Salary" v-validate="`required`" label-placeholder="Basic Salary" v-model="basic_salary" />
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
                            <vs-input name="over_time" data-vv-as="Over Time" v-validate="`required`" label-placeholder="Over Time" v-model="over_time" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('over_time')">{{errors.first('over_time')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="commissions" v-validate="`required`" label-placeholder="Commissions" v-model="commissions" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('commissions')">{{errors.first('commissions')}}</span>
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
                            <vs-input name="paid_annual_leave" data-vv-as="Paid Annual Allowance" v-validate="`required`" label-placeholder="Paid Annual Leave" v-model="paid_annual_leave" />
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
                            <vs-input name="others" data-vv-as="Other Allowance" v-validate="`required`" label-placeholder="Other Allowance" v-model="other_allowance" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('others')">{{errors.first('others')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="deduction_advance" v-validate="`required`" label-placeholder="Deduction Advance" v-model="deduction_advance" />
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
                            <vs-input name="remark" v-validate="`required`" label-placeholder="Remarks" v-model="remark" />
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
                    <vs-col class="text-center" vs-lg='12' vs-md='12'>
                        <vs-button class="float-left" @click="addMoreFeild()" type="gradient" button="button">Add More Custom Fields</vs-button>
                    </vs-col>
                    <!-- </vs-col> -->
                </vs-row>
                <vs-row>
                    <vs-col class="text-center" vs-lg='12' vs-md='12'>
                        <vs-col class="text-center" vs-md="12" vs-lg="12">
                            <vs-button button="submit" class="mt-5" type="gradient">Save changes</vs-button>
                        </vs-col>
                    </vs-col>
                </vs-row>
            </form>
        </vx-card>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            customField: [],
            tax_customer_id: '',
            employee: '',
            buttonClicked: false,
            employeeVal: {},
            basic_salary: 0,
            bonus: '',
            over_time: '',
            commissions: '',
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
            data: {},
            basic_salary_riel: 0,
            allowance: 0,
            salary_tax_calculation_base: 0,
            parameter: {},
            parameter_rate: '0%',
            tax_on_salary: 0,
        };
    },
    computed: {
        ...mapState('taxes', ['parameters']),
        salaryRate() {
            return this.$store.state.salaryRate;
        },
    },
    async created() {
        this.tax_customer_id = this.$store.state.rootUrl.split('/')[2];
        // this.getPayroll(this.$route.params.id);
        await this.$store.dispatch('getSalaryRate');
        await this.getParameters('Payrolls');
        await this.getPayroll();

    },
    watch: {
        basic_salary(val, oldVal) {
            this.basic_salary_riel = parseFloat(parseFloat(val) * this.salaryRate).toFixed(2);
        },
        basic_salary_riel(val, oldVal) {
            this.salary_tax_calculation_base = Math.abs(parseFloat(val) - this.allowance);
        },
        salary_tax_calculation_base() {
                if (this.employeeVal.employee_type === 'NRD') {
                    console.log(this.parameter);
                    this.parameter = _.find(this.parameters, (o) => { return o.tax_param_id == "TOSNRD" });
                    this.tax_on_salary = (this.salary_tax_calculation_base * this.rateToPercent(this.parameter.rate));
                } else if (this.employeeVal.employee_type === 'RD') {

                    this.parameter = _.find(this.parameters, (o) => {
                        if (o.tax_param_id != "TOSNRD" && (this.salary_tax_calculation_base >= Number(o.amount_min) && this.salary_tax_calculation_base <= Number(o.amount_max))) {

                            return o;
                        } else if (o.tax_param_id != "TOSNRD" && (this.salary_tax_calculation_base >= Number(o.amount_min) && o.amount_max == null)) {
                            return o;

                        }
                    });
                    this.tax_on_salary = (this.salary_tax_calculation_base * this.rateToPercent(this.parameter.rate)) - this.parameter.tax_bracket;
                }
                this.parameter_rate = this.parameter.rate + '%';
        }
    },
    methods: {
        ...mapActions({
            getPayroll: 'payrolls/getPayroll',
            update: 'payrolls/updatePayroll',
            getParameters: 'taxes/getParameters',
        }),
        getPayroll() {

            axios.post('get-payroll', { id: this.$route.params.id }).then(res => {
                this.employeeVal = res.data.data.employee;
                this.data = res.data.data;
                this.basic_salary = this.data.basic_salary;
                this.bonus = this.data.bonus;
                this.over_time = this.data.over_time;
                this.commissions = this.data.commissions;
                this.seniority_payment = this.data.seniority_payment;
                this.severance_pay = this.data.severance_pay;
                this.maternity_leave = this.data.maternity_leave;
                this.paid_annual_leave = this.data.paid_annual_leave;
                this.food_allowance = this.data.food_allowance;
                this.transport_allowance = this.data.transport_allowance;
                this.other_allowance = this.data.others;
                this.deduction_advance = this.data.deduction_advance;
                this.salary_adjustment = this.data.salary_adjusment;
                this.remark = this.data.remark;
                self = this;
                this.setAllowance()
                self.customField = [];
                if (this.data.additional_fields != null) {
                    if (this.data.additional_fields.length > 0) {
                        this.data.additional_fields.map(function(val, key) {
                            self.customField.push({ name: 'additional_fields[]', value: val, type: 'text' });
                        });
                    }
                }
                if(this.data.tax_subject != null){
                    this.parameter = this.data.tax_subject.parameter;
                    this.parameter_rate = this.data.tax_subject.parameter.rate+'%';
                    if(this.parameter.tax_param_id == 'TOSNRD'){

                    this.tax_on_salary = (this.salary_tax_calculation_base * this.rateToPercent(this.parameter.rate));
                    }else{

                    this.tax_on_salary = (this.salary_tax_calculation_base * this.rateToPercent(this.parameter.rate)) - this.parameter.tax_bracket;
                    }
                }
            });
        },
        addMoreFeild() {
            this.customField.push({ name: 'additional_fields[]', value: '', type: 'text' });
        },
        setAllowance(){
            this.allowance = (this.employeeVal.spouse + this.employeeVal.children) * 150000
        },
        rateToPercent(rate) {
            return (rate / 100)
        },
        updatePayroll(e) {

            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.editPayrollForm);
                    fd.append('payroll_id', this.data.payroll_id);
                    fd.append(`tax_param[${this.data.tax_subject.id}]`, this.parameter.id);
                    this.update(fd).then(res => {
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.$vs.notify({ text: 'Payroll updated successfully', color: 'success', position: 'top-right' })
                            this.getPayroll();
                            this.$vs.loading.close();

                        }
                    })
                }
            })
        },
    }

}

</script>
