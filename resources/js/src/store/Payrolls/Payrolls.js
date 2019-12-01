import state from "./PayrollsState.js";
import actions from "./PayrollsActions.js";
import mutations from "./PayrollsMutations.js";
import getters from "./PayrollsGetters.js";

export default{
	namespaced : true,
	actions,
	state,
	mutations,
	getters,
}