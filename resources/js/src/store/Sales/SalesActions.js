export default{
	getSales({commit}){
		axios.get('get-sales').then(res=>{
			commit('setSales',res.data.sales)
		});
	},
	addSale({commit},fd){
		// alert('action called');
		return axios.post('add-sale',fd).then(res=>{
			return res;
		});
	},

	// updateCustomer({commit},fd){
	// 	return axios.post('update-customer',fd).then(res=>{
	// 		// commit('setSingleCustomer',res.data.customer);
	// 		return res;
	// 	});
	// }	
}