export default {
	setPurchases(state,purchases){
		state.purchases = purchases;
	},

	setPurchase(state,data){
		state.purchase = data;
	},
	prependPurchase(state,purchase){
		let purchases = state.purchases;
		purchases.unshift(purchase);
		Vue.set(state,'purchases',purchases);
		// state.sales.unshift(sale);
	}
}