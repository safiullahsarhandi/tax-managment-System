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

	updateSale({commit},fd){
		return axios.post('update-sale',fd).then(res=>{
			return res;
		});
	}	
}