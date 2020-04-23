export default {
	setTaxes(state,taxes){
		state.taxes = taxes;
	},
	setParameters(state,parameters){
		state.parameters = parameters;
	},
	setParameter(state,parameter){
		var index = _.findIndex(state.parameters,(o)=>{ return o.id === parameter.id});
		Vue.set(state.parameters,index,parameter);
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
	setSingleStatus(state,data){
		state.tax.status = data.status
		// Vue.set(state.taxs,index,tax);
	},
	setLogs(state,data){

		state.logs = data;

	}
}