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
                            <vs-input name="account_code" v-validate="`required`" label-placeholder="Account Code" v-model="account_code" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('account_code')">{{errors.first('account_code')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="account_description" v-validate="`required`" label-placeholder="Account Description" v-model="account_description" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('account_description')">{{errors.first('account_description')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="account_ref" v-validate="`required`" label-placeholder="Account Reference" v-model="account_ref" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('account_ref')">{{errors.first('account_ref')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="sign_date" v-validate="`required`" label-placeholder="Signature Date" v-model="sign_date" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('sign_date')">{{errors.first('sign_date')}}</span>
                    </vs-col>
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
                            <vs-input name="invoice_number" v-validate="`required`" label-placeholder="Invoice No./ Credit Note No." v-model="invoice_number" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('invoice_number')">{{errors.first('invoice_number')}}</span>
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
                            <vs-input name="description" v-validate="`required`" label-placeholder="Description" v-model="description" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('description')">{{errors.first('description')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="quantity" v-validate="`required`" label-placeholder="Quantity" v-model="quantity" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('quantity')">{{errors.first('quantity')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="non_taxable_sales" v-validate="`decimal`" label-placeholder="Non-Taxable Sales" v-model="non_taxable_sales" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('non_taxable_sales')">{{errors.first('non_taxable_sales')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="export_value" label-placeholder="Value of Exports/ 0% VAT" v-model="export_value" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('export_value')">{{errors.first('export_value')}}</span>
                    </vs-col>
                </vs-row>
                <br>
                <label>Sales to Taxable Persons</label><br>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="person_non_taxable_sales" v-validate="'decimal'" label-placeholder="Non-Taxable Sales" v-model="person_non_taxable_sales" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('person_non_taxable_sales')">{{errors.first('person_non_taxable_sales')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="person_export_value" label-placeholder="VAT" v-model="person_export_value" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('person_export_value')">{{errors.first('person_export_value')}}</span> -->
                    </vs-col>
                </vs-row>
                <br>
                <label>Sales to Customers</label><br>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="customer_non_taxable_sales" v-validate="'decimal'" label-placeholder="Non-Taxable Sales" v-model="customer_non_taxable_sales" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('customer_non_taxable_sales')">{{errors.first('customer_non_taxable_sales')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="customer_export_value" label-placeholder="VAT" v-model="customer_export_value" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('customer_export_value')">{{errors.first('customer_export_value')}}</span> -->
                    </vs-col>
                </vs-row>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input disabled name="total_taxable_value" label-placeholder="Total Taxable Value" v-model="total_taxable_value" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('total_taxable_value')">{{errors.first('total_taxable_value')}}</span>
                    </vs-col>
                </vs-row>
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="item_subject_taxes" v-validate="`required`" label-placeholder="Item subject to taxes:" v-model="item_subject_taxes" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('item_subject_taxes')">{{errors.first('item_subject_taxes')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="comments_3e_fii" label-placeholder="Comments (3E-Fii)" v-model="comments_3e_fii" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('comments_3e_fii')">{{errors.first('comments_3e_fii')}}</span> -->
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="client_responses" label-placeholder="Client Responses" v-model="client_responses" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('client_responses')">{{errors.first('client_responses')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="comments_for_top" label-placeholder="Comments for ToP" v-model="comments_for_top" />
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
            non_taxable_sales: '',
            export_value: '',
            person_non_taxable_sales: '',
            person_export_value: 0,
            customer_non_taxable_sales: '',
            customer_export_value: 0,
            total_taxable_value: 0,
            item_subject_taxes: '',
            comments_3e_fii: '',
            client_responses: '',
            comments_for_top: '',
            tax_id: '',
            customer_id: '',
            multipleRoute: ''
        };
    },
    components: {
        multiUploads
    },
    computed : {
        ...mapState('customers',['customer']),
        averageRate(){
            return this.$store.state.averageRate;
        }
    },
    watch: {
      person_non_taxable_sales(val, oldVal){
        if(parseInt(val) >= 0){

        this.person_export_value = parseFloat(val * 0.1).toFixed(2)
        // this.total_taxable_value += (taxable_value + (taxable_value * 0.1));
        }else{
        this.person_export_value = 0   
        }
        this.setTotalVat()

      },
      customer_non_taxable_sales(val, oldVal){
        if(parseInt(val) >= 0){

        this.customer_export_value = parseFloat(val * 0.1).toFixed(2)
        var taxable_value = (val * this.averageRate);
        // this.total_taxable_value += (taxable_value + (taxable_value * 0.1));
        }else{
        this.customer_export_value = 0   
        }
        this.setTotalVat()

      },
      non_taxable_sales(val, oldVal){
        if(parseInt(val) >= 0){

        var non_taxable_value = (val * this.averageRate);
        }
        this.setTotalVat()

      },
      export_value(val, oldVal){
        if(parseInt(val) >= 0){

        var non_taxable_value = (val * this.averageRate);
        // this.total_taxable_value += (non_taxable_value);
        }
        this.setTotalVat()
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
        // console.log(loginUserId)
        this.multipleRoute = 'add-multiple-sales/' + this.customer_id + '/' + this.tax_id + '/' + loginUsertype + '/' + loginUserId;
    },
    methods: {
        setTotalVat(){
            var taxable_value = (this.person_non_taxable_sales * this.averageRate);
            var person_non_taxable_val = (taxable_value + (taxable_value * 0.1));

            var taxable_value = (this.customer_non_taxable_sales * this.averageRate);
            var customer_non_taxable_val = (taxable_value + (taxable_value * 0.1));

            var non_taxable_sale = (this.non_taxable_sales * this.averageRate);
            var export_value = (this.export_value * this.averageRate);

            this.total_taxable_value = person_non_taxable_val + customer_non_taxable_val + non_taxable_sale + export_value;


        },
        showUploader() {
            this.$refs.multiUploads.isShown = true;
        },
        addMoreFeild() {
            this.customField.push({ name: 'additional_field[]', value: '', type: 'text' });
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
            getCustomer : 'customers/getCustomer'
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
