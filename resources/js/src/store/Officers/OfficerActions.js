export default{
	getOfficers({commit}){
		axios.get('get-officers').then(res=>{
			commit('setOfficers',res.data.officers)
		});
	},
	getMyOfficers({commit},id){
		axios.get('get-my-officers?supervisor='+id).then(res=>{
			commit('setMyOfficers',res.data.officers)
		});
	},
	addOfficer({commit},fd){
		return axios.post('add-officer',fd).then(res=>{
			// commit('setOfficer',res.data.officers)
			return res;
		});
	},
	updateOfficer({commit},fd){
		return axios.post('update-officer',fd).then(res=>{
			commit('setSingleOfficer',res.data.officer)
			return res;
		});
	}		
}