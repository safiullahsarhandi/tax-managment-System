<template>
    <div>
        <vs-row>
            <vs-col>
                <vx-card>
                    <vs-row>
                        <vs-col  vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                                <P>Company Name (English):</P>
                                <P>{{customer.name_english}}</P>
                        </vs-col>

                        <vs-col  vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                                <P>Company Name (Khmer):</P>
                                <P>{{customer.name_khmer}}</P>
                        </vs-col>
                    </vs-row>
                
                </vx-card>
            </vs-col>
        </vs-row>
       
        
        <!-- <vs-row>
            <vs-col vs-xl="9" vs-lg="9" vs-md="9" vs-sm="12"> -->
                <taxes class="mt-5"></taxes>
            <!-- </vs-col> -->

            <!-- <vs-col vs-xl="3" vs-lg="3" vs-md="3" vs-sm="12">
                <vx-card title="Actions" class="mt-5">
                    <vs-list>
                        <vs-list-item class="mt-2" title="Monthly Tax" subtitle="">
                            <vs-button size="small" icon-pack="feather" @click="getData(1)" icon="icon-list"></vs-button>
                        </vs-list-item>

                        <vs-list-item class="mt-2" title="Monthly Resubmission Tax" subtitle="">
                            <vs-button size="small" icon-pack="feather" @click="getData(2)" icon="icon-list"></vs-button>
                        </vs-list-item>

                        <vs-list-item class="mt-2" title="Yearly Tax" subtitle="">
                            <vs-button size="small" icon-pack="feather" @click="getData(3)" icon="icon-list"></vs-button>
                        </vs-list-item>

                        <vs-list-item class="mt-2" title="Yearly Resubmission Tax" subtitle="">
                            <vs-button size="small" icon-pack="feather" @click="getData(4)" icon="icon-list"></vs-button>
                        </vs-list-item>
                    </vs-list>
                </vx-card>
            </vs-col>
        </vs-row> -->
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import Taxes from '@/views/pages/Companies/Taxes.vue';
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
