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
                    <vs-list>
                        <vs-list-item title="Edit Sale">
                            <vs-button :to="'/sale-update/'+$route.params.id" icon-pack="feather" size="small" icon='icon-edit'></vs-button>
                        </vs-list-item>
                        <template>
                            <vs-list-item v-if="userType == 'Admin' || userType == 'Super Admin'" title="Status">
                                <vs-button icon-pack="feather" size="small" icon='icon-check-circle' @click="changeManagementStatus('1', sale.id, 'admin')"></vs-button>
                                <vs-button icon-pack="feather" size="small" icon='icon-x-circle' @click="changeManagementStatus('0', sale.id, 'admin')"></vs-button>
                            </vs-list-item>

                             <vs-list-item v-if="userType == 'Supervisor'" title="Status">
                                <vs-button icon-pack="feather" size="small" icon='icon-check-circle' @click="changeManagementStatus('1', sale.id, 'supervisor')"></vs-button>
                                <vs-button icon-pack="feather" size="small" icon='icon-x-circle' @click="changeManagementStatus('0', sale.id, 'supervisor')"></vs-button>
                            </vs-list-item>


                            <vs-list-item v-if="userType == 'Officer'" title="Status">
                                <vs-switch icon-pack="feather" @click="statusUpdate(sale.sale_id, sale.officer_confirmed)" v-model="sale.officer_confirmed"></vs-switch>
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
    created() {
        this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.getCustomer(localStorage.getItem('customer'));
        this.getSale(this.$route.params.id);
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
