<template>
    <div>
        <multi-uploads @error="hasError" @uploaded="successMultipleUpload" ref="multiUploads" :action="multipleRoute" sample-url="./public/samples/sale.xlsx" :active="multipleUploadPopup"></multi-uploads>
        <!-- <vx-card title="Add Customer" subtitle="Add Information Of Customer OR company which tax will be managed by system" noShadow noRadius> -->
        <vx-card title="Add Sale" noShadow noRadius>
            <template slot="actions">
                <vs-button @click="showUploader()" class="mt-5" type="gradient" button="button">Upload Excel Sheet</vs-button>
            </template>
            <form ref="addForm" @submit.prevent="addForm($event)" autocomplete="off">
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="account_code" data-vv-as="Account Code" v-validate="`required`" label-placeholder="Account Code" v-model="account_code" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('account_code')">{{errors.first('account_code')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="account_description" data-vv-as="Account Description" v-validate="`required`" label-placeholder="Account Description" v-model="account_description" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('account_description')">{{errors.first('account_description')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="accounting_reference" data-vv-as="Account Reference" v-validate="`required`" label-placeholder="Account Reference" v-model="account_ref" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('accounting_reference')">{{errors.first('accounting_reference')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="signature_date" data-vv-as="Signature Date" v-validate="`required`" label-placeholder="Signature Date" v-model="sign_date" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('signature_date')">{{errors.first('signature_date')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="branch_name" data-vv-as="Branch Name" v-validate="`required`" label-placeholder="Branch#/Name" v-model="branch_name" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('branch_name')">{{errors.first('branch_name')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="tax_period" data-vv-as="Tax Period" v-validate="`required`" label-placeholder="Tax Period" v-model="tax_period" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('tax_period')">{{errors.first('tax_period')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="invoice_date" data-vv-as="Invoice Date" v-validate="`required`" label-placeholder="Invoice Date" v-model="invoice_date" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('invoice_date')">{{errors.first('invoice_date')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="invoice_num" data-vv-as="Invoice No. / Credit Note No." v-validate="`required`" label-placeholder="Invoice No./ Credit Note No." v-model="invoice_number" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('invoice_num')">{{errors.first('invoice_num')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="client_name" label-placeholder="Client Name" v-model="customer.name_english" />
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="client_tin" label-placeholder="Client TIN" v-model="customer.tin_no" />
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="description" data-vv-as="Description" v-validate="`required`" label-placeholder="Description" v-model="description" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('description')">{{errors.first('description')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="quantity" data-vv-as="Quantity" v-validate="`required`" label-placeholder="Quantity" v-model="quantity" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('quantity')">{{errors.first('quantity')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="non_taxable_sales" data-vv-as="Non-Taxable Sales" v-validate="`decimal`" label-placeholder="Non-Taxable Sales" v-model="non_taxable_sales" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('non_taxable_sales')">{{errors.first('non_taxable_sales')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="vat" data-vv-as="Value of Exports / 0% VAT" label-placeholder="Value of Exports/ 0% VAT" v-model="export_value" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('vat')">{{errors.first('vat')}}</span>
                    </vs-col>
                </vs-row>
                <br>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <label>Sales to Taxable Persons</label>
                        <vx-input-group>
                            <vs-input name="taxable_person_sales" data-vv-as="Non-Taxable Sales" v-validate="'decimal'" label-placeholder="Non-Taxable Sales" v-model="person_non_taxable_sales" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('taxable_person_sales')">{{errors.first('taxable_person_sales')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <label>Sales to Customers</label><br>
                        <vx-input-group>
                            <vs-input name="cust_sales" data-vv-as="Non-Taxable Sales" v-validate="'decimal'" label-placeholder="Non-Taxable Sales" v-model="customer_non_taxable_sales" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('cust_sales')">{{errors.first('cust_sales')}}</span>
                    </vs-col>
                    <vs-col class="mt-5" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="total_taxable_value" data-vv-as="Total Taxable Value" label-placeholder="Total Taxable Value" v-model="total_taxable_value" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('total_taxable_value')">{{errors.first('total_taxable_value')}}</span>
                    </vs-col>
                    <!-- <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="person_export_value" label-placeholder="VAT" v-model="person_export_value" />
                        </vx-input-group>
                    </vs-col> -->
                </vs-row>
                <vs-divider>Tax Parameters</vs-divider>
                <vs-row>
                    <vs-col v-if="params.length > 0" vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12" class="flex justify-end">
                        <vs-button button="button" @click="calculateTaxParams" type="border" icon="icon-refresh-ccw" icon-pack="feather"></vs-button>
                    </vs-col>
                    <vs-col v-for="(param,index) in params" :key="index" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="param" :label="param.tax_param_id" :placeholder="param.tax_param_id" v-model="param.calculated_val" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('total_taxable_value')">{{errors.first('total_taxable_value')}}</span> -->
                    </vs-col>
                </vs-row>
                <vs-row>
                    <vs-col class="mt-5" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-select width="100%" placeholder="Item subject to taxes" multiple v-model='params' @input="getSelected" name="params">
                                <vs-select-item v-for="(param,index) in parameters" :key="index" :text="param.tax_param_id" :value="param"></vs-select-item>
                            </vs-select>
                            <!-- <vs-input name="item_subject_taxes" v-validate="`required`" label-placeholder="Item subject to taxes:" v-model="item_subject_taxes" /> -->
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('item_subject_taxes')">{{errors.first('item_subject_taxes')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="comments" label-placeholder="Comments (3E-Fii)" v-model="comments_3e_fii" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('comments_3e_fii')">{{errors.first('comments_3e_fii')}}</span> -->
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="client_response" label-placeholder="Client Responses" v-model="client_responses" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('client_response')">{{errors.first('client_response')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="top_comments" label-placeholder="Comments for ToP" v-model="comments_for_top" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('top_comments')">{{errors.first('top_comments')}}</span>
                    </vs-col>
                    <vs-col v-for="(field,index) in customField" :key="index" class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input :type="field.text" :name="field.name" v-validate="`required`" :label-placeholder="'Custom Field '+(index + 1)" v-model="field.value" />
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vs-button class="mt-5" @click="addMoreFeild()" type="gradient" button="button">Add More Custom Fields</vs-button>
                    </vs-col>
                </vs-row>
                <vs-row>
                    <vs-col class="text-center" vs-lg='12' vs-md='12'>
                        <vs-col class="text-center" vs-md="12" vs-lg="12">
                            <vs-button button="submit" class="mt-5" type="gradient">Save</vs-button>
                        </vs-col>
                    </vs-col>
                </vs-row>
            </form>
        </vx-card>
    </div>
</template>
<script>
const multiUploads = () => import('@/components/MultiUploads.vue')
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            multipleUploadPopup: false,
            customField: [],
            account_code: '',
            account_description: '',
            account_ref: '',
            sign_date: '',
            branch_name: '',
            tax_period: '',
            invoice_date: '',
            invoice_number: '',
            client_name: '',
            client_tin: '',
            description: '',
            quantity: '',
            non_taxable_sales: 0,
            export_value: 0,
            person_non_taxable_sales: 0,
            person_export_value: 0,
            customer_non_taxable_sales: 0,
            customer_export_value: 0,
            total_taxable_value: 0,
            item_subject_taxes: '',
            comments_3e_fii: '',
            client_responses: '',
            comments_for_top: '',
            tax_id: '',
            customer_id: '',
            multipleRoute: '',
            params: [],
            totalVat: 0,
        };
    },
    components: {
        multiUploads
    },
    computed: {
        ...mapState('customers', ['customer']),
        ...mapState('taxes', ['parameters']),
        averageRate() {
            return this.$store.state.averageRate;
        },
        total_in_khmer() {
            //(Non Taxable Sales x Value Of Exports x Sales to taxable person x Sales to Consumer) x Exchange Rate
            // console.log('')
            return (parseFloat(this.non_taxable_sales) + parseFloat(this.export_value) + parseFloat(this.person_non_taxable_sales) + parseFloat(this.customer_non_taxable_sales)) * this.averageRate;
        }
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
    created() {
        this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.customer_id = localStorage.getItem('customer');
        this.$store.dispatch('getAverageRate');
        this.getCustomer(this.customer_id);
        let loginUserId;
        let loginUsertype;
        if (this.$store.state.AppActiveUser.type == 'Supervisor') {
            loginUsertype = 'supervisor';
        } else {
            loginUsertype = 'officer';
        }
        loginUserId = this.$store.state.AppActiveUser.manager_id;
        // console.log(loginUserId)
        this.multipleRoute = 'add-multiple-sales/' + this.customer_id + '/' + this.tax_id + '/' + loginUsertype + '/' + loginUserId;
        var self = this;
        this.getParameters().then(function() {
            /*_.each(self.parameters,(o)=>{
                if(o.tax_code == 'PPT' || o.tax_code == 'VAT'){
                    // self.params.push(o)
                }
            });*/
        });
    },
    methods: {
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
            _.each(this.params, (o, index) => {

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
        showUploader() {
            this.$refs.multiUploads.isShown = true;
        },
        checkSelectedValues(param) {
            return true;
        },
        getSelected(values) {
            var selectedTaxes = _.filter(values, (o) => {
                if (o.tax_code == 'PPT' || o.tax_code == 'VAT') {
                    return o;
                }
            });
            // console.log(selectedTaxes);

        },
        addMoreFeild() {
            this.customField.push({ name: 'additional_fields[]', value: '', type: 'text' });
        },
        hasError(res) {
            this.$vs.notify({
                color: 'danger',
                text: res.msg,
                position: 'right-top',
                fixed: true,
            })
        },
        successMultipleUpload(res) {
            this.$vs.notify({
                color: 'success',
                text: res.msg,
                position: 'right-top',
                fixed: true,
            })
            this.$refs.multiUploads.isShown = false;
        },
        ...mapActions({
            submit: 'sales/addSale',
            getCustomer: 'customers/getCustomer',
            getParameters: 'taxes/getParameters',
        }),

        addForm(e) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.addForm);
                    fd.append('tax_id', this.tax_id)
                    fd.append('customer_id', this.customer_id)
                    fd.append('created_by', this.$store.state.AppActiveUser.manager_id);
                    fd.append('creator_type', this.$store.state.AppActiveUser.type);
                    /*if (this.$store.state.AppActiveUser.type == 'Supervisor') {
                    } else {
                        fd.append('officer_id', this.$store.state.AppActiveUser.manager_id);
                    }*/
                    this.submit(fd).then(res => {
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.$vs.notify({ title: 'Success', text: 'Sale Added Successfully', color: 'success', position: 'top-right' })
                            this.$vs.loading.close();
                        }
                        if (res.data.status == 'error') {
                            alert(res.data.msg);
                        }

                    })
                }
            })
        }
    }
}

</script>
