import state from "./ExchangeratesState.js";
import actions from "./ExchangeratesActions.js";
import mutations from "./ExchangeratesMutations.js";
import getters from "./ExchangeratesGetters.js";

export default{
	namespaced : true,
	actions,
	state,
	mutations,
	getters,
}