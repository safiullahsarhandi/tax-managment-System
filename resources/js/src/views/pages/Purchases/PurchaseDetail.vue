<template>
    <div>
        <vs-row>
            <vs-col vs-lg="9" vs-md="9" vs-sm="12">
                <vx-card title="Purchases Detail">
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
                            <h6>Branch Name:</h6>
                            <p>{{purchase.branch_name}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Tax Period:</h6>
                            <p>{{purchase.tax_period}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Invoice Date:</h6>
                            <p>{{ new Date(purchase.invoice_date).toDateString() }}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Invoice NO:</h6>
                            <p>{{purchase.invoice_num}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Description:</h6>
                            <p>{{purchase.description}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Quantity:</h6>
                            <p>{{purchase.quantity}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Subject:</h6>
                            <p>{{purchase.subject}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Comments:</h6>
                            <p>{{purchase.comments}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Client Response:</h6>
                            <p>{{purchase.client_response}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>ToP Comments:</h6>
                            <p>{{purchase.top_comments}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Client Responses:</h6>
                            <p>{{purchase.client_responses}}</p>
                        </vs-col>
                    </vs-row>
                </vx-card>
                <vx-card class="mt-base" title="Purchases Summary">
                    <vs-row>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Non Taxable Purchase (USD):</h6>
                            <p>{{customer.non_taxable_purchases || 0}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Non taxable Purchases (RIEL):</h6>
                            <p>{{non_taxable_purchases_riel}}</p>
                        </vs-col>
                        <vs-divider position="left">
                            <h5>Local Purchases</h5>
                        </vs-divider>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Taxable Value (USD):</h6>
                            <p>{{purchase.local_purchase_tax_val || 0}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>VAT (USD):</h6>
                            <p>{{vat_local_usd}}</p>
                        </vs-col>
                        <vs-divider position="left">
                            <h5>Taxable Purchases</h5>
                        </vs-divider>
                        <vs-col class="mt-5" vs-lg="12" vs-md="12" vs-sm="12">
                            <h6>Imports:</h6>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Taxable Value (RIEL):</h6>
                            <p>{{purchase.imports_taxable_val}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>VAT (RIEL):</h6>
                            <p>{{vat_import_riel}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="12" vs-md="12" vs-sm="12">
                            <h6>Local Purchases:</h6>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Taxable Value (RIEL):</h6>
                            <p>{{local_purchase_tax_val_reil}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>VAT (RIEL):</h6>
                            <p>{{local_purchase_tax_vat_reil}}</p>
                        </vs-col>
                        <vs-divider position="center">
                            <h5>Total Taxable Value:</h5>
                        </vs-divider>
                        <vs-col class="mt-5 text-center" vs-lg="12" vs-md="12" vs-sm="12">
                            <p>{{total_vat}}</p>
                        </vs-col>
                        
                        <!--  <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Total VAT:</h6>
                            <p>{{purchase.total_vat || 'NA'}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Value Of Exports:</h6>
                            <p>{{value_of_exports}}</p>
                        </vs-col>
                        <vs-divider position="left">
                            <h5>Purchase to Taxable Persons</h5>
                        </vs-divider>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Taxable Value:</h6>
                            <p>{{sale.taxable_person_sales}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>VAT:</h6>
                            <p>{{person_vat}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Taxable Value x Average Rate:</h6>
                            <p>{{person_taxable}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>VAT:</h6>
                            <p>{{person_taxable_vat}}</p>
                        </vs-col>
                        <vs-divider position="left">
                            <h5>Sales to Customers</h5>
                        </vs-divider>
                        <vs-col class="mt-5" vs-lg="12" vs-md="12" vs-sm="12">
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Taxable Value:</h6>
                            <p>{{sale.cust_sales}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>VAT:</h6>
                            <p>{{customer_vat}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Taxable Value x Average Rate:</h6>
                            <p>{{customer_taxable}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>VAT:</h6>
                            <p>{{customer_taxable_vat}}</p>
                        </vs-col>
                        <vs-divider position="center">
                            <h5>Total Taxable Value:</h5>
                        </vs-divider>
                        <vs-col class="mt-5 text-center" vs-lg="12" vs-md="12" vs-sm="12">
                            <p>{{customer_taxable_vat}}</p>
                        </vs-col> -->
                    </vs-row>
                </vx-card>
            </vs-col>
            <vs-col vs-lg="3" vs-md="3" vs-xl="3" vs-sm="12">
                <vx-card title="Actions">
                    <vs-select v-if="userType == 'Supervisor' && is_saleCreatedByLoginUser == false" autocomplete 
                    @input="changeManagementStatus(purchase.supervisor_confirmed, purchase.purchase_id, 'supervisor')" v-model="purchase.supervisor_confirmed" class="p-0 ml-0" placeholder="Select Status" style="width: 100%;" >
                                    <vs-select-item value="0" text="Pending"></vs-select-item>
                                    <vs-select-item value="1" text="Approve"></vs-select-item>
                                    <vs-select-item value="2" text="Review"></vs-select-item>
                                    <vs-select-item value="3" text="Reject"></vs-select-item>
                                    
                    </vs-select>

                    <vs-select v-if="userType == 'Supervisor' && is_saleCreatedByLoginUser == true" autocomplete
                     @input="changeManagementStatus(purchase.supervisor_confirmed, purchase.purchase_id, 'supervisor')" v-model="purchase.supervisor_confirmed" class="p-0 ml-0" placeholder="Select Status" style="width: 100%;" >
                                    <vs-select-item value="0" text="Work In Progress"></vs-select-item>
                                    <vs-select-item value="1" text="Submit"></vs-select-item>
                    </vs-select>

                    <vs-select v-if="userType == 'Admin' || userType == 'Super Admin' && show_status_dropdown == true" autocomplete 
                    @input="changeManagementStatus(purchase.management_confirmed, purchase.purchase_id, 'admin')" v-model="purchase.management_confirmed" class="p-0 ml-0" placeholder="Select Status" style="width: 100%;" >
                                    <vs-select-item value="0" text="Pending"></vs-select-item>
                                    <vs-select-item value="1" text="Approve"></vs-select-item>
                                    <vs-select-item value="2" text="Review"></vs-select-item>
                                    <vs-select-item value="3" text="Reject"></vs-select-item>
                                    
                    </vs-select>
                    
                    <vs-list>
                        <vs-list-item v-if="editPermissionAccess(purchase)" title="Edit Purchase">
                            <vs-button :to="'/purchase-update/'+$route.params.id" icon-pack="feather" size="small" icon='icon-edit'></vs-button>
                        </vs-list-item>
                        <vs-list-item title="Edit Sale" v-else>
                            <vs-button @click="notAllowed('edit')" icon-pack="feather" size="small" icon='icon-edit'></vs-button>
                        </vs-list-item>
                        <template>
                        
                            <vs-list-item v-if="userType == 'Officer'" title="Status">
                                <vs-switch v-if="editPermissionAccess(purchase)" icon-pack="feather" @click="statusUpdate(purchase.purchase_id, purchase.officer_confirmed)" v-model="purchase.officer_confirmed"></vs-switch>
                                <vs-switch v-else icon-pack="feather" @click="notAllowed('status')" v-model="purchase.officer_confirmed"></vs-switch>
                            </vs-list-item>
                        </template> 
                        <vs-list-item title="View Comments">
                            <vs-button icon-pack="feather" size="small" icon='icon-maximize-2' @click="handleToggleDrawer"></vs-button>
                        </vs-list-item>
                    </vs-list>
                </vx-card>
            </vs-col>
        </vs-row>
        <the-customizer ref="commentsView" :object_id="$route.params.id" type="Purchase" comments-url="get-comments" />
    </div>
    <!-- <div>Testing Purchase detail Page</div> -->
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
        };
    },
    async created() {


        if (this.$store.state.AppActiveUser.type == 'Admin' || this.$store.state.AppActiveUser.type == 'Super Admin' ) {
            this.is_admin = true;
        }

        if (this.$store.state.AppActiveUser.type == 'Supervisor') {
            this.is_supervisor = true;
        }

        if (this.$store.state.AppActiveUser.type == 'Officer') {
            this.is_officer = true;
        } 
        this.managerId = this.$store.state.AppActiveUser.manager_id;
        await this.getPurchase(this.$route.params.id).then(res=>{
            var created_by = res.data.purchase.created_by;
            if (this.$store.state.AppActiveUser.type == 'Supervisor') {
                if(this.$store.state.AppActiveUser.manager_id == created_by.manager_id){
                    this.is_saleCreatedByLoginUser = true;
                }
            }

            if (this.$store.state.AppActiveUser.type == 'Admin' || this.$store.state.AppActiveUser.type == 'Super Admin') {
                if(this.$store.state.AppActiveUser.manager_id == created_by.manager_id){
                    if(this.is_admin == true){
                        this.show_status_dropdown = false;
                    }
                }
            }
        });

        

        localStorage.setItem('customer',this.purchase.customer_id)
        localStorage.setItem('currentDetail','/tax-collection/'+this.purchase.tax_id);

        this.tax_id = this.purchase.tax_id;
        this.getCustomer(this.purchase.customer_id);
        this.$store.dispatch('getAverageRate');
    },
    computed: {
        ...mapState('purchases', ['purchase']),
        ...mapState('customers', ['customer']),
        userType() {
            return this.$store.getters.userType;
        },
        averageRate() {
            return this.$store.state.averageRate;
        },
        non_taxable_purchases_riel() {
            return (this.purchase.non_taxable_purchases * this.averageRate);
        },
        vat_local_usd() {
            return parseFloat(Math.abs(this.purchase.local_purchase_tax_val) * 0.1).toFixed(2);
        },
        vat_import_riel() {
            return parseFloat(this.purchase.imports_taxable_val * 0.1).toFixed(2);
        },
        local_purchase_tax_val_reil(){
            return parseFloat(Math.abs(this.purchase.local_purchase_tax_val) * this.averageRate).toFixed(2);
        },
        local_purchase_tax_vat_reil(){
            return parseFloat(Math.abs(this.local_purchase_tax_val_reil) * 0.1).toFixed(2);
        },
        total_vat(){
            return (parseFloat(this.purchase.imports_taxable_val + this.vat_import_riel + this.local_purchase_tax_val_reil + this.local_purchase_tax_vat_reil).toFixed(2) + this.non_taxable_purchases_riel);
        }
    },
    methods: {
        handleToggleDrawer() {
            this.$refs.commentsView.active = !this.$refs.commentsView.active;
        },
        ...mapActions({
            getPurchase: 'purchases/getPurchase',
            getCustomer: 'customers/getCustomer',
            statusChange: 'taxes/statusUpdateSPP',
            statusChangeManagment: 'taxes/statusChangeManagment'
        }),

        statusUpdate(id, status) {

            let data = {
                id: id,
                tax_id: this.tax_id,
                notify: this.$vs.notify,
                type: 'purchase'
            };
            this.statusChange(data).then((res) => {
                if (res.data.response == 'undefined') {
                    this.purchase.officer_confirmed = status;
                } else {
                    this.purchase.officer_confirmed = res.data.response;
                }
            });
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

                if(this.is_supervisor && is_saleCreatedByLoginUser == false){
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

                if(this.is_supervisor && is_saleCreatedByLoginUser == true){
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
                        return false;
                    }
                    if(tr.supervisor_confirmed == 0 && tr.management_confirmed == 3){
                        return true;
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

        changeManagementStatus(status, id, by) {

            let data = {
                id: id,
                status: status,
                by: by,
                tax_id: this.tax_id,
                notify: this.$vs.notify,
                tax_type: 'purchase'
            };
            this.statusChangeManagment(data).then((res) => {
                var res = res.data;
                if(by == 'supervisor'){
                    this.purchase.supervisor_confirmed = res.response;
                }else{
                    this.purchase.management_confirmed = res.response; 
                }
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
