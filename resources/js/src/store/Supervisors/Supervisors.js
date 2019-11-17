import state from "./SupervisorState.js";
import actions from "./SupervisorActions.js";
import mutations from "./SupervisorMutations.js";
import getters from "./SupervisorGetters.js";

export default{
	namespaced : true,
	actions,
	state,
	mutations,
	getters,
}