export default{
	getOfficers({commit}){
		axios.get('get-officers').then(res=>{
			commit('setOfficers',res.data.officers)
		});
	},
	addOfficer({commit},fd){
		return axios.post('add-officer',fd).then(res=>{
			// commit('setOfficer',res.data.officers)
		});
	}	
}