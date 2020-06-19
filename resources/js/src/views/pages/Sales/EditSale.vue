<template>
    <div>
        <vx-card title="Edit Sale" subtitle="Update Information Of Sale which tax will be managed by system" noShadow noRadius>
            <form ref="editform" @submit.prevent="updateForm($event)" autocomplete="off">
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <input type="hidden" name="id" v-model="data.sale_id" data-vv-scope="editform">
                            <vs-input name="account_code" data-vv-as="Account Code" v-validate="`required`" label-placeholder="Account Code" v-model="data.account_code" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('account_code')">{{errors.first('account_code')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="account_description" data-vv-as="Account Description" v-validate="`required`" label-placeholder="Account Description" v-model="data.account_description" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('account_description')">{{errors.first('account_description')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="accounting_reference" data-vv-as="Account Reference" v-validate="`required`" label-placeholder="Account Reference" v-model="data.accounting_reference" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('accounting_reference')">{{errors.first('accounting_reference')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="signature_date" data-vv-as="Signature Date" v-validate="`required`" label-placeholder="Signature Date" v-model="data.signature_date" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('signature_date')">{{errors.first('signature_date')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="branch_name" data-vv-as="Branch Name" v-validate="`required`" label-placeholder="Branch#/Name" v-model="data.branch_name" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('branch_name')">{{errors.first('branch_name')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="tax_period" data-vv-as="Tax Period" v-validate="`required`" label-placeholder="Tax Period" v-model="data.tax_period" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('tax_period')">{{errors.first('tax_period')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="invoice_date" data-vv-as="Invoice Date" v-validate="`required`" label-placeholder="Invoice Date" v-model="data.invoice_date" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('invoice_date')">{{errors.first('invoice_date')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="invoice_num" data-vv-as="Invoice No. / Credit Note No." v-validate="`required`" label-placeholder="Invoice No./ Credit Note No." v-model="data.invoice_num" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('invoice_num')">{{errors.first('invoice_num')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="client_name" data-vv-as="Client Name" label-placeholder="Client Name" v-model="customer.name_english" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('client_name')">{{errors.first('client_name')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="client_tin" data-vv-as="Client TIN" label-placeholder="Client TIN" v-model="customer.tin_no" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('client_tin')">{{errors.first('client_tin')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="description" data-vv-as="Description" v-validate="`required`" label-placeholder="Description" v-model="data.description" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('description')">{{errors.first('description')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="quantity" data-vv-as="Quantity" v-validate="`required`" label-placeholder="Quantity" v-model="data.quantity" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('quantity')">{{errors.first('quantity')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="non_taxable_sales" data-vv-as="Non-Taxable Sales" v-validate="`decimal`" label-placeholder="Non-Taxable Sales" v-model="data.non_taxable_sales" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('non_taxable_sales')">{{errors.first('non_taxable_sales')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="vat" data-vv-as="Value Of Exports" v-validate="`decimal`" label-placeholder="Value of Exports/ 0% VAT" v-model="data.vat" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('vat')">{{errors.first('vat')}}</span>
                    </vs-col>
                </vs-row>
                <br>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <label>Sales to Taxable Persons</label><br>
                        <vx-input-group>
                            <vs-input name="taxable_person_sales" data-vv-as="Non-Taxable Sales" v-validate="`decimal`" label-placeholder="Non-Taxable Sales" v-model="person_non_taxable_sales" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('taxable_person_sales')">{{errors.first('taxable_person_sales')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <label>Sales to Customers</label><br>
                        <vx-input-group>
                            <vs-input name="cust_sales" data-vv-as="Non-Taxable Sales" label-placeholder="Non-Taxable Sales" v-model="customer_non_taxable_sales" />
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <br>
                        <vx-input-group>
                            <vs-input disabled name="total_taxable_value" data-vv-as="Total Taxable Value" label-placeholder="Total Taxable Value" v-model="total_taxable_value" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('total_taxable_value')">{{errors.first('total_taxable_value')}}</span>
                    </vs-col>
                    <vs-col class="mt-5 flex justify-end" vs-md="12" vs-lg="12" vs-sm="12">
                        <vx-input-group>
                            <vs-select width="100%" placeholder="Item subject to taxes" multiple v-model='params' name="param">
                                <vs-select-item v-for="(param,index) in parameters" :key="index" :text="`${param.tax_param_id}${param.expiry_date}`" :value="param"></vs-select-item>
                            </vs-select>
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('item_subject_taxes')">{{errors.first('item_subject_taxes')}}</span>
                    </vs-col>
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
                            <vs-button button="submit" class="mt-5" type="gradient">Save changes</vs-button>
                        </vs-col>
                    </vs-col>
                </vs-row>
            </form>
        </vx-card>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            data: [],
            customField: [],
            sale_id: '',
            non_taxable_sales: 0,
            export_value: 0,
            person_non_taxable_sales: 0,
            person_export_value: 0,
            customer_non_taxable_sales: 0,
            customer_export_value: 0,
            total_taxable_value: 0,
            params : [],
        };
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
            if (parseInt(val) >= 0) {

                this.person_export_value = parseFloat(val * 0.1).toFixed(2)
                // this.total_taxable_value += (taxable_value + (taxable_value * 0.1));
            } else {
                this.person_export_value = 0
            }
            this.setTotalVat()

        },
        customer_non_taxable_sales(val, oldVal) {
            if (parseInt(val) >= 0) {

                this.customer_export_value = parseFloat(val * 0.1).toFixed(2)
                var taxable_value = (val * this.averageRate);
                // this.total_taxable_value += (taxable_value + (taxable_value * 0.1));
            } else {
                this.customer_export_value = 0
            }
            this.setTotalVat()

        },
        non_taxable_sales(val, oldVal) {
            if (parseInt(val) >= 0) {

                var non_taxable_value = (val * this.averageRate);
            }
            this.setTotalVat()

        },
        export_value(val, oldVal) {
            if (parseInt(val) >= 0) {

                var non_taxable_value = (val * this.averageRate);
                // this.total_taxable_value += (non_taxable_value);
            }
            this.setTotalVat()
        },
        params(val){
            // console.log(val);
        }
    },
    async created() {
        this.customer_id = localStorage.getItem('customer');
        this.$store.dispatch('getAverageRate');
        this.getCustomer(this.customer_id);
        await this.getParameters('Sales');
        this.editForm(this.$route.params.id);
    },
    methods: {
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
        setTotalVat(){
            var taxable_value = (this.person_non_taxable_sales * this.averageRate);
            var person_non_taxable_val = (taxable_value + (taxable_value * 0.1));

            var taxable_value = (this.customer_non_taxable_sales * this.averageRate);
            var customer_non_taxable_val = (taxable_value + (taxable_value * 0.1));

            var non_taxable_sale = (this.non_taxable_sales * this.averageRate);
            var export_value = (this.export_value * this.averageRate);

            this.total_taxable_value = person_non_taxable_val + customer_non_taxable_val + non_taxable_sale + export_value;


        },
        addMoreFeild() {
            this.customField.push({ name: 'additional_fields[]', value: '', type: 'text' });
        },
        ...mapActions({
            update: 'sales/updateSale',
            getCustomer : 'customers/getCustomer',
            getParameters: 'taxes/getParameters',

        }),

        async editForm(routeId) {
            // var customer = this.findCustomer(id);
            let res = await axios.post('get-single-sale', { id: routeId });
                var sale = res.data.sale;
                this.data = sale;
                this.person_non_taxable_sales = this.data.taxable_person_sales;
                this.customer_non_taxable_sales = this.data.cust_sales;
                this.export_value = this.data.vat;
                self = this;
                if(self.data.taxes_subject.length > 0){
                    _.each(self.data.taxes_subject,(selectedParameter,i)=>{
                        let filteredParam = _.find(self.parameters,(parameter,key)=>{ return parameter.id == selectedParameter.param_id });
                        self.params.push(filteredParam);
                    });
                    self.calculateTaxParams()
                }
                self.customField = [];
                // console.log(self.params)
                if (sale.additional_fields != null) {
                    if (sale.additional_fields.length > 0) {
                        sale.additional_fields.map(function(val, key) {
                            self.customField.push({ name: 'additional_fields[]', value: val, type: 'text' });
                        });
                    }
                }

        },
        updateForm(e) {
            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.editform);
                    _.each(this.params,(obj,key)=>{
                        fd.append(`tax_params[${key}]`,obj.id);
                    });
                    this.update(fd).then((res) => {
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.editCustomerModal = false;
                            this.$vs.notify({ title: 'Success', text: 'Sale Updated Successfully', color: 'success', position: 'top-right' })
                            this.$vs.loading.close();
                            this.$router.back();
                        }
                    })
                }
            })
        },
    }
}

</script>
