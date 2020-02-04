<template>
    <div>
        <vx-card title="List of Taxes" subtitle="The List of Taxes contains currently assigned taxes of customer Or those which are delivered succesfully">
            <template slot="actions">
                <vs-button type="border" v-if="$store.getters.userType == 'Admin'" @click="addTax()" icon-pack="feather" icon="icon-plus"></vs-button>
            </template>
            <vs-table search pagination :data="taxes">
                <template slot="thead">
                    <vs-th>Title</vs-th>
                    <vs-th>Description</vs-th>
                    <vs-th>Supervisor</vs-th>
                    <vs-th>No. of Officers</vs-th>
                    <vs-th>Status</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(tr,index) in data">
                        <vs-td style="width:200px">{{tr.title}}</vs-td>
                        <vs-td>{{tr.description}}</vs-td>
                        <vs-td>{{tr.supervisor.full_name}}</vs-td>
                        <vs-td>{{tr.officers_count}}</vs-td>
                        <vs-td>{{tr.status == 0? 'In progress':'Completed'}}</vs-td>
                        <vs-td>
                             <vs-button v-if="$store.getters.userType == 'Admin'" size="small" type="border" icon-pack="feather" icon="icon-edit" @click="taxEdit(tr.tax_id)"></vs-button>
                             <vs-button size="small" type="border" icon-pack="feather" icon="icon-maximize-2" :to="'tax-collection/'+tr.tax_id"></vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
        <vs-popup :active.sync="addTaxManagmentModal" title="Add Tax Managment">
            <form ref="addTaxManagmentForm" @submit.prevent="addTaxManagment($event)" data-vv-scope="addform">
                <input type="hidden" name="category_id" v-model="tax_customer_id">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="title" v-model="title" label-placeholder="Title" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.title')">{{errors.first('addform.title')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <br>
                            <vs-textarea v-validate="'required'" name="description" v-model="description" :counter="20" label="Description" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.description')">{{errors.first('addform.description')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="duration" v-model="duration" label-placeholder="Duration" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.duration')">{{errors.first('addform.duration')}}</span>
                        </vx-input-group>
                        <!-- <br> -->
                        <!-- <vx-input-group class="mt-2">
                            <label>Tax Type</label><br><br>
                            <vs-radio v-model="type" name="type" vs-value="Monthly">Monthly</vs-radio>
                            <vs-radio v-model="type" name="type" vs-value="Yearly">Yearly</vs-radio>
                        </vx-input-group> -->
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="12" vs-sm="12">
                        <vx-input-group class="mt-2">
                            <vs-select name="supervisor" class="selectExample" label="Supervisor" v-model="supervisor">
                                <vs-select-item value="" text="Select Supervisor"></vs-select-item>
                                <vs-select-item :key="index" :value="item.manager_id" :text="item.first_name+' '+item.last_name" v-for="(item,index) in supervisors" />
                            </vs-select>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-select name="officer[]" placeholder="Search and select" class="selectExample" label="Officers" label-placeholder="Officers" multiple v-model="officer">
                                <vs-select-item value="" :disabled="true" text="Select Officers"></vs-select-item>
                                <vs-select-item :key="index" :value="item.manager_id" :text="item.first_name+' '+item.last_name" v-for="(item,index) in officers" />
                            </vs-select>
                        </vx-input-group>
                    </vs-col>
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
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="title" v-model="editTax.title" label-placeholder="Title" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.title')">{{errors.first('editform.title')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <br>
                            <vs-textarea v-validate="'required'" name="description" v-model="editTax.description" :counter="50" label="Description" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.description')">{{errors.first('editform.description')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="duration" v-model="editTax.duration" label-placeholder="Duration" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.duration')">{{errors.first('editform.duration')}}</span>
                        </vx-input-group>
                        <!-- <br>
                        <vx-input-group class="mt-2">
                            <label>Tax Type</label><br><br>
                            <vs-radio v-model="editTax.type" name="type" vs-value="Monthly">Monthly</vs-radio>
                            <vs-radio v-model="editTax.type" name="type" vs-value="Yearly">Yearly</vs-radio>
                        </vx-input-group> -->
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="12" vs-sm="12">
                        
                        <vx-input-group class="mt-2">
                            <vs-select name="supervisor" class="selectExample" label="Supervisor" v-model="editTax.supervisor_id">
                                <vs-select-item value="" text="Select Supervisor"></vs-select-item>
                                <vs-select-item :key="index" :value="item.manager_id" :text="item.first_name+' '+item.last_name" v-for="(item,index) in supervisors" />
                            </vs-select>
                        </vx-input-group>

                        <vx-input-group class="mt-2">
                            <vs-select name="officer[]" placeholder="Search and select" class="selectExample" label="Officers" label-placeholder="Officers" multiple v-model="officer">
                                <vs-select-item value="" :disabled="true" text="Select Officers"></vs-select-item>
                                <vs-select-item :key="index" :value="item.manager_id" :text="item.first_name+' '+item.last_name" v-for="(item,index) in officers" />
                            </vs-select>
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
    inject : ['loginUser'],
    data() {
        return {
            editTax: {},
            addTaxManagmentModal: false,
            editTaxManagmentModal: false,
            type: 'Monthly',
            officer: [],
            default_selected_officer: "",
            default_selected_supervisor: "",
            tax_customer_id: '',
        };
    },
    computed: {
        ...mapState('supervisors/', ['supervisors']),
        ...mapState('taxes/', ['taxes']),
        ...mapState('officers/', ['officers']),
    },
    beforeCreate() {
    },
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

        addTax() {
            this.addTaxManagmentModal = true;


        },
        addTaxManagment(e) {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.$vs.loading();
                    self = this;
                    let fd = new FormData(self.$refs.addTaxManagmentForm);
                    fd.append('customer_id',this.tax_customer_id)
                    fd.append('officers', self.officer)
                    fd.append('supervisor_id',self.supervisor)
                    let data = {
                        fd: fd,
                        close: this.$vs.loading.close,
                        notify: this.$vs.notify,
                    };
                    this.create(data).then((res)=> {
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
        taxEdit(taxId){
            axios.post('tax/get-tax',{id: taxId}).then(res=>{
                this.editTax = res.data.tax;
                this.editTaxManagmentModal = true;
                this.officer = _.map(this.editTax.officers,'officer_id');
                console.log(this.editTax);
            });
        },

        editTaxManagment(e) {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    self = this;
                    let fd = new FormData(self.$refs.editTaxManagmentForm);
                    fd.append('customer_id',this.tax_customer_id)
                    fd.append('tax_id',self.editTax.tax_id);
                    fd.append('officers', self.officer)
                    fd.append('supervisor_id',self.editTax.supervisor_id)
                    let data = {
                        fd: fd,
                        close: this.$vs.loading.close,
                        notify: this.$vs.notify,
                    };
                    this.update(data).then((res)=> {
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
