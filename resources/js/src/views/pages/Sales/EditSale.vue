<template>
    <div>
        <vx-card title="Edit Sale" subtitle="Update Information Of Sale which tax will be managed by system" noShadow noRadius>
            <form ref="editform" @submit.prevent="updateForm($event)" autocomplete="off" >
            	
                <vs-row>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <input type="hidden" name="id" v-model="data.sale_id" data-vv-scope="editform">
                        <vs-input name="account_code" v-validate="`required`" label-placeholder="Account Code" v-model="data.account_code" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('account_code')">{{errors.first('account_code')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="account_description" v-validate="`required`" label-placeholder="Account Description" v-model="data.account_description" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('account_description')">{{errors.first('account_description')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="account_ref" v-validate="`required`" label-placeholder="Account Reference" v-model="data.accounting_reference" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('account_ref')">{{errors.first('account_ref')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="sign_date" v-validate="`required`" label-placeholder="Signature Date" v-model="data.signature_date" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('sign_date')">{{errors.first('sign_date')}}</span>
                    </vs-col>
                    
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="branch_name" v-validate="`required`" label-placeholder="Branch#/Name" v-model="data.branch_name" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('branch_name')">{{errors.first('branch_name')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="tax_period" v-validate="`required`" label-placeholder="Tax Period" v-model="data.tax_period" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('tax_period')">{{errors.first('tax_period')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="invoice_date" v-validate="`required`" label-placeholder="Invoice Date" v-model="data.invoice_date" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('invoice_date')">{{errors.first('invoice_date')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="invoice_number" v-validate="`required`" label-placeholder="Invoice No./ Credit Note No." v-model="data.invoice_num" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('invoice_number')">{{errors.first('invoice_number')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="client_name" v-validate="`required`" label-placeholder="Client Name" v-model="data.client_name" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('client_name')">{{errors.first('client_name')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="client_tin" v-validate="`required`" label-placeholder="Client TIN" v-model="data.client_tin" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('client_tin')">{{errors.first('client_tin')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="description" v-validate="`required`" label-placeholder="Description" v-model="data.description" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('description')">{{errors.first('description')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="quantity" v-validate="`required`" label-placeholder="Quantity" v-model="data.quantity" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('quantity')">{{errors.first('quantity')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="non_taxable_sales" v-validate="`required`" label-placeholder="Non-Taxable Sales" v-model="data.non_taxable_sales" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('non_taxable_sales')">{{errors.first('non_taxable_sales')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="export_value" v-validate="`required`" label-placeholder="Value of Exports/ 0% VAT" v-model="data.vat" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('export_value')">{{errors.first('export_value')}}</span>
                    </vs-col>

                </vs-row>
                    <br>
                    <label>Sales to Taxable Persons</label><br>
                <vs-row>

                
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="person_non_taxable_sales" label-placeholder="Non-Taxable Sales" v-model="data.taxable_person_sales" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('person_non_taxable_sales')">{{errors.first('person_non_taxable_sales')}}</span> -->
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="person_export_value" label-placeholder="Value of Exports/ 0% VAT" v-model="data.taxable_person_vat" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('person_export_value')">{{errors.first('person_export_value')}}</span> -->
                    </vs-col>

                </vs-row>
                <br>
                    <label>Sales to Customers</label><br>
                <vs-row>

                   <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="customer_non_taxable_sales" label-placeholder="Non-Taxable Sales" v-model="data.cust_sales" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('customer_non_taxable_sales')">{{errors.first('customer_non_taxable_sales')}}</span> -->
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="customer_export_value"  label-placeholder="Value of Exports/ 0% VAT" v-model="data.cust_sales_vat" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('customer_export_value')">{{errors.first('customer_export_value')}}</span> -->
                    </vs-col>
                </vs-row>
                
                <vs-row>   
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="total_taxable_value" v-validate="`required`" label-placeholder="Total Taxable Value" v-model="data.total_taxable_value" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('total_taxable_value')">{{errors.first('total_taxable_value')}}</span>
                    </vs-col>
                </vs-row>   

                <vs-row>  

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="item_subject_taxes" v-validate="`required`" label-placeholder="Itesm subject to taxes:" v-model="data.taxes_subject" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('item_subject_taxes')">{{errors.first('item_subject_taxes')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="comments_3e_fii" v-validate="`required`" label-placeholder="Comments (3E-Fii)" v-model="data.comments" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('comments_3e_fii')">{{errors.first('comments_3e_fii')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="client_responses" v-validate="`required`" label-placeholder="Client Responses" v-model="data.client_response" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('client_responses')">{{errors.first('client_responses')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="comments_for_top" v-validate="`required`" label-placeholder="Comments for ToP" v-model="data.top_comments" />
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
            				<vs-button button="submit" class="mt-5" type="gradient">Save changes</vs-button>
            			</vs-col>
            			<vs-col class="text-center" vs-md="12" vs-lg="12">
            			<vs-button class="mt-5" type="gradient" button="button">Upload Excel Sheet</vs-button>
            		</vs-col>	
            		</vs-col>
            	</vs-row>


            </form>
        </vx-card>
    </div>
</template>
<script>
      import { mapState, mapActions,mapGetters } from 'vuex';
	export default{
		data () {
		  return {
            data:[],
		    customField:[],
            sale_id: ''
		  };
		},
        
        created() {
        
            this.editForm(this.$route.params.id);

        },
		methods: {
		  addMoreFeild () {
		    this.customField.push({name : 'additional_field[]',value : '',type: 'text'});
		  },
               ...mapActions({
                  update: 'sales/updateSale'
              }),

        editForm(routeId){ 
            // var customer = this.findCustomer(id);
            axios.post('get-single-sale',{id:routeId}).then(res=>{
                var sale = res.data.sale;
                    this.data = sale;
                    self = this;
                    self.customField = [];
                    if(sale.additional_fields != null){
                        if(sale.additional_fields.length > 0){
                            sale.additional_fields.map(function(val, key) {
                                self.customField.push({name : 'additional_field[]',value : val,type: 'text'});
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
                    this.update(fd).then( (res) => {
                        console.log(res.data);
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.editCustomerModal = false;
                            this.$vs.notify({title:'Success',text:'Sale Updated Successfully',color:'success',position:'top-right'})
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
