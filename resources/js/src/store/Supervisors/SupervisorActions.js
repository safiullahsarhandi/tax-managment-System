export default{
	getSupervisors({commit}){
		axios.get('get-supervisors').then(res=>{
			commit('setSupervisors',res.data.supervisors)
		});
	},
	addSupervisor({commit},fd){
		return axios.post('add-supervisor',fd).then(res=>{
			// commit('setSupervisor',res.data.Supervisors)
			return res;
		});
	},
	updateSupervisor({commit},fd){
		return axios.post('update-supervisor',fd).then(res=>{
			commit('setSingleSupervisor',res.data.supervisor)
			return res;
		});
	}		
}