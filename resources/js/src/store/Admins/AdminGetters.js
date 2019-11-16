export default{
	findAdmin : state => id => {
		var index = _.findIndex(state.admins,(o)=> {return o.id === id})
		return state.admins[index];
	}
}