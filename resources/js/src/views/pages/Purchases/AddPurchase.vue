<template>
    <div>
        <multi-uploads ref="multiUploads" action="" :active="multipleUploadPopup"></multi-uploads>
        <!-- <vx-card title="Add Customer" subtitle="Add Information Of Customer OR company which tax will be managed by system" noShadow noRadius> -->
        <vx-card title="Add Purchase" noShadow noRadius>
            <template slot="actions">
                <vs-button @click="showUploader()" class="mt-5" type="gradient" button="button">Upload Excel Sheet</vs-button>
            </template>
            <form ref="addForm" @submit.prevent="addForm($event)" autocomplete="off">
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="branch_name" v-validate="`required`" label-placeholder="Branch#/Name" v-model="branch_name" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('branch_name')">{{errors.first('branch_name')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="tax_period" v-validate="`required`" label-placeholder="Tax Period" v-model="tax_period" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('tax_period')">{{errors.first('tax_period')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="invoice_date" v-validate="`required`" label-placeholder="Invoice Date" v-model="invoice_date" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('invoice_date')">{{errors.first('invoice_date')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="invoice_number" v-validate="`required`" label-placeholder="Invoice Number" v-model="invoice_number" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('invoice_number')">{{errors.first('invoice_number')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="supplier" v-validate="`required`" label-placeholder="Supplier" v-model="supplier" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('supplier')">{{errors.first('supplier')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="vat_tin" v-validate="`required`" label-placeholder="VAT-Tin" v-model="vat_tin" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('vat_tin')">{{errors.first('vat_tin')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="good_desc" v-validate="`required`" label-placeholder="Description of good/services" v-model="good_desc" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('good_desc')">{{errors.first('good_desc')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="quantity" v-validate="`required`" label-placeholder="Quantity" v-model="quantity" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('quantity')">{{errors.first('quantity')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="non_taxable_purchases" v-validate="`required`" label-placeholder="Non-Taxable Purchases" v-model="non_taxable_purchases" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('non_taxable_purchases')">{{errors.first('non_taxable_purchases')}}</span>
                    </vs-col>
                </vs-row>
                <br>
                <label>Local Purchases</label><br>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="taxable_value_local" label-placeholder="Taxable Value" v-model="taxable_value_local" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('taxable_value_local')">{{errors.first('taxable_value_local')}}</span> -->
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="vat_local" label-placeholder="VAT" v-model="vat_local" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('vat_local')">{{errors.first('vat_local')}}</span> -->
                    </vs-col>
                </vs-row>
                <br>
                <label>Imports</label><br>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <!-- <label>Imports</label> -->
                        <vx-input-group>
                            <vs-input name="taxable_value_import" label-placeholder="Taxable Value" v-model="taxable_value_import" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('taxable_value_import')">{{errors.first('taxable_value_import')}}</span> -->
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="vat_import" label-placeholder="VAT" v-model="vat_import" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('vat_import')">{{errors.first('vat_import')}}</span> -->
                    </vs-col>
                </vs-row>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="total_vat" v-validate="`required`" label-placeholder="Total VAT" v-model="total_vat" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('total_vat')">{{errors.first('total_vat')}}</span>
                    </vs-col>
                </vs-row>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="item_subject_taxes" v-validate="`required`" label-placeholder="Itesm subject to taxes:" v-model="item_subject_taxes" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('item_subject_taxes')">{{errors.first('item_subject_taxes')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="comments_3e_fii" v-validate="`required`" label-placeholder="Comments (3E-Fii)" v-model="comments_3e_fii" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('comments_3e_fii')">{{errors.first('comments_3e_fii')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="client_responses" v-validate="`required`" label-placeholder="Client Responses" v-model="client_responses" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('client_responses')">{{errors.first('client_responses')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="comments_for_top" v-validate="`required`" label-placeholder="Comments for ToP" v-model="comments_for_top" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('comments_for_top')">{{errors.first('comments_for_top')}}</span>
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
            taxable_value_local: '',
            vat_local: '',
            taxable_value_import: '',
            vat_import: '',
            total_vat: '',
            item_subject_taxes: '',
            comments_3e_fii: '',
            client_responses: '',
            comments_for_top: '',
            tax_id: '',
            customer_id: '',
        };
    },
    components: {
        multiUploads
    },
    created() {
        this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.customer_id = localStorage.getItem('customer');
    },
    methods: {
        showUploader() {
            this.$refs.multiUploads.isShown = true;
        },
        addMoreFeild() {
            this.customField.push({ name: 'additional_field[]', value: '', type: 'text' });
        },
        ...mapActions({
            submit: 'purchases/addPurchase',
        }),

        addForm(e) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.addForm);
                    fd.append('tax_id', this.tax_id)
                    fd.append('customer_id', this.customer_id)
                    if (this.$store.state.AppActiveUser.type == 'Supervisor') {
                        fd.append('supervisor_id', this.$store.state.AppActiveUser.manager_id);
                    } else {
                        fd.append('officer_id', this.$store.state.AppActiveUser.manager_id);
                    }
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
