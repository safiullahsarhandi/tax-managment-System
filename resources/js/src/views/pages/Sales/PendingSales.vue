<template>
    <div>
        <vx-card title="Pending Sales Approvals" subtitle="listed below Sales need your approval which are created by you and your officers">
            <vs-table search pagination max-items="6" :data="sales">
                <template slot="header">
                    <vs-button style="margin-top: -5px" color="primary" type="border" icon="cloud_download">Import</vs-button>
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
        </vx-card>

    </div>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex';
export default {
    inject : ['generatePassword'],
    data() {
        return {
            tax_id : '',
            // switch1: true,

        };
    },
    computed: {
        ...mapState('sales/', ['sales']),
    },
    created() {
        this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.getPendingSales(this.tax_id);
    },
    methods: {
        ...mapActions({
            getPendingSales: 'sales/getPendingSales',
            update: 'sales/updateSales'
        }),

        addMoreFeild () {
            this.customField.push({name : 'additional_field[]',value : '',type: 'text'});
        },

        makePassword(){
            this.password = this.generatePassword();
        }
    }
}

</script>