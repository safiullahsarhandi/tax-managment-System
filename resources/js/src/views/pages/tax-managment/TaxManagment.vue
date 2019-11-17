<template>
    <div>
        <vx-card title="List of Taxes" subtitle="The List of Taxes contains currently assigned taxes of customer Or those which are delivered succesfully">
            <template slot="actions">
                <!-- <vs-button type="border" @click="addTaxManagmentModal = true" icon-pack="feather" icon="icon-plus"></vs-button> -->
                <vs-button type="border" @click="check()" icon-pack="feather" icon="icon-plus"></vs-button>
            </template>
            <vs-table search pagination :data="[]">
                <template slot="thead">
                    <vs-th>Title</vs-th>
                    <vs-th>Description</vs-th>
                    <vs-th>Company</vs-th>
                    <vs-th>Supervisor</vs-th>
                    <vs-th>No. of Officers</vs-th>
                    <vs-th>Status</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(tr,index) in data">
                        <vs-td>Title</vs-td>
                        <vs-td>Description</vs-td>
                        <vs-td>Company</vs-td>
                        <vs-td>Supervisor</vs-td>
                        <vs-td>No. of Officers</vs-td>
                        <vs-td>Status</vs-td>
                        <vs-td>Actions</vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>

        <vs-popup :active.sync="addTaxManagmentModal" title="Add Tax Managment">
            <form ref="addTaxManagmentForm" @submit.prevent="addTaxManagment($event)" data-vv-scope="addform">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="title" v-model="title" label-placeholder="Title" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.title')">{{errors.first('addform.title')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="description" v-model="description" label-placeholder="Description" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.description')">{{errors.first('addform.description')}}</span>
                        </vx-input-group>

                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="duration" v-model="duration" label-placeholder="Duration" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.duration')">{{errors.first('addform.duration')}}</span>
                        </vx-input-group>
                        <br>
                        <vx-input-group class="mt-2">
                            <label>Tax Period</label><br><br>
                            <vs-radio v-model="type" name="type" vs-value="Monthly">Monthly</vs-radio>
                            <vs-radio v-model="type" name="type" vs-value="Yearly">Yearly</vs-radio>
                        </vx-input-group>

                    </vs-col>
                    

                    <vs-col vs-lg="6" vs-md="12" vs-sm="12">

                        
                        <vx-input-group class="mt-2">
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in supervisors" /></vs-select>
                            <vs-select class="selectExample" label="Supervisors" v-model="default_selected_supervisor" />
                        </vx-input-group>

                        <vx-input-group class="mt-2" >
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in officers" /></vs-select>
                            <vs-select class="selectExample" label="Officers" v-model="default_selected_officer" />
                        </vx-input-group>
                    

                    </vs-col>


                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <vs-button button="submit" class="float-right" type="gradient">Add Tax Managment</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
    </div>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex';
export default {
    data() {
        return {
            addTaxManagmentModal: false,
            editTaxManagmentModal: false,
            title: "",
            description: "",
            type: 'Monthly',
            duration: '',
            supervisor: [],
            officer: [],
            default_selected_officer: "",
            default_selected_supervisor: "",
        };
    },
    computed: {
        ...mapState('supervisors/', ['supervisors']),
        ...mapState('officers/', ['officers']),
    },
    created() {
        this.getSupervisors();
        this.getOfficers();
    },
    methods: {
        ...mapActions({
            getSupervisors: 'supervisors/getSupervisors',
            getOfficers: 'officers/getOfficers',
        }),

        check(){
            console.log(this.supervisors);
            console.log(this.officers);
        }
        
    }
}

</script>
<style lang="css">
.selectExample {
  margin: 10px;
}
.con-select-example {
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-select .vs-select {
  width: 100%
}
@media (max-width: 550px) {
  .con-select {
    flex-direction: column;
  }
  .con-select .vs-select {
    width: 100%
  }
}
</style>