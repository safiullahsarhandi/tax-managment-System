export default {
	setOfficers(state,officers){
		state.officers = officers;
	},
	setSingleOfficer(state,officer){
		var index = _.findIndex(state.officers,(o)=>{return o.id === officer.id})
		console.log(officer);
		Vue.set(state.officers,index,officer)
	}
}