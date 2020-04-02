<template>
    <div>
        <vx-card title="List of Sales">
            <!-- <template slot="actions"> -->
                <!-- <vs-button type="border" @click="addOfficerModal = true" icon-pack="feather" icon="icon-plus"></vs-button> -->
            <!-- </template> -->
             <template slot="actions">
                <vs-button type="border" :href="{url : `export-sales/${customer_id}/${tax_id}`}" icon-pack="feather" icon="icon-download"></vs-button>
            </template>
            <vs-table search pagination max-items="6" :data="sales">
                
                <template slot="header">
                    <vs-button color="primary" type="border" icon="cloud_download">Export</vs-button>
                </template>
                <template slot="thead">
                    <vs-th>Branch#/ Name</vs-th>
                    <vs-th>Tax Period</vs-th>
                    <vs-th>Invoice No.</vs-th>
                    <vs-th>Invoice Date</vs-th>
                    <vs-th>Quantity</vs-th>
                    <vs-th>Status</vs-th>
                    <vs-th>Actions</vs-th>
                </template> 
                <template slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">
 
                        <vs-td :data="tr.branch_name">{{tr.branch_name}}</vs-td>
                        <vs-td :data="tr.tax_period">{{tr.tax_period}}</vs-td>
                        <vs-td :data="tr.invoice_num">{{tr.invoice_num}}</vs-td>
                        <vs-td :data="tr.invoice_date">{{tr.invoice_date}}</vs-td>
                        <vs-td :data="tr.quantity">{{tr.quantity}}</vs-td>
                        
                        <vs-td v-show='is_officer == true' :data="tr.officer_confirmed"><vs-switch @click="statusUpdate(tr.sale_id, tr.officer_confirmed)" v-model="tr.officer_confirmed"/></vs-td>

                       <vs-td v-show='is_admin == true' :data="tr.management_confirmed"> 
                            <vs-select v-model="tr.management_confirmed" width="120px"  @input="changeManagementStatus(tr.management_confirmed, tr.id, 'admin')">
                                  <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in statusList" />
                            </vs-select>
                        </vs-td>

                        <vs-td v-show='is_supervisor == true' :data="tr.supervisor_confirmed"> 
                            <vs-select v-model="tr.supervisor_confirmed" width="120px" @input="changeManagementStatus(tr.supervisor_confirmed, tr.id, 'supervisor')">
                                  <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in statusList" />
                            </vs-select>
                        </vs-td>

                        <vs-td>
                            <vs-button :to="'sale-update/'+tr.sale_id" size="small" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                            <vs-button :to="'sale-detail/'+tr.sale_id" size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
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
            tax_id : '',
            customer_id : '',
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
        ...mapState('sales/', ['sales']),
      
    },
    created() {
        this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.customer_id = localStorage.getItem('customer');
        this.getSales(this.tax_id);
        
        
        if (this.$store.state.AppActiveUser.type == 'Admin' || this.$store.state.AppActiveUser.type == 'Super Admin' ) {
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
            getSales: 'sales/getSales',
            update: 'sales/updateSales',
            statusChange: 'taxes/statusUpdateSPP',
            statusChangeManagment: 'taxes/statusChangeManagment',
            
        }),

        changeManagementStatus(status, id, by){
            
            let data = {
                id: id,
                status: status,
                by: by,
                tax_id: this.tax_id,
                notify: this.$vs.notify,
                tax_type: 'sale'
            };
            this.statusChangeManagment(data).then((res)=> {
               
            });
        },


        statusUpdate(id, status){

            let data = {
                id: id,
                tax_id: this.tax_id,
                notify: this.$vs.notify,
                type: 'sale'
            };
            this.statusChange(data).then((res)=> {
               if(res.data.status != true){
                    var index = this.sales.findIndex(function(o){ return o.sale_id == id;} );
                    if(res.data.response == 'undefined'){
                        this.sales[index].officer_confirmed = status; 
                    }else{
                        this.sales[index].officer_confirmed = res.data.response; 
                    }
               }
            });

        },

        addMoreFeild () {
            this.customField.push({name : 'additional_field[]',value : '',type: 'text'});
        },

        makePassword(){
            this.password = this.generatePassword();
        }
    }
}

</script>