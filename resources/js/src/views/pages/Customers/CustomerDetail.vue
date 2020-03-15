<template>
    <div>
        <vs-row>
            <vs-col class="">
                <vx-card>
                    <table>
                        <tr>
                            <th style="width: 300px; text-align: center;">Company Name (English):</th>
                            <th style="width: 300px; text-align: center;">Company Name (Khmer):</th>
                        </tr>
                        <tr>
                            <td style="text-align: center;">{{customer.name_english}}</td>
                            <td style="text-align: center;">{{customer.name_khmer}}</td>
                        </tr>
                    </table>
                </vx-card>
            </vs-col>
           
        </vs-row>
        
        <vs-row>
            <vs-col>
                <taxes class="mt-5"></taxes>
            </vs-col>
        </vs-row>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import Taxes from '@/views/pages/Customers/Taxes.vue';
export default {
    components: {
        Taxes,
    },
    beforeCreate() {
        localStorage.setItem('currentDetail', this.$route.fullPath);
        localStorage.setItem('customer', this.$route.params.id);
        this.$store.commit('setRootUrl', this.$route.fullPath);
    },
    computed: {
        ...mapState('customers/', ['customer']),
        // ...mapGetters('customers/',['findCustomer']),
    },
    created() {
        // console.log(this.$route.params.id)
        this.getCustomer(this.$route.params.id);
    },
    methods: {
        ...mapActions({
            getCustomer: 'customers/getCustomer',
        }),
        getAddress(customer) {
            return customer.address + ' ' + customer.street + ' ' + customer.group + ' ' + customer.sangkat + ' ' + customer.village + ' ' + customer.district + ' ' + customer.province + ' ' + ' ' + customer.muncipality;
        }
    }
}

</script>
