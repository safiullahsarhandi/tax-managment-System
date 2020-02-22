<template>
    <div>
        <vs-row>
            <vs-col class="mt-base" vs-md="8" vs-lg="8" vs-sm="12" vs-xs="12">
                <vx-card title="Company OR Customer Overview">
                    <vs-row>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Company Name (English):</label>
                                <h4>{{customer.name_english}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Company Name (Khmer):</label>
                                <h4>{{customer.name_khmer}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Incorporation Date:</label>
                                <h4>{{new Date(customer.incorporation_date).toDateString()}}</h4>
                            </p>
                        </vs-col>
                    </vs-row>
                    <vs-row class="mt-base">
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Tax Card No:</label>
                                <h4>{{customer.tax_card_num}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Tin No:</label>
                                <h4>{{customer.tin_no}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Industry:</label>
                                <h4>{{customer.industry}}</h4>
                            </p>
                        </vs-col>
                    </vs-row>
                    <vs-row class="mt-base">
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>No. Of Taxes:</label>
                                <h4>{{customer.taxes_count}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>No Employees:</label>
                                <h4>{{customer.active_employees_count}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Created By:</label>
                                <h4>{{getFullName(customer.created_by)}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Officer Who Work:</label>
                                <h4>{{getFullName(customer.officer)}}</h4>
                            </p>
                        </vs-col>
                        <vs-col vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Supervisor:</label>
                                <h4>{{getFullName(customer.supervisor)}}</h4>
                            </p>
                        </vs-col>
                    </vs-row>
                </vx-card>
            </vs-col>
            <vs-col class="mt-base" vs-md="4" vs-lg="4" vs-sm="12" vs-xs="12">
                <vx-card title="Address & Contact Info">
                    <vs-row>
                        <vs-col vs-md="12" vs-lg="12" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Address:</label>
                                <h4>{{getAddress(customer)}}</h4>
                            </p>
                        </vs-col>
                        <vs-col class="mt-2" vs-md="12" vs-lg="12" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Phone:</label>
                                <h4>{{customer.telephone}}</h4>
                            </p>
                        </vs-col>
                        <vs-col class="mt-2" vs-md="12" vs-lg="12" vs-sm="12" vs-xs="12">
                            <p>
                                <label>Email:</label>
                                <h4>{{customer.email}}</h4>
                            </p>
                        </vs-col>
                    </vs-row>
                </vx-card>
            </vs-col>
        </vs-row>
        <vs-row>
            <vs-col>
                <vx-card class="mt-base" title="Additional Information">
                    <vs-row>
                        <vs-col :key="index" v-for="(info,index) in customer.additional_fields" vs-w="4" vs-sm='12'>
                            <div>Additional info {{index + 1}}</div>
                            <div>{{info}}</div>
                        </vs-col>
                    </vs-row>
                </vx-card>
            </vs-col>
        </vs-row>
        <vs-row>
            <vs-col>
                <taxes class="mt-base"></taxes>
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
        getFullName(obj){
            if(obj !== null && !_.isUndefined(obj)){
                return obj.full_name;
            }else{
                return 'N/A';
            }

        },
        getAddress(customer) {
            return customer.address + ' ' + customer.street + ' ' + customer.group + ' ' + customer.sangkat + ' ' + customer.village + ' ' + customer.district + ' ' + customer.province + ' ' + ' ' + customer.muncipality;
        }
    }
}

</script>
