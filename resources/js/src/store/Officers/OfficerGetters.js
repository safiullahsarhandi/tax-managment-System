export default{
	findOfficer : state => id => {
		var index = _.findIndex(state.officers,(o)=> {return o.id === id})
		return state.officers[index];
	}
}