<template>
    <div>
        <vx-card title="Add Employee" subtitle="Add Information Of Customer OR company's Employee which payrolls will be managed by system" noShadow noRadius>
            <template slot="actions">
                            <vs-button @click="showUploader()" class="mt-5" type="gradient" button="button">Upload Excel Sheet</vs-button>
            </template>
            <form autocomplete="off" ref="addEmployeeForm" @submit.prevent="addEmployee($event)">
                <vs-row>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="nssf_num" v-validate="`required`" label-placeholder="NSSF NO." v-model="nssf_num" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('nssf_num')">{{errors.first('nssf_num')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="employee_num" v-validate="`required`" label-placeholder="Employee NO." v-model="employee_num" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('employee_num')">{{errors.first('employee_num')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="name_eng" v-validate="`required`" label-placeholder="Name (English)" v-model="name_eng" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('name_eng')">{{errors.first('name_eng')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="name_khmer" v-validate="`required`" label-placeholder="Name (Khmer)" v-model="name_khmer" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('name_khmer')">{{errors.first('name_khmer')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="nationality" v-validate="`required`" label-placeholder="Nationality" v-model="nationality" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('nationality')">{{errors.first('nationality')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="dob" v-validate="`required`" label-placeholder="dob" v-model="dob" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('dob')">{{errors.first('dob')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="joining_date" v-validate="`required`" label-placeholder="Joining Date" v-model="joining_date" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('joining_date')">{{errors.first('joining_date')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="position" v-validate="`required`" label-placeholder="Position" v-model="position" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('position')">{{errors.first('position')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="sex" v-validate="`required`" label-placeholder="Sex" v-model="sex" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('sex')">{{errors.first('sex')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="contract_type" v-validate="`required`" label-placeholder="Contract Type" v-model="contract_type" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('contract_type')">{{errors.first('contract_type')}}</span>
                    </vs-col>
                    <vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                            <vs-input name="spouse" v-validate="`required`" label-placeholder="spouse" v-model="spouse" />
                        </vx-input-group>
                        <span class="text-danger" v-show="errors.has('spouse')">{{errors.first('spouse')}}</span>
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
        <multi-uploads action="" sample-url="./public/samples/employee.xlsx" ref="multiUploads" :active="multipleUploadPopup"></multi-uploads>
    </div>
</template>
<script>
const multiUploads = () => import('@/components/MultiUploads.vue')
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            multipleUploadPopup: false,
            tax_customer_id: '',
            nssf_num: '',
            employee_num: '',
            name_khmer: '',
            name_eng: '',
            nationality: '',
            joining_date: '',
            dob: '',
            position: '',
            sex: '',
            contract_type: '',
            spouse: '',
        };
    },
    components: {
        multiUploads
    },
    beforeCreate() {
        this.tax_customer_id = this.$store.state.rootUrl.split('/')[2];
    },
    methods: {
        ...mapActions({
            create: 'employees/create',
        }),
        showUploader() {
            this.$refs.multiUploads.isShown = true;
        },
        addEmployee(e) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$vs.loading();
                    let fd = new FormData(this.$refs.addEmployeeForm);
                    fd.append('customer_id', this.tax_customer_id);
                    let data = {
                        fd: fd,
                        close: this.$vs.loading.close,
                        notify: this.$vs.notify,
                    };
                    self = this;
                    this.create(data).then(function(res) {
                        if (res.data.status == 'success') {
                            self.nssf_num = self.employee_num = self.name_khmer = self.name_eng = self.nationality = self.joining_date = self.position = self.sex = self.contract_type = self.spouse = '';
                            e.target.reset();
                            self.$validator.reset();
                        }
                    });
                }
            })
        }
    }

}

</script>
