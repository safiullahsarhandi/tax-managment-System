/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const actions = {

    // ////////////////////////////////////////////
    // SIDEBAR & UI UX
    // ////////////////////////////////////////////

    updateSidebarWidth({ commit }, width) {
        commit('UPDATE_SIDEBAR_WIDTH', width);
    },
    updateI18nLocale({ commit }, locale) {
        commit('UPDATE_I18N_LOCALE', locale);
    },
    toggleContentOverlay({ commit }) {
        commit('TOGGLE_CONTENT_OVERLAY');
    },
    updateTheme({ commit }, val) {
        commit('UPDATE_THEME', val);
    },
    updateUserRole({ commit }, val) {
        commit('UPDATE_USER_ROLE', val);
    },
    updateWindowWidth({ commit }, width) {
        commit('UPDATE_WINDOW_WIDTH', width);
    },


    // ////////////////////////////////////////////
    // COMPONENT
    // ////////////////////////////////////////////

    // VxAutoSuggest
    updateStarredPage({ commit }, payload) {
        commit('UPDATE_STARRED_PAGE', payload)
    },

    //  The Navbar
    arrangeStarredPagesLimited({ commit }, list) {
        commit('ARRANGE_STARRED_PAGES_LIMITED', list)
    },
    arrangeStarredPagesMore({ commit }, list) {
        commit('ARRANGE_STARRED_PAGES_MORE', list)
    },
    async getAverageRate({ commit }) {
        await axios.get('get-average-rate').then((res) => {
            commit('setAverageRate', res.data)
            return res;
        })
    },
    async getLoginUser({ commit }) {
        let res = await axios.get('login-user', {
            params: {
                user: localStorage.getItem('admin')
            }
        });
        commit('setLoginUser', res.data);

    },
    getComments({ commit }, data) {
        axios.post(data.path, {  type: data.type, object_id: data.object_id }).then(res => {

            commit('setComments',res.data.comments);
        })
    },
    saveComment({ commit }, data) {    
        axios.post('send-comment', {
            comment: data.comment,
            type: data.type,
            object_id: data.object_id,
            senderType: data.userType,
            sender: data.loginUser
        }).then(res => {
            // commit('setComments');
        })
    },
    async getFaqs({commit}){
        let getFaqs = await axios.post('get-faqs');
        commit('setFaqs',getFaqs.data);
    },
    updateFaqs({commit},data){

        return axios.post('update-faqs',data.fd).then(res=>{
            commit('setFaqs',res.data.faqs);
            if(res.data.status){
                data.notify({
                    position : 'right-top',
                    text : 'Updated Successfully',
                    color : 'success',
                });
            }else{
                data.notify({
                    position : 'right-top',
                    text : 'There is issue while updating Faqs',
                    color : 'danger',
                });
            }
            return res;
        });

    }
}

export default actions
