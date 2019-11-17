<template>
    <div>
        <vx-card title="List of Customers">
            <!-- <template slot="actions"> -->
                <!-- <vs-button type="border" @click="addOfficerModal = true" icon-pack="feather" icon="icon-plus"></vs-button> -->
            <!-- </template> -->
            <vs-table search pagination max-items="6" :data="customers">
                <template slot="thead">
                    <vs-th>S.No</vs-th>
                    <vs-th>Name(English)</vs-th>
                    <vs-th>Name(Khmer)</vs-th>
                    <vs-th>Industy / Sector</vs-th>
                    <vs-th>Tax ID</vs-th>
                    <vs-th>TIN # </vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th>Tel</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">
                        <vs-td :data="index++">{{index++}} .</vs-td>
                        <vs-td :data="tr.name_english">{{tr.name_english}}</vs-td>
                        <vs-td :data="tr.name_khmer">{{tr.name_khmer}}</vs-td>
                        <vs-td :data="tr.industry">{{tr.industry}}</vs-td>
                        <vs-td :data="tr.tax_card_num">{{tr.tax_card_num}}</vs-td>
                        <vs-td :data="tr.tin_no">{{tr.tin_no}}</vs-td>
                        <vs-td :data="tr.email">{{tr.email}}</vs-td>
                        <vs-td :data="tr.telephone">{{tr.telephone}}</vs-td>
                        <vs-td>
                            <vs-button type="border" @click="editCustomer(tr.id)">Edit</vs-button>
                            <vs-button type="border">Detail</vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>

        <vs-popup :active.sync="editCustomerModal" title="Update Customer">
            <form ref="editCustomerForm" @submit.prevent="updateCustomer($event)" autocomplete="off" data-vv-scope="editform">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12">
                        <vx-input-group>
                            <input type="hidden" name="id" v-model="customer_id" data-vv-scope="editform">
                            <vs-input v-validate="'required'" name="name_eng" v-model="name_english" label-placeholder="Name (English)" data-vv-scope="editform"/>
                            <span class="text-danger" v-show="errors.has('editform.name_eng')">{{errors.first('editform.name_eng')}}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="name_khmer" v-model="name_khmer" label-placeholder="Name (Khmer)" data-vv-scope="editform"/>
                            <span class="text-danger" v-show="errors.has('editform.name_khmer')">{{errors.first('editform.name_khmer')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="email" v-model="email" label-placeholder="Email" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.email')">{{errors.first('editform.email')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="telephone" v-model="telephone" label-placeholder="Telephone" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.telephone')">{{errors.first('editform.telephone')}}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="12" vs-sm="12">
                       
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="industry" v-model="industry" label-placeholder="Industry" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.industry')">{{errors.first('editform.industry')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="tax_id" v-model="tax_card_num" label-placeholder="Tax Id" ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.tax_id')">{{errors.first('editform.tax_id')}}</span>
                        </vx-input-group>
                        <vx-input-group class="mt-2">
                            <vs-input v-validate="'required'" name="tin_no" v-model="tin_no" label-placeholder="TIN No." ata-vv-scope="editform" data-vv-scope="editform" />
                            <span class="text-danger" v-show="errors.has('editform.tin_no')">{{errors.first('editform.tin_no')}}</span>
                        </vx-input-group>
                       
                    </vs-col>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                        <br>
                        <vs-button button="submit" class="float-right" type="gradient">Update Customer</vs-button>
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
            editCustomerModal: false,
            customer_id: '',
            name_english: '',
            name_khmer: '',
            industry: '',
            tax_card_num: '',
            tin_no: '',
            email: '',
            telephone: '',   
        };
    },
    computed: {
        ...mapState('customers/', ['customers']),
        ...mapGetters('customers/',['findCustomer']),
    },
    created() {
        this.getCustomers();
    },
    methods: {
        ...mapActions({
            getCustomers: 'customers/getCustomers',
            // submit: 'customers/addCustomer',
            update: 'customers/updateCustomer'
        }),
        updateCustomer(e) {
            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    var fd = new FormData(this.$refs.editCustomerForm);
                    fd.append('gender', this.gender);
                    this.submit(fd).then( (res) => {
                    // console.log(res.data);
                        if (res.data.status == 'success') {
                            this.password = this.email = this.first_name = this.last_name = this.zip_code = this.city = this.state = this.address = this.phone = '';
                            e.target.reset();
                            this.errors.clear();
                            this.editCustomerModal = false;
                            // this.getCustomers();
                        }
                        if(res.data.status == 'error'){
                             alert(res.data.msg);
                        }
                    })
                }
            })
        },

        editCustomer(id){
            var customer = this.findCustomer(id);
            this.customer_id = customer.customer_id;
            this.name_english = customer.name_english;
            this.name_khmer = customer.name_khmer;
            this.industry = customer.industry;
            this.tax_card_num = customer.tax_card_num;
            this.tin_no = customer.tin_no;
            this.email = customer.email;
            this.telephone = customer.telephone;
            
            // console.log(customer);
            this.editCustomerModal = true;
        },
        updateCustomer(e) {

            this.$validator.validateAll('editform').then(result => {
                if (result) {
                
                    var fd = new FormData(this.$refs.editCustomerForm);
                    this.update(fd).then( (res) => {
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.editCustomerModal = false;
                            this.getCustomers();
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

