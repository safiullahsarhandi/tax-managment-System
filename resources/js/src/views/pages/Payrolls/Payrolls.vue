<template>
    <div>
        <vx-card title="List of Payrolls">
            <vs-table search pagination max-items="6" :data="payrolls">
                <template slot="thead">
                    <vs-th>Employee Name</vs-th>
                    <vs-th>Employee No.</vs-th>
                    <vs-th>NSSF No.</vs-th>
                    <vs-th>Contract Type</vs-th>
                    <vs-th>Basic Salary</vs-th>
                    <vs-th>Bonus</vs-th>
                    <!-- <vs-th>Remarks</vs-th> -->
                    <vs-th>Status</vs-th>

                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">
                        <vs-td :data="tr.employee.name_english">{{tr.employee.name_english}}</vs-td>
                        <vs-td :data="tr.employee.employee_num">{{tr.employee.employee_num}}</vs-td>
                        <vs-td :data="tr.employee.nssf_num">{{tr.employee.nssf_num}}</vs-td>
                        <vs-td :data="tr.employee.contract_type">{{tr.employee.contract_type}}</vs-td>
                        <vs-td :data="tr.basic_salary">{{tr.basic_salary}}</vs-td>
                        <vs-td :data="tr.bonus">{{tr.bonus}}</vs-td>
                        <!-- <vs-td :data="tr.remark">{{tr.remark}}</vs-td> -->
                        
                        <vs-td v-show='is_officer == true' :data="tr.officer_confirmed"><vs-switch @click="statusUpdate(tr.payroll_id, tr.officer_confirmed)" v-model="tr.officer_confirmed"/></vs-td>

                        <vs-td v-show='is_admin == true' :data="tr.management_confirmed" > 
                            <vs-select v-model="tr.management_confirmed" width="120px" @input="changeManagementStatus(tr.management_confirmed, tr.id, 'admin')">
                                  <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in statusList" />
                            </vs-select>
                        </vs-td>

                        <vs-td v-show='is_supervisor == true' :data="tr.supervisor_confirmed"> 
                            <vs-select v-model="tr.supervisor_confirmed" width="120px" @input="changeManagementStatus(tr.supervisor_confirmed, tr.id, 'supervisor')">
                                  <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in statusList" />
                            </vs-select>
                        </vs-td>

                        <vs-td>
                            <vs-button :to="'edit-payroll/'+tr.payroll_id" size="small" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                            <vs-button :to="'payroll-detail/'+tr.payroll_id" size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>


    </div>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex';
export default {
    inject : ['generatePassword'],
    data() {
        return {
            // switch1: true,
            editCustomerModal: false,
            customer_id: '',
            name_english: '',
            name_khmer: '',
            industry: '',
            tax_card_num: '',
            tin_no: '',
            email: '',
            telephone: '',
            address: '',
            street: '',
            village: '',
            muncipality: '',
            district: '',
            province: '',
            sangkat: '',
            group: '',
            incorporation_date: '',
            customField:[],
            tax_id: '',
            is_admin: false,
            is_supervisor: false,
            is_officer: false,
            selected_status: 1,
            statusList:[
                {text:'Pending',value:0},
                {text:'Approve',value:1},
                {text:'Un approve',value:2},
              ],

        };
    },
    computed: {
    	...mapState('payrolls/', ['payrolls'])

    },
    
    created() {
    	this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.getPayrolls(this.tax_id);
       
       if (this.$store.state.AppActiveUser.type == 'Admin') {
            this.is_admin = true;
        }

        if (this.$store.state.AppActiveUser.type == 'Supervisor') {
            this.is_supervisor = true;
        }

        if (this.$store.state.AppActiveUser.type == 'Officer') {
            this.is_officer = true;
        }     
    },
    methods: {
        ...mapActions({
            getPayrolls: 'payrolls/getPayrolls',
            statusChange: 'taxes/statusUpdateSPP',
            statusChangeManagment: 'taxes/statusChangeManagment'
        }),

        changeManagementStatus(status, id, by){
            
            let data = {
                id: id,
                status: status,
                by: by,
                tax_id: this.tax_id,
                notify: this.$vs.notify,
                tax_type: 'payroll'
            };
            this.statusChangeManagment(data).then((res)=> {
               
            });
        },

        statusUpdate(id, status){

            let data = {
                id: id,
                tax_id: this.tax_id,
                notify: this.$vs.notify,
                type: 'payroll'
            };
            this.statusChange(data).then((res)=> {
               if(res.data.status != true){
                    var index = this.payrolls.findIndex(function(o){ return o.payroll_id == id;} );
                    if(res.data.response == 'undefined'){
                        this.payrolls[index].officer_confirmed = status; 
                    }else{
                        this.payrolls[index].officer_confirmed = res.data.response; 
                    }
               }
            });

        },

        addMoreFeild () {
            this.customField.push({name : 'additional_field[]',value : '',type: 'text'});
        },

        updateCustomer(e) {
            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.editCustomerForm);
                    this.update(fd).then( (res) => {
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.editCustomerModal = false;
                            this.$vs.notify({title:'Success',text:'Customer Updated Successfully',color:'success',position:'top-right'})
                            this.$vs.loading.close();
                            this.getCustomers();
                        }
                    })
                }
            })
        },
    }
}

</script>

<style type="text/css">
    .con-vs-popup .vs-popup {
        width: 1000px !important;
    }
    
</style>

