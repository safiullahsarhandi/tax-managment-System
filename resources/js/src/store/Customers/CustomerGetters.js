export default{
	findCustomer : state => id => {
		var index = _.findIndex(state.customers,(o)=> {return o.id === id});
		return state.customers[index];
	},
	findOwner : state => id => {
		return _.find(state.owners,(o)=> {return o.owner_id === id});
		// return state.owners[index];
	}
}