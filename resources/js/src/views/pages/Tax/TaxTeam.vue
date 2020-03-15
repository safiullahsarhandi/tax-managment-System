<template>
    <div>
        <vx-card title="List of Team Members">
            <template slot="actions">
                <vs-button type="border" v-if="$store.getters.userType == 'Admin' || $store.getters.userType == 'Super Admin'" @click="editTaxManagmentModal = true" icon-pack="feather" icon="icon-edit"></vs-button>
            </template>
            <vs-table search pagination max-items="6" :data="tax_team">
                <template slot="header">
                    <vs-button style="margin-top: -5px" color="primary" type="border" icon="cloud_download">Import</vs-button>
                </template>
                <template slot="thead">
                    <vs-th>Name</vs-th>
                    <vs-th>Phone #</vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th>Address</vs-th>
                    <vs-th>Designation</vs-th>
                    <vs-th v-if="$store.getters.userType == 'Admin' || $store.getters.userType == 'Super Admin'">Status</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">
                        <template>
                            <template v-if="tr.detail">
                                <vs-td :data="tr.detail.first_name+' '+tr.detail.last_name">{{tr.detail.first_name}} {{tr.detail.last_name}}</vs-td>
                                <vs-td :data="tr.detail.phone">{{tr.detail.phone}}</vs-td>
                                <vs-td :data="tr.detail.email">{{tr.detail.email}}</vs-td>
                                <vs-td :data="tr.detail.address+' '+tr.detail.state+' '+tr.detail.city+' '+tr.detail.zip_code">{{tr.detail.address}} {{tr.detail.state}} {{tr.detail.city}} {{tr.detail.zip_code}}</vs-td>
                                <vs-td :data="tr.detail.type">{{tr.detail.type}}</vs-td>
                                <vs-td :data="tr.detail.status" v-if="$store.getters.userType == 'Admin' || $store.getters.userType == 'Super Admin'">
                                    <vs-switch @click="statusUpdate(tr.detail.manager_id)" v-model="tr.detail.status" />
                                </vs-td>
                            </template>
                            <template v-else>
                                <vs-td :data="tr.first_name+' '+tr.last_name">{{tr.first_name}} {{tr.last_name}}</vs-td>
                                <vs-td :data="tr.phone">{{tr.phone}}</vs-td>
                                <vs-td :data="tr.email">{{tr.email}}</vs-td>
                                <vs-td :data="tr.address+' '+tr.state+' '+tr.city+' '+tr.zip_code">{{tr.address}} {{tr.state}} {{tr.city}} {{tr.zip_code}}</vs-td>
                                <vs-td :data="tr.type">{{tr.type}}</vs-td>
                                <vs-td v-if="$store.getters.userType == 'Admin' || $store.getters.userType == 'Super Admin'">
                                    <vs-switch @click="statusUpdate(tr.manager_id)" v-model="tr.status" />
                                </vs-td>
                            </template>
                        </template>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
        <vs-popup :active.sync="editTaxManagmentModal" title="Update Team">
            <form ref="updateTaxTeam" @submit.prevent="updateTeam($event)" data-vv-scope="updateForm">
                <input type="hidden" name="category_id" v-model="tax_id">
                <vs-row>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <vx-input-group class="mt-2">
                            <vs-select name="officer[]" placeholder="Search and select" class="selectExample" label="Officers" label-placeholder="Officers" multiple v-model="officer">
                                <vs-select-item value="" :disabled="true" text="Select Officers"></vs-select-item>
                                <vs-select-item :key="index" :value="item.manager_id" :text="item.full_name" v-for="(item,index) in officers" />
                            </vs-select>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <vs-button button="submit" class="float-right" type="gradient">Update</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    inject: ['generatePassword'],
    data() {
        return {
            tax_id: '',
            editTaxManagmentModal: false,
            officer: [],
        };
    },
    computed: {
        ...mapState('taxes/', ['tax_team']),
        ...mapState('officers/', ['officers']),
        ...mapGetters('admins/', ['findAdmin']),
        loginUser() {
            return this.$store.state.AppActiveUser;
        },
    },
    async created() {
        this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.getOfficers();
        self = this;
        await this.getTaxTeam(this.tax_id)
        var officer = _.map(self.tax_team, function(o) {
            if (!_.isUndefined(o.detail)) {
                return o.detail.manager_id;

            }
        });
        this.officer = _.slice(officer, 1, officer.length)
    },
    methods: {
        ...mapActions({
            getTaxTeam: 'taxes/getTaxTeam',
            updateTeamMembers : 'taxes/updateTeamMembers', 
            getOfficers: 'officers/getOfficers'
        }),
        statusUpdate(id) {
            this.$vs.loading();
            axios.post('status-update-tax-member', { id: id }).then(res => {
                this.$vs.notify({ title: 'Updated!...', text: res.data.msg, color: 'success', position: 'top-right' })
                this.$vs.loading.close();
            });
        },
        updateTeam(e) {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    var fd = new FormData(this.$refs.updateTaxTeam);
                    fd.append('tax_id',this.tax_id);
                    fd.append('officers',this.officer);
                    this.$vs.loading();
                    let data = {
                        fd: fd,
                        close: this.$vs.loading.close,
                        notify: this.$vs.notify
                    };
                    this.updateTeamMembers(data).then(res => {
                        this.editTaxManagmentModal = false;
                        var officer = _.map(this.tax_team, function(o) {
                            if (!_.isUndefined(o.detail)) {
                                return o.detail.manager_id;

                            }
                        });
                        this.officer = _.slice(officer, 1, officer.length);
                    });
                }
            })
        }
    }
}

</script>
<style lang="css">
.selectExample {
    margin-top: 10px;
}

.con-select {
    width: 100% !important;
    clear: both;
}

.con-select .vs-select--input {
    margin-top: 10px !important;
}

</style>
