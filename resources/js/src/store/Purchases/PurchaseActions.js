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

	updatePurchase({commit},fd){
		return axios.post('update-purchase',fd).then(res=>{
			return res;
		});
	}	
}