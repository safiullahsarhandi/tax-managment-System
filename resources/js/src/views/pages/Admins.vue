<template>
    <div>
        <vx-card title="List of Admins">
            <template slot="actions">
                <vs-button type="border" @click="addAdminModal = true" icon-pack="feather" icon="icon-plus"></vs-button>
            </template>
            <vs-table search pagination max-items="6" :data="admins">
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
                            <vs-button type="border" @click="editAdmin(tr.id)">Edit</vs-button>
                            <vs-button type="border">Detail</vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
        <vs-popup :active.sync="addAdminModal" title="Add New Admin">
            <form ref="addAdminForm" @submit.prevent="addAdmin($event)" data-vv-scope="addform">
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
                        <vs-button button="submit" class="float-right" type="gradient">Add Admin</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>

        <vs-popup :active.sync="editAdminModal" title="Update Admin">
            <form ref="editAdminForm" @submit.prevent="updateAdmin($event)" autocomplete="off" data-vv-scope="editform">
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
                        <vs-button button="submit" class="float-right" type="gradient">Update Admin</vs-button>
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
            addAdminModal: false,
            editAdminModal: false,
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
        ...mapState('admins/', ['admins']),
        ...mapGetters('admins/',['findAdmin']),
    },
    created() {
        this.getAdmins();
    },
    methods: {
        ...mapActions({
            getAdmins: 'admins/getAdmins',
            submit: 'admins/addAdmin',
            update: 'admins/updateAdmin'
        }),
        addAdmin(e) {
            this.$validator.validateAll('addform').then(result => {
                if (result) {
                    var fd = new FormData(this.$refs.addAdminForm);
                    fd.append('gender', this.gender);
                    this.submit(fd).then( (res) => {
                    // console.log(res.data);
                        if (res.data.status == 'success') {
                            this.password = this.email = this.first_name = this.last_name = this.zip_code = this.city = this.state = this.address = this.phone = '';
                            e.target.reset();
                            this.errors.clear();
                            this.addAdminModal = false;
                            this.getAdmins();
                        }
                    })
                }
            })
        },

        editAdmin(id){
            var admin = this.findAdmin(id);
            // console.log(admin)
            // console.log(admin);
            // console.log(admin);
            this.edit_manager_id = admin.manager_id;
            this.edit_first_name = admin.first_name;
            this.edit_last_name = admin.last_name;
            this.edit_email = admin.email;
            this.edit_gender = admin.gender;
            // console.log(this.edit_gender)
            this.edit_zip_code = admin.zip_code;
            this.edit_address = admin.address;
            this.edit_phone = admin.phone;
            this.edit_state = admin.state;
            this.edit_zip_code = admin.zip_code;
            this.edit_city = admin.city;
            this.editAdminModal = true;
        },
        updateSupervisor(e) {

            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    var fd = new FormData(this.$refs.editAdminForm);
                    fd.append('gender', this.edit_gender);
                    this.update(fd).then( (res) => {
                        // console.log(res.data);
                        if (res.data.status == 'success') {
                            this.edit_email = this.edit_first_name = this.edit_last_name = this.edit_zip_code = this.edit_city = this.edit_state = this.edit_address = this.edit_phone = '';
                            this.edit_gender = 'male';
                            e.target.reset();
                            this.errors.clear();
                            this.editAdminModal = false;
                            // this.getAdmins();
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
