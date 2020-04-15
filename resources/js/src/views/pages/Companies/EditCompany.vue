<template>
    <div>
        <vx-card title="Edit company" subtitle="Update Information Of company whom tax will be managed by system" noShadow noRadius>
            <form ref="editform" data-vv-scope="editform" @submit.prevent="updateCustomer($event)">
            	<vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group >
                            <vs-select style="width: 100%;" v-validate="'required'" name="owner" label="Customer" placeholder="Select Customer"  v-model="owner">
                                <vs-select-item v-for="(owner,index) in owners" :key="index"  :value="owner.owner_id" :text="owner.name_english"></vs-select-item>
                            </vs-select>
                            <span class="text-danger" v-show="errors.has('editform.owner')">{{errors.first('editform.owner')}}</span>
                        </vx-input-group>
                    </vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <input type="hidden" name="id" v-model="customer_id" data-vv-scope="editform">
                        <vs-input name="name_eng" v-validate="`required`" label-placeholder="Name (English)" v-model="name_eng" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.name_eng')">{{errors.first('editform.name_eng')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="name_khmer" v-validate="`required`" label-placeholder="Name (Khmer)" v-model="name_khmer" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.name_khmer')">{{errors.first('editform.name_khmer')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="tax_id" v-validate="`required`" label-placeholder="Tax ID Card #" v-model="tax_id" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.tax_id')">{{errors.first('editform.tax_id')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="tin_num" v-validate="`required`" label-placeholder="TIN #" v-model="tin_num" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.tin_num')">{{errors.first('editform.tin_num')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="incorporation_date" v-validate="`required`" label-placeholder="Date of company incorporated" v-model="incorporation_date" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.incorporation_date')">{{errors.first('editform.incorporation_date')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="address" v-validate="`required`" label-placeholder="Address" v-model="address" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.address')">{{errors.first('editform.address')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="street" v-validate="`required`" label-placeholder="Street" v-model="street" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.street')">{{errors.first('editform.street')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="group" v-validate="`required`" label-placeholder="Group" v-model="group" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.group')">{{errors.first('editform.group')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="village" v-validate="`required`" label-placeholder="Village" v-model="village" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.village')">{{errors.first('editform.village')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="sangkat" v-validate="`required`" label-placeholder="Sangkat" v-model="sangkat" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.sangkat')">{{errors.first('editform.sangkat')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="district" v-validate="`required`" label-placeholder="District" v-model="district" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.district')">{{errors.first('editform.district')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="province" v-validate="`required`" label-placeholder="Province" v-model="province" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.province')">{{errors.first('editform.province')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="muncipality" v-validate="`required`" label-placeholder="Muncipality" v-model="muncipality" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.muncipality')">{{errors.first('editform.muncipality')}}</span>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="tel" v-validate="`required`" label-placeholder="Tel." v-model="tel" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.tel')">{{errors.first('editform.tel')}}</span>
            		</vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="e_phone" data-vv-as="ePhone" v-validate="`required`" :label-placeholder="lang=='english'?'ePhone':'ទូរស័ព្ទ'" v-model="ePhone" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.e_phone')">{{errors.first('editform.e_phone')}}</span>
                    </vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="email" type="email" v-validate="`required`" label-placeholder="Email" v-model="email" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.email')">{{errors.first('editform.email')}}</span>
            		</vs-col>

            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="industry" v-validate="`required`" label-placeholder="Industry / Sector" v-model="industry" />
            			</vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.industry')">{{errors.first('editform.industry')}}</span>
            		</vs-col>

                    <!-- <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-select
                                  autocomplete
                                  label="Select Tax Duration"
                                  v-model="taxDurationSelected"
                                  name="tax_duration"
                                  width="100%"
                                  v-validate="'excluded:`Monthly`,`Yearly`'"
                                  >
                                  <vs-select-item :key="indx" :value="i.value" :text="i.text" v-for="(i,indx) in taxDuration" />
                            </vs-select>
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('editform.tax_duration')">{{errors.first('editform.tax_duration')}}</span>
                    </vs-col> -->


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
      import { mapState, mapActions,mapGetters } from 'vuex';
	export default{
		data () {
		  return {
		    customField:[],
            customer_id : '',
		    name_khmer : '',
		    name_eng : '',
		    tax_id : '',
		    tin_num : '',
		    incorporation_date : '',
		    address : '',
		    street : '',
		    group : '',
		    village : '',
		    sangkat : '',
		    district : '',
		    province : '',
		    muncipality : '',
            tel : '',
		    ePhone : '',
		    email : '',
            industry : '',
            owner : '',
		    lang : 'english',
            taxDurationSelected: 'Monthly',
            taxDuration:[
                {text: 'Monthly', value: 'Monthly'},
                {text: 'Yearly', value: 'Yearly'}
                ]
		  };
		},
         computed: {
            ...mapState('customers/',['owners']),
            ...mapGetters('customers/',['findCustomer']),
        },
        created() {
            // this.getCustomers();
            // console.log(this.$route.params.id);
            this.getOwners();
            this.editCustomer(this.$route.params.id);
        },
		methods: {
		  addMoreFeild () {
		    this.customField.push({name : 'additional_field[]',value : '',type: 'text'});
		  },
               ...mapActions({
                  update: 'customers/updateCustomer',
                  getOwners : 'customers/getOwners',
              }),


         editCustomer(routeId){
            // var customer = this.findCustomer(id);
            axios.post('get-customer-profile',{id:routeId}).then(res=>{
                var customer = res.data.data;
            
                    this.customer_id = customer.customer_id;
                    this.name_eng = customer.name_english;
                    this.name_khmer = customer.name_khmer;
                    this.industry = customer.industry;
                    this.tax_id = customer.tax_card_num;
                    this.tin_num = customer.tin_no;
                    this.email = customer.email;
                    this.tel = customer.telephone;
                    this.additional_fields = customer.additional_fields;
                    this.address = customer.address;
                    this.district = customer.district;
                    this.group = customer.group;
                    this.incorporation_date = customer.incorporation_date;
                    this.muncipality = customer.muncipality;
                    this.province = customer.province;
                    this.sangkat = customer.sangkat;
                    this.street = customer.street;
                    this.village = customer.village;
                    this.taxDurationSelected = customer.tax_duration;
                    self = this;
                    self.customField = [];
                    if(customer.additional_fields != null){
                        if(customer.additional_fields.length > 0){
                            customer.additional_fields.map(function(val, key) {
                                self.customField.push({name : 'additional_field[]',value : val,type: 'text'});
                           });
                        }            
                    }

            });
            
        },
		
        updateCustomer(e) {
            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.editform);
                    fd.append('owner',this.owner)
                    this.update(fd).then( (res) => {
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.editCustomerModal = false;
                            this.$vs.notify({title:'Success',text:'Customer Updated Successfully',color:'success',position:'top-right'})
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
