<template>
    <div>
        <vx-card title="List of Purchases">
            <!-- <template slot="actions"> -->
                <!-- <vs-button type="border" @click="addOfficerModal = true" icon-pack="feather" icon="icon-plus"></vs-button> -->
            <!-- </template> -->
            <vs-table search pagination max-items="6" :data="purchases">
                <template slot="thead">
                    <vs-th>Branch#/ Name</vs-th>
                    <vs-th>Tax Period</vs-th>
                    <vs-th>Invoice No.</vs-th>
                    <vs-th>Invoice Date</vs-th>
                    <vs-th>Quantity</vs-th>
                    <vs-th>Description</vs-th>
                    <vs-th>Client Response</vs-th>
                    <vs-th>Total VAT</vs-th>
                    <vs-th>Actions</vs-th>
                </template> 
                <template slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">
                        <vs-td :data="tr.branch_name">{{tr.branch_name}}</vs-td>
                        <vs-td :data="tr.tax_period">{{tr.tax_period}}</vs-td>
                        <vs-td :data="tr.invoice_num">{{tr.invoice_num}}</vs-td>
                        <vs-td :data="tr.invoice_date">{{tr.invoice_date}}</vs-td>
                        <vs-td :data="tr.quantity">{{tr.quantity}}</vs-td>
                        <vs-td :data="tr.description">{{tr.description}}</vs-td>
                        <vs-td :data="tr.client_response">{{tr.client_response}}</vs-td>
                        <vs-td :data="tr.total_vat">{{tr.total_vat}}</vs-td>
                            
                        <vs-td>
                            <vs-button :to="'purchase-update/'+tr.purchase_id" size="small" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                            <vs-button size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>

    </div>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex';
export default {
    inject : ['generatePassword'],
    data() {
        return {
            // switch1: true,

        };
    },
    computed: {
        ...mapState('purchases/', ['purchases']),
    },
    created() {
        this.getPurchases();
    },
    methods: {
        ...mapActions({
            getPurchases: 'purchases/getPurchases',
            update: 'purchases/updatePurchase'
        }),
        updateCustomer(e) {
            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.editForm);
                    this.submit(fd).then( (res) => {
                    // console.log(res.data);
                        if (res.data.status == 'success') {
                            this.password = this.email = this.first_name = this.last_name = this.zip_code = this.city = this.state = this.address = this.phone = '';
                            e.target.reset();
                            this.errors.clear();
                            this.editCustomerModal = false;
                            this.$vs.notify({title:'Success',text:'Customer Updated Successfully',color:'success',position:'top-right'})
                            this.$vs.loading.close();
                            // this.getCustomers();
                        }
                        if(res.data.status == 'error'){
                             alert(res.data.msg);
                        }
                    })
                }
            })
        },

        statusUpdate(id){
            this.$vs.loading();
            axios.post('status-update-customer',{id:id}).then(res=>{
                this.$vs.notify({title:'Updated!...',text:res.data.msg,color:'success',position:'top-right'})
                this.$vs.loading.close();
            });
        },

        addMoreFeild () {
            this.customField.push({name : 'additional_field[]',value : '',type: 'text'});
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
            this.additional_fields = customer.additional_fields;
            this.address = customer.address;
            this.district = customer.district;
            this.group = customer.group;
            this.incorporation_date = customer.incorporation_date;
            this.muncipality = customer.muncipality;
            this.province = customer.province;
            this.sangkat = customer.sangkat;
            this.street = customer.street;
            this.village = customer.village;
            self = this;
            self.customField = [];
            if(customer.additional_fields != null){
                if(customer.additional_fields.length > 0){
                    customer.additional_fields.map(function(val, key) {
                        self.customField.push({name : 'additional_field[]',value : val,type: 'text'});
                   });
                }            
            }
            
            this.editCustomerModal = true;
        },
        updateCustomer(e) {
            this.$validator.validateAll('editform').then(result => {
                if (result) {
                    this.$vs.loading();
                    var fd = new FormData(this.$refs.editCustomerForm);
                    this.update(fd).then( (res) => {
                        if (res.data.status == 'success') {
                            e.target.reset();
                            this.errors.clear();
                            this.editCustomerModal = false;
                            this.$vs.notify({title:'Success',text:'Customer Updated Successfully',color:'success',position:'top-right'})
                            this.$vs.loading.close();
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

<style type="text/css">
    .con-vs-popup .vs-popup {
        width: 1000px !important;
    }
</style>

