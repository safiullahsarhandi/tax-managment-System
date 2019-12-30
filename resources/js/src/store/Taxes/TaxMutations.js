export default {
	setTaxes(state,taxes){
		state.taxes = taxes;
	},
	setSingleTax(state,data){
		state.tax = data.tax;
		state.purchases_approval = data.approval_purchases;
		state.sales_approval = data.approval_sales;
		state.payrolls_approval = data.approval_payrolls;
	},
	setTaxTeam(state,team){
		state.tax_team = team;
		// Vue.set(,'tax_team',team);
	},
	setTax(state,tax){
		var index = _.findIndex(state.taxes,(o)=>{ return o.id === tax.id});
		Vue.set(state.taxes,index,tax);
	},
	setStatus(state,data){
		var index = _.findIndex(state.taxes,(o)=>{ return o.id === data.id});
		state.taxes[index].status = data.status
		// Vue.set(state.taxs,index,tax);
	},
}