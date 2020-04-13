export default {
	setSales(state,sales){
		state.sales = sales;
	},
	setSale(state,sale){
		state.sale = sale;
	},
	prepandSale(state,sale){
		state.sales.unshift(sale);
	}
}