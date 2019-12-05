<template>
    <div>
        <vx-card title="Member Detail">
            <vs-row>
                <vs-col class="mt-4" vs-md="4" vs-lg="4" vs-xl="4">
                    <label><vs-icon icon-pack="feather" icon="icon-edit"></vs-icon>First Name</label>
                    <h5>{{member.first_name}}</h5>
                </vs-col>
                <vs-col class="mt-4" vs-md="4" vs-lg="4" vs-xl="4">
                    <label><vs-icon icon-pack="feather" icon="icon-edit"></vs-icon>Last Name</label>
                    <h5>{{member.last_name}}</h5>
                </vs-col>
                <vs-col class="mt-4" vs-md="4" vs-lg="4" vs-xl="4">
                    <label><vs-icon icon-pack="feather" icon="icon-mail"></vs-icon>Email</label>
                    <h5>{{member.email}}</h5>
                </vs-col>
                <vs-col class="mt-4" vs-md="4" vs-lg="4" vs-xl="4">
                    <label><vs-icon icon-pack="feather" icon="icon-male"></vs-icon>Gender</label>
                    <h5>{{member.gender}}</h5>
                </vs-col>
                <vs-col class="mt-4" vs-md="4" vs-lg="4" vs-xl="4">
                    <label><vs-icon icon-pack="feather" icon="icon-phone"></vs-icon>Phone</label>
                    <h5>{{member.phone}}</h5>
                </vs-col>
                <vs-col class="mt-4" vs-md="4" vs-lg="4" vs-xl="4">
                    <label><vs-icon icon-pack="feather" icon="icon-map-pin"></vs-icon>Address</label>
                    <h5>{{member.address}} {{member.state}} {{member.city}} {{member.zip_code}}</h5>
                </vs-col>
                <vs-col class="mt-4" vs-md="4" vs-lg="4" vs-xl="4">
                    <label><vs-icon icon-pack="feather" icon="icon-clock"></vs-icon>Registered at</label>
                    <h5>{{new Date(member.created_at).toLocaleDateString() }}</h5>
                </vs-col>
                <vs-col class="mt-4" vs-md="4" vs-lg="4" vs-xl="4">
                    <label><vs-icon icon-pack="feather" icon="icon-check"></vs-icon>Account Status</label>
                    <h5>{{member.status == 1?"Approved":'Dis Approved'}}</h5>
                </vs-col>
                <vs-col class="mt-4" vs-md="4" vs-lg="4" vs-xl="4">
                    <label><vs-icon icon-pack="feather" icon="icon-"></vs-icon>Total Taxes Managed</label>
                    <h5>{{member.taxes_count}}</h5>
                </vs-col>
                <vs-col class="mt-4" vs-md="4" vs-lg="4" vs-xl="4">
                    <label><vs-icon icon-pack="feather" icon="icon-"></vs-icon>Total Taxes Managing</label>
                    <h5>{{member.active_taxes}}</h5>
                </vs-col>
            </vs-row>
        </vx-card>
        <vx-card class="mt-base" title="Managed OR Managing Taxes">
            <vs-table :data="member.taxes">
                <template slot="thead">
                    <vs-th>Title</vs-th>
                    <vs-th>Duration</vs-th>
                    <vs-th>Tax Type</vs-th>
                    <vs-th>Reports To</vs-th>
                    <vs-th>Work Status</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="tr.id" v-for="(tr,index) in data">
                        <vs-td>{{tr.tax.title}}</vs-td>
                        <vs-td>{{tr.tax.duration}}</vs-td>
                        <vs-td>{{tr.tax.type}}</vs-td>
                        <vs-td>{{tr.tax.supervisor.full_name}}</vs-td>
                        <vs-td>{{tr.tax.status?"In Progess": "Completed"}}</vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>
<script>
    import {mapState,mapActions,mapGetters} from 'vuex';
    export default{
        computed: {
          ...mapState('admins/',['member']),
        },
        created(){
            this.getMemberDetail(this.$route.params.id);
        },
        methods: {
          ...mapActions({
            getMemberDetail : 'admins/getMemberDetail',
          }),
        }
    }
</script>