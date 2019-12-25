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
                    <vs-th>Remarks</vs-th>
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
                        <vs-td :data="tr.remark">{{tr.remark}}</vs-td>
                        <vs-td :data="tr.status"><vs-switch @click="statusUpdate(tr.payroll_id)" v-model="tr.status"/></vs-td>
                            
                        <vs-td>
                            <vs-button :to="'edit-payroll/'+tr.payroll_id" size="small" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
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

        };
    },
    computed: {
    	...mapState('payrolls/', ['payrolls'])

    },
    
    created() {
    	this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.getPayrolls(this.tax_id);
    },
    methods: {
        ...mapActions({
            getPayrolls: 'payrolls/getPayrolls',
        }),

        statusUpdate(id){

            axios.post('status-update-payroll',{id: id, tax_id:this.tax_id}).then(res=>{
                this.$vs.notify({title:'Updated!...',text:res.data.msg,color:'success',position:'top-right'})
                this.$vs.loading.close();
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

