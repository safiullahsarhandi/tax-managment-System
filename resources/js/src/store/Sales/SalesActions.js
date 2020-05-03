export default{
	getSales({commit},tax_id){
		return axios.get('get-sales',{params : {tax_id : tax_id} }).then(res=>{
			commit('setSales',res.data.sales);
			return res;
		});
	},
	async getSale({commit},id){
		return await axios.get('get-sale',{params : {id : id} }).then(res=>{
			commit('setSale',res.data.sale);
			return res;
		});
	},
	getPendingSales({commit},tax_id){
		axios.get('get-pending-sales',{params : {tax_id: tax_id}}).then(res=>{
			commit('setSales',res.data.sales)
		});
	},
	addSale({commit},fd){
		// alert('action called');
		return axios.post('add-sale',fd).then(res=>{
			commit('prepandSale',res.data.data);
			return res;
		});
	},

	updateSale({commit},fd){
		return axios.post('update-sale',fd).then(res=>{
			return res;
		});
	}	
}