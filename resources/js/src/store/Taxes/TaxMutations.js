export default {
	setTaxes(state,taxes){
		state.taxes = taxes;
	},
	setSingleTax(state,tax){
		state.tax = tax;
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