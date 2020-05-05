export default{
	getEmployees({commit},customer_id){
		axios.get('get-employees',{params : { tax_customer_id : customer_id}}).then(res=>{
			commit('setEmployees',res.data.employees)
		});
	},
	getActiveEmployees({commit},customer_id){
		axios.post('get-active-employees',{customer_id: customer_id}).then(res=>{
			commit('setEmployees',res.data.employees)
		});
	},
	create({commit},data){
		// alert('action called');
		return axios.post('add-employee',data.fd).then(res=>{
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

	updateEmployee({commit},fd){
		return axios.post('update-employee',fd).then(res=>{
			commit('setEmployee',res.data.employee);
			return res;
		});
	},
	statusUpdate({commit},data){
		axios.post('status-update-employee',{id:data.id}).then(res=>{
                data.notify({title:'Updated!...',text:res.data.msg,color:'success',position:'top-right'})
                commit('setStatus',{id : data.id,status : res.data.employee.status});
                data.close();
            });
	}	
}