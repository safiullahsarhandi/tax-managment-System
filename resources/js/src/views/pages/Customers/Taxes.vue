<template>
    <div>
        <vx-card title="List of Taxes" subtitle="The List of Taxes contains currently assigned taxes of customer Or those which are delivered succesfully">
            <template slot="actions">
                <vs-button type="border" v-if="$store.getters.userType != 'Admin' || $store.getters.userType != 'Super Admin'" @click="addTax()" icon-pack="feather" icon="icon-plus"></vs-button>
            </template>
            <vs-table search pagination :data="taxes">
                <template slot="thead">
                    <vs-th>created by</vs-th>
                    <vs-th>Code</vs-th>
                    <vs-th>Title</vs-th>
                    <vs-th>Description</vs-th>
                    <!-- <vs-th>Supervisor</vs-th> -->
                    <vs-th>Type</vs-th>
                    <vs-th>revision</vs-th>
                    <!-- <vs-th>No. of Officers</vs-th> -->
                    <vs-th>Status</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(tr,index) in data">
                        <vs-td>{{getFullName(tr.created_by)}}</vs-td>
                        <vs-td>{{tr.tax_code}}</vs-td>
                        <vs-td style="width:200px">{{tr.title}}</vs-td>
                        <vs-td>{{tr.description}}</vs-td>
                        <!-- <vs-td>{{tr.supervisor.full_name}}</vs-td> -->
                        <vs-td>{{tr.type}}</vs-td>
                        <vs-td>{{0}}</vs-td>
                        <!-- <vs-td>{{tr.officers_count}}</vs-td> -->
                        <vs-td>{{tr.status == 0? 'In progress':'Completed'}}</vs-td>
                        <vs-td>
                            <vs-button v-if="$store.getters.userType != 'Admin' || $store.getters.userType != 'Super Admin'" size="small" type="border" icon-pack="feather" icon="icon-edit" @click="taxEdit(tr.tax_id)"></vs-button>
                            <vs-button size="small" type="border" icon-pack="feather" icon="icon-maximize-2" :to="'/tax-collection/'+tr.tax_id"></vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
        <vs-popup :active.sync="addTaxManagmentModal" title="Add Tax Managment">
            <form ref="addTaxManagmentForm" @submit.prevent="addTaxManagment($event,'addform')" data-vv-scope="addform">
                <input type="hidden" name="category_id" v-model="tax_customer_id">
                <vs-row>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <div v-if="tax_identifier != ''">
                            <h4>Tax Code: {{tax_identifier}}</h4>
                        </div>
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="title" v-model="title" label-placeholder="Title" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.title')">{{errors.first('addform.title')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <br>
                            <vs-textarea v-validate="'required'" name="description" v-model="description" :counter="20" label="Description" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.description')">{{errors.first('addform.description')}}</span>
                        </vx-input-group>
                        <!-- <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="duration" v-model="duration" label-placeholder="Duration" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.duration')">{{errors.first('addform.duration')}}</span>
                        </vx-input-group> -->
                        <vx-input-group class="mt-2">
                            <vs-select v-validate="'required'" @input="changeType" style="width: 100%;" label="Type" v-model="type" name="type">
                                <vs-select-item text="Select Type" value=""></vs-select-item>
                                <vs-select-item text="Monthly Tax" value="Monthly"></vs-select-item>
                                <vs-select-item text="Annual Tax" value="Yearly"></vs-select-item>
                                <vs-select-item text="Resubmission Tax" value="Resubmission Tax"></vs-select-item>
                            </vs-select>
                            <span class="text-danger" v-show="errors.has('addform.type')">{{errors.first('addform.type')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <br>
                            <vs-textarea v-validate="'required'" name="notes" v-model="notes" :counter="100" label="Notes" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.notes')">{{errors.first('addform.notes')}}</span>
                        </vx-input-group>
                        <!-- <br> -->
                        <!-- <vx-input-group class="mt-2">
                            <label>Tax Type</label><br><br>
                            <vs-radio v-model="type" name="type" vs-value="Monthly">Monthly</vs-radio>
                            <vs-radio v-model="type" name="type" vs-value="Yearly">Yearly</vs-radio>
                        </vx-input-group> -->
                    </vs-col>
                    <!-- <vs-col vs-lg="6" vs-md="12" vs-sm="12"></vs-col> -->
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <vs-button button="submit" class="float-right" type="gradient">Add Tax Managment</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
        <vs-popup :active.sync="editTaxManagmentModal" title="Add Tax Managment">
            <form ref="editTaxManagmentForm" @submit.prevent="editTaxManagment($event)" data-vv-scope="editform">
                <input type="hidden" name="category_id" v-model="tax_customer_id">
                <vs-row>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <div v-if="editTax.tax_code">
                            <h4>Tax Code: {{editTax.tax_code}}</h4>
                        </div>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="title" v-model="editTax.title" label="Title" placeholder="Title" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.title')">{{errors.first('editform.title')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <br>
                            <vs-textarea v-validate="'required'" name="description" v-model="editTax.description" :counter="50" label="Description" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.description')">{{errors.first('editform.description')}}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="12" vs-sm="12">
                        <vx-input-group>
                            <vs-select v-validate="'required'" placeholder="Select Type" @input="editChangeType" style="width: 100%;" label="Type" v-model="editTax.type" name="type">
                                <!-- <vs-select-item text="" value=""></vs-select-item> -->
                                <vs-select-item text="Monthly Tax" value="Monthly Tax"></vs-select-item>
                                <vs-select-item text="Annual Tax" value="Annual Tax"></vs-select-item>
                                <vs-select-item text="Resubmission Tax" value="Resubmission Tax"></vs-select-item>
                            </vs-select>
                            <span class="text-danger" v-show="errors.has('editform.type')">{{errors.first('editform.type')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <br>
                            <vs-textarea name="notes" v-model="notes" :counter="100" label="Notes" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.notes')">{{errors.first('editform.notes')}}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <vs-button button="submit" class="float-right" type="gradient">Update</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    inject: ['loginUser'],
    data() {
        return {
            editTax: {},
            addTaxManagmentModal: false,
            editTaxManagmentModal: false,
            type: '',
            officer: [],
            default_selected_officer: "",
            default_selected_supervisor: "",
            tax_customer_id: '',
            title: '',
            description: '',
            duration: '',
            supervisor: '',
            tax_identifier: '',
            edit_tax_identifier: '',
            notes: '',
            months: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'Ma',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
        };
    },
    computed: {
        ...mapState('supervisors/', ['supervisors']),
        ...mapState('taxes/', ['taxes']),
        ...mapState('officers/', ['officers']),
    },
    beforeCreate() {},
    created() {
        this.tax_customer_id = localStorage.getItem('customer');
        this.getSupervisors();
        this.getOfficers();
        this.getTaxes(this.tax_customer_id);
    },
    methods: {
        ...mapActions({
            getSupervisors: 'supervisors/getSupervisors',
            getOfficers: 'officers/getOfficers',
            create: 'taxes/addTax',
            getTaxes: 'taxes/getTaxes',
            update: 'taxes/editTax',
        }),
        getFullName(obj) {

            if (obj !== null) {
                return obj.full_name;
            } else {
                return 'N/A';
            }

        },
        changeType(type) {
            var date = new Date();
            if (type == 'Monthly Tax') {
                this.tax_identifier = 'M-' + this.months[date.getMonth()] + '-' + date.getFullYear();
            } else if (type == 'Annual Tax') {
                this.tax_identifier = 'Y-' + date.getFullYear();
            } else if (type == 'Resubmission Tax') {
                this.tax_identifier = 'R-' + this.months[date.getMonth()] + '-' + date.getFullYear();
            }
        },
        editChangeType(type) {
            var date = new Date();
            if (type == 'Monthly Tax') {
                this.editTax.tax_code = 'M-' + this.months[date.getMonth()] + '-' + date.getFullYear();
            } else if (type == 'Annual Tax') {
                this.editTax.tax_code = 'Y-' + date.getFullYear();
            } else if (type == 'Resubmission Tax') {
                this.editTax.tax_code = 'R-' + this.months[date.getMonth()] + '-' + date.getFullYear();
            }
        },
        addTax() {
            this.addTaxManagmentModal = true;


        },
        addTaxManagment(e) {
            this.$validator.validateAll('addform').then((result) => {
                if (result) {
                    this.$vs.loading();
                    self = this;
                    let fd = new FormData(self.$refs.addTaxManagmentForm);
                    fd.append('customer_id', this.tax_customer_id)
                    fd.append('tax_code', this.tax_identifier)
                    // fd.append('officers', self.officer)
                    // fd.append('supervisor_id',self.supervisor)
                    let data = {
                        fd: fd,
                        close: this.$vs.loading.close,
                        notify: this.$vs.notify,
                    };
                    this.create(data).then((res) => {
                        if (res.data.status == 'success') {
                            self.title = self.description = self.duration = self.supervisor = '';
                            self.officer = [];


                            e.target.reset();
                            self.$validator.reset();
                            this.getTaxes(self.tax_customer_id);
                            this.addTaxManagmentModal = false;
                        }
                    });
                }
            })
        },


        //  edit tax
        taxEdit(taxId) {
            axios.post('tax/get-tax', { id: taxId }).then(res => {
                this.editTax = res.data.tax;
                this.editTaxManagmentModal = true;
                // this.officer = _.map(this.editTax,'officer_id');
                if (this.editTax.type == 'Monthly Tax') {
                    this.editTax.tax_code = 'M-' + this.months[date.getMonth()] + '-' + date.getFullYear();
                } else if (this.editTax.type == 'Annual Tax') {
                    this.editTax.tax_code = 'Y-' + date.getFullYear();
                } else if (this.editTax.type == 'Resubmission Tax') {
                    this.editTax.tax_code = 'R-' + this.months[date.getMonth()] + '-' + date.getFullYear();
                }
                // console.log(this.editTax);
            });
        },

        editTaxManagment(e) {
            this.$validator.validateAll('editform').then((result) => {
                if (result) {
                    self = this;
                    let fd = new FormData(self.$refs.editTaxManagmentForm);
                    fd.append('customer_id', this.tax_customer_id)
                    fd.append('tax_id', self.editTax.tax_id);
                    fd.append('tax_code', this.editTax.tax_code)
                    // fd.append('officers', self.officer)
                    // fd.append('supervisor_id',self.editTax.supervisor_id)
                    let data = {
                        fd: fd,
                        close: this.$vs.loading.close,
                        notify: this.$vs.notify,
                    };
                    this.update(data).then((res) => {
                        if (res.data.status == 'success') {

                            self.getTaxes(this.tax_customer_id);
                            self.officer = [];

                            self.$validator.reset();
                            self.editTaxManagmentModal = false;
                        }
                    });
                }
            })
        },



    }
}

</script>
<style lang="css">
.selectExample {
    margin: 10px;
}

.con-select-example {
    display: flex;
    align-items: center;
    justify-content: center;
}

.con-select .vs-select {
    width: 100%
}

@media (max-width: 550px) {
    .con-select {
        flex-direction: column;
    }

    .con-select .vs-select {
        width: 100%
    }
}

</style>
