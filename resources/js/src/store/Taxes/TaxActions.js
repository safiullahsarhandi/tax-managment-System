export default{
	getTaxes({commit},customer_id){
		axios.get('get-taxes',{customer_id : customer_id}).then(res=>{
			commit('setTaxes',res.data.taxes)
		});
	},
	addTax({commit},data){
		// alert('action called');
		return axios.post('add-tax',data.fd).then(res=>{
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

	updateTax({commit},fd){
		return axios.post('update-tax',fd).then(res=>{
			commit('setEmployee',res.data.employee);
			return res;
		});
	},
	statusUpdate({commit},data){
		axios.post('status-update-tax',{id:data.id}).then(res=>{
                data.notify({title:'Updated!...',text:res.data.msg,color:'success',position:'top-right'})
                commit('setStatus',{id : data.id,status : res.data.tax.status});
                data.close();
            });
	}	
}