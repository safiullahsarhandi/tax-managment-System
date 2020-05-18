export default {
    getTaxes({ commit }, data) {
        axios.get('get-taxes', { params: { customer_id: data.id, status: data.status } }).then(res => {
            commit('setTaxes', res.data.taxes)
        });
    },
    async getParameters({ commit }) {
        return await axios.get('get-parameters').then(res => {
            commit('setParameters', res.data.parameters)
        });
    },
    async getTax({ commit }, tax_id) {
        return await axios.get('get-tax', { params: { tax_id: tax_id } }).then(res => {
            commit('setSingleTax', res.data)
            return res.data;
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

    editTax({ commit }, data) {

        return axios.post('update-tax', data.fd).then(res => {
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
            return res;
        });
    },
    editParameter({ commit }, data) {

        return axios.post('update-parameter', data.fd).then(res => {
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
            commit('setParameter',res.data.parameter)
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
        axios.post('status-update-tax', { id: data.id, status : data.status }).then(res => {
            if(res.data.status){
            data.notify({ title: 'Updated!...', text: res.data.msg, color: 'success', position: 'top-right' })

            }else{

            data.notify({ title: 'Oops!...', text: res.data.msg, color: 'danger', position: 'top-right', fixed : true})
            }
            commit('setSingleStatus', { id: data.id, status: res.data.tax.status });
            data.close();
        });
    },

    statusUpdateSPP({ commit }, data){
        return axios.post('status-update-spp',{id: data.id, tax_id:data.tax_id, type:data.type, actionBy:data.actionBy, status:data.status}).then(res=>{
            if(res.data.status == true){
                data.notify({title:'Updated!...',text:res.data.msg,color:'success',position:'top-right'});
            }else{
                data.notify({title:'Sorry!...',text:res.data.msg,color:'danger',position:'top-right', time: 5000});
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
                data.notify({title:'Sorry!...',text:res.data.msg,color:'danger',position:'top-right', time: 5000});
            }
            return res;
        });
    },

    addParameter({ commit }, data) {
        // alert('action called');
        return axios.post('add-parameter', data.fd).then(res => {
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
    async getLogs({commit},data){
        let gettingLogs = await axios.get('get-tax-logs',{params : {tax_id : data.tax_id} });
        commit('setLogs',gettingLogs.data.logs);
    },

    getRecallTaxes({ commit }, data) {
        axios.get('get-recall-taxes', { params: { customer_id: data.id, type: data.type } }).then(res => {
            commit('setRecallTaxes', res.data.taxes);
        });
    },

    clearRecallTaxes({ commit }, data) {
            commit('clearRecallTaxes', [])
    },
}
