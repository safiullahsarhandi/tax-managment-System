export default {
	setSales(state,sales){
		state.sales = sales;
	},
	setSale(state,sale){
		state.sale = sale;
	},
	prepandSale(state,sale){
		let sales = state.sales;
		sales.unshift(sale);
		Vue.set(state,'sales',sales);
		// state.sales.unshift(sale);
	}
}