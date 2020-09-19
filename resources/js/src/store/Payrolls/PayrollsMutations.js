export default {
	setPayrolls(state,payrolls){
		state.payrolls = payrolls;
	},

	setPayroll(state,data){
		state.payroll = data;
	},
	prependPayroll(state,payroll){
		let payrolls = state.payrolls;
		payrolls.unshift(payroll);
		Vue.set(state,'payrolls',payrolls);
		// state.sales.unshift(sale);
	}

}