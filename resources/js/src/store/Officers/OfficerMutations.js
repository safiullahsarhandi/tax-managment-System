export default {
	setOfficers(state,officers){
		state.officers = officers;
	},
	setMyOfficers(state,officers){
		state.myOfficers = officers;
	},
	setSingleOfficer(state,officer){
		var index = _.findIndex(state.officers,(o)=>{return o.id === officer.id})
		console.log(officer);
		Vue.set(state.officers,index,officer)
	}
}