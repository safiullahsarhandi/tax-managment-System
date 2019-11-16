export default{
	getAdmins({commit}){
		axios.get('get-admins').then(res=>{
			commit('setAdmins',res.data.admins)
		});
	},
	addAdmin({commit},fd){
		return axios.post('add-admin',fd).then(res=>{
			// commit('setAdmin',res.data.Admins)
			return res;
		});
	},
	updateAdmin({commit},fd){
		return axios.post('update-admin',fd).then(res=>{
			commit('setSingleAdmin',res.data.admin)
			return res;
		});
	}		
}