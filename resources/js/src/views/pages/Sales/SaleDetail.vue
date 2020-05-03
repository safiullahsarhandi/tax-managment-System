<template>
    <div>
        <vs-row>
            <vs-col vs-lg="9" vs-md="9" vs-sm="12">
                <vx-card title="Sales Detail">
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
                            <h6>Account Code:</h6>
                            <p>{{sale.account_code}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Account Description:</h6>
                            <p>{{sale.account_description}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Accounting Reference:</h6>
                            <p>{{sale.accounting_reference}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Signature Date:</h6>
                            <p>{{sale.signature_date}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Branch Name:</h6>
                            <p>{{sale.branch_name}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Tax Period:</h6>
                            <p>{{sale.tax_period}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Invoice Date:</h6>
                            <p>{{sale.invoice_date}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Invoice Number:</h6>
                            <p>{{sale.invoice_num}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Description:</h6>
                            <p>{{sale.description}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="4" vs-md="4" vs-sm="12">
                            <h6>Quantity:</h6>
                            <p>{{sale.quantity}}</p>
                        </vs-col>
                    </vs-row>
                </vx-card>
                <vx-card class="mt-base" title="Sales Summary">
                    <vs-row>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Non Taxable Sale:</h6>
                            <p>{{customer.non_taxable_sales || 'NA'}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Non taxable sale x Average rate:</h6>
                            <p>{{non_taxable_sales}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Value Of Exports:</h6>
                            <p>{{sale.vat || 'NA'}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Value Of Exports:</h6>
                            <p>{{value_of_exports}}</p>
                        </vs-col>
                        <vs-divider position="left">
                            <h5>Sales to Taxable Persons</h5>
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
                        </vs-col>
                    </vs-row>
                </vx-card>
            </vs-col>
            <vs-col vs-lg="3" vs-md="3" vs-xl="3" vs-sm="12">
                <vx-card title="Actions">
                    <vs-select v-if="userType == 'Supervisor'" autocomplete
                     @input="changeManagementStatus(sale.supervisor_confirmed, sale.sale_id, 'supervisor')" v-model="sale.supervisor_confirmed" class="p-0 ml-0" placeholder="Select Status" style="width: 100%;" >
                                    <vs-select-item value="0" text="Pending"></vs-select-item>
                                    <vs-select-item value="1" text="Approve"></vs-select-item>
                                    <vs-select-item value="2" text="Review"></vs-select-item>
                                    <vs-select-item value="3" text="Reject"></vs-select-item>
                                    
                    </vs-select>
                    <vs-select v-if="userType == 'Admin' || userType == 'Super Admin'" autocomplete
                     @input="changeManagementStatus(sale.management_confirmed, sale.sale_id, 'admin')" v-model="sale.management_confirmed" class="p-0 ml-0" placeholder="Select Status" style="width: 100%;" >
                                    <vs-select-item value="0" text="Pending"></vs-select-item>
                                    <vs-select-item value="1" text="Approve"></vs-select-item>
                                    <vs-select-item value="2" text="Review"></vs-select-item>
                                    <vs-select-item value="3" text="Reject"></vs-select-item>
                                    
                    </vs-select>
                    <vs-list>
                        <vs-list-item title="Edit Sale" v-if="editPermissionAccess(tr)">
                            <vs-button :to="'/sale-update/'+$route.params.id" icon-pack="feather" size="small" icon='icon-edit'></vs-button>
                        </vs-list-item>
                        <vs-list-item title="Edit Sale" v-else>
                            <vs-button @click="notAllowed('edit')" icon-pack="feather" size="small" icon='icon-edit'></vs-button>
                        </vs-list-item>
                        <template>


                            <vs-list-item v-if="userType == 'Officer'" title="Status">
                                <vs-switch v-if="editPermissionAccess(tr)" icon-pack="feather" @click="statusUpdate(sale.sale_id, sale.officer_confirmed)" v-model="sale.officer_confirmed"></vs-switch>
                                <vs-switch v-else icon-pack="feather" @click="notAllowed('status')" v-model="sale.officer_confirmed"></vs-switch>
                            </vs-list-item>

                        </template>
                        <vs-list-item title="View Comments">
                                <vs-button icon-pack="feather" size="small" icon='icon-maximize-2' @click="handleToggleDrawer"></vs-button>
                        </vs-list-item>
                    </vs-list>
                </vx-card>
            </vs-col>
        </vs-row>
        <the-customizer
           ref="commentsView"
           :object_id="$route.params.id"
           type="Sale"
           comments-url="get-comments"
            />
        <!-- <Slide right width="350" isOpen>
        </Slide> -->
    </div>
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
            tax_id: '',
            openComments: false
        };
    },
    async created() {
        await this.getSale(this.$route.params.id);
        localStorage.setItem('customer',this.sale.customer_id)
        localStorage.setItem('currentDetail','/tax-collection/'+this.sale.tax_id);
        this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.getCustomer(localStorage.getItem('customer'));
        this.$store.dispatch('getAverageRate');
    },
    computed: {
        ...mapState('sales', ['sale']),
        ...mapState('customers', ['customer']),
        userType() {
            return this.$store.getters.userType;
        },
        averageRate() {
            return this.$store.state.averageRate;
        },
        non_taxable_sales() {
            return (this.sale.non_taxable_sales * this.averageRate);
        },
        value_of_exports() {
            return (this.sale.vat * this.averageRate);
        },
        person_vat() {
            return parseFloat(this.sale.taxable_person_sales * 0.1).toFixed(2);
        },
        person_taxable() {
            return parseFloat(this.sale.taxable_person_sales * this.averageRate);
        },
        person_taxable_vat() {
            return parseFloat(this.person_taxable * 0.1).toFixed(2);
        },
        customer_vat() {
            return parseFloat(this.sale.cust_sales * 0.1).toFixed(2);
        },
        customer_taxable() {
            return parseFloat(this.sale.cust_sales * this.averageRate);
        },
        customer_taxable_vat() {
            return parseFloat(this.customer_taxable * 0.1).toFixed(2);
        },
    },
    methods: {
        handleToggleDrawer() {
        	this.$refs.commentsView.active = !this.$refs.commentsView.active;
        },
        ...mapActions({
            getSale: 'sales/getSale',
            getCustomer: 'customers/getCustomer',
            statusChange: 'taxes/statusUpdateSPP',
            statusChangeManagment: 'taxes/statusChangeManagment'
        }),

        statusUpdate(id, status){

            let data = {
                id: id,
                tax_id: this.tax_id,
                notify: this.$vs.notify,
                type: 'sale'
            };
            this.statusChange(data).then((res)=> {
               if(res.data.status != true){
                    if(res.data.response == 'undefined'){
                        this.sale.officer_confirmed = status; 
                    }else{
                        this.sale.officer_confirmed = res.data.response; 
                    }
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
                msg = 'You can\'t change sale status, if Sale is approved or supervisor reviewing it';
            }else if(opt == 'delete'){
                msg = 'You can\'t delete sale, if Sale is approved or supervisor reviewing it';
            }else if(opt == 'edit'){
                msg = 'You can\'t edit/update sale, if Sale is approved or supervisor reviewing it';
            }

            this.$vs.notify({
                text: msg,
                color: 'danger',
                position: 'top-right',
                time: 8000,
                icon: 'warning'
            });
        },

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
                var res = res.data;
                if(by == 'supervisor'){
                    this.sale.supervisor_confirmed = res.response;
                }else{
                    this.sale.management_confirmed = res.response; 
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


