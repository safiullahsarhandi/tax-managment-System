<template>
    <div>
        <vx-card title="Pending Payroll Approvals" subtitle="listed below Payrolls need your approval which are created by you and your officers">
            <vs-table search pagination max-items="6" :data="payrolls">
                <template slot="thead">
                    <vs-th>Added By</vs-th>
                    <vs-th>Employee Name</vs-th>
                    <vs-th>Employee No.</vs-th>
                    <vs-th>NSSF No.</vs-th>
                    <vs-th>Note</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">
                        <vs-td :data="tr.officer.full_name">{{tr.officer.full_name}}</vs-td>
                        <vs-td :data="tr.employee.name_english">{{tr.employee.name_english}}</vs-td>
                        <vs-td :data="tr.employee.employee_num">{{tr.employee.employee_num}}</vs-td>
                        <vs-td :data="tr.employee.nssf_num">{{tr.employee.nssf_num}}</vs-td>
                        <vs-td>
                                {{tr.officer_confirmation}}
                            <!-- {{tr.officer_confirmed?!tr.supervisor_confirmed?'submitted by Officer but not Approved by supervisor':!tr.management_confirmed?'Approved By supervisor But Not Approved By Admin':"Approved By Admin":'Not submitted By Officer' }} --></vs-td>
                        <vs-td>
                            <vs-switch/>
                        </vs-td>
                        <vs-td>
                            <vs-button size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
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
        this.getPendingPayrolls(this.tax_id);
    },
    methods: {
        ...mapActions({
            getPendingPayrolls: 'payrolls/getPendingPayrolls',
        }),



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
