<template>
    <div>
        <vx-card title="List of Customers">
            <vs-table search pagination :max-items="tableEntries" :data="customers">
                <template slot="header">
                    Show
                    <select style="width: 100px" class="vs-select--input" v-model="tableEntries">
                        <option value="10" v-html="10"></option>
                        <option value="25" v-html="25"></option>
                        <option value="50" v-html="50"></option>
                        <option value="100" v-html="100"></option>
                    </select>
                    Entries
                </template>
                <template slot="thead">
                    <vs-th>Name(English)</vs-th>
                    <vs-th>Name(Khmer)</vs-th>
                    <vs-th>Industy / Sector</vs-th>
                    <vs-th>Tax Duration</vs-th>
                    <vs-th>Tax ID</vs-th>
                    <vs-th>TIN # </vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th>Tel</vs-th>
                    <vs-th v-if="$store.getters.userType != 'Admin'">Uncompleted Taxes</vs-th>
                    <vs-th v-if="$store.getters.userType == 'Admin'">Status</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">
                        <vs-td :data="tr.name_english">{{tr.name_english}}</vs-td>
                        <vs-td :data="tr.name_khmer">{{tr.name_khmer}}</vs-td>
                        <vs-td :data="tr.industry">{{tr.industry}}</vs-td>
                        <vs-td :data="tr.id">{{tr.tax_duration}}</vs-td>
                        <vs-td :data="tr.tax_card_num">{{tr.tax_card_num}}</vs-td>
                        <vs-td :data="tr.tin_no">{{tr.tin_no}}</vs-td>
                        <vs-td :data="tr.email">{{tr.email}}</vs-td>
                        <vs-td :data="tr.telephone">{{tr.telephone}}</vs-td>
                        <vs-td v-if="$store.getters.userType != 'Admin'"  :data="0">{{0}}</vs-td>
                        <vs-td v-if="$store.getters.userType == 'Admin'"  :data="tr.status"><vs-switch @click="statusUpdate(tr.customer_id)" v-model="tr.status"/></vs-td>
                            
                        <vs-td>
                            <vs-button v-if="$store.getters.userType == 'Admin'" :to="'customer-update/'+tr.customer_id" size="small" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                            <vs-button :to="'customer-detail/'+tr.customer_id" size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>

        <vs-popup :active.sync="editCustomerModal" title="Update Customer">
            <form ref="editCustomerForm" @submit.prevent="updateCustomer($event)" autocomplete="off" data-vv-scope="editform">
                <vs-row>
                    
                    <vs-col vs-lg="4" vs-md="4" vs-sm="12">
                        
                        <vx-input-group class="mt-2">
                            <input type="hidden" name="id" v-model="customer_id" data-vv-scope="editform">
                            <vs-input v-validate="'required'" name="name_eng" v-model="name_english" label-placeholder="Name (English)" data-vv-scope="editform"/>
                            <span class="text-danger" v-show="errors.has('editform.name_eng')">{{errors.first('editform.name_eng')}}</span>
                        </vx-input-group>
                       
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="name_khmer" v-model="name_khmer" label-placeholder="Name (Khmer)" data-vv-scope="editform"/>
                            <span class="text-danger" v-show="errors.has('editform.name_khmer')">{{errors.first('editform.name_khmer')}}</span>
                        </vx-input-group>
                        
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="email" v-model="email" label-placeholder="Email" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.email')">{{errors.first('editform.email')}}</span>
                        </vx-input-group>
                        
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="telephone" v-model="telephone" label-placeholder="Telephone" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.telephone')">{{errors.first('editform.telephone')}}</span>
                        </vx-input-group>

                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="address" v-model="address" label-placeholder="Address" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.address')">{{errors.first('editform.address')}}</span>
                        </vx-input-group>

                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="street" v-model="street" label-placeholder="Street" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.street')">{{errors.first('editform.street')}}</span>
                        </vx-input-group>

                         <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="tin_no" v-model="tin_no" label-placeholder="TIN No." ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.tin_no')">{{errors.first('editform.tin_no')}}</span>
                        </vx-input-group>

                       

                    </vs-col>

                    <vs-col vs-lg="4" vs-md="4" vs-sm="12">
                       
                         <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="village" v-model="village" label-placeholder="Village" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.village')">{{errors.first('editform.village')}}</span>
                        </vx-input-group>

                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="muncipality" v-model="muncipality" label-placeholder="Muncipality" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.muncipality')">{{errors.first('editform.muncipality')}}</span>
                        </vx-input-group>

                         <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="industry" v-model="industry" label-placeholder="Industry" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.industry')">{{errors.first('editform.industry')}}</span>
                        </vx-input-group>

                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="district" v-model="district" label-placeholder="District" ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.district')">{{errors.first('editform.district')}}</span>
                        </vx-input-group>

                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="province" v-model="province" label-placeholder="Province" ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.province')">{{errors.first('editform.province')}}</span>
                        </vx-input-group>

                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="sangkat" v-model="sangkat" label-placeholder="Sangkat" ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.sangkat')">{{errors.first('editform.sangkat')}}</span>
                        </vx-input-group>

                         <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="tax_id" v-model="tax_card_num" label-placeholder="Tax Id" ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.tax_id')">{{errors.first('editform.tax_id')}}</span>
                        </vx-input-group>

                       

                    </vs-col>

                    <vs-col vs-lg="4" vs-md="4" vs-sm="12">
                       

                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="group" v-model="group" label-placeholder="Group" ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.group')">{{errors.first('editform.group')}}</span>
                        </vx-input-group>

                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="incorporation_date" v-model="incorporation_date" label-placeholder="Incorporation Date" ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.incorporation_date')">{{errors.first('editform.incorporation_date')}}</span>
                        </vx-input-group>

                        <div v-for="(field,index) in customField" :key="index" class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input :type="field.text" :name="field.name" :label-placeholder="'Custom Field '+(index + 1)" v-model="field.value" />
                        </vx-input-group>
                        </div>
                    
                       
                    </vs-col>

                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <!-- <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12"> -->
                        <vs-button class="float-left" @click="addMoreFeild()" type="gradient" button="button">Add More Custom Fields</vs-button>
                    <!-- </vs-col> -->
                        <vs-button button="submit" class="float-right" type="gradient">Update Customer</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>

    </div>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex';
export default {
    inject : ['generatePassword','loginUser'],
    data() {
        return {
            // switch1: true,
            editCustomerModal: false,
            customer_id: '',
            name_english: '',
            name_khmer: '',
            industry: '',
            tax_card_num: '',
            tin_no: '',
            email: '',
            telephone: '',
            address: '',
            street: '',
            village: '',
            muncipality: '',
            district: '',
            province: '',
            sangkat: '',
            group: '',
            incorporation_date: '',
            customField:[],
            tableEntries : 10,

        };
    },
    computed: {
        ...mapState('customers/', ['customers']),
        ...mapGetters('customers/',['findCustomer']),
    },
    created() {
        this.getCustomers();
    },
    methods: {
        ...mapActions({
            getCustomers: 'customers/getCustomers',
            // submit: 'customers/addCustomer',
            update: 'customers/updateCustomer'
        }),
        updateCustomer(e) {
            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.editCustomerForm);
                    fd.append('gender', this.gender);
                    this.submit(fd).then( (res) => {
                    // console.log(res.data);
                        if (res.data.status == 'success') {
                            this.password = this.email = this.first_name = this.last_name = this.zip_code = this.city = this.state = this.address = this.phone = '';
                            e.target.reset();
                            this.errors.clear();
                            this.editCustomerModal = false;
                            this.$vs.notify({title:'Success',text:'Customer Updated Successfully',color:'success',position:'top-right'})
                            this.$vs.loading.close();
                            // this.getCustomers();
                        }
                        if(res.data.status == 'error'){
                             alert(res.data.msg);
                        }
                    })
                }
            })
        },

        statusUpdate(id){
            this.$vs.loading();
            axios.post('status-update-customer',{id:id}).then(res=>{
                this.$vs.notify({title:'Updated!...',text:res.data.msg,color:'success',position:'top-right'})
                this.$vs.loading.close();
            });
        },

        addMoreFeild () {
            this.customField.push({name : 'additional_field[]',value : '',type: 'text'});
        },

        editCustomer(id){
            var customer = this.findCustomer(id);
            this.customer_id = customer.customer_id;
            this.name_english = customer.name_english;
            this.name_khmer = customer.name_khmer;
            this.industry = customer.industry;
            this.tax_card_num = customer.tax_card_num;
            this.tin_no = customer.tin_no;
            this.email = customer.email;
            this.telephone = customer.telephone;
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
            self = this;
            self.customField = [];
            if(customer.additional_fields != null){
                if(customer.additional_fields.length > 0){
                    customer.additional_fields.map(function(val, key) {
                        self.customField.push({name : 'additional_field[]',value : val,type: 'text'});
                   });
                }            
            }
            
            this.editCustomerModal = true;
        },
        updateCustomer(e) {
            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.editCustomerForm);
                    this.update(fd).then( (res) => {
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.editCustomerModal = false;
                            this.$vs.notify({title:'Success',text:'Customer Updated Successfully',color:'success',position:'top-right'})
                            this.$vs.loading.close();
                            this.getCustomers();
                        }
                    })
                }
            })
        },
        makePassword(){
            this.password = this.generatePassword();
        }
    }
}

</script>

<style type="text/css">
    .con-vs-popup .vs-popup {
        width: 1000px !important;
    }
</style>

