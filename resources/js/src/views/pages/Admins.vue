<template>
    <div>
        <vx-card title="List of Team Members">
            <template slot="actions">
                <vs-button type="border" @click="addAdminModal = true" icon-pack="feather" icon="icon-plus"></vs-button>
            </template>
            <vs-table search pagination max-items="6" :data="admins">
                <template slot="thead">
                    <vs-th>Name</vs-th>
                    <vs-th>Phone #</vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th>Reports To</vs-th>

                    <!-- <vs-th>Address</vs-th> -->
                    <vs-th>Role</vs-th>
                    <vs-th>Status</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template  slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">
                        <vs-td :data="tr.first_name+' '+tr.last_name">{{tr.first_name}} {{tr.last_name}}</vs-td>
                        <vs-td :data="tr.phone">{{tr.phone}}</vs-td>
                        <vs-td :data="tr.email">{{tr.email}}</vs-td>
                        <vs-td :data="reportsTo(tr.reporting_to)">{{reportsTo(tr.reporting_to)}}</vs-td>
                        <!-- <vs-td :data="tr.address+' '+tr.state+' '+tr.city+' '+tr.zip_code">{{tr.address}} {{tr.state}} {{tr.city}} {{tr.zip_code}}</vs-td> -->
                        <vs-td :data="tr.type == 4?'Sub Admin':tr.type == 2?'Supervisor':'Officer'">{{tr.type}}</vs-td>
                        <vs-td :data="tr.status"><vs-switch @click="statusUpdate(tr.manager_id)" v-model="tr.status"/></vs-td>
                        <vs-td>
                            <vs-button size="small" type="border" icon-pack="feather" icon="icon-edit-2" @click="editAdmin(tr.id)"></vs-button>
                            <vs-button size="small" type="border" :to="'/member-detail/'+tr.manager_id" icon-pack="feather" icon="icon-maximize-2"></vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
        <vs-popup :active.sync="addAdminModal" title="Add New Member">
            <form ref="addAdminForm" @submit.prevent="addAdmin($event)" data-vv-scope="addform">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="first_name" v-model="first_name" label-placeholder="First Name" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.first_name')">{{errors.first('addform.first_name')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="last_name" v-model="last_name" label-placeholder="Last Name" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.last_name')">{{errors.first('addform.last_name')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="phone" v-model="phone" label-placeholder="Phone" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.phone')">{{errors.first('addform.phone')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="email" v-model="email" label-placeholder="Email" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.email')">{{errors.first('addform.email')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="password" v-model="password" label-placeholder="Password" data-vv-scope="addform" />
                            <template slot="append">
                            <div class="append-text btn-addon mt-4">
                              <vs-button @click="makePassword()" color="primary" button="button">Generate</vs-button>
                            </div>
                          </template>
                            <!-- <vs-button @click="makePassword()" class="mt-2" button="button" type="border">Generate Password</vs-button> -->
                        </vx-input-group>
                        <div class="text-danger" v-show="errors.has('addform.password')">{{errors.first('addform.password')}}</div>
                        <vx-input-group>
                            <vs-select class="selectExample" v-validate="'required|excluded:0'" name='roll' v-model="defaultRole" data-vv-scope="addform" >
                                <vs-select-item :disabled="!item.value == 1 && $store.getters.userType == 'Admin'" :is-selected.sync="item.isSelected" :key="index" :value="item.value" :text="item.isSelected?item.selectedText:item.label" v-for="(item,index) in rolles" />
                            </vs-select>
                            <span class="text-danger" v-show="errors.has('addform.roll')">{{errors.first('addform.roll')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2" v-if="defaultRole == 3">
                            <vs-select name="supervisor" v-validate="'required'" class="selectExample" label="Supervisor" v-model="supervisor">
                                <vs-select-item value="" text="Select Supervisor"></vs-select-item>
                                <vs-select-item :key="index" :value="item.manager_id" :text="item.first_name+' '+item.last_name" v-for="(item,index) in supervisors" />
                            </vs-select>
                            <span class="text-danger" v-show="errors.has('addform.supervisor')">{{errors.first('supervisor')}}</span>
                        </vx-input-group>
                    
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="12" vs-sm="12">

                        <vx-input-group class="mt-6">
                            <vs-radio v-model="gender" vs-name="gender" vs-value="male">Male</vs-radio>
                            <vs-radio v-model="gender" vs-name="gender" vs-value="female">Female</vs-radio>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="address" v-model="address" label-placeholder="Address" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.address')">{{errors.first('addform.address')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="state" v-model="state" label-placeholder="State" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.state')">{{errors.first('addform.state')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="city" v-model="city" label-placeholder="City" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.city')">{{errors.first('addform.city')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="zip_code" v-model="zip_code" label-placeholder="Zip Code" data-vv-scope="addform" />
                            <span class="text-danger" v-show="errors.has('addform.zip_code')">{{errors.first('addform.zip_code')}}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <vs-button button="submit" class="float-right" type="gradient">Add Member</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>

        <vs-popup :active.sync="editAdminModal" title="Update Member">
            <form ref="editAdminForm" @submit.prevent="updateAdmin($event)" autocomplete="off" data-vv-scope="editform">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        <vx-input-group>
                            <input type="hidden" name="id" v-model="edit_manager_id" data-vv-scope="editform">
                            <vs-input v-validate="'required'" name="first_name" v-model="edit_first_name" label-placeholder="First Name" data-vv-scope="editform"/>
                            <span class="text-danger" v-show="errors.has('editform.first_name')">{{errors.first('editform.first_name')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="last_name" v-model="edit_last_name" label-placeholder="Last Name" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.last_name')">{{errors.first('editform.last_name')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="phone" v-model="edit_phone" label-placeholder="Phone" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.phone')">{{errors.first('editform.phone')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input readonly v-validate="'required'" name="email" v-model="edit_email" label-placeholder="Email" ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.email')">{{errors.first('editform.email')}}</span>
                        </vx-input-group>

                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="address" v-model="edit_address" label-placeholder="Address" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.address')">{{errors.first('editform.address')}}</span>
                        </vx-input-group>
                        
                        <!-- <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="password" v-model="password" label-placeholder="Password" />
                            <div class="text-danger" v-show="errors.has('editform.password')">{{errors.first('editform.password')}}</div>
                            <vs-button class="mt-2" button="button" type="border">Generate Password</vs-button>
                        </vx-input-group> -->
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="12" vs-sm="12">

                        <vs-select class="selectExample mt-2" v-model="selectedRole" >
                            <vs-select-item :is-selected.sync="item.isSelected" :key="index" :value="item.value" :text="item.isSelected?item.selectedText:item.label" v-for="item,index in rolles" />
                        </vs-select>
                        <vx-input-group class="mt-2" v-if="selectedRole == 3">
                            <vs-select v-validate="'required'" name="supervisor" class="selectExample" label="Supervisor" v-model="selectedSupervisor">
                                <vs-select-item value="" text="Select Supervisor"></vs-select-item>
                                <vs-select-item :key="index" :value="item.manager_id" :text="item.first_name+' '+item.last_name" v-for="(item,index) in supervisors" />
                            </vs-select>
                            <span class="text-danger" v-show="errors.has('editform.supervisor')">{{errors.first('editform.supervisor')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-6">
                            <vs-radio v-model="edit_gender" name="edit_gender" vs-value="male">Male</vs-radio>
                            <vs-radio v-model="edit_gender" name="edit_gender" vs-value="female">Female</vs-radio>
                        </vx-input-group>

                        <vx-input-group class="mt-5">
                            <vs-input v-validate="'required'" name="state" v-model="edit_state" label-placeholder="State" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.state')">{{errors.first('editform.state')}}</span>
                        </vx-input-group>
                        
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="city" v-model="edit_city" label-placeholder="City" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.city')">{{errors.first('editform.city')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="zip_code" v-model="edit_zip_code" label-placeholder="Zip Code" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.zip_code')">{{errors.first('editform.zip_code')}}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <vs-button button="submit" class="float-right" type="gradient">Update Member</vs-button>
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
            defaultRole:0,
            selectedRole:0,
            supervisor : '',
            selectedSupervisor : '',
            rolles:[
                {value: 0, label: 'Select Role', selectedText: 'Select Role', isSelected: false },
                {value: 4, label: 'Admin', selectedText: 'Admin', isSelected: false },
                {value: 2, label: 'Supervisor', selectedText: 'Supervisor', isSelected: false },
                {value: 3, label: 'Officer', selectedText: 'Officer', isSelected: false },
            ],
        };
    },
    computed: {
        ...mapState('admins/', ['admins']),
        ...mapGetters('admins/',['findAdmin']),
        ...mapState('supervisors/', ['supervisors']),
    },
    created() {
        this.getAdmins();
        this.getSupervisors();
    },
    methods: {
        ...mapActions({
            getAdmins: 'admins/getAdmins',
            submit: 'admins/addAdmin',
            update: 'admins/updateAdmin',
            getSupervisors: 'supervisors/getSupervisors',
        }),
        reportsTo(reportsTo){
            if(reportsTo != null){
                return reportsTo.full_name;
            }else{
                return 'N/A';
            }
        },
        addAdmin(e) {
            this.$validator.validateAll('addform').then(result => {
                if (result) {
                    var fd = new FormData(this.$refs.addAdminForm);
                    fd.append('gender', this.gender);
                    if(this.defaultRole == 3){

                    fd.append('reports_to', this.supervisor);
                    }else{
                    fd.append('reports_to', localStorage.getItem('admin')); 
                    }

                    this.submit(fd).then( (res) => {
                    // console.log(res.data);
                        if (res.data.status == 'success') {
                            this.password = this.email = this.first_name = this.last_name = this.zip_code = this.city = this.state = this.address = this.phone = '';
                            this.gender = 'male'
                            this.selectedRole = 0;
                            e.target.reset();
                            this.errors.clear();
                            this.addAdminModal = false;
                            this.getAdmins();
                            this.$vs.notify({
                                color : 'danger',
                                position : 'right-top',
                                text : res.data.msg, 
                            })

                        }else{
                            this.$vs.notify({
                                color : 'danger',
                                position : 'right-top',
                                text : res.data.msg, 
                            })
                        }
                    })
                }
            })
        },

        statusUpdate(id){
            this.$vs.loading();
            axios.post('status-update-admin',{id:id}).then(res=>{
                this.$vs.notify({title:'Updated!...',text:res.data.msg,color:'success',position:'top-right'})
                this.$vs.loading.close();
            });
        },

        editAdmin(id){
            var admin = this.findAdmin(id);
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
            if(admin.type == 'Admin'){
                this.selectedRole = 1;
            }
            if(admin.type == 'Supervisor'){
                this.selectedRole = 2;
            }
            if(admin.type == 'Officer'){
                this.selectedRole = 3;
                this.selectedSupervisor = admin.reports_to || 0;
            }
             
            this.editAdminModal = true;
        },
        updateAdmin(e) {

            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.editAdminForm);
                    fd.append('gender', this.edit_gender);
                    if(this.defaultRole == 3){

                    fd.append('reports_to', this.selectedSupervisor);
                    }else{
                    fd.append('reports_to', localStorage.getItem('admin')); 
                    }

                    this.update(fd).then( (res) => {
                        // console.log(res.data);
                        if (res.data.status == 'success') {
                            this.edit_email = this.edit_first_name = this.edit_last_name = this.edit_zip_code = this.edit_city = this.edit_state = this.edit_address = this.edit_phone = '';
                            this.edit_gender = 'male';
                            e.target.reset();
                            this.errors.clear();
                            this.editAdminModal = false;
                            this.$vs.notify({title:'Updated!...',text:'Admin record updated',color:'success',position:'top-right'})
                            this.$vs.loading.close();
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