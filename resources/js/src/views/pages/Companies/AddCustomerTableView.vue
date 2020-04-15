<template>
    <div>
       
        <vx-card title="Add Customer" subtitle="Add Information Of Customer OR company which tax will be managed by system" noShadow noRadius>
            <template slot="actions">
                <vs-button class="mt-5" @click="showUploader()" type="gradient" button="button">Upload Excel Sheet</vs-button>
            </template>
            <vs-row>
                <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                    <vs-button color="primary" type="border" style="width:100%" @click="lang = 'english'">English</vs-button>
                </vs-col>
                <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                    <vs-button color="primary" type="border" style="width:100%" @click="lang = 'khmer'">Khmer</vs-button>
                </vs-col>
            </vs-row>
            
            <form ref="addCustomer" @submit.prevent="addCustomer($event)">
                <vs-row>
                    <vs-col>
                        <vs-table stripe id="add_customer_table" noDataText="">
                              
                              <template slot="thead">

                                <vs-th v-if="$store.getters.userType == 'Supervisor'">List Of Officers</vs-th>
                                <vs-th>{{ lang=='english'?'Name (English)':'ឈ្មោះ (អង់គ្លេស)' }}</vs-th>
                                <vs-th>{{ lang=='english'?'Name (Khmer)':'ឈ្មោះ (ខ្មែរ)' }}</vs-th>
                                <vs-th>{{ lang=='english'?'Tax ID Card #':'អត្តសញ្ញាណប័ណ្ណពន្ធ #'  }}</vs-th>
                                <vs-th>{{ lang=='english'?'TIN #':'ធីន #' }}</vs-th>
                                <vs-th>{{ lang=='english'?'Date of company incorporated':'កាលបរិច្ឆេទនៃការបញ្ចូលក្រុមហ៊ុន' }}</vs-th>
                                <vs-th>{{ lang=='english'?'Address':'អាសយដ្ឋាន' }}</vs-th>
                                <vs-th>{{ lang=='english'?'Street':'ផ្លូវ' }}</vs-th>
                                <vs-th>{{ lang=='english'?'Group':'ក្រុម' }}</vs-th>
                                <vs-th>{{ lang=='english'?'Village':'ភូមិ' }}</vs-th>
                                <vs-th>{{ lang=='english'?'Sangkat':'វិបត្តិ' }}</vs-th>
                                <vs-th>{{ lang=='english'?'District':'ស្រុក' }}</vs-th>
                                <vs-th>{{ lang=='english'?'Province':'ខេត្ត' }}</vs-th>
                                <vs-th>{{ lang=='english'?'Muncipality':'ក្រុង' }}</vs-th>
                                <vs-th>{{ lang=='english'?'Tel.':'ទូរស័ព្ទ' }}</vs-th>
                                <vs-th>{{ lang=='english'?'Email':'អ៊ីមែល' }}</vs-th>
                                <vs-th>{{ lang=='english'?'Industry / Sector':'ឧស្សាហកម្ម / វិស័យ' }}</vs-th>
                                <vs-th v-for="(field,indextr) in customField" :key="index">
                                    {{ lang=='english'?'Custom Field ':'វាលផ្ទាល់ខ្លួន '+indextr+1 }}
                                </vs-th>
                                <vs-th>
                                    <vs-button  style="width: 250px" class="mt-5" @click="addMoreFeild()" type="gradient" button="button">Add More Custom Fields</vs-button>
                                </vs-th>

                              </template>

                              <template>
                                <vs-tr>
                                  
                                    <vs-td v-if="$store.getters.userType == 'Supervisor'">
                                        <vx-input-group>
                                            <vs-select placeholder="Select officer who work" v-model="manager">
                                                <vs-select-item v-for="(officer,index) in myOfficers" :key="index" :text="officer.full_name" :value="officer.manager_id"></vs-select-item>
                                            </vs-select>
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('name_eng')">{{errors.first('name_eng')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="name_eng" v-validate="`required`" v-model="name_eng" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('name_eng')">{{errors.first('name_eng')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="name_khmer" v-validate="`required`" v-model="name_khmer" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('name_khmer')">{{errors.first('name_khmer')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="tax_id" v-validate="`required`" v-model="tax_id" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('tax_id')">{{errors.first('tax_id')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="tin_num" v-validate="`required`" v-model="tin_num" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('tin_num')">{{errors.first('tin_num')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="incorporation_date" v-validate="`required`" v-model="incorporation_date" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('incorporation_date')">{{errors.first('incorporation_date')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="address" v-validate="`required`" v-model="address" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('address')">{{errors.first('address')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="street" v-validate="`required`" v-model="street" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('street')">{{errors.first('street')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="group" v-validate="`required`" v-model="group" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('group')">{{errors.first('group')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="village" v-validate="`required`" v-model="village" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('village')">{{errors.first('village')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="sangkat" v-validate="`required`" v-model="sangkat" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('sangkat')">{{errors.first('sangkat')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="district" v-validate="`required`" v-model="district" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('district')">{{errors.first('district')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="province" v-validate="`required`" v-model="province" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('province')">{{errors.first('province')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="muncipality" v-validate="`required`" v-model="muncipality" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('muncipality')">{{errors.first('muncipality')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="tel" v-validate="`required`" v-model="tel" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('tel')">{{errors.first('tel')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="email" type="email" v-validate="`required`" v-model="email" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('email')">{{errors.first('email')}}</span>
                                    </vs-td>

                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="industry" v-validate="`required`" v-model="industry" />
                                        </vx-input-group>
                                        <span class="text-danger" v-show="errors.has('industry')">{{errors.first('industry')}}</span>
                                    </vs-td>

                                    <vs-td v-for="(field,index) in customField" :key="index">
                                        <vx-input-group>
                                            <vs-input :type="field.text" :name="field.name" v-validate="`required`" 
                                            v-model="field.value" />
                                        </vx-input-group>
                                    </vs-td>
                                    
                                    <vs-td>
                                        <vx-input-group>
                                            <vs-input name="" disabled />
                                        </vx-input-group>
                                    </vs-td>
     
                                </vs-tr>
                              </template>
                        </vs-table>
                    </vs-col>

                    <vs-col class="text-center" vs-lg='12' vs-md='12'>
                        <vs-col class="text-center" vs-md="12" vs-lg="12">
                            <vs-button button="submit" class="mt-5" type="gradient">Save</vs-button>
                        </vs-col>
                        <vs-col class="text-center" vs-md="12" vs-lg="12">
                        </vs-col>
                    </vs-col>
                </vs-row>
            </form>


        </vx-card>
        <multi-uploads calling-from="add-customer" :myOfficers="myOfficers" @worker-changed="onChangeWorker" @error='hasError' @uploaded="successMultipleUpload" ref="multiUploads" :action="`add-multiple-customer?created_by=${createdby}&manager=${manager}`" sample-url="./public/samples/company.xlsx" :active="multipleUploadPopup">
        </multi-uploads>
    </div>
</template>
<script>
const multiUploads = () => import('@/components/MultiUploads.vue')
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            lang: 'english',
            multipleUploadPopup: false,
            customField: [],
            name_khmer: '',
            name_eng: '',
            tax_id: '',
            tin_num: '',
            incorporation_date: '',
            address: '',
            street: '',
            group: '',
            village: '',
            sangkat: '',
            district: '',
            province: '',
            muncipality: '',
            tel: '',
            email: '',
            industry: '',
            taxDurationSelected: 'Monthly Tax',
            taxDuration: [
                { text: 'Monthly Tax', value: 'Monthly Tax' },
                { text: 'Annual Tax ', value: 'Annual Tax' }
            ],
            manager: '',
            createdby: '',
        }
    },
    inject: ['loginUser'],
    created() {
        if (this.$store.getters.userType == 'Supervisor') {
            this.getMyOfficers(localStorage.getItem('admin'));

        }
        this.manager = (this.$store.getters.userType == 'Officer') ? localStorage.getItem('admin') : '';
        this.createdby = localStorage.getItem('admin');
    },
    watch: {},
    components: {
        multiUploads
    },
    computed: {
        ...mapState('customers/', ['customers']),
        ...mapState('officers/', ['myOfficers']),
        ...mapGetters('customers/', ['findCustomer']),
    },
    methods: {
        onChangeWorker(manager_id){
            // alert(manager_id)
            this.manager = manager_id;

        },
        showUploader() {
            this.$refs.multiUploads.isShown = true;
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
        hasError(res) {
            this.$vs.notify({
                color: 'danger',
                text: res.msg,
                position: 'right-top',
                fixed: true,
            })
        },
        addMoreFeild() {
            this.customField.push({ name: 'additional_field[]', value: '', type: 'text' });
        },
        ...mapActions({
            submit: 'customers/addCustomer',
            getMyOfficers: 'officers/getMyOfficers',
        }),
        addCustomer(e) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.addCustomer);
                    fd.append('manager', this.manager);
                    this.createdBy = (this.$store.getters.userType != 'Officer') ? localStorage.getItem('admin') : this.manager;
                    fd.append('created_by', this.createdBy);
                    this.submit(fd).then(res => {
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.taxDurationSelected = 'Monthly';
                            this.$vs.notify({ title: 'Success', text: 'Customer Added Successfully', color: 'success', position: 'top-right' })
                            this.$vs.loading.close();
                        }
                        if (res.data.status == 'error') {
                            this.$vs.notify({ title: 'Success', text: res.data.msg, color: 'success', position: 'top-right' })
                        }
                    })
                }
            })
        }
    }
}

</script>

<style type="text/css">
    
    #add_customer_table th .sort-th, th .vs-table-text {
        width: 250px !important; 
    }
    #add_customer_table  .vs-input--input.normal {
        margin-bottom: 30px !important;
    }
</style>
