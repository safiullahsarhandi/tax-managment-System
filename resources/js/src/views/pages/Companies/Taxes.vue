<template>
    <div>

        <vs-row>
            <vs-col vs-xl="9" vs-lg="9" vs-md="9" vs-sm="12">
                <vx-card :title="'List of '+getTaxStatus+' services'" subtitle="The List of Taxes contains currently assigned taxes of customer Or those which are delivered succesfully">
                    <template slot="actions">
                        
                        <vs-button type="border" v-if="$store.getters.userType == 'Officer' || $store.getters.userType == 'Supervisor'" @click="addTax()" icon-pack="feather" icon="icon-plus"></vs-button>
                        
                    </template>
                    <vs-table search pagination :data="taxes">
                        <template slot="thead">
                            <vs-th>Created by</vs-th>
                            <vs-th>Code</vs-th>
                            <vs-th>Title</vs-th>
                            <vs-th>Description</vs-th>
                            <!-- <vs-th>Supervisor</vs-th> -->
                            <vs-th>Type</vs-th>
                            <vs-th>Revision</vs-th>
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
                                <vs-td>{{tr.rivision}}</vs-td>
                                <!-- <vs-td>{{tr.officers_count}}</vs-td> -->
                                <vs-td>{{tr.status == 0? 'Work in progress':tr.status == 1?'Review':tr.status == 2?'Approve':tr.status == 3?'Client\'s Confirmation':tr.status == 4?'Tax Paid':tr.status == 5?'Submitted':tr.status == 6?'Scanned':'Released'}}</vs-td>
                                <vs-td>
                                    <vs-button v-if="$store.getters.userType == 'Officer' || $store.getters.userType == 'Supervisor'" size="small" type="border" icon-pack="feather" icon="icon-edit" @click="taxEdit(tr.tax_id)"></vs-button>
                                    <vs-button size="small" type="border" icon-pack="feather" icon="icon-maximize-2" :to="'/tax-collection/'+tr.tax_id"></vs-button>
                                </vs-td>
                            </vs-tr>
                        </template>
                    </vs-table>
                </vx-card>
            </vs-col>

            <vs-col vs-xl="3" vs-lg="3" vs-md="3" vs-sm="12">
                <vx-card title="Actions">
                    <vs-list>
                        <vs-list-item class="mt-2" title="Monthly Tax" subtitle="">
                            <vs-button size="small" icon-pack="feather" @click="getData('Monthly Tax')" icon="icon-list"></vs-button>
                        </vs-list-item>

                        <vs-list-item class="mt-2" title="Monthly Resubmission Tax" subtitle="">
                            <vs-button size="small" icon-pack="feather" @click="getData('Monthly Resubmission Tax')" icon="icon-list"></vs-button>
                        </vs-list-item>

                        <vs-list-item class="mt-2" title="Annual Tax" subtitle="">
                            <vs-button size="small" icon-pack="feather" @click="getData('Annual Tax')" icon="icon-list"></vs-button>
                        </vs-list-item>

                        <vs-list-item class="mt-2" title="Annual Resubmission Tax" subtitle="">
                            <vs-button size="small" icon-pack="feather" @click="getData('Annual Resubmission Tax')" icon="icon-list"></vs-button>
                        </vs-list-item>
                    </vs-list>
                </vx-card>
                <!-- {{ recallTaxes }} -->
            </vs-col>
        </vs-row>

        <vs-popup :active.sync="addTaxManagmentModal" title="Add Tax Managment">
            <form ref="addTaxManagmentForm" @submit.prevent="addTaxManagment($event,'addform')" data-vv-scope="addform">
                <input type="hidden" name="category_id" v-model="tax_customer_id">
                <vs-row>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="tax_identifier" v-model="tax_identifier" data-vv-as="Tax Identifier" label-placeholder="Tax Identifier" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.tax_identifier')">{{errors.first('addform.tax_identifier')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="title" v-model="title" label-placeholder="Title" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.title')">{{errors.first('addform.title')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <br>
                            <vs-textarea v-validate="'required'" name="description" v-model="description" :counter="100" label="Description" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.description')">{{errors.first('addform.description')}}</span>
                        </vx-input-group>
                        <!-- <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="duration" v-model="duration" label-placeholder="Duration" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.duration')">{{errors.first('addform.duration')}}</span>
                        </vx-input-group> -->
                        <vx-input-group class="mt-2">
                            <vs-select v-validate="'required'" placeholder="Select Type" style="width: 100%;" label="Type" v-model="type" name="type">
                                <!-- <vs-select-item text="Select Type" value=""></vs-select-item> -->
                                <vs-select-item text="Monthly Tax" value="Monthly Tax"></vs-select-item>
                                <vs-select-item text="Monthly Resubmission Tax" value="Monthly Resubmission Tax"></vs-select-item>

                                <vs-select-item text="Annual Tax" value="Annual Tax"></vs-select-item>
                                <vs-select-item text="Annual Resubmission Tax" value="Annual Resubmission Tax"></vs-select-item>
                            </vs-select>
                            <span class="text-danger" v-show="errors.has('addform.type')">{{errors.first('addform.type')}}</span>
                        </vx-input-group>


                        <vx-input-group class="mt-2" v-if="resubmissionTypeShow">
                            <vs-select v-validate="'required'" placeholder="Select Resubmission Type" style="width: 100%;" label="Resubmission Type" v-model="resubmissionType" name="resubmission_type">
                                <vs-select-item text="New" value="New"></vs-select-item>
                                <vs-select-item text="Recall" value="Recall"></vs-select-item>
                                
                            </vs-select>
                            <span class="text-danger" v-show="errors.has('addform.resubmission_type')">{{errors.first('addform.resubmission_type')}}</span>
                        </vx-input-group>

                        <vx-input-group class="mt-2" v-if="showTaxesDd && resubmissionTypeShow">
                            <vs-select v-validate="'required'" placeholder="Select Resubmission Tax" style="width: 100%;" label="Resubmission Taxes" v-model="recallTax" name="resubmission_taxes">
                                <div v-for="item,indextr in recallTaxes" :key="indextr">
                                    <vs-select-item :text="item.title" :value="item.tax_id"></vs-select-item>
                                </div>
                            </vs-select>
                            <span class="text-danger" v-show="errors.has('addform.resubmission_taxes')">{{errors.first('addform.resubmission_taxes')}}</span>
                        </vx-input-group>
                       

                        <vx-input-group>
                            <br>
                            <vs-textarea name="notes" v-model="notes" :counter="100" label="Notes" data-vv-scope="addform" />
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
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="tax_identifier" v-model="editTax.tax_code" data-vv-as="Tax Identifier" label-placeholder="Tax Identifier" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('addform.tax_identifier')">{{errors.first('addform.tax_identifier')}}</span>
                        </vx-input-group>
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
                            <vs-select v-validate="'required'" placeholder="Select Type" style="width: 100%;" label="Type" v-model="editTax.type" name="type">
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
            getTaxStatus: 'Monthly Tax',
            resubmissionTypeShow: false,
            resubmissionType: 'New',
            recallTax: '',
            showTaxesDd: false
        };
    },
    computed: {
        ...mapState('supervisors/', ['supervisors']),
        ...mapState('taxes/', ['taxes']),
        ...mapState('taxes/', ['recallTaxes']),
        ...mapState('officers/', ['officers']),
    },
    watch: {
        type: function (val, oldVal){
            this.resetType();
            this.resubmissionType = 'New';
            if(val == 'Monthly Resubmission Tax' || val == 'Annual Resubmission Tax'){
                this.resubmissionTypeShow = true;
            }else{
                this.resubmissionTypeShow = false;
            }
        },

        resubmissionType: function(val, oldVal){
            this.resetResubmissionType();
            if(val == 'Recall'){
                var data = {
                    id : this.tax_customer_id,
                    type : this.type
                };
                this.getRecallTaxes(data);
                this.showTaxesDd = true;
            }else{
                this.showTaxesDd = false;
            }
        }
    },
    beforeCreate() {},
    created() {
        this.tax_customer_id = localStorage.getItem('customer');
        this.getSupervisors();
        this.getOfficers();
        var data = {
            id : this.tax_customer_id,
            status : this.getTaxStatus
        };
        this.getTaxes(data);
    },
    methods: {
        ...mapActions({
            getSupervisors: 'supervisors/getSupervisors',
            getOfficers: 'officers/getOfficers',
            create: 'taxes/addTax',
            getTaxes: 'taxes/getTaxes',
            update: 'taxes/editTax',
            getRecallTaxes: 'taxes/getRecallTaxes',
            clearRecallTaxes: 'taxes/clearRecallTaxes',
        }),
        async resetType(){
            this.showTaxesDd = false;
            this.resubmissionTypeShow = false;
            await this.resetResubmissionType();
        },
        resetResubmissionType(){
            this.clearRecallTaxes();
        },
        getFullName(obj) {
            // alert(obj);
            if (obj !== null) {
                return obj.full_name;
            } else {
                return 'N/A';
            }

        },
        getData(status){

            if(this.getTaxStatus == status){
                return false;
            }

            this.getTaxStatus = status;
            var data = {
                id : this.tax_customer_id,
                status : status
            };
            this.getTaxes(data);
        },
        /*changeType(type) {
            var date = new Date();
            if (type == 'Monthly Tax') {
                this.tax_identifier = 'M-' + this.months[date.getMonth()] + '-' + date.getFullYear();
            } else if (type == 'Annual Tax') {
                this.tax_identifier = 'Y-' + date.getFullYear();
            } else if (type == 'Resubmission Tax') {
                this.tax_identifier = 'R-' + this.months[date.getMonth()] + '-' + date.getFullYear();
            }
        },*/
        /*editChangeType(type) {
            var date = new Date();
            if (type == 'Monthly Tax') {
                this.editTax.tax_code = 'M-' + this.months[date.getMonth()] + '-' + date.getFullYear();
            } else if (type == 'Annual Tax') {
                this.editTax.tax_code = 'Y-' + date.getFullYear();
            } else if (type == 'Resubmission Tax') {
                this.editTax.tax_code = 'R-' + this.months[date.getMonth()] + '-' + date.getFullYear();
            }
        },*/
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
                    fd.append('created_by', localStorage.getItem('admin'))
                    fd.append('resubmission_type', this.resubmissionType);
                    fd.append('recall_tax_id', this.recallTax);
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
            this.$vs.loading.close();
            axios.post('tax/get-tax', { id: taxId }).then(res => {
                let date = new Date();
                this.editTax = res.data.tax;
                // this.editTax.tax_code = res.data.tax_code;
                this.editTaxManagmentModal = true;
                // this.officer = _.map(this.editTax,'officer_id');
                /*if (this.editTax.type == 'Monthly Tax') {
                } else if (this.editTax.type == 'Annual Tax') {
                    this.editTax.tax_code = 'Y-' + date.getFullYear();
                } else if (this.editTax.type == 'Resubmission Tax') {
                    this.editTax.tax_code = 'R-' + this.months[date.getMonth()] + '-' + date.getFullYear();
                }*/
                // console.log(this.editTax);
            });
        },

        editTaxManagment(e) {
            this.$validator.validateAll('editform').then((result) => {
                if (result) {
                    self = this;
                    let fd = new FormData(self.$refs.editTaxManagmentForm);
                    fd.append('customer_id', this.tax_customer_id);
                    fd.append('tax_id', self.editTax.tax_id);
                    fd.append('tax_code', this.editTax.tax_code);
                    

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
