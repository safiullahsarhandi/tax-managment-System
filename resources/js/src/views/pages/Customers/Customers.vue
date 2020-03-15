<template>
    <div>
        <vx-card title="List of Customers">
            
            <vs-table search pagination :max-items="tableEntries" :data="customers">
                <template slot="header">
                    <vs-row>
                        <vs-col vs-lg="3" vs-md="3" vs-sm="12" vs-xs="12">
                            Show
                            <select style="width: 100px" class="vs-select--input" v-model="tableEntries">
                                <option value="10" v-html="10"></option>
                                <option value="25" v-html="25"></option>
                                <option value="50" v-html="50"></option>
                                <option value="100" v-html="100"></option>
                            </select>
                            Entries
                        </vs-col>
                        <vs-col  vs-lg="9" vs-md="9" vs-sm="12" vs-xs="12">
                            <vs-button style="margin-top: -5px" color="primary" type="border" icon="cloud_download">Import</vs-button>
                        </vs-col>
                    </vs-row>
                </template>
                <template slot="thead">
                    <vs-th>Customer ID</vs-th>
                    <vs-th>Name(English)</vs-th>
                    <vs-th>Name(Khmer)</vs-th>
                    <vs-th>Industy / Sector</vs-th>
                    <vs-th>Tax Duration</vs-th>
                    <vs-th>Tax ID</vs-th>
                    <vs-th>TIN # </vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th v-if="$store.getters.userType == 'Admin' || $store.getters.userType == 'Super Admin'">Supervisor</vs-th>
                    <vs-th>Officer</vs-th>
                    <vs-th v-if="$store.getters.userType != 'Admin' || $store.getters.userType != 'Super Admin'">Uncompleted Taxes</vs-th>
                    <vs-th v-if="$store.getters.userType == 'Admin' || $store.getters.userType != 'Super Admin'">Status</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">

                        <vs-td :data="tr.id"> {{'C0'+tr.id}}</vs-td>
                        <vs-td :data="tr.name_english">{{tr.name_english}}</vs-td>
                        <vs-td :data="tr.name_khmer">{{tr.name_khmer}}</vs-td>
                        <vs-td :data="tr.industry">{{tr.industry}}</vs-td>
                        <vs-td :data="tr.id">{{tr.tax_duration}}</vs-td>
                        <vs-td :data="tr.tax_card_num">{{tr.tax_card_num}}</vs-td>
                        <vs-td :data="tr.tin_no">{{tr.tin_no}}</vs-td>
                        <vs-td :data="tr.email">{{tr.email}}</vs-td>
                        <vs-td v-if="$store.getters.userType == 'Admin' || $store.getters.userType == 'Super Admin'" :data="getSupervisor(tr.supervisor)">{{getSupervisor(tr.supervisor)}}</vs-td>
                        <vs-td v-if="$store.getters.userType != 'Officer'" :data="getOfficer(tr.officer)">{{ getOfficer(tr.officer) }}</vs-td>
                        <vs-td v-if="$store.getters.userType != 'Admin' || $store.getters.userType != 'Super Admin'"  :data="0">{{0}}</vs-td>
                        <vs-td v-if="$store.getters.userType == 'Admin' || $store.getters.userType != 'Super Admin'"  :data="tr.status"><vs-switch @click="statusUpdate(tr.customer_id)" v-model="tr.status"/></vs-td>
                            
                        <vs-td>
                            <vs-button v-if="$store.getters.userType == 'Admin' || $store.getters.userType != 'Super Admin'" :to="'customer-update/'+tr.customer_id" size="small" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                            <vs-button :to="'customer-detail/'+tr.customer_id" size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
                            <!-- <vs-button @click="viewTaxTeam(tr.id)" size="small" icon-pack="feather" icon="icon-users" type="border"></vs-button> -->
                        </vs-td>

                    </vs-tr>
                </template>
            </vs-table>

        </vx-card>
        <!-- <vs-popup :active.sync="viewTaxTeamModal" title="List Of Taxes" subtitle="List of supervisors and officers who are working on customer tax. ">
            <div v-if="taxes.length > 0" v-for="(tax, taxIndex) in taxes" :key="taxIndex">
                <vs-card >
                    <vs-table :data="tax.officers">
                            <template slot="header">
                                <h5 style="color: #5b3cc4">Tax: ( {{ tax.title }} )</h5>
                                <h6 style="color: #5b3cc4">created at: {{ new Date(tax.created_at).toDateString()}}</h6>
                            </template>
                                <template slot="thead">
                                    <vs-th style="width:400px">Name</vs-th>
                                    <vs-th>Role</vs-th>
                                </template>

                                <template slot-scope="{data}">
                                    <vs-tr >
                                        <vs-td data="tax.supervisor.full_name">{{ tax.supervisor.full_name }}</vs-td>
                                        <vs-td data="supervisor">Supervisor</vs-td>
                                    </vs-tr>

                                    <vs-tr :data="tr2" :key="indextr" v-for="(tr2, indextr) in data" >
                                    <vs-td :data="tr2.detail.full_name">{{tr2.detail.full_name}}</vs-td>
                                    <vs-td data="officer">Officer</vs-td>

                                    </vs-tr>
                                </template>

                    </vs-table>
                </vs-card>
            </div>
            <div v-if="taxes.length <= 0">
                <vx-card>
                    <h4 class="text-center" style="color: #5b3cc4">Taxes not found!</h4>
                </vx-card>
            </div>
        </vs-popup> -->
       
    </div>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex';
export default {
    inject : ['generatePassword','loginUser'],
    data() {
        return {
            // switch1: true,
            viewTaxTeamModal : false,
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
            taxes : [],
            tableEntries : 10,

        };
    },
    computed: {
        ...mapState('customers/', ['customers']),
        ...mapGetters('customers/',['findCustomer']),
    },
    created() {
        this.getCustomers();
    },
    methods: {
        ...mapActions({
            getCustomers: 'customers/getCustomers',
        }),
        
        getOfficer(officer){
            if(officer != null){
                return officer.full_name;
            }else{
                return 'N/A';
            }
        },
        getSupervisor(supervisor){
            if(supervisor != null){
                return supervisor.full_name;
            }else{
                return 'N/A';
            }
        },
        statusUpdate(id){
            this.$vs.loading();
            axios.post('status-update-customer',{id:id}).then(res=>{
                this.$vs.notify({title:'Updated!...',text:res.data.msg,color:'success',position:'top-right'})
                this.$vs.loading.close();
            });
        },

       
        viewTaxTeam(id){
            var customer = this.findCustomer(id);
            console.log(customer);
            console.log(customer.taxes);
            this.taxes = customer.taxes;
            this.viewTaxTeamModal = true;
        }
    }
}

</script>

<style type="text/css">
    .con-vs-popup .vs-popup {
        width: 1000px !important;
    }
</style>

