<template>
    <div>
        <vx-card title="Exchange Rates">
            <template slot="actions">
                <vs-button type="border" @click="editRates()" icon-pack="feather" icon="icon-edit"></vs-button>
            </template>
            <vs-table :data="exchangerates">
                <template slot="thead">
                    <vs-th>
                        Salary Rate
                    </vs-th>
                    <vs-th>
                        Average Rate
                    </vs-th>
                    <vs-th>
                        Annual Rate
                    </vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :data="data">
                        <vs-td :data="tr.value" :key="index" v-for="(tr, index) in exchangerates">
                          {{tr.value}}
                        </vs-td>
                    </vs-tr>
                </template>
                <!-- <template slot="edit">
                    <vs-input type='hidden' :v-model="tr.id" class="inputx"/>
                    <vs-input :v-model="tr.value" class="inputx" placeholder="Rate"/>
                </template> -->
            </vs-table>
        </vx-card>

        <vs-popup :active.sync="editRatesModal" title="Update Exchange Rates">
            <form ref="editRatesForm" @submit.prevent="updateRates($event)" autocomplete="off" data-vv-scope="editform">
                <vs-row>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="salary_rate" v-model="salary_rate" label-placeholder="Salary Rates" data-vv-scope="editform"/>
                            <span class="text-danger" v-show="errors.has('editform.salary_rate')">{{errors.first('editform.salary_rate')}}</span>
                        </vx-input-group>
                        <br>
                        
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="average_rate" v-model="average_rate" label-placeholder="Average Rate" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.average_rate')">{{errors.first('editform.average_rate')}}</span>
                        </vx-input-group>
                        <br>
                        
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="annual_rate" v-model="annual_rate" label-placeholder="Annual Rate" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.annual_rate')">{{errors.first('editform.annual_rate')}}</span>
                        </vx-input-group>
                       
                    </vs-col>
                    
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <vs-button button="submit" class="float-right" type="gradient">Save changes</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>

    </div>
</template>
<script>
import { mapState, mapActions, mapGetters} from 'vuex';
export default {
    data: () => ({
        editRatesModal: false,
        salary_rate: 0,
        average_rate: 0,
        annual_rate: 0,
    }),

    computed: {
        ...mapState('exchangerates/',['exchangerates']),
    },
    created(){
        this.getExchangeRates();
    },
    methods:{
        ...mapActions({
            getExchangeRates: 'exchangerates/getExchangeRates',
            update: 'exchangerates/updateExchangeRates'
        }),

        editRates(){
            this.salary_rate = this.exchangerates[0]['value'];
            this.average_rate = this.exchangerates[1]['value'];
            this.annual_rate = this.exchangerates[2]['value'];
            this.editRatesModal = true;

        },
        updateRates(e) {
            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.editRatesForm);
                    this.update(fd).then( (res) => {
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.editRatesModal = false;
                            this.$vs.notify({title:'Success',text:'Save changes successfully',color:'success',position:'top-right'})
                            this.$vs.loading.close();
                            this.getExchangeRates();
                        }
                    })
                }
            })
        },
    }
}

</script>
<style>
.vs-con-table .vs-con-tbody .vs-table--tbody-table .vs-table--thead th {
    width: 10px;
}

.con-vs-popup .vs-popup {
    width: 300px !important;
}

</style>
