<template>
    <div>
        <vx-card title="List Of Currencies">
            <vs-table search pagination max-items="15" :data="currencies">
                <template slot="thead">
                    <vs-th>S.No</vs-th>
                    <vs-th>Country/Region</vs-th>
                    <vs-th>Currency</vs-th>
                    <vs-th>Code Alfa</vs-th>
                    <vs-th>Staus</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(tr,index) in currencies">
                        <vs-td :data="index++">{{index++}}</vs-td>
                        <vs-td :data="tr.country">{{ tr.country }}</vs-td>
                        <vs-td :data="tr.currency">{{ tr.currency }}</vs-td>
                        <vs-td :data="tr.code_alfa">{{ tr.code_alfa }}</vs-td>
                       <vs-td :data="tr.status"><vs-switch @click="statusUpdate(tr.id)" v-model="tr.status"/></vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>

<script>
    
export default {
    data: () => ({
        currencies:[],
    }),

   
    created(){
        this.$vs.loading();
        axios.get('get-currencies').then(res=>{
            this.currencies = res.data.currencies;
            this.$vs.loading.close();
        });
    },

    methods:{
        statusUpdate(id){
            this.$vs.loading();
            axios.post('status-update-currency',{id:id}).then(res=>{
                this.$vs.notify({title:'Updated!...',text:res.data.msg,color:'success',position:'top-right'})
                this.$vs.loading.close();
            });
        },
    }
   
}


</script>
