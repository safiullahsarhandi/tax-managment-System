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
                        
                    </vs-row>
                </vx-card>
                <vx-card class="mt-base" title="Sales Summary">
                    <vs-row>
                        <vs-col class="mt-5" vs-lg="12" vs-md="12" vs-sm="12">
                            <h6>Quantity:</h6>
                            <p>{{sale.quantity}}</p>
                        </vs-col>
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Non Taxable Sale:</h6>
                            <p>{{sale.non_taxable_sales || 'NA'}}</p>
                        </vs-col>
                       
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Value Of Exports:</h6>
                            <p>{{sale.vat}}</p>
                        </vs-col>

<!--                         <vs-divider position="left">
                            <h5>Sales to Taxable Persons</h5>
                        </vs-divider> -->

                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Sales to Persons Taxable Value:</h6>
                            <p>{{sale.taxable_person_sales}}</p>
                        </vs-col>


                        <!-- <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>VAT:</h6>
                            <p>{{person_taxable_vat}}</p>
                        </vs-col> -->

<!--                         <vs-divider position="left">
                            <h5>Sales to Customers</h5>
                        </vs-divider> -->
                        
                       <!--  <vs-col class="mt-5" vs-lg="12" vs-md="12" vs-sm="12">
                        </vs-col> -->
                        <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>Sales to Customers Taxable Value:</h6>
                            <p>{{sale.cust_sales || 'N/A'}}</p>
                        </vs-col>
                        <!-- <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>VAT:</h6>
                            <p>{{customer_vat}}</p>
                        </vs-col> -->
                        
                        <!-- <vs-col class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>VAT:</h6>
                             <p>{{customer_taxable_vat}}</p>
                        </vs-col> -->


                        <vs-divider position="left">
                            <h5>Tax Parameters</h5>
                        </vs-divider>

                        <vs-col v-for="(param,index) in params" :key="index" class="mt-5" vs-lg="6" vs-md="6" vs-sm="12">
                            <h6>{{ param.tax_param_id }}</h6>
                            <p>{{ param.calculated_val }}</p> 
                        </vs-col>

                        <!-- {{ params }} -->


                        <vs-divider position="center">
                            <h5>Total Taxable Value:</h5>
                        </vs-divider>
                        <vs-col class="mt-5 text-center" vs-lg="12" vs-md="12" vs-sm="12">
                            <!-- <p>{{customer_taxable_vat}}</p> -->
                            <p>{{total_in_khmer}}</p>

                        </vs-col>

                    </vs-row>


                </vx-card>
            </vs-col>
            <vs-col vs-lg="3" vs-md="3" vs-xl="3" vs-sm="12">
                <vx-card title="Actions">
                    <vs-select v-if="userType == 'Supervisor' && is_saleCreatedByLoginUser == false" autocomplete
                     @input="changeManagementStatus(sale.supervisor_confirmed, sale.sale_id, 'supervisor')" v-model="sale.supervisor_confirmed" class="p-0 ml-0" placeholder="Select Status" style="width: 100%;" >
                                    <vs-select-item value="0" text="Pending"></vs-select-item>
                                    <vs-select-item value="1" text="Approve"></vs-select-item>
                                    <vs-select-item value="2" text="Review"></vs-select-item>
                                    <vs-select-item value="3" text="Reject"></vs-select-item>
                                    
                    </vs-select>
                    <vs-select v-if="userType == 'Supervisor' && is_saleCreatedByLoginUser == true" autocomplete
                     @input="changeManagementStatus(sale.supervisor_confirmed, sale.sale_id, 'supervisor')" v-model="sale.supervisor_confirmed" class="p-0 ml-0" placeholder="Select Status" style="width: 100%;" >
                                    <vs-select-item value="0" text="Work In Progress"></vs-select-item>
                                    <vs-select-item value="1" text="Submit"></vs-select-item>
                    </vs-select>
                    <vs-select v-if="userType == 'Admin' || userType == 'Super Admin' && show_status_dropdown == true" autocomplete
                     @input="changeManagementStatus(sale.management_confirmed, sale.sale_id, 'admin')" v-model="sale.management_confirmed" class="p-0 ml-0" placeholder="Select Status" style="width: 100%;" >
                                    <vs-select-item value="0" text="Pending"></vs-select-item>
                                    <vs-select-item value="1" text="Approve"></vs-select-item>
                                    <vs-select-item value="2" text="Review"></vs-select-item>
                                    <vs-select-item value="3" text="Reject"></vs-select-item>
                                    
                    </vs-select>
                    
                    <vs-list>
                        <vs-list-item title="Edit Sale" v-if="editPermissionAccess(sale)">
                            <vs-button :to="'/sale-update/'+$route.params.id" icon-pack="feather" size="small" icon='icon-edit'></vs-button>
                        </vs-list-item>
                        <vs-list-item title="Edit Sale" v-else>
                            <vs-button @click="notAllowed('edit')" icon-pack="feather" size="small" icon='icon-edit'></vs-button>
                        </vs-list-item>
                        <template>


                            <vs-list-item v-if="userType == 'Officer'" title="Status">
                                <vs-switch v-if="editPermissionAccess(sale)" icon-pack="feather" @click="statusUpdate(sale.sale_id, sale.officer_confirmed)" v-model="sale.officer_confirmed"></vs-switch>
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
// import { mapState, mapActions } from 'vuex';
import { mapState, mapActions, mapGetters } from 'vuex';
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
            params: [],
            person_export_value: 0,
            customer_export_value: 0,
            total_taxable_value: 0,
            totalVat: 0,
            person_non_taxable_sales:0,
            customer_non_taxable_sales:0,
            non_taxable_sales:0,
            export_value: 0,
        };
    },
    async created() {

        this.managerId = this.$store.state.AppActiveUser.manager_id;
        await this.$store.dispatch('getAverageRate');
        await this.getSale(this.$route.params.id).then(res=>{
            // console.log(res.data.sale.taxes_subject);
            // this.params = res.data.sale.taxes_subject[0].parameter;
            this.params = res.data.sale.taxes_subject;
            var created_by = res.data.sale.created_by;
            if (this.$store.state.AppActiveUser.type == 'Supervisor') {
                if(this.$store.state.AppActiveUser.manager_id == created_by.manager_id){
                    this.is_saleCreatedByLoginUser = true;
                }
            }
            

        });
        localStorage.setItem('customer',this.sale.customer_id)
        localStorage.setItem('currentDetail','/tax-collection/'+this.sale.tax_id);
        this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.getCustomer(localStorage.getItem('customer')).then(res=>{
            // console.log(res.data);
        });
        if (this.$store.state.AppActiveUser.type == 'Admin' || this.$store.state.AppActiveUser.type == 'Super Admin' ) {
            this.is_admin = true;
        }

        if (this.$store.state.AppActiveUser.type == 'Supervisor') {
            this.is_supervisor = true;
        }

        if (this.$store.state.AppActiveUser.type == 'Officer') {
            this.is_officer = true;
        }   
        this.calculateTaxParams();
    },
    computed: {
        ...mapState('sales', ['sale']),
        ...mapState('customers', ['customer']),
        ...mapState('taxes', ['parameters']),

        
        total_in_khmer() {
            //(Non Taxable Sales + Value Of Exports + Sales to taxable person + Sales to Consumer) x Exchange Rate
            return (parseFloat(this.non_taxable_sales) + parseFloat(this.export_value) + parseFloat(this.person_non_taxable_sales) + parseFloat(this.customer_non_taxable_sales)) * this.averageRate;
        },

        averageRate() {
            // return 4025;
            return this.$store.state.averageRate;
        },

        userType() {
            return this.$store.getters.userType;
        }, 
        
        
    },
    watch: {
        person_non_taxable_sales(val, oldVal) {
            this.setTotalVat();
            this.setTotalTaxableValue()
            if(val == ''){
            this.person_non_taxable_sales = 0;        
            }

        },
        customer_non_taxable_sales(val, oldVal) {

            this.setTotalVat();
            this.setTotalTaxableValue()
            if(val == ''){
            this.customer_non_taxable_sales = 0;        
            }
        },
        non_taxable_sales(val, oldVal) {

            this.setTotalTaxableValue()
            if(val == ''){
            this.non_taxable_sales = 0;        
            }
        },
        export_value(val, oldVal) {

            this.setTotalTaxableValue()
            if(val == ''){
            this.export_value = 0;        
            }
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

        setTotalVat() {
            this.totalVat = this.customer_non_taxable_sales + this.person_non_taxable_sales;
        },
        setTotalTaxableValue() {
            /*var taxable_value = (this.person_non_taxable_sales * this.averageRate);
            var person_non_taxable_val = (taxable_value + (taxable_value * 0.1));

            var taxable_value = (this.customer_non_taxable_sales * this.averageRate);
            var customer_non_taxable_val = (taxable_value + (taxable_value * 0.1));

            var non_taxable_sale = (this.non_taxable_sales * this.averageRate);
            var export_value = (this.export_value * this.averageRate);*/

            // end

            /*var person_non_taxable_val = ();
            var person_non_taxable_val = (taxable_value + (taxable_value * 0.1));

            var taxable_value = ( * this.averageRate);
            var customer_non_taxable_val = (taxable_value + (taxable_value * 0.1));

            var non_taxable_sale = ( * this.averageRate);
            var export_value = ( * this.averageRate);*/

            this.total_taxable_value = ((this.person_non_taxable_sales + this.customer_non_taxable_sales + this.non_taxable_sales + this.export_value) * this.averageRate);
        },

        calculateTaxParams() {

            this.person_non_taxable_sales = this.sale.taxable_person_sales;
            this.customer_non_taxable_sales = this.sale.cust_sales;
            this.non_taxable_sales = this.sale.non_taxable_sales;
            this.export_value = this.sale.vat;


            _.each(this.params, (o, index) => {
                var o = o.parameter;

                if (o.tax_code == 'PPT') {

                    /*
                    PPT Formula
                    Round ( Total Khmer * PPT Rate )
                    */
                    o.calculated_val = Math.round(this.total_in_khmer * this.rateToPercent(o.rate));
                }
                if (o.tax_code == 'VAT') {
                    /*
                     *   (Sales to taxable person + Sales to Consumer ) * Exchange Rate * VAT Rate
                     */

                    o.calculated_val = ((parseFloat(this.person_non_taxable_sales) + parseFloat(this.customer_non_taxable_sales)) * this.averageRate * this.rateToPercent(o.rate)).toFixed(2)
                }

                if (o.tax_code == 'ACT') {
                    /*
                     *  ACT Formula 
                        ((Sales to taxable person  + Sales to Consumer) * Exchange Rate / ( 1 + ACT Rate ) ) * ACT Rate
                     */
                    o.calculated_val = ( ( ( parseFloat(this.person_non_taxable_sales) + parseFloat(this.customer_non_taxable_sales) ) * this.averageRate / (1 + this.rateToPercent(o.rate) ) ) * this.rateToPercent(o.rate) ).toFixed(2)
                }

                if (o.tax_code == 'SPT') {
                    /*
                     *  SPT FORMULA
                        ((Sales to taxable person + Sales to Consumer) * Exchange Rate / ( 1 + SPT Base Rate * SPT Rate ) * SPT Base Rate * SPT Rate
                     */
                    o.calculated_val = ( ( parseFloat(this.person_non_taxable_sales) + parseFloat(this.customer_non_taxable_sales) ) * this.averageRate / (1 + this.rateToPercent(o.base_tax) * this.rateToPercent(o.rate) ) * this.rateToPercent(o.base_tax) * this.rateToPercent(o.rate) ).toFixed(2)
                }

                if (o.tax_code == 'PLT') {
                    /*
                     *  SPT FORMULA
                        ((Sales to taxable person + Sales to Consumer) * Exchange Rate / ( 1 + SPT Base Rate * SPT Rate ) * SPT Base Rate * SPT Rate
                     */
                     if(o.tax_param_id == 'PLT001'){
                        /*
                        * PLT IMPORTER & PRODUCER FORMULA
                          ((Sales to taxable person + Sales to Consumer) * Exchange Rate / ( 1 + PLT Rate ) * PLT Rate
                        */  
                         o.calculated_val = ( ( ( parseFloat(this.person_non_taxable_sales) + parseFloat(this.customer_non_taxable_sales) ) * this.averageRate / (1 + this.rateToPercent(o.rate) ) ) * this.rateToPercent(o.rate) ).toFixed(2)
                     }
                     if(o.tax_param_id == 'PLT002'){
                        /*
                        * PLT DISTRIBUTOR FORMULA
                          ((Sales to taxable person + Sales to Consumer) * Exchange Rate / ( 1 + PLT Base Rate * PLT Rate ) * PLT Base Rate * PLT Rate
                        */
                        o.calculated_val = ( ( parseFloat(this.person_non_taxable_sales) + parseFloat(this.customer_non_taxable_sales) ) * this.averageRate / (1 + this.rateToPercent(o.base_tax) * this.rateToPercent(o.rate) ) * this.rateToPercent(o.base_tax) * this.rateToPercent(o.rate) ).toFixed(2)
                     }
                }
                Vue.set(this.params, index, o);
            })
        },

        
        rateToPercent(rate) {
            return (rate / 100)
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


                    var created_by = tr.created_by.manager_id;
                    
                    if(this.managerId == created_by){ // means current sale added by super admin it has every access 
                        this.show_status_dropdown = false;
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
            this.statusChangeManagment(data).then(res=> {
                var res = res.data;
                if(by == 'supervisor'){
                    this.sale.supervisor_confirmed = res.response;
                }else{
                    this.sale.management_confirmed = res.response; 
                }
                
            });
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


