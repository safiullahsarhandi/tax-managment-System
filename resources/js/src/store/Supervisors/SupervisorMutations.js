export default {
	setSupervisors(state,supervisors){
		state.supervisors = supervisors;
	},
	setSingleSupervisor(state,supervisor){
		var index = _.findIndex(state.supervisors,(o)=>{return o.id === supervisor.id})
		Vue.set(state.supervisors,index,supervisor)
	}
}