import state from "./PurchaseState.js";
import actions from "./PurchaseActions.js";
import mutations from "./PurchaseMutations.js";
import getters from "./PurchaseGetters.js";

export default{
	namespaced : true,
	actions,
	state,
	mutations,
	getters,
}