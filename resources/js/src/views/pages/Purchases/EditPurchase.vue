<template>
    <div>
        <vx-card title="Edit Purchase" subtitle="Update Information Of Purchase which tax will be managed by system" noShadow noRadius>
            <form ref="editform" @submit.prevent="updateForm($event)" autocomplete="off">
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <input type="hidden" name="id" v-model="data.purchase_id" data-vv-scope="editform">
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
                            <vs-input name="invoice_num" data-vv-as="Invoice Number" v-validate="`required`" label-placeholder="Invoice Number" v-model="data.invoice_num" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('invoice_num')">{{errors.first('invoice_num')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="supplier" data-vv-as="Supplier" v-validate="`required`" label-placeholder="Supplier" v-model="data.supplier" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('supplier')">{{errors.first('supplier')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="vat_tin" data-vv-as="VAT-TIN" disabled label-placeholder="VAT-Tin" v-model="customer.tin_no" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('vat_tin')">{{errors.first('vat_tin')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="description" data-vv-as="Description" v-validate="`required`" label-placeholder="Description of good/services" v-model="data.description" />
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
                            <vs-input name="non_taxable_purchases" data-vv-as="Non-Taxable Purchases" v-validate="'decimal'" label-placeholder="Non-Taxable Purchases" v-model="non_taxable_purchases" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('non_taxable_purchases')">{{errors.first('non_taxable_purchases')}}</span>
                    </vs-col>
                </vs-row>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <label>Local Purchases</label><br>
                        <vx-input-group>
                            <vs-input name="local_purchase_tax_val" data-vv-as="Local Purchases (Taxable Value)" v-validate="'decimal'" label-placeholder="Taxable Value" v-model="taxable_value_local" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('taxable_value_local')">{{errors.first('taxable_value_local')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <label>Imports</label><br>
                        <vx-input-group>
                            <vs-input name="imports_taxable_val" data-vv-as="Imports (Taxable Value)" v-validate="'decimal'" label-placeholder="Taxable Value" v-model="taxable_value_import" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('taxable_value_import')">{{errors.first('taxable_value_import')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <br>
                        <vx-input-group>
                            <vs-input name="total_vat" disabled label-placeholder="Total VAT" v-model="total_vat" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('total_vat')">{{errors.first('total_vat')}}</span>
                    </vs-col>
                </vs-row>
                <br>
                <vs-row>
                    <vs-col class="mt-5 flex justify-end" vs-md="12" vs-lg="12" vs-sm="12">
                        <vx-input-group>
                            <vs-select width="100%" @input="getSelected" autocomplete placeholder="Item subject to taxes" multiple v-model='params' name="params">
                                <vs-select-item v-for="(param,index) in parameters" :key="index" :text="`${param.tax_param_id}${param.expiry_date}`" :value="param"></vs-select-item>
                            </vs-select>
                            <!-- <vs-input name="item_subject_taxes" v-validate="`required`" label-placeholder="Item subject to taxes:" v-model="item_subject_taxes" /> -->
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('item_subject_taxes')">{{errors.first('item_subject_taxes')}}</span>
                    </vs-col>
                </vs-row>
                <vs-divider>Tax Parameters</vs-divider>
                <vs-row>
                    <vs-col v-if="params.length > 0" vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12" class="flex justify-end">
                        <vs-button button="button" @click="calculateTaxParams" type="border" icon="icon-refresh-ccw" icon-pack="feather"></vs-button>
                    </vs-col>
                    <vs-col v-for="(param,index) in params" :key="index" vs-md="12" :vs-lg="param.tax_code == 'VAT'?'8':'4'" vs-sm="12">
                        <template>
                            <vx-input-group v-if="param.tax_code != 'VAT'">
                                <vs-input disabled name="param" :label="param.tax_param_id" :placeholder="param.tax_param_id" v-model="param.calculated_val" />
                            </vx-input-group>
                            <vx-input-group v-else>
                                <vs-col class="pl-0" vs-md="12" vs-lg="6" vs-sm="12">
                                    <vs-input class="w-full" disabled name="param"  :label-placeholder="`Local Purchases ${param.tax_code}`" v-model="vat_local_purchase" />
                                </vs-col>
                                <vs-col class="pr-0" vs-md="12" vs-lg="6" vs-sm="12">
                                    <vs-input class="w-full" disabled name="param" :label-placeholder="`Overseas purchase (${param.tax_code})`" v-model="vat_overseas_purchase" />
                                </vs-col>
                            </vx-input-group>
                        </template>
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
            data: {},
            customField: [],
            total_vat: 0,
            non_taxable_purchases: 0,
            taxable_value_local: 0,
            taxable_value_import: 0,
            params: [],
            vat_overseas_purchase: 0,
            vat_local_purchase: 0
        };
    },
    computed: {
        ...mapState('customers/', ['customer']),
        ...mapState('taxes', ['parameters']),
        averageRate() {
            return this.$store.state.averageRate;
        }

    },
    async created() {
        this.tax_customer_id = localStorage.getItem('customer');
        this.$store.dispatch('getAverageRate');
        this.getCustomer(this.tax_customer_id);
        await this.getParameters('Purchases');
        this.editForm(this.$route.params.id);


    },
    watch: {
        non_taxable_purchases(val, oldVal) {
            this.setTotalVat()

        },
        taxable_value_local(val, oldVal) {
            this.setTotalVat()

        },
        taxable_value_import(val, oldVal) {
            this.setTotalVat()

        },
    },
    methods: {
        ...mapActions({
            update: 'purchases/updatePurchase',
            getCustomer: 'customers/getCustomer',
            getParameters: 'taxes/getParameters',
        }),
        calculateTaxParams() {
            _.each(this.params, (o, index) => {

                if (o.tax_code == 'WHT') {
                    /*
                     *   (Non Taxable Purchases * WHT Rate ) + (Local Purchases Taxable Value * WHT Rate)
                     */
                    o.calculated_val = ((parseFloat(this.non_taxable_purchases) * this.rateToPercent(o.rate)) + (parseFloat(this.taxable_value_local) * this.rateToPercent(o.rate))).toFixed(2);
                }
                if (o.tax_code == 'FBT') {
                    /*
                     *   (Non Taxable Purchases * FBT Rate )
                     */
                    o.calculated_val = (parseFloat(this.non_taxable_purchases) * this.rateToPercent(o.rate)).toFixed(2);
                }
                if (o.tax_code == 'VAT') {
                    if (this.taxable_value_local > 0) {
                        /*
                         *   (Local Purchace Taxable Value  * VAT Rate) for local purchase
                         */
                        this.vat_local_purchase = (this.taxable_value_local * this.rateToPercent(o.rate)).toFixed(2);
                        // o.calculated_val = (parseFloat(this.taxable_value_local) * this.rateToPercent(o.rate)).toFixed(2)
                    } else {
                        this.vat_local_purchase = 0;
                    }

                    if (this.taxable_value_import > 0) {
                        /*
                         *   (Imports Taxable Value * VAT Rate) for overseas purchase
                         */
                        this.vat_overseas_purchase = (this.taxable_value_import * this.rateToPercent(o.rate)).toFixed(2);
                        // o.calculated_val = (parseFloat(this.taxable_value_local) * this.rateToPercent(o.rate)).toFixed(2)
                    } else {
                        this.vat_overseas_purchase = 0;
                    }
                }
                Vue.set(this.params, index, o);
            })
        },
        rateToPercent(rate) {
            return (rate / 100)
        },
        getSelected(values) {
            /*_.each(values,(o,i)=>{
                if(o.tax_code == 'VAT'){

                }
            })*/
        },
        setTotalVat() {
            var non_taxable_purchase_val = (this.non_taxable_purchases * this.averageRate);

            var taxable_value = ((this.taxable_value_local) * this.averageRate);
            var taxable_value_local_val = (taxable_value + (taxable_value * 0.1));

            var taxable_value = (this.taxable_value_import * this.averageRate);
            var taxable_value_import_val = (taxable_value + (taxable_value * 0.1));
            this.total_vat = non_taxable_purchase_val + taxable_value_local_val + taxable_value_import_val;


        },
        addMoreFeild() {
            this.customField.push({ name: 'additional_fields[]', value: '', type: 'text' });
        },
        editForm(routeId) {
            // var customer = this.findCustomer(id);
            axios.post('get-single-purchase', { id: routeId }).then(res => {
                var purchase = res.data.purchase;

                this.data = purchase;
                this.taxable_value_import = (this.data.imports_taxable_val);
                this.taxable_value_local = (this.data.local_purchase_tax_val);
                this.non_taxable_purchases = (this.data.non_taxable_purchases || 0);
                self = this;
                if(self.data.taxes_subject.length > 0){
                    _.each(self.data.taxes_subject,(selectedParameter,i)=>{
                        let filteredParam = _.find(self.parameters,(parameter,key)=>{ return parameter.id == selectedParameter.param_id });
                        self.params.push(filteredParam);
                    });
                    self.calculateTaxParams()
                }
                self.customField = [];
                if (purchase.additional_fields != null) {
                    if (purchase.additional_fields.length > 0) {
                        purchase.additional_fields.map(function(val, key) {
                            self.customField.push({ name: 'additional_fields[]', value: val, type: 'text' });
                        });
                    }
                }

            });

        },

        updateForm(e) {
            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.editform);
                    _.each(this.params, (obj, key) => {

                        fd.append(`tax_params[${key}]`, obj.id);
                    });
                    this.update(fd).then((res) => {
                        // console.log(res.data);
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.editCustomerModal = false;
                            this.$vs.notify({ title: 'Success', text: 'Purchase Updated Successfully', color: 'success', position: 'top-right' })
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
