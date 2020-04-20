export default {
	setCustomers(state,customers){
		state.customers = customers;
	},
	setOwners(state,owners){
		state.owners = owners;
	},
	setCustomer(state,customer){
		state.customer = customer;
	},
	setCustomerStatus(state,data){
		let index = _.findIndex(state.customers,(o)=>{ return data.customer_id == o.customer_id}); 
		state.customers[index].status = data.status;
	},
	updateOwner(state,data){
		let index = _.findIndex(state.owners,(o)=>{ return data.owner_id == o.owner_id}); 
		Vue.set(state.owners,index,data);
	},
	setLogs(state,data){

		state.logs = data;

	}
}