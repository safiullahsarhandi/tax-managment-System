import state from "./AdminState.js";
import actions from "./AdminActions.js";
import mutations from "./AdminMutations.js";
import getters from "./AdminGetters.js";

export default{
	namespaced : true,
	actions,
	state,
	mutations,
	getters,
}