<template>
    <div>
        <vx-card title="List of Sales">
            <!-- <template slot="actions"> -->
                <!-- <vs-button type="border" @click="addOfficerModal = true" icon-pack="feather" icon="icon-plus"></vs-button> -->
            <!-- </template> -->
            <vs-table search pagination max-items="6" :data="sales">
                <template slot="thead">
                    <vs-th>Branch#/ Name</vs-th>
                    <vs-th>Tax Period</vs-th>
                    <vs-th>Invoice No.</vs-th>
                    <vs-th>Invoice Date</vs-th>
                    <vs-th>Quantity</vs-th>
                    <vs-th>Description</vs-th>
                    <vs-th>Client Response</vs-th>
                    <vs-th>Account Code</vs-th>
                    <vs-th>Account Reference</vs-th>
                    <vs-th>Actions</vs-th>
                </template> 
                <template slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">
 
                        <vs-td :data="tr.branch_name">{{tr.branch_name}}</vs-td>
                        <vs-td :data="tr.tax_period">{{tr.tax_period}}</vs-td>
                        <vs-td :data="tr.invoice_num">{{tr.invoice_num}}</vs-td>
                        <vs-td :data="tr.invoice_date">{{tr.invoice_date}}</vs-td>
                        <vs-td :data="tr.quantity">{{tr.quantity}}</vs-td>
                        <vs-td :data="tr.description">{{tr.description}}</vs-td>
                        <vs-td :data="tr.client_response">{{tr.client_response}}</vs-td>
                        <vs-td :data="tr.account_code">{{tr.account_code}}</vs-td>
                        <vs-td :data="tr.accounting_reference">{{tr.accounting_reference}}</vs-td>
                            
                        <vs-td>
                            <vs-button :to="'sale-update/'+tr.sale_id" size="small" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
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
            // switch1: true,

        };
    },
    computed: {
        ...mapState('sales/', ['sales']),
    },
    created() {
        this.getSales();
    },
    methods: {
        ...mapActions({
            getSales: 'sales/getSales',
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