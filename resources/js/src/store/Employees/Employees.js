import state from "./EmployeeState.js";
import actions from "./EmployeeActions.js";
import mutations from "./EmployeeMutations.js";
import getters from "./EmployeeGetters.js";

export default{
	namespaced : true,
	actions,
	state,
	mutations,
	getters,
}