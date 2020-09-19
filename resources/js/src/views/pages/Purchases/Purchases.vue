<template>
    <div>
        <vx-card title="List of Purchases">
            <!-- <template slot="actions"> -->
                <!-- <vs-button type="border" @click="addOfficerModal = true" icon-pack="feather" icon="icon-plus"></vs-button> -->
            <!-- </template> -->
            <template slot="actions">
                <vs-button type="border" :href="{url : `export-purchases/${customer_id}/${tax_id}`}" icon-pack="feather" icon="icon-download"></vs-button>
            </template>
            <vs-table search pagination max-items="6" :data="purchases">
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
                            <vs-switch v-if="editPermissionAccess(tr)" @click="statusUpdate(tr.purchase_id, tr.officer_confirmed)" v-model="tr.officer_confirmed"></vs-switch>
                            <vs-switch v-else @click="notAllowed('status')" v-model="tr.officer_confirmed == 1?true:false"> </vs-switch>
                        </vs-td>

                        <vs-td>{{ currentTaxStatus(tr) }}</vs-td>

                            
                        <vs-td v-if="editPermissionAccess(tr)">
                            <vs-button :to="'purchase-update/'+tr.purchase_id" size="small" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                            <vs-button :to="'purchase-detail/'+tr.purchase_id" size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
                            <!-- <vs-button @click="deleteRecord(data[index])" size="small" type="border" icon-pack="feather" icon="icon-trash-2"></vs-button> -->
                            <vs-button @click="openConfirm(data[index])" size="small" type="border" icon-pack="feather" icon="icon-trash-2"></vs-button>
                        </vs-td>
                        <vs-td v-else>
                            <vs-button @click="notAllowed('edit')" size="small" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                            <vs-button :to="'purchase-detail/'+tr.purchase_id" size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
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
            managerId: null,
            tax_id : '',
            is_admin: false,
            is_supervisor: false,
            is_officer: false,
            selected_status: 1,
            statusList:[
                {text:'Pending',value:0},
                {text:'Approve',value:1},
                {text:'Un approve',value:2},
              ],
            // switch1: true,
            obj_for_delete: []

        };
    },
    computed: {
        ...mapState('purchases/', ['purchases']),
    },
    created() {
        this.managerId = this.$store.state.AppActiveUser.manager_id;
        this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.customer_id = localStorage.getItem('customer');
        this.getPurchases(this.tax_id);

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
            getPurchases: 'purchases/getPurchases',
            update: 'purchases/updatePurchase',
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
                tax_type: 'purchase'
            };
            this.statusChangeManagment(data).then((res)=> {
              
            });
        },
        statusUpdate(id, status){

            let data = {
                id: id,
                tax_id: this.tax_id,
                notify: this.$vs.notify,
                type: 'purchase'
            };
            this.statusChange(data).then((res)=> {
                    var index = this.purchases.findIndex(function(o){ return o.purchase_id == id;} );
                    if(res.data.response == 'undefined'){
                        this.purchases[index].officer_confirmed = status; 
                    }else{
                        this.purchases[index].officer_confirmed = res.data.response; 
                    }
            });
        },

        currentTaxStatus(tr){


                if(this.is_officer){
                    if(tr.officer_confirmed == 0 && tr.supervisor_confirmed == 0){
                        return 'Working In Progress';
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

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 2){
                        return 'Rejected';
                    }
                }

                if(this.is_supervisor){

                    var created_by = tr.created_by.manager_id;
                    
                    if(this.managerId == created_by){

                        if(tr.supervisor_confirmed == 0 && tr.management_confirmed == 0){
                            return 'Work In Progress';
                        }

                        if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 0){
                            return 'Submit';
                        }

                        if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 1){
                            return 'Approved';
                        }

                        if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 2){
                            return 'Management Reviewing';
                        }

                        if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 3){
                            return 'Rejected';
                        }
                        if(tr.supervisor_confirmed == 0 && tr.management_confirmed == 3){
                            return 'Submit';
                        }

                    }

                    if(tr.officer_confirmed == 0 && tr.supervisor_confirmed == 0){
                        return 'Pending';
                    }

                    if(tr.officer_confirmed == 1 && tr.supervisor_confirmed == 0){
                        return 'Working In Progress';
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
                }

                if(this.is_admin){


                    let created_by = tr.created_by.manager_id;

                    if(tr.supervisor_confirmed == 0 && tr.management_confirmed == 0){
                        return 'Pending';
                    }

                    if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 0 && this.managerId != created_by){
                        return 'Approved by Supervisor';
                    }
                    if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 0 && this.managerId == created_by){
                        return 'Work In Progress';
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

                    var created_by = tr.created_by.manager_id;
                    
                    if(this.managerId == created_by){

                        if(tr.supervisor_confirmed == 0 && tr.management_confirmed == 0){
                            return true;
                        }

                        if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 0){
                            return true;
                        }

                        if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 1){
                            return false;
                        }

                        if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 2){
                            return false;
                        }

                        if(tr.supervisor_confirmed == 1 && tr.management_confirmed == 3){
                            return true;
                        }
                        if(tr.supervisor_confirmed == 0 && tr.management_confirmed == 3){
                            return true;
                        }

                    }

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

                    var created_by = tr.created_by.manager_id;
                    
                    if(this.managerId == created_by){ // means current sale added by super admin it has every access 
                        return true;
                    }

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
                msg = 'You can\'t change purchase status, if Purchase is approved or supervisor reviewing it';
            }else if(opt == 'delete'){
                msg = 'You can\'t delete purchase, if Purchase is approved or supervisor reviewing it';
            }else if(opt == 'edit'){
                msg = 'You can\'t edit/update purchase, if Purchase is approved or supervisor reviewing it';
            }

            this.$vs.notify({
                text: msg,
                color: 'danger',
                position: 'top-right',
                time: 8000,
                icon: 'warning'
            });
        },

        openConfirm(obj){
          this.obj_for_delete = obj;
          this.$vs.dialog({
            type:'confirm',
            color: 'danger',
            title: `Delete Confirmation!`,
            text: 'Are you sure! want to delete record.',
            accept:this.delete_record,
            acceptText: 'Yes Sure!',
          })
        },

        delete_record(){
            var obj = this.obj_for_delete;
            this.$vs.loading();
            var fd = new FormData();
            fd.append('id', obj.purchase_id);
            fd.append('customer_id', obj.customer_id);
            fd.append('type', 'Purchase');
            axios.post('delete-spp', fd).then(res=>{
                if(res.data.status == true){
                    this.$vs.notify({
                        title: "Success",
                        text: res.data.msg,
                        color: 'success',
                        position: 'top-right'
                    });
                    this.$vs.loading.close();
                    this.getPurchases(this.tax_id);
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

<style type="text/css">
    .con-vs-popup .vs-popup {
        width: 1000px !important;
    }
</style>

