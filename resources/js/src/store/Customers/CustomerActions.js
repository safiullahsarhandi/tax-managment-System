export default{
	getCustomers({commit}){
		axios.get('get-customers').then(res=>{
			commit('setCustomers',res.data.customers)
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

	updateCustomer({commit},fd){
		return axios.post('update-customer',fd).then(res=>{
			// commit('setSingleCustomer',res.data.customer);
			return res;
		});
	}	
}