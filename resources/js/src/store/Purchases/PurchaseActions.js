export default{
	getPurchases({commit},tax_id){
		axios.get('get-purchases',{params : {tax_id: tax_id}}).then(res=>{
			commit('setPurchases',res.data.purchases)
		});
	},
	getPendingPurchases({commit},tax_id){
		axios.get('get-pending-purchases',{params : {tax_id: tax_id}}).then(res=>{
			commit('setPurchases',res.data.purchases)
		});
	},
	addPurchase({commit},fd){
		// alert('action called');
		return axios.post('add-purchase',fd).then(res=>{
			return res;
		});
	},

	updatePurchase({commit},fd){
		return axios.post('update-purchase',fd).then(res=>{
			return res;
		});
	},

	async getPurchase({commit},id){
		await axios.post('get-purchase',{id : id}).then(res=>{
			commit('setPurchase',res.data.purchase)
		});
	},	
}