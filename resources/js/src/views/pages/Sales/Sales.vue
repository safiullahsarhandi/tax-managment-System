<template>
    <div>
        <vx-card title="List of Sales">
            <!-- <template slot="actions"> -->
                <!-- <vs-button type="border" @click="addOfficerModal = true" icon-pack="feather" icon="icon-plus"></vs-button> -->
            <!-- </template> -->
            <vs-table search pagination max-items="6" :data="sales">
                <template slot="thead">
                    <vs-th>Branch#/ Name</vs-th>
                    <vs-th>Tax Period</vs-th>
                    <vs-th>Invoice No.</vs-th>
                    <vs-th>Invoice Date</vs-th>
                    <vs-th>Quantity</vs-th>
                    <vs-th>Status</vs-th>
                    <vs-th>Actions</vs-th>
                </template> 
                <template slot-scope="{data}">
                    <vs-tr v-for="(tr,index) in data" :key="index">
 
                        <vs-td :data="tr.branch_name">{{tr.branch_name}}</vs-td>
                        <vs-td :data="tr.tax_period">{{tr.tax_period}}</vs-td>
                        <vs-td :data="tr.invoice_num">{{tr.invoice_num}}</vs-td>
                        <vs-td :data="tr.invoice_date">{{tr.invoice_date}}</vs-td>
                        <vs-td :data="tr.quantity">{{tr.quantity}}</vs-td>
                        <vs-td :data="tr.status"><vs-switch @click="statusUpdate(tr.sale_id)" v-model="tr.status"/></vs-td>
                        <vs-td>
                            <vs-button :to="'sale-update/'+tr.sale_id" size="small" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                            <vs-button size="small" icon-pack="feather" icon="icon-maximize-2" type="border"></vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>

        <!-- <vs-popup class="holamundo"  title="Add Comment" :active.sync="showCommentBox">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </p>
        </vs-popup> -->

    </div>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex';
export default {
    inject : ['generatePassword'],
    data() {
        return {
            tax_id : '',
            // comment: '',
            // showCommentBox: false,
            // switch1: true,

        };
    },
    computed: {
        ...mapState('sales/', ['sales']),
    },
    created() {
        this.tax_id = this.$store.state.rootUrl.split('/')[2];
        this.getSales(this.tax_id);
    },
    methods: {
        ...mapActions({
            getSales: 'sales/getSales',
            update: 'sales/updateSales'
        }),

        // openCommentBox(id){
        //     this.showCommentBox = true;
        // },

        statusUpdate(id){

            axios.post('status-update-sale',{id: id, tax_id:this.tax_id}).then(res=>{
                this.$vs.notify({title:'Updated!...',text:res.data.msg,color:'success',position:'top-right'})
                this.$vs.loading.close();
            });


        },

        addMoreFeild () {
            this.customField.push({name : 'additional_field[]',value : '',type: 'text'});
        },

        makePassword(){
            this.password = this.generatePassword();
        }
    }
}

</script>