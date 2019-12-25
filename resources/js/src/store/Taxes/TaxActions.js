export default {
    getTaxes({ commit }, customer_id) {
        axios.get('get-taxes', { params: { customer_id: customer_id } }).then(res => {
            commit('setTaxes', res.data.taxes)
        });
    },
    getTax({ commit }, tax_id) {
        axios.get('get-tax', { params: { tax_id: tax_id } }).then(res => {
            commit('setSingleTax', res.data)
        });
    },
    async getTaxTeam({ commit }, tax_id) {
        await axios.get('get-tax-team', { params: { tax_id: tax_id } }).then(res => {
            commit('setTaxTeam', res.data.team)
            return res;
        });
    },
    addTax({ commit }, data) {
        // alert('action called');
        return axios.post('add-tax', data.fd).then(res => {
            if (res.data.status == 'error') {
                data.notify({
                    color: 'danger',
                    text: res.data.msg,
                    title: 'Oops',
                    position: 'top-right'
                });

            } else {
                data.notify({
                    color: 'success',
                    text: res.data.msg,
                    position: 'top-right'
                });
            }
            setTimeout(function() {
                data.close();

            }, 500)

            return res;
        });
    },

    updateTax({ commit }, fd) {
        return axios.post('update-tax', fd).then(res => {
            commit('setEmployee', res.data.employee);
            return res;
        });
    },
    updateTeamMembers({ commit }, data) {
        return axios.post('update-tax-team', data.fd).then(res => {
            commit('setTaxTeam', res.data.team);
            setTimeout(function() {
                data.close();

            }, 500)
            return res;
        });
    },
    statusUpdate({ commit }, data) {
        axios.post('status-update-tax', { id: data.id }).then(res => {
            data.notify({ title: 'Updated!...', text: res.data.msg, color: 'success', position: 'top-right' })
            commit('setStatus', { id: data.id, status: res.data.tax.status });
            data.close();
        });
    },

    statusUpdateSPP({ commit }, data){
        return axios.post('status-update-spp',{id: data.id, tax_id:data.tax_id, type:data.type}).then(res=>{
            if(res.data.status == true){
                data.notify({title:'Updated!...',text:res.data.msg,color:'success',position:'top-right'});
            }else{
                data.notify({title:'Sorry!...',text:res.data.msg,color:'danger',position:'top-right'});
            }
            return res;
        });
    },

    statusChangeManagment({ commit }, data){
        return axios.post('status-change-management',
                    {
                        id: data.id,
                        by: data.by,
                        status: data.status,
                        tax_id:data.tax_id,
                        tax_type:data.tax_type

                    })
        .then(res=>{
            if(res.data.status == true){
                data.notify({title:'Updated!...',text:res.data.msg,color:'success',position:'top-right'});
            }else{
                data.notify({title:'Sorry!...',text:res.data.msg,color:'danger',position:'top-right'});
            }
            return res;
        });
    },
}
