export default{
	findEmployee : state => id => {
		
		var index = _.findIndex(state.employees,(o)=> {return o.id === id})
		return state.employees[index];
	}
}