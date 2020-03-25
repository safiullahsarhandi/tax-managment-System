export default {
	setAdmins(state,admins){
		state.admins = admins;
	},
	setSingleAdmin(state,admin){
		var index = _.findIndex(state.admins,(o)=>{return o.id === admin.id})
		Vue.set(state.admins,index,admin)
	},
	setMember(state,member){
		state.member = member;
	},
	changeStatus(state,id){
		var index = _.findIndex(state.admins,(o)=>{return o.manager_id === id})
		state.admins[index].status = state.admins[index].status == 1?0:1;
	},
}