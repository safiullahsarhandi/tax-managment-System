export default{
	getCustomers({commit}){
		axios.get('get-customers').then(res=>{
			commit('setCustomers',res.data.customers)
		});
	},
	getOwners({commit}){
		axios.get('get-owners').then(res=>{
			commit('setOwners',res.data.owners)
		});
	},
	getCustomer({commit},customer_id){
		axios.get('get-customer?customer_id='+customer_id,).then(res=>{
			commit('setCustomer',res.data.customer)
		});
	},
	addCustomer({commit},fd){
		// alert('action called');
		return axios.post('add-customer',fd).then(res=>{
			// commit('setOfficer',res.data.officers)
			return res;
		});
	},
	createOwner({commit},data){
		// alert('action called');
		return axios.post('add-owner',data.fd).then(res=>{
			// commit('setOfficer',res.data.officers)
			if(res.data.status == 'error'){
				data.notify({
					position : 'right-top',
					color : 'danger',
					text : res.data.msg,
					icon : "warning"
				})

			}else{
				data.notify({
					position : 'right-top',
					color : 'success',
					text : res.data.msg
				})
			}
			return res;
		});
	},
	updateOwner({commit},data){
		// alert('action called');
		return axios.post('update-owner',data.fd).then(res=>{
			// commit('setOfficer',res.data.officers)
			if(res.data.status == 'error'){
				data.notify({
					position : 'right-top',
					color : 'danger',
					text : res.data.msg,
					icon : "warning"
				})

			}else{
				data.notify({
					position : 'right-top',
					color : 'success',
					text : res.data.msg
				})
			}
			commit('updateOwner',res.data.owner);
			return res;

		});
	},

	updateCustomer({commit},fd){
		return axios.post('update-customer',fd).then(res=>{
			// commit('setSingleCustomer',res.data.customer);
			return res;
		});
	},
	updateStatus({commit},data){
		axios.post('update-customer-status',{customer_id : data.customer_id,status : data.status}).then(res=>{
			data.notify({
				position : 'right-top',
				text : 'Status updated successfully',
				color : 'success', 
			})
			commit('setCustomerStatus',{customer_id : data.customer_id,status : data.status});
		});
	},	
}