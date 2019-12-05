<template>
    <div>
        <vs-row>
            <vs-col class="mt-base" vs-md="8" vs-lg="8" vs-sm="12" vs-xs="12">
                <vx-card title="Tax Overview">
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
                </vx-card>
                <vs-row class="mt-base p-0">
                    <vs-col vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
                        <statistics-card-line icon="DollarSignIcon"  :statistic="tax.purchases_count || 0" statisticTitle="No of Purchases Added" :chartData="analyticsData.revenueGenerated" type='area'></statistics-card-line>
                    </vs-col>
                    <vs-col vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
                        <statistics-card-line icon="DollarSignIcon" :statistic="tax.sales_count|| 0" statisticTitle="No of Sales Added" :chartData="analyticsData.revenueGenerated" color='success' type='area'></statistics-card-line>
                    </vs-col>
                    <vs-col vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
                        <statistics-card-line icon="DollarSignIcon" :statistic="tax.payrolls_count || 0" statisticTitle="No of Payrolls Added" :chartData="analyticsData.revenueGenerated" color='danger' type='area'></statistics-card-line>
                    </vs-col>
                </vs-row>
                <template>
                    <vx-card v-if="activeUser.type == 'Supervisor'" class="mt-base" title="Pending Task Approvals" subtitle="listed below Purchases, Payrolls & sales need your approval">
                    </vx-card>
                </template>
            </vs-col>
            <vs-col class="mt-base" vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                <vx-card title="Actions">
                    <vs-list>
                        <vs-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot.">
                            <vs-chip color="warning">Another component</vs-chip>
                        </vs-list-item>
                        <vs-list-item title="Mark as Complete" v-if="activeUser.type == 'Supervisor'" subtitle="">
                            <vs-switch color="warning" :disabled="activeUser.type != 'Admin'" @input="changeTaxStatus(tax.tax_id)" />
                        </vs-list-item>
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
        ...mapState('taxes/', ['tax']),
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
