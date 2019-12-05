export default{
	getPayrolls({commit}, tax_id){
		return axios.post('get-payrolls',{tax_id:tax_id}).then(res=>{
			commit('setPayrolls',res.data.data);
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

	
}