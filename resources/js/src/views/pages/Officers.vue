<template>
    <div>
        <vx-card title="List of Officers">
            <template slot="actions">
                <vs-button type="border" @click="addOfficerModal = true" icon-pack="feather" icon="icon-plus"></vs-button>
            </template>
            <vs-table search pagination :data="officers">
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Name</vs-th>
                    <vs-th>Phone #</vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th>Address</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(tr,index) in data">
                        <vs-td>#</vs-td>
                        <vs-td>{{tr.full_name}}</vs-td>
                        <vs-td>{{tr.phone}}</vs-td>
                        <vs-td>{{tr.email}}</vs-td>
                        <vs-td>{{tr.address}} {{tr.state}} {{tr.city}} {{tr.zip_code}}</vs-td>
                        <vs-td>
                            <vs-button type="border" @click="editOfficer(index)">Edit</vs-button>
                            <vs-button type="border">Detail</vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
        <vs-popup :active.sync="addOfficerModal" title="Add New Officer">
            <form ref="addOfficerForm" @submit.prevent="addOfficer($event)">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="first_name" v-model="first_name" label-placeholder="First Name" />
                            <span class="text-danger" v-show="errors.has('first_name')">{{errors.first('first_name')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="last_name" v-model="last_name" label-placeholder="Last Name" />
                            <span class="text-danger" v-show="errors.has('last_name')">{{errors.first('last_name')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="phone" v-model="phone" label-placeholder="Phone" />
                            <span class="text-danger" v-show="errors.has('phone')">{{errors.first('phone')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="email" v-model="email" label-placeholder="Email" />
                            <span class="text-danger" v-show="errors.has('email')">{{errors.first('email')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="password" v-model="password" label-placeholder="Password" />
                            <div class="text-danger" v-show="errors.has('password')">{{errors.first('password')}}</div>
                            <vs-button class="mt-2" button="button" type="border">Generate Password</vs-button>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="12" vs-sm="12">
                        <vx-input-group class="mt-2">
                            <vs-radio v-model="gender" vs-name="gender" vs-value="male">Male</vs-radio>
                            <vs-radio v-model="gender" vs-name="gender" vs-value="female">Female</vs-radio>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="address" v-model="address" label-placeholder="Address" />
                            <span class="text-danger" v-show="errors.has('address')">{{errors.first('address')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="state" v-model="state" label-placeholder="State" />
                            <span class="text-danger" v-show="errors.has('state')">{{errors.first('state')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="city" v-model="city" label-placeholder="City" />
                            <span class="text-danger" v-show="errors.has('city')">{{errors.first('city')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="zip_code" v-model="zip_code" label-placeholder="Zip Code" />
                            <span class="text-danger" v-show="errors.has('zip_code')">{{errors.first('zip_code')}}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <vs-button button="submit" class="float-right" type="gradient">Add Officer</vs-button>
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
            addOfficerModal: false,
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

        };
    },
    computed: {
        ...mapState('officers/', ['officers']),
        ...mapGetters('officers/',['findOfficer']),
    },
    created() {
        this.getOfficers();
    },
    methods: {
        ...mapActions({
            getOfficers: 'officers/getOfficers',
            submit: 'officers/addOfficer',
        }),
        addOfficer(e) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    var fd = new FormData(this.$refs.addOfficerForm);
                    this.submit(fd).then(res => {
                        if (res.status == 'success') {
                            this.password = this.email = this.first_name = this.last_name = this.zip_code = this.city = this.state = this.address = this.phone = '';
                            e.target.reset();
                            this.errors.clear();
                            this.addOfficerModal = false;
                            this.getOfficers();
                        }
                    })
                }
            })
        },
        editOfficer(index){
            var officer = this.findOfficer(index);
            this.edit_first_name = officer.first_name;
            this.edit_last_name = officer.last_name;
            this.edit_gender = officer.gender;
            this.edit_email = officer.email;
            this.edit_zip_code = officer.zip_code;
            this.edit_address = officer.address;
            
        }
    }
}

</script>
