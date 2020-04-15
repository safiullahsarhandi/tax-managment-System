<template>
    <vs-row class="mt-base p-0" id="home">
        <vs-col id="card-1" vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
            <statistics-card-line iconRight icon="DollarSignIcon" :statisticTitle="'% of all customers: '+10+'%'" title="Monthly Tax" :statisticSubTitle="'Total No. of Customers: '+20" :chartData="analyticsData.revenueGenerated" type='area'></statistics-card-line>
        </vs-col>
        <vs-col id="card-2" vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
            <statistics-card-line iconRight icon="DollarSignIcon" title="Annual Tax" :statisticTitle="'% of all customers: '+10+'%'" :statisticSubTitle="'Total No. of Customers: '+20" :chartData="analyticsData.revenueGenerated" type='area'></statistics-card-line>
        </vs-col>
        <vs-col id="card-3" vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
            <statistics-card-line iconRight icon="DollarSignIcon" title="Tax Resubmission" :statisticTitle="'% of all customers: '+10+'%'" :statisticSubTitle="'Total No. of Customers: '+20" :chartData="analyticsData.revenueGenerated" type='area'></statistics-card-line>
        </vs-col>
    </vs-row>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import StatisticsCardLine from '@/components/statistics-cards/DashboardCard.vue'
import analyticsData from '@/components/analyticsData.js'
export default {
    data() {
        return {
            dashboard: [],
            analyticsData: analyticsData,
        };
    },

    computed: {
        ...mapState('customers', ['monthlyCustomers','yearlyCustomers','resubmitted']),
    },

    async created() {
    	let gettingDashboardData = await axios.get('get-dashboard-data?manager='+localStorage.getItem('admin'));
    	this.dashboard = gettingDashboardData.data;
    },
    methods: {

    },
    components: {
        StatisticsCardLine,
    },
}

</script>
<style>

#card-1 .vx-card {
    background: linear-gradient(to right, #ffbf96, #fe7096) !important;
    color: #fff;
}
#card-2	 .vx-card {
    background: linear-gradient(-90deg, #90caf9, #047edf 99%) !important;
    color: #fff;
}
#card-3	 .vx-card {
    background: linear-gradient(-90deg, #84d9d2, #07cdae) !important;
    color: #fff;
}
#home .vx-card .text-primary {
    color: rgba(var(--vs-dark), 1) !important;
}
</style>