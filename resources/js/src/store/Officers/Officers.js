import state from "./OfficerState.js";
import actions from "./OfficerActions.js";
import mutations from "./OfficerMutations.js";
import getters from "./OfficerGetters.js";

export default{
	namespaced : true,
	actions,
	state,
	mutations,
	getters,
}