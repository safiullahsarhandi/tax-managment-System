<template>
	<vs-row>
		<vs-col type="flex" vs-justify="center" vs-align="center" vs-md="4" vs-lg="4" vs-sm="12">
		    <vs-card style="width: 100%; height: 170px">
			      <div>
			        TAx
			      </div>
		    </vs-card>
		</vs-col>
		<vs-col type="flex" vs-justify="center" vs-align="center" vs-md="4" vs-lg="4" vs-sm="12">
		    <vs-card style="width: 100%; height: 170px">
			      <div>
			        Customers
			      </div>
		    </vs-card>
		</vs-col>
		<vs-col type="flex" vs-justify="center" vs-align="center" vs-md="4" vs-lg="4" vs-sm="12">
		    <vs-card style="width: 100%; height: 170px">
			      <div>
			        Completed Tax
			      </div>
		    </vs-card>
		</vs-col>
	</vs-row>


</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            dashboard: []
        };
    },
    
    computed : {
        ...mapState('customers',['customer']),
    },
  
    created() {
       console.log('abc')
    },
    methods: {

    }
}

</script>