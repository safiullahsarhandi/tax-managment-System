import state from "./TaxState.js";
import actions from "./TaxActions.js";
import mutations from "./TaxMutations.js";
import getters from "./TaxGetters.js";

export default{
	namespaced : true,
	actions,
	state,
	mutations,
	getters,
}