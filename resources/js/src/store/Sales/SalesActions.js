export default{
	getSales({commit},tax_id){
		axios.get('get-sales',{params : {tax_id : tax_id} }).then(res=>{
			commit('setSales',res.data.sales)
		});
	},
	getSale({commit},id){
		axios.get('get-sale',{params : {id : id} }).then(res=>{
			commit('setSale',res.data.sale)
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
			return res;
		});
	},

	updateSale({commit},fd){
		return axios.post('update-sale',fd).then(res=>{
			return res;
		});
	}	
}