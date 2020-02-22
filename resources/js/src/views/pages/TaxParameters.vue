<template>
    <div>
        <vx-card title="List of Tax Parameters" subtitle="">
            <template slot="actions">
                <vs-button type="border" v-if="$store.getters.userType == 'Admin' || $store.getters.userType == 'Super Admin'" @click="addTax()" icon-pack="feather" icon="icon-plus"></vs-button>
            </template>
            <vs-table search pagination :data="parameters">
                <template slot="thead">
                    <vs-th>Tax Param</vs-th>
                    <vs-th>Description (Khmer)</vs-th>
                    <vs-th>Description (English)</vs-th>
                    <vs-th>Rate (%)</vs-th>
                    <vs-th>Base Tax Percentage</vs-th>
                    <vs-th>Tax Type</vs-th>
                    <vs-th>Amount Min</vs-th>
                    <vs-th>Amount Max</vs-th>
                     <vs-th>Effective Date</vs-th>
                    <vs-th>Remarks</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(tr,index) in data">
                        <vs-td>{{taxParam(index)}}</vs-td>
                        <vs-td>{{tr.khmer_description}}</vs-td>
                        <vs-td>{{tr.english_description}}</vs-td>
                        <vs-td>{{tr.rate}}</vs-td>
                        <vs-td>{{tr.base_tax}}</vs-td>
                        <vs-td>{{tr.tax_type || 'NA'}}</vs-td>
                        <vs-td>{{tr.amount_min || 'NA'}}</vs-td>
                        <vs-td>{{tr.amount_max || 'NA' }}</vs-td>
                        <vs-td>{{tr.effective_date}}</vs-td>
                        <vs-td>{{tr.remarks || 'NA' }}</vs-td>
                        <vs-td><vs-button size="small" type="border" icon-pack="feather" icon="icon-edit" @click="showEditPopup(tr.id)"></vs-button></vs-td>
                        <!-- <vs-td>{{tr.description}}</vs-td>
                        <vs-td>{{tr}}</vs-td>
                        <vs-td>{{tr.officers_count}}</vs-td>
                        <vs-td>{{tr.status == 0? 'In progress':'Completed'}}</vs-td>
                        <vs-td>
                             <vs-button v-if="$store.getters.userType == 'Admin' || $store.getters.userType == 'Super Admin'" size="small" type="border" icon-pack="feather" icon="icon-edit" @click="edit(tr.tax_id)"></vs-button>
                             <vs-button size="small" type="border" icon-pack="feather" icon="icon-maximize-2" :to="'tax-collection/'+tr.tax_id"></vs-button>
                        </vs-td> -->
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
        <vs-popup :active.sync="addTaxParameterModal" title="Add Tax Parameter">
            <form ref="addTaxParameterForm" @submit.prevent="add($event,'addform')" data-vv-scope="addform">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        <vx-input-group>
                            <vx-input-group class="mt-2">
                            <vs-select name="tax_code" v-validate="'required'" placeholder="Search and select" class="selectExample" label="Tax Code" v-model="tax_code" data-vv-as="Tax Code" data-vv-scope="addform">
                                <vs-select-item value="ACT" text="ACT" ></vs-select-item>
                                <vs-select-item value="PPT" text="PPT"></vs-select-item>
                                <vs-select-item value="VAT" text="VAT"></vs-select-item>
                                <vs-select-item value="SPT" text="SPT"></vs-select-item>
                                <vs-select-item value="PLT" text="PLT"></vs-select-item>
                                <vs-select-item value="WHT" text="WHT"></vs-select-item>
                                <vs-select-item value="FBT" text="FBT"></vs-select-item>
                                <vs-select-item value="TOS" text="TOS"></vs-select-item>
                                <vs-select-item value="OTX" text="OTX"></vs-select-item>
                            </vs-select>
                            <span class="text-danger" v-show="errors.has('addform.tax_code')">{{errors.first('addform.tax_code')}}</span>
                        </vx-input-group>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input v-validate="'required|numeric'" name="tax_id" v-model="tax_id" data-vv-as="Tax ID" label-placeholder="Tax ID" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.tax_id')">{{errors.first('addform.tax_id')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <br>
                            <vs-textarea v-validate="'required'" name="description_khmer" data-vv-as="Description (Khmer)" v-model="description_khmer" :counter="50" label="Description (Khmer)" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.description_khmer')">{{errors.first('addform.description_khmer')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <br>
                            <vs-textarea v-validate="'required'" name="description_english" data-vv-as="Description (English)" v-model="description_english" :counter="50" label="Description (English)" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.description_english')">{{errors.first('addform.description_english')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <label>Tax Type:</label><br>
                            <vs-radio v-model="type" name="type" vs-value="Monthly">Monthly</vs-radio>
                            <vs-radio v-model="type" name="type" vs-value="Yearly">Yearly</vs-radio>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="12" vs-sm="12">
                    	<vx-input-group class="mt-2">
                    		<vs-input v-validate="'required'" name="rate" data-vv-as="Rate" v-model="rate" label-placeholder="Rate (%)" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.rate')">{{errors.first('addform.rate')}}</span>
                    	</vx-input-group>
                    	<vx-input-group class="mt-2">
                    		<vs-input v-validate="'required'" name="base_tax" v-model="base_tax" data-vv-as="Base Tax Percentage" label-placeholder="Base Tax Percentage (%)" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.base_tax')">{{errors.first('addform.base_tax')}}</span>
                    	</vx-input-group>
                    	<vx-input-group class="mt-2">
                    		<vs-input v-validate="'required'" type="date" data-vv-as="Effective Date" name="effective_date" v-model="effective_date" label	="Effective Date" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.effective_date')">{{errors.first('addform.effective_date')}}</span>
                    	</vx-input-group>
                    	<vx-input-group class="mt-2">
                    		<vs-input name="amount_min" data-vv-as="Amount Min" v-model="amount_min" label-placeholder="Amount Min" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.amount_min')">{{errors.first('addform.amount_min')}}</span>
                    	</vx-input-group>
                    	<vx-input-group class="mt-2">
                    		<vs-input  name="amount_max" data-vv-as="Amount Max" v-model="amount_max" label-placeholder="Amount Max" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.amount_max')">{{errors.first('addform.amount_max')}}</span>
                    	</vx-input-group>
                    	<vx-input-group class="mt-2">
                            <vs-textarea  name="remarks" data-vv-as="Remarks" v-model="remarks" :counter="50" label="Remarks" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.remarks')">{{errors.first('addform.remarks')}}</span>
                        </vx-input-group>
                    </vs-col>
                    <!-- <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                    </vs-col> -->
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <vs-button button="submit" class="float-right" type="gradient">Add Tax Parameter</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
        <vs-popup :active.sync="editTaxParameterModal" title="Edit Tax Parameter">
            <form ref="editTaxParameterForm" @submit.prevent="edit($event,'editform')" data-vv-scope="editform">
                <vs-row>
                	<input type="hidden" name="identifier" v-model="identifier">
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        <vx-input-group>
                            <vx-input-group class="mt-2">
                            <vs-select name="tax_code" v-validate="'required'" placeholder="Search and select" class="selectExample" label="Tax Code" v-model="edit_tax_code" data-vv-as="Tax Code" data-vv-scope="editform">
                                <vs-select-item value="ACT" text="ACT" ></vs-select-item>
                                <vs-select-item value="PPT" text="PPT"></vs-select-item>
                                <vs-select-item value="VAT" text="VAT"></vs-select-item>
                                <vs-select-item value="SPT" text="SPT"></vs-select-item>
                                <vs-select-item value="PLT" text="PLT"></vs-select-item>
                                <vs-select-item value="WHT" text="WHT"></vs-select-item>
                                <vs-select-item value="FBT" text="FBT"></vs-select-item>
                                <vs-select-item value="TOS" text="TOS"></vs-select-item>
                                <vs-select-item value="OTX" text="OTX"></vs-select-item>
                            </vs-select>
                            <span class="text-danger" v-show="errors.has('editform.tax_code')">{{errors.first('editform.tax_code')}}</span>
                        </vx-input-group>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input v-validate="'required|numeric'" name="tax_id" v-model="edit_tax_id" data-vv-as="Tax ID" label-placeholder="Tax ID" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.tax_id')">{{errors.first('editform.tax_id')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <br>
                            <vs-textarea v-validate="'required'" name="description_khmer" data-vv-as="Description (Khmer)" v-model="edit_description_khmer" :counter="50" label="Description (Khmer)" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.description_khmer')">{{errors.first('editform.description_khmer')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <br>
                            <vs-textarea v-validate="'required'" name="description_english" data-vv-as="Description (English)" v-model="edit_description_english" :counter="50" label="Description (English)" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.description_english')">{{errors.first('editform.description_english')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <label>Tax Type:</label><br>
                            <vs-radio v-model="edit_type" name="type" vs-value="Monthly">Monthly</vs-radio>
                            <vs-radio v-model="edit_type" name="type" vs-value="Yearly">Yearly</vs-radio>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="12" vs-sm="12">
                    	<vx-input-group class="mt-2">
                    		<vs-input v-validate="'required'" name="rate" data-vv-as="Rate" v-model="edit_rate" label-placeholder="Rate (%)" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.rate')">{{errors.first('editform.rate')}}</span>
                    	</vx-input-group>
                    	<vx-input-group class="mt-2">
                    		<vs-input v-validate="'required'" name="base_tax" v-model="edit_base_tax" data-vv-as="Base Tax Percentage" label-placeholder="Base Tax Percentage (%)" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.base_tax')">{{errors.first('editform.base_tax')}}</span>
                    	</vx-input-group>
                    	<vx-input-group class="mt-2">
                    		<vs-input v-validate="'required'" type="date" data-vv-as="Effective Date" name="effective_date" v-model="edit_effective_date" label	="Effective Date" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.effective_date')">{{errors.first('editform.effective_date')}}</span>
                    	</vx-input-group>
                    	<vx-input-group class="mt-2">
                    		<vs-input name="amount_min" data-vv-as="Amount Min" v-model="edit_amount_min" label-placeholder="Amount Min" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.amount_min')">{{errors.first('editform.amount_min')}}</span>
                    	</vx-input-group>
                    	<vx-input-group class="mt-2">
                    		<vs-input  name="amount_max" data-vv-as="Amount Max" v-model="edit_amount_max" label-placeholder="Amount Max" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.amount_max')">{{errors.first('editform.amount_max')}}</span>
                    	</vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                    	<vx-input-group>
                            <br>
                            <vs-textarea  name="remarks" data-vv-as="Remarks" v-model="edit_remarks" :counter="50" label="Remarks" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.remarks')">{{errors.first('editform.remarks')}}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <vs-button button="submit" class="float-right" type="gradient">Add Tax Parameter</vs-button>
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
            addTaxParameterModal: false,
            editTaxParameterModal: false,
            type: 'Monthly',
            tax_id : '',
            tax_code : '',
            description_khmer : '',
            description_english : '',
            rate : '',
            base_tax : '',
            amount_min : '',
            amount_max : '',
            effective_date : '',
            remarks : '',

            identifier : 0,
            edit_type: 'Monthly',
            edit_tax_id : '',
            edit_tax_code : '',
            edit_description_khmer : '',
            edit_description_english : '',
            edit_rate : '',
            edit_base_tax : '',
            edit_amount_min : '',
            edit_amount_max : '',
            edit_effective_date : '',
            edit_remarks : '',
            parameter : {},
        };
    },
    computed: {
        ...mapState('taxes/', ['parameters']),
        ...mapGetters('taxes/',['getParameter']),
        },
    beforeCreate() {
    },
    created() {
    	this.fetchParameters();
    },
    methods: {
        ...mapActions({
            create: 'taxes/addParameter',
            fetchParameters: 'taxes/getParameters',
            update: 'taxes/editParameter',
        }),
        taxParam(index){

        		var parameter = this.getParameter(index)
        		return parameter.tax_param_id+''+parameter.expiry_date;
        },
        addTax() {
            this.addTaxParameterModal = true;


        },
        add(e) {
            this.$validator.validateAll('addform').then((result) => {
                if (result) {
                    this.$vs.loading();
                    self = this;
                    let fd = new FormData(self.$refs.addTaxParameterForm);
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
                            this.fetchParameters();
                            this.addTaxParameterModal = false;
                        }
                    });
                }
            })
        },


        //  shows popup tax Parameter
        showEditPopup(id){
        	var parameter = this.getParameter(id,'id');
        	this.identifier = id;
        	this.edit_tax_code = parameter.tax_code; 
        	this.edit_tax_id = parameter.tax_param_id.substring(3); 
        	this.edit_effective_date = parameter.effective_date; 
        	this.edit_description_khmer = parameter.khmer_description; 
        	this.edit_description_english = parameter.english_description; 
        	this.edit_rate = parameter.rate; 
        	this.edit_base_tax = parameter.base_tax; 
        	this.edit_amount_min = parameter.amount_min; 
        	this.edit_amount_max = parameter.amount_max; 
        	this.edit_remarks = parameter.remarks; 
        	this.edit_type = parameter.tax_type; 
        	this.editTaxParameterModal = true;

        },

        edit(e) {
            this.$validator.validateAll('editform').then((result) => {
                if (result) {
                    self = this;
                    let fd = new FormData(self.$refs.editTaxParameterForm);
                    let data = {
                        fd: fd,
                        close: this.$vs.loading.close,
                        notify: this.$vs.notify,
                    };
                    this.update(data).then((res)=> {
                        if (res.data.status == 'success') {
                           
                            // self.fetchParameters();

                            self.$validator.reset();
                            self.editTaxParameterModal = false;
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
