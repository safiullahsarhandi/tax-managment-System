<template>
    <div>
       
        <vx-card title="Add new Company" subtitle="Add Information Of Customer OR company which tax will be managed by system" noShadow noRadius>
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
                    <vs-col class="mb-2 p-0" vs-md="12" vs-lg="12" vs-sm="12">
                        <vs-col v-if="$store.getters.userType == 'Supervisor'" vs-md="12" vs-lg="12" vs-sm="12" vs-xs="12">
                            <div class="flex justify-end flex-wrap">
                                <vx-input-group class="md:mr-5 mt-2">
                                    <vs-select v-validate="'required'" name="status" label="Customer Status" placeholder="Select Customer Status"  v-model="customer_status">
                                        <vs-select-item value="Prospect" text="Prospect"></vs-select-item>
                                        <vs-select-item value="Activate" text="Activate"></vs-select-item>
                                        <vs-select-item value="Deactivate" text="Deactivate"></vs-select-item>
                                        <vs-select-item value="Pending" text="Pending"></vs-select-item>
                                    </vs-select>
                                <span class="text-danger" v-show="errors.has('status')">{{errors.first('status')}}</span>
                                </vx-input-group>
                                <vx-input-group class="mt-2">
                                    <vs-select v-validate="'required'" label="List Of Officers" name="officer" placeholder="Select officer who work" v-model="manager">
                                        <vs-select-item v-for="(officer,index) in myOfficers" :key="index" :text="officer.full_name" :value="officer.manager_id"></vs-select-item>
                                    </vs-select>
                                <span class="text-danger" v-show="errors.has('officer')">{{errors.first('officer')}}</span>
                                </vx-input-group>
                                
                            </div>
                        </vs-col>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group >
                            <vs-select style="width: 100%;" v-validate="'required'" name="owner_id" label="Customer" placeholder="Select Customer"  v-model="owner">
                                <vs-select-item v-for="(owner,index) in owners" :key="index"  :text="owner.name_english" :value="owner.owner_id"></vs-select-item>
                            </vs-select>
                            <span class="text-danger" v-show="errors.has('status')">{{errors.first('status')}}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="name_english" :data-vv-as="lang=='english'?'Name (English)':'ឈ្មោះ (អង់គ្លេស)'" v-validate="`required`" :label-placeholder="lang=='english'?'Name (English)':'ឈ្មោះ (អង់គ្លេស)'" v-model="name_eng" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('name_english')">{{errors.first('name_english')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="name_khmer" :data-vv-as="lang=='english'?'Name (Khmer)':'ឈ្មោះ (ខ្មែរ)'" v-validate="`required`" :label-placeholder="lang=='english'?'Name (Khmer)':'ឈ្មោះ (ខ្មែរ)'" v-model="name_khmer" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('name_khmer')">{{errors.first('name_khmer')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="tax_card_num" :data-vv-as="lang=='english'?'Tax ID Card #':'អត្តសញ្ញាណប័ណ្ណពន្ធ #'" v-validate="`required`" :label-placeholder="lang=='english'?'Tax ID Card #':'អត្តសញ្ញាណប័ណ្ណពន្ធ #'" v-model="tax_id" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('tax_card_num')">{{errors.first('tax_card_num')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="tin_no" :data-vv-as="lang=='english'?'TIN #':'ធីន #'" v-validate="`required`" :label-placeholder="lang=='english'?'TIN #':'ធីន #'" v-model="tin_num" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('tin_no')">{{errors.first('tin_no')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="incorporation_date" :data-vv-as="lang=='english'?'Date of company incorporated':'កាលបរិច្ឆេទនៃការបញ្ចូលក្រុមហ៊ុន'" v-validate="`required`" :label-placeholder="lang=='english'?'Date of company incorporated':'កាលបរិច្ឆេទនៃការបញ្ចូលក្រុមហ៊ុន'" v-model="incorporation_date" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('incorporation_date')">{{errors.first('incorporation_date')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="address" v-validate="`required`" :data-vv-as="lang=='english'?'Address':'អាសយដ្ឋាន'" :label-placeholder="lang=='english'?'Address':'អាសយដ្ឋាន'" v-model="address" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('address')">{{errors.first('address')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="street" :data-vv-as="lang=='english'?'Street':'ផ្លូវ'" v-validate="`required`" :label-placeholder="lang=='english'?'Street':'ផ្លូវ'" v-model="street" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('street')">{{errors.first('street')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="group" :data-vv-as="lang=='english'?'Group':'ក្រុម'" v-validate="`required`" :label-placeholder="lang=='english'?'Group':'ក្រុម'" v-model="group" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('group')">{{errors.first('group')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="village" :data-vv-as="lang=='english'?'Village':'ភូមិ'" v-validate="`required`" :label-placeholder="lang=='english'?'Village':'ភូមិ'" v-model="village" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('village')">{{errors.first('village')}}</span>
                    </vs-col>

                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="sangkat" :data-vv-as="lang=='english'?'Sangkat':'វិបត្តិ'" v-validate="`required`" :label-placeholder="lang=='english'?'Sangkat':'វិបត្តិ'" v-model="sangkat" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('sangkat')">{{errors.first('sangkat')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="district" v-validate="`required`" :data-vv-as="lang=='english'?'District':'ស្រុក'" :label-placeholder="lang=='english'?'District':'ស្រុក'" v-model="district" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('district')">{{errors.first('district')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="province" v-validate="`required`" :data-vv-as="lang=='english'?'Province':'ខេត្ត'" :label-placeholder="lang=='english'?'Province':'ខេត្ត'" v-model="province" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('province')">{{errors.first('province')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="muncipality" v-validate="`required`" :data-vv-as="lang=='english'?'Muncipality':'ក្រុង'" :label-placeholder="lang=='english'?'Muncipality':'ក្រុង'" v-model="muncipality" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('muncipality')">{{errors.first('muncipality')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="telephone" v-validate="`required`" :data-vv-as="lang=='english'?'Tel.':'ទូរស័ព្ទ'" :label-placeholder="lang=='english'?'Tel.':'ទូរស័ព្ទ'" v-model="tel" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('telephone')">{{errors.first('telephone')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                            <vx-input-group>
                                <vs-input name="e_phone" :data-vv-as="lang=='english'?'ePhone':'ទូរស័ព្ទ'" v-validate="`required`" :label-placeholder="lang=='english'?'ePhone':'ទូរស័ព្ទ'" v-model="ePhone" />
                            </vx-input-group>
                            <span class="text-danger" v-show="errors.has('e_phone')">{{errors.first('e_phone')}}</span>
                        </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="email"  type="email" v-validate="`required`" :data-vv-as="lang=='english'?'Email':'អ៊ីមែល'" :label-placeholder="lang=='english'?'Email':'អ៊ីមែល'" v-model="email" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('email')">{{errors.first('email')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="industry" v-validate="`required`" :data-vv-as="lang=='english'?'Industry / Sector':'ឧស្សាហកម្ម / វិស័យ'" :label-placeholder="lang=='english'?'Industry / Sector':'ឧស្សាហកម្ម / វិស័យ'" v-model="industry" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('industry')">{{errors.first('industry')}}</span>
                    </vs-col>


                    <!-- 
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">

                        <vx-input-group>
                            <vs-select autocomplete label="Select Tax Duration" v-model="taxDurationSelected" name="tax_duration" width="100%" v-validate="'excluded:`Monthly`,`Yearly`'">
                                <vs-select-item :key="indx" :value="i.value" :text="i.text" v-for="(i,indx) in taxDuration" />
                            </vs-select>
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('tax_duration')">{{errors.first('tax_duration')}}</span>

                    </vs-col>
                     -->



                    <vs-col v-for="(field,index) in customField" :key="index" class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input :type="field.text" :name="field.name" v-validate="`required`" 
                            :label-placeholder="lang=='english'?'Custom Field ':'វាលផ្ទាល់ខ្លួន '+(index + 1)" 
                            v-model="field.value" />
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
            ePhone: '',
            email: '',
            industry: '',
            customer_status : '',
            taxDurationSelected: 'Monthly Tax',
            taxDuration: [
                { text: 'Monthly Tax', value: 'Monthly Tax' },
                { text: 'Annual Tax ', value: 'Annual Tax' }
            ],
            manager: '',
            createdby: '',
            owner : '',
        }
    },
    inject: ['loginUser'],
    created() {
        this.getOwners();
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
        ...mapState('customers/', ['customers','owners']),
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
            this.customField.push({ name: 'additional_fields[]', value: '', type: 'text' });
        },
        ...mapActions({
            submit: 'customers/addCustomer',
            getMyOfficers: 'officers/getMyOfficers',
            getOwners : 'customers/getOwners',
        }),
        addCustomer(e) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.addCustomer);
                    fd.append('manager', this.manager);
                    fd.append('customer_status',this.customer_status);
                    fd.append('owner_id',this.owner);
                    this.createdBy = (this.$store.getters.userType != 'Officer') ? localStorage.getItem('admin') : this.manager;
                    fd.append('created_by', this.createdBy);
                    this.submit(fd).then(res => {
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.taxDurationSelected = 'Monthly';
                            this.$vs.notify({ title: 'Success', text: 'Customer Added Successfully', color: 'success', position: 'top-right' })
                            this.$vs.loading.close();
                            e.target.reset();
                            this.$router.push('/companies');
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
