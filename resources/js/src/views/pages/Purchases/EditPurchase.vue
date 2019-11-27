<template>
    <div>
        <vx-card title="Edit Purchase" subtitle="Update Information Of Purchase which tax will be managed by system" noShadow noRadius>
            <form ref="editform" @submit.prevent="updateForm($event)" autocomplete="off" >
            	
                <vs-row>
                    
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <input type="hidden" name="id" v-model="data.purchase_id" data-vv-scope="editform">
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
                        <vs-input name="invoice_number" v-validate="`required`" label-placeholder="Invoice Number" v-model="data.invoice_num" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('invoice_number')">{{errors.first('invoice_number')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="supplier" v-validate="`required`" label-placeholder="Supplier" v-model="data.supplier" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('supplier')">{{errors.first('supplier')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="vat_tin" v-validate="`required`" label-placeholder="VAT-Tin" v-model="data.vat_tin" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('vat_tin')">{{errors.first('vat_tin')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="good_desc" v-validate="`required`" label-placeholder="Description of good/services" v-model="data.description" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('good_desc')">{{errors.first('good_desc')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="quantity" v-validate="`required`" label-placeholder="Quantity" v-model="data.quantity" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('quantity')">{{errors.first('quantity')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="non_taxable_purchases" v-validate="`required`" label-placeholder="Non-Taxable Purchases" v-model="data.non_taxable_purchases" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('non_taxable_purchases')">{{errors.first('non_taxable_purchases')}}</span>
                    </vs-col>

                </vs-row>
                    <br>
                    <label>Local Purchases</label><br>
                <vs-row>

                
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="taxable_value_local" label-placeholder="Taxable Value" v-model="data.local_purchase_tax_val" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('taxable_value_local')">{{errors.first('taxable_value_local')}}</span> -->
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="vat_local"  label-placeholder="VAT" v-model="data.local_purchase_vat" />
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
                        <vs-input name="taxable_value_import"  label-placeholder="Taxable Value" v-model="data.imports_taxable_val" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('taxable_value_import')">{{errors.first('taxable_value_import')}}</span> -->
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="vat_import"  label-placeholder="VAT" v-model="data.imports_vat" />
                        </vx-input-group>
                        <!-- <span class="text-danger" v-show="errors.has('vat_import')">{{errors.first('vat_import')}}</span> -->
                    </vs-col>
                </vs-row>
                
                <vs-row>   
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="total_vat" v-validate="`required`" label-placeholder="Total VAT" v-model="data.total_vat" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('total_vat')">{{errors.first('total_vat')}}</span>
                    </vs-col>
                </vs-row>   

                <vs-row>  

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="item_subject_taxes" v-validate="`required`" label-placeholder="Itesm subject to taxes:" v-model="data.subject" />
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
                        <vs-input name="client_responses" v-validate="`required`" label-placeholder="Client Responses" v-model="data.client_responses" />
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
                  update: 'purchases/updatePurchase'
              }),

        editForm(routeId){ 
            // var customer = this.findCustomer(id);
            axios.post('get-single-purchase',{id:routeId}).then(res=>{
                var purchase = res.data.purchase;
                console.log(purchase);
                    this.data = purchase;
                    self = this;
                    self.customField = [];
                    if(purchase.additional_fields != null){
                        if(purchase.additional_fields.length > 0){
                            purchase.additional_fields.map(function(val, key) {
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
                        // console.log(res.data);
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.editCustomerModal = false;
                            this.$vs.notify({title:'Success',text:'Purchase Updated Successfully',color:'success',position:'top-right'})
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
