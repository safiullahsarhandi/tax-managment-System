import state from "./CustomerState.js";
import actions from "./CustomerActions.js";
import mutations from "./CustomerMutations.js";
import getters from "./CustomerGetters.js";

export default{
	namespaced : true,
	actions,
	state,
	mutations,
	getters,
}