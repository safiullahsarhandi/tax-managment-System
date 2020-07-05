<template>
    <div>
        <vs-row>
            <vs-col vs-lg="9" vs-md="9" vs-sm="12">
                <vx-card title="Employee Detail">
                    <vs-row>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>NSSF No:</h6>
                            <p>{{employeeVal.nssf_num}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Employee No:</h6>
                            <p>{{employeeVal.employee_num}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Name (English):</h6>
                            <p>{{employeeVal.name_english}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Name (Khmer):</h6>
                            <p>{{employeeVal.name_khmer}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Nationality:</h6>
                            <p>{{employeeVal.nationality}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Date Of Birth:</h6>
                            <p>{{employeeVal.dob}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Joining Date:</h6>
                            <p>{{employeeVal.joining_date}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Position:</h6>
                            <p>{{employeeVal.position}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Sex:</h6>
                            <p>{{employeeVal.sex}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Contract Type:</h6>
                            <p>{{employeeVal.contract_type}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Spouse:</h6>
                            <p>{{employeeVal.spouse}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Children (Minor):</h6>
                            <p>{{employeeVal.children}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Residency Type:</h6>
                            <p>{{Object.keys(employeeVal).length > 0?employeeVal.employee_type == 'RD'?'Resident':'Non Resident':''}}</p>
                        </vs-col>
                    </vs-row>
                </vx-card>
                <vx-card class="mt-base" title="Payroll Detail">
                    <vs-row>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Client TIN:</h6>
                            <p>{{customer.tin_no}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Client Name:</h6>
                            <p>{{customer.name_english}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Seniority Payment:</h6>
                            <p>{{payroll.seniority_payment}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Severance Pay:</h6>
                            <p>{{payroll.severance_pay}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Bonus:</h6>
                            <p>{{payroll.bonus}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Over Time:</h6>
                            <p>{{payroll.over_time}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Commissions:</h6>
                            <p>{{payroll.commissions}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Maternity Leave:</h6>
                            <p>{{payroll.maternity_leave}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Paid Annual Leave:</h6>
                            <p>{{payroll.paid_annual_leave}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Food Allowance:</h6>
                            <p>{{payroll.food_allowance}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Transport Allowance:</h6>
                            <p>{{payroll.transport_allowance}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Deduction Advance:</h6>
                            <p>{{payroll.deduction_advance}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Salary Adjusment:</h6>
                            <p>{{payroll.salary_adjusment}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Others:</h6>
                            <p>{{payroll.others}}</p>
                        </vs-col>
                    </vs-row>
                </vx-card>
                <vx-card class="mt-base" title="Payrolls Summary">
                    <vs-row>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Basic Salary (USD):</h6>
                            <p>{{payroll.basic_salary}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Salary to be paid (Riel):</h6>
                            <p>{{basic_salary_riel}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>allowance:</h6>
                            <p>{{allowance}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Salary Tax Calculation Base:</h6>
                            <p>{{salary_tax_calculation_base}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Tax Rate:</h6>
                            <p>{{parameter_rate}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Tax on salary:</h6>
                            <p>{{tax_on_salary}}</p>
                        </vs-col>
                    </vs-row>
                </vx-card>
            </vs-col>
            <vs-col vs-lg="3" vs-md="3" vs-xl="3" vs-sm="12">
                <vx-card title="Actions">
                    <vs-select v-if="userType == 'Supervisor' && is_saleCreatedByLoginUser == false" autocomplete @input="changeManagementStatus(payroll.supervisor_confirmed, payroll.payroll_id, 'supervisor')" v-model="payroll.supervisor_confirmed" class="p-0 ml-0" placeholder="Select Status" style="width: 100%;">
                        <vs-select-item value="0" text="Pending"></vs-select-item>
                        <vs-select-item value="1" text="Approve"></vs-select-item>
                        <vs-select-item value="2" text="Review"></vs-select-item>
                        <vs-select-item value="3" text="Reject"></vs-select-item>
                    </vs-select>
                    <vs-select v-if="userType == 'Supervisor' && is_saleCreatedByLoginUser == true" autocomplete @input="changeManagementStatus(payroll.supervisor_confirmed, payroll.payroll_id, 'supervisor')" v-model="payroll.supervisor_confirmed" class="p-0 ml-0" placeholder="Select Status" style="width: 100%;">
                        <vs-select-item value="0" text="Work In Progress"></vs-select-item>
                        <vs-select-item value="1" text="Submit"></vs-select-item>
                    </vs-select>
                    <vs-select v-if="userType == 'Admin' || userType == 'Super Admin'  && show_status_dropdown == true" autocomplete @input="changeManagementStatus(payroll.management_confirmed, payroll.payroll_id, 'admin')" v-model="payroll.management_confirmed" class="p-0 ml-0" placeholder="Select Status" style="width: 100%;">
                        <vs-select-item value="0" text="Pending"></vs-select-item>
                        <vs-select-item value="1" text="Approve"></vs-select-item>
                        <vs-select-item value="2" text="Review"></vs-select-item>
                        <vs-select-item value="3" text="Reject"></vs-select-item>
                    </vs-select>
                    <vs-list>
                        <vs-list-item v-if="editPermissionAccess(payroll)" title="Edit Payroll">
                            <vs-button :to="'/edit-payroll/'+$route.params.id" icon-pack="feather" size="small" icon='icon-edit'></vs-button>
                        </vs-list-item>
                        <vs-list-item v-else title="Edit Payroll">
                            <vs-button @click="notAllowed('edit')" icon-pack="feather" size="small" icon='icon-edit'></vs-button>
                        </vs-list-item>
                        <template>
                            <vs-list-item v-if="userType == 'Officer'" title="Status">
                                <vs-switch v-if="editPermissionAccess(payroll)" icon-pack="feather" @click="statusUpdate(payroll.payroll_id, payroll.officer_confirmed)" v-model="payroll.officer_confirmed"></vs-switch>
                                <vs-switch v-else icon-pack="feather" @click="notAllowed('status')" v-model="payroll.officer_confirmed"></vs-switch>
                            </vs-list-item>
                        </template>
                        <vs-list-item title="View Comments">
                            <vs-button icon-pack="feather" size="small" icon='icon-maximize-2' @click="handleToggleDrawer"></vs-button>
                        </vs-list-item>
                    </vs-list>
                </vx-card>
            </vs-col>
        </vs-row>
        <the-customizer ref="commentsView" :object_id="$route.params.id" type="Payroll" comments-url="get-comments" />
    </div>
    <!-- <div>Testing Payroll detail Page</div> -->
</template>
<script>
import TheCustomizer from "@/layouts/components/customizer/CommentDrawer.vue";
import { Slide } from 'vue-burger-menu';
import { mapState, mapActions } from 'vuex';
export default {
    components: {
        TheCustomizer,
        Slide, // Register your component
    },
    data() {
        return {
            managerId: null,
            tax_id: '',
            openComments: false,
            is_saleCreatedByLoginUser: false,
            is_admin: false,
            is_supervisor: false,
            is_officer: false,
            show_status_dropdown: true,
            employeeVal: {},
            allowance: 0,
            parameter : {},
            tax_on_salary : 0,
            parameter_rate : '0%',
            salary_tax_calculation_base : 0,

        };
    },
    async created() {
        if (this.$store.state.AppActiveUser.type == 'Admin' || this.$store.state.AppActiveUser.type == 'Super Admin') {
            this.is_admin = true;
        }

        if (this.$store.state.AppActiveUser.type == 'Supervisor') {
            this.is_supervisor = true;
        }

        if (this.$store.state.AppActiveUser.type == 'Officer') {
            this.is_officer = true;
        }
        this.managerId = this.$store.state.AppActiveUser.manager_id;
        await this.getPayroll(this.$route.params.id).then(res => {
            this.employeeVal = res.data.data.employee;
            this.setAllowance();
            this.parameter = res.data.data.tax_subject.parameter;
            this.parameter_rate = this.parameter.rate + '%';
            var created_by = res.data.data.created_by;
            if (this.$store.state.AppActiveUser.type == 'Supervisor') {
                if (this.$store.state.AppActiveUser.manager_id == created_by.manager_id) {
                    this.is_saleCreatedByLoginUser = true;
                }
            }
            if (this.$store.state.AppActiveUser.type == 'Admin' || this.$store.state.AppActiveUser.type == 'Super Admin') {
                if (this.$store.state.AppActiveUser.manager_id == created_by.manager_id) {
                    if (this.is_admin == true) {
                        this.show_status_dropdown = false;
                    }
                }
            }
        });


        localStorage.setItem('customer', this.payroll.customer.customer_id);
        localStorage.setItem('currentDetail', '/tax-collection/' + this.payroll.tax_id);

        this.tax_id = this.payroll.tax_id;
        this.getCustomer(this.payroll.customer.customer_id);
        this.$store.dispatch('getSalaryRate');
    },
    watch: {
        salary_tax_calculation_base() {
                if (this.employeeVal.employee_type === 'NRD') {
                    this.tax_on_salary = (this.salary_tax_calculation_base * this.rateToPercent(this.parameter.rate));
                } else if (this.employeeVal.employee_type === 'RD') {

                    this.tax_on_salary = (this.salary_tax_calculation_base * this.rateToPercent(this.parameter.rate)) - this.parameter.tax_bracket;
                }
        },
        basic_salary_riel(val, oldVal) {
            this.salary_tax_calculation_base = Math.abs(parseFloat(val) - this.allowance);
        },
    },
    computed: {
        ...mapState('payrolls', ['payroll']),
        ...mapState('customers', ['customer']),
        basic_salary_riel(){
            return parseFloat(this.payroll.basic_salary * this.salaryRate).toFixed(2);
        },
        userType() {
            return this.$store.getters.userType;
        },
        salaryRate() {
            return this.$store.state.salaryRate;
        },
    },
    methods: {
        rateToPercent(rate) {
            return (rate / 100)
        },
        handleToggleDrawer() {
            this.$refs.commentsView.active = !this.$refs.commentsView.active;
        },
        ...mapActions({
            getPayroll: 'payrolls/getPayroll',
            getCustomer: 'customers/getCustomer',
            statusChange: 'taxes/statusUpdateSPP',
            statusChangeManagment: 'taxes/statusChangeManagment'
        }),
        setAllowance() {
            this.allowance = (this.employeeVal.spouse + this.employeeVal.children) * 150000
        },
        statusUpdate(id, status) {

            let data = {
                id: id,
                tax_id: this.tax_id,
                notify: this.$vs.notify,
                type: 'payroll'
            };
            this.statusChange(data).then((res) => {
                if (res.data.status != true) {
                    if (res.data.response == 'undefined') {
                        this.payroll.officer_confirmed = status;
                    } else {
                        this.payroll.officer_confirmed = res.data.response;
                    }
                }
            });

        },

        changeManagementStatus(status, id, by) {

            let data = {
                id: id,
                status: status,
                by: by,
                tax_id: this.tax_id,
                notify: this.$vs.notify,
                tax_type: 'payroll'
            };
            this.statusChangeManagment(data).then((res) => {
                var res = res.data;
                if (by == 'supervisor') {
                    this.payroll.supervisor_confirmed = res.response;
                } else {
                    this.payroll.management_confirmed = res.response;
                }
            });
        },

        editPermissionAccess(tr) {

            if (this.is_officer) {
                if (tr.officer_confirmed == 0 && tr.supervisor_confirmed == 0) {
                    return true;
                }

                if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 0) {
                    return true;
                }

                if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1) {
                    return false;
                }

                if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 2) {
                    return false;
                }

                if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 3) {
                    return true;
                }

                if (tr.officer_confirmed == 0 && tr.supervisor_confirmed == 3) {
                    return true;
                }
            }

            if (this.is_supervisor && this.is_saleCreatedByLoginUser == false) {
                if (tr.officer_confirmed == 0 && tr.supervisor_confirmed == 0) {
                    return false;
                }

                if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 0) {
                    return true;
                }

                if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1) {
                    return true;
                }

                if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 2) {
                    return true;
                }

                if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 3) {
                    return true;
                }
                if (tr.officer_confirmed == 0 && tr.supervisor_confirmed == 3) {
                    return false;
                }
            }

            if (this.is_supervisor && this.is_saleCreatedByLoginUser == true) {
                if (tr.supervisor_confirmed == 0 && tr.management_confirmed == 0) {
                    return true;
                }

                if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 0) {
                    return true;
                }

                if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 1) {
                    return false;
                }

                if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 2) {
                    return false;
                }

                if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 3) {
                    return false;
                }
                if (tr.supervisor_confirmed == 0 && tr.management_confirmed == 3) {
                    return true;
                }
            }

            if (this.is_admin) {

                var created_by = tr.created_by.manager_id;

                if (this.managerId == created_by) { // means current sale added by super admin it has every access 
                    return true;
                }

                if (tr.supervisor_confirmed == 0 && tr.management_confirmed == 0) {
                    return false;
                }

                if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 0) {
                    return true;
                }

                if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 1) {
                    return true;
                }

                if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 2) {
                    return true;
                }

                if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 3) {
                    return true;
                }

                if (tr.supervisor_confirmed == 0 && tr.management_confirmed == 3) {
                    return false;
                }
            }
        },

        notAllowed(opt) {

            var msg;
            if (opt == 'status') {
                msg = 'You can\'t change payroll status, if Payroll is approved or supervisor reviewing it';
            } else if (opt == 'delete') {
                msg = 'You can\'t delete payroll, if Payroll is approved or supervisor reviewing it';
            } else if (opt == 'edit') {
                msg = 'You can\'t edit/update payroll, if Payroll is approved or supervisor reviewing it';
            }

            this.$vs.notify({
                text: msg,
                color: 'danger',
                position: 'top-right',
                time: 8000,
                icon: 'warning'
            });
        },

    },
}

</script>
<style lang="scss">
.bm-menu {
    z-index: 99999;
}

.bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
    cursor: pointer;
}

.bm-burger-bars {
    background-color: #373a47;
}

.line-style {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
}

.cross-style {
    position: absolute;
    top: 12px;
    right: 2px !important;
    cursor: pointer;
}

.bm-cross {
    background: #bdc3c7;
}

.bm-cross-button {
    height: 24px;
    width: 24px;
}

.bm-menu {
    height: 100%;
    /* 100% Full-height */
    width: 0;
    /* 0 width - change this with JavaScript */
    position: fixed;
    /* Stay in place */
    top: 0;
    left: 0;
    background-color: rgb(63, 63, 65);
    /* Black*/
    overflow-x: hidden;
    /* Disable horizontal scroll */
    padding-top: 60px;
    /* Place content 60px from the top */
    transition: 0.5s;
    /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
    background: rgba(0, 0, 0, 0.3);
}

.bm-item-list {
    color: #b8b7ad;
    margin-left: 10%;
    font-size: 20px;
}

.bm-item-list>* {
    display: flex;
    text-decoration: none;
    padding: 0.7em;
}

.bm-item-list>*>span {
    margin-left: 10px;
    font-weight: 700;
    color: white;
}

</style>
