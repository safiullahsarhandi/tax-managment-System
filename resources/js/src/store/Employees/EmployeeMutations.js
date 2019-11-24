export default {
	setEmployees(state,employees){
		state.employees = employees;
	},
	setEmployee(state,employee){
		var index = _.findIndex(state.employees,(o)=>{ return o.id === employee.id});
		Vue.set(state.employees,index,employee);
	},
	setStatus(state,data){
		var index = _.findIndex(state.employees,(o)=>{ return o.id === data.id});
		state.employees[index].status = data.status
		// Vue.set(state.employees,index,employee);
	},
}