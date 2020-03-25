export default{
	async getAdmins({commit}){
		await axios.get('get-admins').then(res=>{
			commit('setAdmins',res.data.admins)
		});
	},
	getMemberDetail({commit},id){
		return axios.get('get-member-detail/'+id).then(res=>{
			commit('setMember',res.data.member)
			return res;
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
	},
	updateStatus({commit},data){
        commit('changeStatus',data.id);
		axios.post('status-update-admin',{id:data.id}).then(res=>{
                data.notify({title:'Updated!...',text:res.data.msg,color:'success',position:'top-right'})
                setTimeout(function(){
                	data.closeLoader();
                })
            });
	}		
}
