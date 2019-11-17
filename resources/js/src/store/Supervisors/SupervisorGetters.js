export default{
	findSupervisor : state => id => {
		var index = _.findIndex(state.supervisors,(o)=> {return o.id === id})
		return state.supervisors[index];
	}
}