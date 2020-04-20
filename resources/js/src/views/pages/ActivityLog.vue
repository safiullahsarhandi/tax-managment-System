<template>
    <div>
        <vx-card title="Activity Log">
            <vs-table :data="logs">
                <template slot="thead">
                    <vs-th>Type</vs-th>
                    <vs-th>Event</vs-th>
                    <vs-th>Description</vs-th>
                    <vs-th>created / updated at</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :data="tr" v-for="(tr,index) in data" :key="index">
                        <vs-td>{{tr.type}}</vs-td>
                        <vs-td>{{tr.event}}</vs-td>
                        <vs-td>{{tr.description}}</vs-td>
                        <vs-td>{{tr.created_at}}</vs-td>
                        <template class="expand-user" slot="expand">
                            <vs-row>
                                <vs-col vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                                    <h4>{{tr.event == 'create'?'Created Data History':"Updated Data History"}}</h4>
                                </vs-col>
                                <template>
                                <vs-row class="mt-base" v-if="tr.event == 'update'">
                                    <vs-col v-for="(changes,index2) in tr.changes" :key="index2" vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
                                    	<div >
                                    		<h5>{{index2.split('_').join(' ')}}</h5>
                                    		<div class="bg-dark-gradient flex justify-around rounded-lg text-white"> 
                                    			<span class="oldVal">{{changes.old_value}}</span>-> 
                                    			<span class="newVal">{{changes.new_value}}</span>
                                    			
                                    		</div>
                                    	</div> 
                                    </vs-col>
                                </vs-row>
                                <vs-row class="mt-base" v-else>
                                    <vs-col v-for="(changes,index2) in tr.changes" :key="index2" vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
                                    	<div >
                                    		<h5>{{index2.split('_').join(' ')}}</h5>
                                    		<div class="rounded-lg"> 
                                    			<span>{{changes || 'NA'}}</span>
                                    			
                                    		</div>
                                    	</div> 
                                    </vs-col>
                                </vs-row>
                            </template>
                            </vs-row>
                        </template>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed: {
        ...mapState('taxes', ['logs']),
    },
    methods: {
        ...mapActions({
            getLogs: 'taxes/getLogs',
        }),
    },
    data() {
        return {
            tax_id: '',
        };
    },
    created() {
        this.tax_id = localStorage.getItem('currentDetail').split('/')[2]
        let data = {
            // type : 'sale',
            tax_id: this.tax_id,
        };
        this.getLogs(data);
    }
}

</script>
<style>
	span.oldVal::before {
    content: "Old Value:" !important;
    display: block;
    font-size: 12px;
}
	span.newVal::before {
    content: "New Value:" !important;
    display: block;
    font-size: 12px;
}
</style>