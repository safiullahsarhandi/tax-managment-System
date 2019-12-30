export default{
	getExchangeRates({commit}){
		axios.get('get-exchange-rates').then(res=>{
			commit('setExchangeRates',res.data.rates)
		});
	},
	
	updateExchangeRates({commit},fd){
		return axios.post('update-exchange-rates',fd).then(res=>{
			return res;
		});
	}		
}