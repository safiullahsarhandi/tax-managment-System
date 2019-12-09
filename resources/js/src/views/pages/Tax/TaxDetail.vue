<template>
    <div id="tax-detail">
        <vs-row>
            <vs-col vs-md="8" vs-lg="8" vs-sm="12" vs-xs="12">
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
                                <label>Title:</label>
                                <h4>{{tax.title}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Description:</label>
                                <h4>{{tax.description}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Duration:</label>
                                <h4>{{tax.duration}}</h4>
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
                                <label>No. Of Officers:</label>
                                <h4>{{tax.officers_count}}</h4>
                            </p>
                        </vs-col>
                    </vs-row>
                    <vs-row class="mt-base">
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Tax Status:</label>
                                <h4>{{tax.status == 0? 'In Progress':'Completed'}}</h4>
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
            <vs-col class="mt-base" vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                <vx-card title="Actions">
                    <vs-list>
                        <vs-list-item title="Mark as Complete" v-if="activeUser.type == 'Supervisor'" subtitle="">
                            <vs-switch color="warning" :disabled="activeUser.type != 'Admin'" @input="changeTaxStatus(tax.tax_id)" />
                        </vs-list-item>
                       <!--  <vs-list-item title="Tax Team" subtitle="">
                        </vs-list-item> -->
                        <vs-list-item title="Approve Tax" v-if="activeUser.type == 'Admin'" subtitle="">
                            <vs-switch color="warning" :disabled="activeUser.type != 'Admin'" @input="changeTaxStatus(tax.tax_id)" />
                        </vs-list-item>
                    </vs-list>
                </vx-card>
            </vs-col>
        </vs-row>
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

        };
    },
    components: {
        StatisticsCardLine,
    },
    beforeCreate() {
        localStorage.setItem('currentDetail', this.$route.fullPath);
        this.$store.commit('setRootUrl', this.$route.fullPath);
    },
    computed: {
        ...mapState('taxes/', ['tax', 'purchases_approval', 'payrolls_approval', 'sales_approval']),
        ...mapGetters('taxes/', 'supervisor'),
        activeUser() {
            return this.$store.state.AppActiveUser
        }
    },
    created() {
        this.getTax(this.$route.params.id);
    },
    methods: {
        ...mapActions({
            getTax: 'taxes/getTax',
            statusUpdate: 'taxes/statusUpdate',
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
}

</script>
<style>
#tax-detail .vx-card .vx-card__collapsible-content.vs-con-loading__container {
    min-height: 250px !important;
}

</style>
