<template>
    <div>
        <multi-uploads @error='hasError' @uploaded="successMultipleUpload" ref="multiUploads" :action="multipleRoute" sample-url="./public/samples/purchase.xlsx" :active="multipleUploadPopup"></multi-uploads>
        <!-- <vx-card title="Add Customer" subtitle="Add Information Of Customer OR company which tax will be managed by system" noShadow noRadius> -->
        <vx-card title="Add Purchase" noShadow noRadius>
            <template slot="actions">
                <vs-button @click="showUploader()" class="mt-5" type="gradient" button="button">Upload Excel Sheet</vs-button>
            </template>
            <form ref="addForm" @submit.prevent="addForm($event)" autocomplete="off">
                <vs-row>
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
                            <vs-input name="invoice_num" data-vv-as="Invoice Number" v-validate="`required`" label-placeholder="Invoice Number" v-model="invoice_number" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('invoice_num')">{{errors.first('invoice_num')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="supplier" data-vv-as="Supplier" v-validate="`required`" label-placeholder="Supplier" v-model="supplier" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('supplier')">{{errors.first('supplier')}}</span>
                    </vs-col>
                   <!--  <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="vat_tin" label-placeholder="VAT-Tin" v-model="vat_tin" />
                        </vx-input-group>
                    </vs-col> -->
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="description" data-vv-as="Description of good/services" v-validate="`required`" label-placeholder="Description of good/services" v-model="good_desc" />
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
                            <vs-input name="non_taxable_purchases" data-vv-as="Non-Taxable Purchases" label-placeholder="Non-Taxable Purchases" v-model="non_taxable_purchases" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('non_taxable_purchases')">{{errors.first('non_taxable_purchases')}}</span>
                    </vs-col>
                </vs-row>
                <br>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <label>Local Purchases</label>
                        <vx-input-group>
                            <vs-input name="local_purchase_tax_val" data-vv-as="Taxable Value" label-placeholder="Taxable Value" v-model="taxable_value_local" />
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <!-- <label>Imports</label> -->
                        <label>Imports</label>
                        <vx-input-group>
                            <vs-input name="imports_taxable_val" data-vv-as="Taxable Value (Imports)" label-placeholder="Taxable Value" v-model="taxable_value_import" />
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mt-5" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="total_vat" data-vv-as="Total VAT" label-placeholder="Total VAT" v-model="total_vat" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('total_vat')">{{errors.first('total_vat')}}</span>
                    </vs-col>
                    <!-- <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="vat_local" label-placeholder="VAT" v-model="vat_local" />
                        </vx-input-group>
                    </vs-col> -->
                </vs-row>
                <br>
                <vs-row>
                    <!-- <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="vat_import" label-placeholder="VAT" v-model="vat_import" />
                        </vx-input-group>
                    </vs-col> -->
                </vs-row>
                <vs-row>
                </vs-row>
                <vs-row>
                    <vs-col class="mt-5" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-select width="100%" placeholder="Item subject to taxes" multiple v-model='params' name="params">
                                <vs-select-item :disabled="param.tax_code == 'PPT' || param.tax_code == 'VAT'"  v-for="(param,index) in parameters" :key="index" :text="param.tax_param_id" :value="param"></vs-select-item>
                            </vs-select>
                            <!-- <vs-input name="item_subject_taxes" v-validate="`required`" label-placeholder="Item subject to taxes:" v-model="item_subject_taxes" /> -->
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('item_subject_taxes')">{{errors.first('item_subject_taxes')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="comments" label-placeholder="Comments (3E-Fii)" v-model="comments_3e_fii" />
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="client_responses" label-placeholder="Client Responses" v-model="client_responses" />
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="top_comments" label-placeholder="Comments for ToP" v-model="comments_for_top" />
                        </vx-input-group>
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
            branch_name: '',
            tax_period: '',
            invoice_date: '',
            invoice_number: '',
            supplier: '',
            vat_tin: '',
            good_desc: '',
            quantity: '',
            non_taxable_purchases: '',
            taxable_value_local: 0,
            vat_local: 0,
            taxable_value_import: 0,
            vat_import: 0,
            total_vat: 0,
            item_subject_taxes: '',
            comments_3e_fii: '',
            client_responses: '',
            comments_for_top: '',
            tax_id: '',
            customer_id: '',
            multipleRoute: '',
            params : [],
        };
    },
    components: {
        multiUploads
    },
    watch: {
      non_taxable_purchases(val, oldVal){
        this.setTotalVat()

      },
      taxable_value_local(val, oldVal){
        this.vat_local = parseFloat(Math.abs(val) * 0.1).toFixed(2)
        this.setTotalVat()

      },
      taxable_value_import(val, oldVal){
        this.vat_import = parseFloat(Math.abs(val) * 0.1).toFixed(2)
        this.setTotalVat()

      },
    },
    computed : {
        ...mapState('customers',['customer']),
        ...mapState('taxes', ['parameters']),
        averageRate(){
            return this.$store.state.averageRate;
        }
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
        this.multipleRoute = 'add-multiple-purchases/' + this.customer_id + '/' + this.tax_id + '/' + loginUsertype + '/' + loginUserId;
        this.getParameters().then(function(){
        _.each(self.parameters,(o)=>{
            if(o.tax_code == 'PPT' || o.tax_code == 'VAT'){
                self.params.push(o)
            }
        });
        });
    },
    methods: {
        setTotalVat(){
            var non_taxable_purchase_val = (this.non_taxable_purchases * this.averageRate);

            var taxable_value = (this.taxable_value_local * this.averageRate);
            var taxable_value_local_val = (taxable_value + (taxable_value * 0.1));

            var taxable_value = (this.taxable_value_import * this.averageRate);
            var taxable_value_import_val = (taxable_value + (taxable_value * 0.1));
            
            this.total_vat = non_taxable_purchase_val + taxable_value_local_val + taxable_value_import_val;


        },
        showUploader() {
            this.$refs.multiUploads.isShown = true;
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
            submit: 'purchases/addPurchase',
            getCustomer : 'customers/getCustomer',
            getParameters : 'taxes/getParameters',
        }),

        addForm(e) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.addForm);
                    fd.append('tax_id', this.tax_id)
                    fd.append('customer_id', this.customer_id)
                        fd.append('created_by', this.$store.state.AppActiveUser.manager_id);
                    /*if (this.$store.state.AppActiveUser.type == 'Supervisor') {
                    } else {
                        fd.append('officer_id', this.$store.state.AppActiveUser.manager_id);
                    }*/
                    this.submit(fd).then(res => {
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.$vs.notify({ title: 'Success', text: 'Purchase Added Successfully', color: 'success', position: 'top-right' })
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
