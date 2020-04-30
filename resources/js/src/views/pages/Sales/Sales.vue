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
                <template slot="thead">
                    <vs-th>Created by</vs-th>
                    <vs-th>Branch#/ Name</vs-th>
                    <vs-th>Tax Period</vs-th>
                    <vs-th>Invoice No.</vs-th>
                    <vs-th>Invoice Date</vs-th>
                    <vs-th>Quantity</vs-th>
                    <vs-th v-show='is_officer == true'>Status</vs-th>
                    <vs-th>Current Status</vs-th>
                    <vs-th>Actions</vs-th>
                </template> 
                <template slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">
 

                        <vs-td :data="tr.created_by.full_name">{{tr.created_by.full_name}}</vs-td>
                        <vs-td :data="tr.branch_name">{{tr.branch_name}}</vs-td>
                        <vs-td :data="tr.tax_period">{{tr.tax_period}}</vs-td>
                        <vs-td :data="tr.invoice_num">{{tr.invoice_num}}</vs-td>
                        <vs-td :data="tr.invoice_date">{{tr.invoice_date}}</vs-td>
                        <vs-td :data="tr.quantity">{{tr.quantity}}</vs-td>
                        
                        <vs-td v-show='is_officer == true' :data="tr.officer_confirmed">
                            <vs-switch v-if="editPermissionAccess(tr)" @click="statusUpdate(tr.sale_id, tr.officer_confirmed, 'officer')" v-model="tr.officer_confirmed == 1?true:false"> </vs-switch>
                            <vs-switch v-else @click="notAllowed('status')" v-model="tr.officer_confirmed == 1?true:false"> </vs-switch>
                            
                        </vs-td>

                        <!-- <vs-td v-show='is_officer != true'>
                            <vs-select autocomplete @input="statusUpdate(tr.sale_id, tr.supervisor_confirmed, 'supervisor')" v-model="tr.supervisor_confirmed" class="p-0 ml-0" placeholder="Select Status" style="width: 170px;" >
                                <vs-select-item value="0" text="Work In Progress"></vs-select-item>
                                <vs-select-item value="1" text="Approve"></vs-select-item>
                                <vs-select-item value="2" text="Review"></vs-select-item>
                                
                            </vs-select>
                        </vs-td> -->

                       <!-- <vs-td v-show='is_admin == true' :data="tr.management_confirmed"> 
                        <template>
                            <span v-if="tr.officer_confirmed == 0">
                                Not Submitted yet
                            </span>
                            <span v-else-if="tr.officer_confirmed == 1 && tr.supervisor_confirmed == 0">
                                Under Supervisor Review
                            </span>
                            <span v-else-if="tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1 && tr.management_confirmed == 0">
                                Under Administration Review
                            </span>
                            <span v-else-if="tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1 && tr.management_confirmed == 1">
                                Approved
                            </span>
                        </template>
                          
                        </vs-td> -->

                        <!-- <vs-td v-show='is_supervisor == true' :data="tr.supervisor_confirmed"> 
                            <template>
                                <span v-if="tr.officer_confirmed == 0">
                                    Not Submitted yet
                                </span>
                                <span v-else-if="tr.officer_confirmed == 1 && tr.supervisor_confirmed == 0">
                                    Under Supervisor Review
                                </span>
                                <span v-else-if="tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1 && tr.management_confirmed == 0">
                                    Under Administration Review
                                </span>
                                <span v-else-if="tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1 && tr.management_confirmed == 1">
                                    Approved
                                </span>
                            </template>
                        </vs-td> -->

                        <vs-td :data="tr.quantity">{{ currentTaxStatus(tr) }}</vs-td>

                        <vs-td v-if="editPermissionAccess(tr)">
                            <vs-button :to="'sale-update/'+tr.sale_id" size="small" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                            <vs-button :to="'sale-detail/'+tr.sale_id" size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
                            <vs-button @click="deleteRecord(data[index])" size="small" type="border" icon-pack="feather" icon="icon-trash-2"></vs-button>
                        </vs-td>
                        <vs-td v-else>
                            <vs-button @click="notAllowed('edit')" size="small" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                            <vs-button :to="'sale-detail/'+tr.sale_id" size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
                            <vs-button @click="notAllowed('delete')" size="small" type="border" icon-pack="feather" icon="icon-trash-2"></vs-button>
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
            deleteRecord: 'sales/deleteRecord'
            
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

        currentTaxStatus(tr){

                if(this.is_officer){
                    if(tr.officer_confirmed == 0 && tr.supervisor_confirmed == 0){
                        return 'Work In Progress';
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 0){
                        return 'Submitted';
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1){
                        return 'Approved';
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 2){
                        return 'Supervisor Reviewing';
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 3){
                        return 'Rejected';
                    }

                    if(tr.officer_confirmed == 0 && tr.supervisor_confirmed == 3){
                        return 'Work In Progress (R)';
                    }
                }

                if(this.is_supervisor){
                    if(tr.officer_confirmed == 0 && tr.supervisor_confirmed == 0){
                        return 'Pending';
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 0){
                        return 'Work In Progress';
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1){
                        return 'Approved';
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 2){
                        return 'Review';
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 3){
                        return 'Rejected';
                    }
                    if(tr.officer_confirmed == 0 && tr.supervisor_confirmed == 3){
                        return 'Work In Progress (R)';
                    }
                }

                if(this.is_admin){
                    if(tr.supervisor_confirmed == 0 && tr.management_confirmed == 0){
                        return 'Pending';
                    }

                    if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 0){
                        return 'Approved by Supervisor';
                    }

                    if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 1){
                        return 'Approved';
                    }

                    if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 2){
                        return 'Review';
                    }

                    if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 3){
                        return 'Rejected';
                    }

                    if(tr.supervisor_confirmed == 0 && tr.management_confirmed == 3){
                        return 'Work In Progress (R)';
                    }
                }
        },

        editPermissionAccess(tr){

                if(this.is_officer){
                    if(tr.officer_confirmed == 0 && tr.supervisor_confirmed == 0){
                        return true;
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 0){
                        return true;
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1){
                        return false;
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 2){
                        return false;
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 3){
                        return true;
                    }

                    if(tr.officer_confirmed == 0 && tr.supervisor_confirmed == 3){
                        return true;
                    }
                }

                if(this.is_supervisor){
                    if(tr.officer_confirmed == 0 && tr.supervisor_confirmed == 0){
                        return false;
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 0){
                        return true;
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1){
                        return true;
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 2){
                        return true;
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 3){
                        return true;
                    }
                    if(tr.officer_confirmed == 0 && tr.supervisor_confirmed == 3){
                        return false;
                    }
                }

                if(this.is_admin){
                    if(tr.supervisor_confirmed == 0 && tr.management_confirmed == 0){
                        return false;
                    }

                    if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 0){
                        return true;
                    }

                    if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 1){
                        return true;
                    }

                    if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 2){
                        return true;
                    }

                    if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 3){
                        return true;
                    }

                    if(tr.supervisor_confirmed == 0 && tr.management_confirmed == 3){
                        return false;
                    }
                }
        },

        notAllowed(opt){

            var msg;
            if(opt == 'status'){
                msg = 'You cann\'t change sale status, Sale are approved or supervisor reviewing ';
            }else if(opt == 'delete'){
                msg = 'You cann\'t delete sale, Sale are approved or supervisor reviewing ';
            }else if(opt == 'edit'){
                msg = 'You cann\'t edit/update sale, Sale are approved or supervisor reviewing ';
            }

            this.$vs.notify({
                text: msg,
                color: 'danger',
                position: 'top-right',
                time: 8000,
                icon: 'warning'
            });
        },

        deleteRecord(obj){
            this.$vs.loading();
            var fd = new FormData();
            fd.append('id', obj.sale_id);
            fd.append('customer_id', obj.customer_id);
            fd.append('type', 'Sale');
            axios.post('delete-spp', fd).then(res=>{
                if(res.data.status == true){
                    this.$vs.notify({
                        title: "Success",
                        text: res.data.msg,
                        color: 'success',
                        position: 'top-right'
                    });
                    this.$vs.loading.close();
                    this.getSales(this.tax_id);
                }
            });
        },


        statusUpdate(id, status, action){

            let data = {
                id: id,
                tax_id: this.tax_id,
                notify: this.$vs.notify,
                type: 'sale',
                actionBy: action
            };
            this.statusChange(data).then((res)=> {
               if(res.data.status == true){
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