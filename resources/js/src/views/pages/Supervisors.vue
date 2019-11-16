<template>
    <div>
        <vx-card title="List of Supervisors">
            <template slot="actions">
                <vs-button type="border" @click="addSupervisorModal = true" icon-pack="feather" icon="icon-plus"></vs-button>
            </template>
            <vs-table search pagination max-items="6" :data="supervisors">
                <template slot="thead">
                    <vs-th>Name</vs-th>
                    <vs-th>Phone #</vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th>Address</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template  slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">
                        <vs-td :data="tr.first_name+' '+tr.last_name">{{tr.first_name}} {{tr.last_name}}</vs-td>
                        <vs-td :data="tr.phone">{{tr.phone}}</vs-td>
                        <vs-td :data="tr.email">{{tr.email}}</vs-td>
                        <vs-td :data="tr.address+' '+tr.state+' '+tr.city+' '+tr.zip_code">{{tr.address}} {{tr.state}} {{tr.city}} {{tr.zip_code}}</vs-td>
                        <vs-td>
                            <vs-button type="border" @click="editSupervisor(tr.id)">Edit</vs-button>
                            <vs-button type="border">Detail</vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
        <vs-popup :active.sync="addSupervisorModal" title="Add New Supervisor">
            <form ref="addSupervisorForm" @submit.prevent="addSupervisor($event)" data-vv-scope="addform">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="first_name" v-model="first_name" label-placeholder="First Name" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('first_name')">{{errors.first('addform.first_name')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="last_name" v-model="last_name" label-placeholder="Last Name" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('last_name')">{{errors.first('addform.last_name')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="phone" v-model="phone" label-placeholder="Phone" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('phone')">{{errors.first('addform.phone')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="email" v-model="email" label-placeholder="Email" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('email')">{{errors.first('addform.email')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="password" v-model="password" label-placeholder="Password" data-vv-scope="addform" />
                            <div class="text-danger" v-show="errors.has('password')">{{errors.first('addform.password')}}</div>
                            <vs-button @click="makePassword()" class="mt-2" button="button" type="border">Generate Password</vs-button>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="12" vs-sm="12">
                        <vx-input-group class="mt-2">
                            <vs-radio v-model="gender" vs-name="gender" vs-value="male">Male</vs-radio>
                            <vs-radio v-model="gender" vs-name="gender" vs-value="female">Female</vs-radio>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="address" v-model="address" label-placeholder="Address" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('address')">{{errors.first('addform.address')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="state" v-model="state" label-placeholder="State" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('state')">{{errors.first('addform.state')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="city" v-model="city" label-placeholder="City" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('city')">{{errors.first('addform.city')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="zip_code" v-model="zip_code" label-placeholder="Zip Code" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('zip_code')">{{errors.first('addform.zip_code')}}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <vs-button button="submit" class="float-right" type="gradient">Add Supervisor</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>

        <vs-popup :active.sync="editSupervisorModal" title="Update Supervisor">
            <form ref="editSupervisorForm" @submit.prevent="updateSupervisor($event)" autocomplete="off" data-vv-scope="editform">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        <vx-input-group>
                            <input type="hidden" name="id" v-model="edit_manager_id" data-vv-scope="editform">
                            <vs-input v-validate="'required'" name="first_name" v-model="edit_first_name" label-placeholder="First Name" data-vv-scope="editform"/>
                            <span class="text-danger" v-show="errors.has('first_name')">{{errors.first('first_name')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="last_name" v-model="edit_last_name" label-placeholder="Last Name" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('last_name')">{{errors.first('last_name')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="phone" v-model="edit_phone" label-placeholder="Phone" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('phone')">{{errors.first('phone')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input readonly v-validate="'required'" name="email" v-model="edit_email" label-placeholder="Email" ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('email')">{{errors.first('email')}}</span>
                        </vx-input-group>
                        <!-- <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="password" v-model="password" label-placeholder="Password" />
                            <div class="text-danger" v-show="errors.has('password')">{{errors.first('password')}}</div>
                            <vs-button class="mt-2" button="button" type="border">Generate Password</vs-button>
                        </vx-input-group> -->
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="12" vs-sm="12">
                        <vx-input-group class="mt-2">
                            <vs-radio v-model="edit_gender" name="edit_gender" vs-value="male">Male</vs-radio>
                            <vs-radio v-model="edit_gender" name="edit_gender" vs-value="female">Female</vs-radio>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="address" v-model="edit_address" label-placeholder="Address" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('address')">{{errors.first('address')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="state" v-model="edit_state" label-placeholder="State" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('state')">{{errors.first('state')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="city" v-model="edit_city" label-placeholder="City" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('city')">{{errors.first('city')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="zip_code" v-model="edit_zip_code" label-placeholder="Zip Code" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('zip_code')">{{errors.first('zip_code')}}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <vs-button button="submit" class="float-right" type="gradient">Update Supervisor</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
    </div>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex';
export default {
    inject : ['generatePassword'],
    data() {
        return {
            addSupervisorModal: false,
            editSupervisorModal: false,
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            address: "",
            state: "",
            zip_code: "",
            city: "",
            gender: "male",
            password: "",
            edit_first_name: "",
            edit_last_name: "",
            edit_email: "",
            edit_phone: "",
            edit_address: "",
            edit_state: "",
            edit_zip_code: "",
            edit_city: "",
            edit_gender: "male",
            edit_password: "",
            edit_manager_id: '',
        };
    },
    computed: {
        ...mapState('supervisors/', ['supervisors']),
        ...mapGetters('supervisors/',['findSupervisor']),
    },
    created() {
        this.getSupervisors();
    },
    methods: {
        ...mapActions({
            getSupervisors: 'supervisors/getSupervisors',
            submit: 'supervisors/addSupervisor',
            update: 'supervisors/updateSupervisor'
        }),
        addSupervisor(e) {
            this.$validator.validateAll('addform').then(result => {
                if (result) {
                    var fd = new FormData(this.$refs.addSupervisorForm);
                    fd.append('gender', this.gender);
                    this.submit(fd).then( (res) => {
                    // console.log(res.data);
                        if (res.data.status == 'success') {
                            this.password = this.email = this.first_name = this.last_name = this.zip_code = this.city = this.state = this.address = this.phone = '';
                            e.target.reset();
                            this.errors.clear();
                            this.addSupervisorModal = false;
                            this.getSupervisors();
                        }
                    })
                }
            })
        },

        editSupervisor(id){
            var supervisor = this.findSupervisor(id);
            // console.log(supervisor)
            // console.log(supervisor);
            // console.log(supervisor);
            this.edit_manager_id = supervisor.manager_id;
            this.edit_first_name = supervisor.first_name;
            this.edit_last_name = supervisor.last_name;
            this.edit_email = supervisor.email;
            this.edit_gender = supervisor.gender;
            // console.log(this.edit_gender)
            this.edit_zip_code = supervisor.zip_code;
            this.edit_address = supervisor.address;
            this.edit_phone = supervisor.phone;
            this.edit_state = supervisor.state;
            this.edit_zip_code = supervisor.zip_code;
            this.edit_city = supervisor.city;
            this.editSupervisorModal = true;
        },
        updateSupervisor(e) {

            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    var fd = new FormData(this.$refs.editSupervisorForm);
                    fd.append('gender', this.edit_gender);
                    this.update(fd).then( (res) => {
                        // console.log(res.data);
                        if (res.data.status == 'success') {
                            this.edit_email = this.edit_first_name = this.edit_last_name = this.edit_zip_code = this.edit_city = this.edit_state = this.edit_address = this.edit_phone = '';
                            this.edit_gender = 'male';
                            e.target.reset();
                            this.errors.clear();
                            this.editSupervisorModal = false;
                            // this.getSupervisors();
                        }
                    })
                }
            })
        },
        makePassword(){
            this.password = this.generatePassword();
        }
    }
}

</script>
