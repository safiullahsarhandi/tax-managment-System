export default{
	getPayrolls({commit}, tax_id){
		return axios.get('get-payrolls',{params : {tax_id: tax_id}}).then(res=>{
			commit('setPayrolls',res.data.data);
			return res;
		});
	},
	getPendingPayrolls({commit}, tax_id){
		return axios.get('get-pending-payrolls',{params : {tax_id: tax_id}}).then(res=>{
			commit('setPayrolls',res.data.payrolls);
			return res;
		});
	},
	updatePayroll({commit}, fd){
		return axios.post('update-payroll',fd).then(res=>{
			return res;
		});
	},

	create({commit},data){
		// alert('action called');
		return axios.post('add-payroll',data.fd).then(res=>{
			// commit('setOfficer',res.data.officers)
			if(res.data.status == 'error'){
			data.notify({
				color : 'danger',
				text : res.data.msg,
				title : 'Oops',
				position: 'top-right'
			});

			}else{
				data.notify({
				color : 'success',
				text : res.data.msg,
				position: 'top-right'
			});
			}
			setTimeout(function(){
			data.close();

		},500)

			return res;
		});
	},


	async getPayroll({commit},id){
		await axios.post('get-payroll',{id : id}).then(res=>{
			commit('setPayroll',res.data.data);
		});
	},
	
}