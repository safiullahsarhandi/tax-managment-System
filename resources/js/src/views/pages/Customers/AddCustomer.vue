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
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="name_eng" v-validate="`required`" :label-placeholder="lang=='english'?'Name (English)':'ឈ្មោះ (អង់គ្លេស)'" v-model="name_eng" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('name_eng')">{{errors.first('name_eng')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="name_khmer" v-validate="`required`" :label-placeholder="lang=='english'?'Name (Khmer)':'ឈ្មោះ (ខ្មែរ)'" v-model="name_khmer" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('name_khmer')">{{errors.first('name_khmer')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="tax_id" v-validate="`required`" :label-placeholder="lang=='english'?'Tax ID Card #':'អត្តសញ្ញាណប័ណ្ណពន្ធ #'" v-model="tax_id" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('tax_id')">{{errors.first('tax_id')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="tin_num" v-validate="`required`" :label-placeholder="lang=='english'?'TIN #':'ធីន #'" v-model="tin_num" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('tin_num')">{{errors.first('tin_num')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="incorporation_date" v-validate="`required`" :label-placeholder="lang=='english'?'Date of company incorporated':'កាលបរិច្ឆេទនៃការបញ្ចូលក្រុមហ៊ុន'" v-model="incorporation_date" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('incorporation_date')">{{errors.first('incorporation_date')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="address" v-validate="`required`" :label-placeholder="lang=='english'?'Address':'អាសយដ្ឋាន'" v-model="address" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('address')">{{errors.first('address')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="street" v-validate="`required`" :label-placeholder="lang=='english'?'Street':'ផ្លូវ'" v-model="street" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('street')">{{errors.first('street')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="group" v-validate="`required`" :label-placeholder="lang=='english'?'Group':'ក្រុម'" v-model="group" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('group')">{{errors.first('group')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="village" v-validate="`required`" :label-placeholder="lang=='english'?'Village':'ភូមិ'" v-model="village" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('village')">{{errors.first('village')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="sangkat" v-validate="`required`" :label-placeholder="lang=='english'?'Sangkat':'វិបត្តិ'" v-model="sangkat" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('sangkat')">{{errors.first('sangkat')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="district" v-validate="`required`" :label-placeholder="lang=='english'?'District':'ស្រុក'" v-model="district" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('district')">{{errors.first('district')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="province" v-validate="`required`" :label-placeholder="lang=='english'?'Province':'ខេត្ត'" v-model="province" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('province')">{{errors.first('province')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="muncipality" v-validate="`required`" :label-placeholder="lang=='english'?'Muncipality':'ក្រុង'" v-model="muncipality" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('muncipality')">{{errors.first('muncipality')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="tel" v-validate="`required`" :label-placeholder="lang=='english'?'Tel.':'ទូរស័ព្ទ'" v-model="tel" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('tel')">{{errors.first('tel')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="email" type="email" v-validate="`required`" :label-placeholder="lang=='english'?'Email':'អ៊ីមែល'" v-model="email" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('email')">{{errors.first('email')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="industry" v-validate="`required`" :label-placeholder="lang=='english'?'Industry / Sector':'ឧស្សាហកម្ម / វិស័យ'" v-model="industry" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('industry')">{{errors.first('industry')}}</span>
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
                        <span class="text-danger" v-show="errors.has('tax_duration')">{{errors.first('tax_duration')}}</span>
                    </vs-col> -->

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

        <multi-uploads
                    @error='hasError'
                    @uploaded="successMultipleUpload"
                    ref="multiUploads" 
                    action="add-multiple-customer" 
                    sample-url="./public/samples/company.xlsx" 
                    :active="multipleUploadPopup">      
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
            taxDurationSelected: 'Monthly',
            taxDuration:[
                {text: 'Monthly', value: 'Monthly'},
                {text: 'Yearly', value: 'Yearly'}
                ]
            }
    },
    watch: {},
    components: {
        multiUploads
    },
    computed: {
        ...mapState('customers/', ['customers']),
        ...mapGetters('customers/', ['findCustomer']),
    },
    methods: {
        showUploader() {
            this.$refs.multiUploads.isShown = true;
        },
        successMultipleUpload(res){

            this.$vs.notify({
                color : 'success',
                text : res.msg,
                position : 'right-top',
                fixed : true,
            })
            this.$refs.multiUploads.isShown = false;
        },
        hasError(res){
            this.$vs.notify({
                color : 'danger',
                text : res.msg,
                position : 'right-top',
                fixed : true,
            })
        },
        addMoreFeild() {
            this.customField.push({ name: 'additional_field[]', value: '', type: 'text' });
        },
        ...mapActions({
            submit: 'customers/addCustomer',
        }),
        addCustomer(e) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.addCustomer);
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
