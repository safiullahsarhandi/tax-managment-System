<template>
    <div id="tax-detail">
        <vs-row>
            <vs-col :vs-md="activeUser.type == 'Admin' || activeUser.type == 'Super Admin'?'9':'9'" :vs-lg="activeUser.type == 'Admin' || activeUser.type == 'Super Admin'?'9':'9'" vs-sm="12" vs-xs="12">
            	<vs-row class="mt-base p-0">
                    <vs-col vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
                        <statistics-card-line icon="DollarSignIcon" :statistic="tax.purchases_count || 0" statisticTitle="No of Purchases Added" :chartData="analyticsData.revenueGenerated" type='area'></statistics-card-line>
                    </vs-col>
                    <vs-col vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
                        <statistics-card-line icon="DollarSignIcon" :statistic="tax.sales_count || 0" statisticTitle="No of Sales Added" :chartData="analyticsData.revenueGenerated" color='success' type='area'></statistics-card-line>
                    </vs-col>
                    <vs-col vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
                        <statistics-card-line icon="DollarSignIcon" :statistic="tax.payrolls_count || 0" statisticTitle="No of Payrolls Added" :chartData="analyticsData.revenueGenerated" color='danger' type='area'></statistics-card-line>
                    </vs-col>
                </vs-row>
                <vx-card class="mt-base" title="Tax Overview">
                    <vs-row>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Tax ID:</label>
                                <h4>{{tax.tax_code || 'N/A'}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Title:</label>
                                <h4>{{tax.title || 'N/A'}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Description:</label>
                                <h4>{{tax.description || 'N/A'}}</h4>
                            </p>
                        </vs-col>
                    </vs-row>
                    <vs-row class="mt-base">
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Type:</label>
                                <h4>{{tax.type}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Supervisor:</label>
                                <h4>{{typeof tax.supervisor!='undefined'?tax.supervisor.full_name: ''}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Officer Who Work:</label>
                                <h4>{{typeof tax.officer!='undefined'?tax.officer.full_name: ''}}</h4>
                            </p>
                        </vs-col>
                    </vs-row>
                    <vs-row class="mt-base">
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Tax Created By:</label>
                                <h4>{{typeof tax.added_by!='undefined'?tax.added_by.full_name: ''}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Tax Status:</label>
                                <h4>{{tax.status == 0? 'In Progress':'Completed'}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Notes:</label>
                                <h4>{{tax.notes || 'N/A'}}</h4>
                            </p>
                        </vs-col>
                    </vs-row>
                </vx-card>
                <template>
                	<vs-row class="mt-base p-0">
	                    <vs-col vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
	                        <statistics-card-line icon="DollarSignIcon" :statistic="purchases_approval || 0" statisticTitle="Pending Approvals Purchases" :chartData="analyticsData.revenueGenerated" type='area'></statistics-card-line>
	                    </vs-col>
	                    <vs-col vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
	                        <statistics-card-line icon="DollarSignIcon" :statistic="sales_approval || 0" statisticTitle="Pending Approvals Sales" :chartData="analyticsData.revenueGenerated" color='success' type='area'></statistics-card-line>
	                    </vs-col>
	                    <vs-col vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
	                        <statistics-card-line icon="DollarSignIcon" :statistic="payrolls_approval || 0" statisticTitle="Pending Approvals Payroll" :chartData="analyticsData.revenueGenerated" color='danger' type='area'></statistics-card-line>
	                    </vs-col>
	                </vs-row>
                   <!--  <vx-card v-if="activeUser.type == 'Supervisor'" class="mt-base" title="Pending Task Approvals" subtitle="listed below Purchases, Payrolls & sales need your approval">
                        <vs-table search pagination max-items="6" :data="purchases_approval	">
                            <template slot="header">
                                <h4>Pending Purchases Approvals</h4>
                            </template>
                            <template slot="thead">
                                <vs-th>added by </vs-th>
                                <vs-th>Branch#/ Name</vs-th>
                                <vs-th>Tax Period</vs-th>
                                <vs-th>Total VAT</vs-th>
                                <vs-th>Actions</vs-th>
                            </template>
                            <template slot-scope="{data}">
                                <vs-tr v-for="(tr,index) in data" :key="index">
                                    <vs-td :data="tr.officer.full_name">{{tr.officer.full_name}}</vs-td>
                                    <vs-td :data="tr.branch_name">{{tr.branch_name}}</vs-td>
                                    <vs-td :data="tr.tax_period">{{tr.tax_period}}</vs-td>
                                    <vs-td :data="tr.total_vat">{{tr.total_vat}}</vs-td>
                                    <vs-td>
                                        <vs-button size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
                                    </vs-td>
                                </vs-tr>
                            </template>
                        </vs-table>
                        <vs-table search pagination max-items="6" :data="sales_approval">
                            <template slot="header">
                                <h4>Pending Sales Approvals</h4>
                            </template>
                            <template slot="thead">
                                <vs-th>added by </vs-th>
                                <vs-th>Branch#/ Name</vs-th>
                                <vs-th>Tax Period</vs-th>
                                <vs-th>Total VAT</vs-th>
                                <vs-th>Actions</vs-th>
                            </template>
                            <template slot-scope="{data}">
                                <vs-tr v-for="(tr,index) in data" :key="index">
                                    <vs-td :data="tr.officer.full_name">{{tr.officer.full_name}}</vs-td>
                                    <vs-td :data="tr.branch_name">{{tr.branch_name}}</vs-td>
                                    <vs-td :data="tr.tax_period">{{tr.tax_period}}</vs-td>
                                    <vs-td :data="tr.total_vat">{{tr.total_vat}}</vs-td>
                                    <vs-td>
                                        <vs-button size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
                                    </vs-td>
                                </vs-tr>
                            </template>
                        </vs-table>
                        <vs-table search pagination max-items="6" :data="payrolls_approval">
                        	<template slot="header">
                                <h4>Pending Payroll Approvals</h4>
                            </template>
                            <template slot="thead">
                                <vs-th>Employee Name</vs-th>
                                <vs-th>Employee No.</vs-th>
                                <vs-th>NSSF No.</vs-th>
                                <vs-th>Actions</vs-th>
                            </template>
                            <template slot-scope="{data}">
                                <vs-tr v-for="(tr,index) in data" :key="index">
                                    <vs-td :data="tr.employee.name_english">{{tr.employee.name_english}}</vs-td>
                                    <vs-td :data="tr.employee.employee_num">{{tr.employee.employee_num}}</vs-td>
                                    <vs-td :data="tr.employee.nssf_num">{{tr.employee.nssf_num}}</vs-td>
                                    <vs-td>
                                        <vs-button size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
                                    </vs-td>
                                </vs-tr>
                            </template>
                        </vs-table>
                    </vx-card> -->
                </template>
            </vs-col>
            <vs-col v-show="activeUser.type == 'Admin' || activeUser.type == 'Super Admin'" class="mt-base" vs-md="3" vs-lg="3" vs-sm="12" vs-xs="12">
                <vx-card title="Actions">
                    <vs-list>
                        <vs-list-item title="Mark as Complete" v-if="activeUser.type == 'Supervisor'" subtitle="">
                            <vs-switch color="warning" :disabled="activeUser.type != 'Admin' || activeUser.type != 'Super Admin'" @input="changeTaxStatus(tax.tax_id)" />
                        </vs-list-item>
                       <!--  <vs-list-item title="Tax Team" subtitle="">
                        </vs-list-item> -->
                        <vs-list-item title="Approve Tax" v-if="activeUser.type == 'Admin' || activeUser.type == 'Super Admin'" subtitle="">
                            <vs-switch color="warning" :disabled="activeUser.type != 'Admin' || activeUser.type != 'Super Admin'" @input="changeTaxStatus(tax.tax_id)" />
                        </vs-list-item>
                        <vs-list-item title="Edit Tax" v-if="activeUser.type == 'Admin' || activeUser.type == 'Super Admin'" subtitle="">
                        	<vs-button size="small" icon-pack="feather" @click="editTax()" icon="icon-edit"></vs-button>
                        </vs-list-item>
                    </vs-list>
                </vx-card>
            </vs-col>
        </vs-row>
        <vs-popup :active.sync="editTaxManagmentModal" title="Add Tax Managment">
            <form ref="editTaxManagmentForm" @submit.prevent="editTaxManagment($event)" data-vv-scope="editform">
                <input type="hidden" name="category_id" v-model="tax_customer_id">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="title" v-model="title" label-placeholder="Title" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.title')">{{errors.first('editform.title')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <br>
                            <vs-textarea v-validate="'required'" name="description" v-model="description" :counter="50" label="Description" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.description')">{{errors.first('editform.description')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="duration" v-model="duration" label-placeholder="Duration" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.duration')">{{errors.first('editform.duration')}}</span>
                        </vx-input-group>
                        <br>
                        <vx-input-group class="mt-2">
                            <label>Tax Type</label><br><br>
                            <vs-radio v-model="type" name="type" vs-value="Monthly">Monthly</vs-radio>
                            <vs-radio v-model="type" name="type" vs-value="Yearly">Yearly</vs-radio>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="12" vs-sm="12">
                        <vx-input-group class="mt-2">
                            <vs-select name="supervisor" class="selectExample" label="Supervisor" v-model="editSupervisor">
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
import { mapState, mapGetters, mapActions } from 'vuex'
import analyticsData from '@/components/analyticsData.js'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
export default {
    data() {
        return {
            analyticsData: analyticsData,
            editTaxManagmentModal: false,
            title: "",
            description: "",
            type: 'Monthly',
            duration: '',
            officer: [],
            editSupervisor : '',
            default_selected_officer: "",
            default_selected_supervisor: "",
            tax_customer_id: '',
            editedTax : {},

        };
    },
    components: {
        StatisticsCardLine,
    },
    beforeCreate() {
    },
    computed: {
        ...mapState('taxes/', ['tax', 'purchases_approval', 'payrolls_approval', 'sales_approval']),
        /*...mapState({
        	supervisors : 'supervisors/supervisors',
        	officers : 'officers/officers',
        }),*/
        ...mapState('supervisors/', ['supervisors']),
		...mapState('officers/', ['officers']),
        ...mapGetters('taxes/', ['supervisor']),
        activeUser() {
            return this.$store.state.AppActiveUser
        }
    },
    created() {
    	localStorage.setItem('currentDetail', this.$route.fullPath);
        this.$store.commit('setRootUrl', this.$route.fullPath);
        this.tax_customer_id = localStorage.getItem('customer')
        this.getSupervisors();
        this.getOfficers();
        this.getTax(this.$route.params.id);
    },
    methods: {
        ...mapActions({
			getSupervisors: 'supervisors/getSupervisors',
            getOfficers: 'officers/getOfficers',
            getTax: 'taxes/getTax',
            statusUpdate: 'taxes/statusUpdate',
            update: 'taxes/editTax',
        }),
        editTax() {
        	
            this.editTaxManagmentModal = true;
            this.title = this.tax.title;
            this.duration = this.tax.duration;
            this.editSupervisor = this.tax.supervisor_id;
            this.type = this.tax.type;
            this.officer = _.map(this.tax.officers,'officer_id');
            this.description = this.tax.description;
            // this.$data.editedTax = this.tax;

        },
        editTaxManagment(e) {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    self = this;
                    let fd = new FormData(self.$refs.editTaxManagmentForm);
                    fd.append('customer_id',this.tax_customer_id)
                    fd.append('tax_id',this.$route.params.id);
                    fd.append('officers', self.officer)
                    fd.append('supervisor_id',self.editSupervisor)
                    let data = {
                        fd: fd,
                        close: this.$vs.loading.close,
                        notify: this.$vs.notify,
                    };
                    this.update(data).then((res)=> {
                        if (res.data.status == 'success') {
                            self.title = self.description = self.duration = self.editSupervisor = '';
                            self.officer = [];
                            self.type = 'Monthly';
                            // e.target.reset();
                            self.$validator.reset();
                            this.getTax(self.$route.params.id)
                            this.editTaxManagmentModal = false;
                        }
                    });
                }
            })
        },
        changeTaxStatus(id) {
        this.$vs.loading();
        let data = {
            status: this.tax.status,
            id: this.tax.tax_id,
            notify: this.$vs.notify,
            close: this.$vs.loading.close
        }
        this.statusUpdate(data);
    }
    },
}

</script>
<style>
#tax-detail .vx-card .vx-card__collapsible-content.vs-con-loading__container {
    min-height: 250px !important;
}

</style>
