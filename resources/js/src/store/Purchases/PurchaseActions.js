export default{
	getPurchases({commit}){
		axios.get('get-purchases').then(res=>{
			commit('setPurchases',res.data.purchases)
		});
	},
	addPurchase({commit},fd){
		// alert('action called');
		return axios.post('add-purchase',fd).then(res=>{
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