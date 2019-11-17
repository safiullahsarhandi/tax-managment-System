export default{
	findCustomer : state => id => {
		var index = _.findIndex(state.customers,(o)=> {return o.id === id})
		return state.customers[index];
	}
}