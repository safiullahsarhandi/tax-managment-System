import state from "./SalesState.js";
import actions from "./SalesActions.js";
import mutations from "./SalesMutations.js";
import getters from "./SalesGetters.js";

export default{
	namespaced : true,
	actions,
	state,
	mutations,
	getters,
}