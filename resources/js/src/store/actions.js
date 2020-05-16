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

    },
    async getNotifications({commit}){
        let gettingNotifications =  await axios.get('get-notifications');
        let fetchedNotifications = gettingNotifications.data;
        commit('setNotifications',fetchedNotifications);
    },
    async getAllNotifications({commit},data){
        let gettingNotifications =  await axios.get('get-all-notifications?page='+data.page);
        let fetchedNotifications = gettingNotifications.data;
        commit('setAllNotifications',fetchedNotifications);
    },
    async markAsRead({commit},notification){
        let markAsRead =  await axios.post('mark-as-read',{id : notification.id});
        let markedAsRead = markAsRead.data;
        commit('setNotification',markedAsRead);
    },
    async sendTokenToServer({commit,state},data){
        data.closeLoading();
        let manager_id = state.AppActiveUser.manager_id;
        let sendToken = await axios.post('sendTokenToServer',{token: data.token, manager_id : manager_id})
        commit('setLoginUser', sendToken.data.admin);
    },
    async get_search_data({commit},data){
       let res = await axios.post('search-data', {query: data.query,page : data.page})/*.then(res=>{*/
                    var response = res.data.response;
                    let self = this;
                    let dataArray = [];
                    // commit('setSearchedData',[]);
                    _.forEach(response, function(value, keys) {
                        _.forEach(value, function(val, key) {
                            dataArray.push({index: key, result: val})
                        });                         
                    });
                    // var data = _.shuffle(dataArray);
                    commit('setSearchedData',dataArray);
                    commit('setSearchedPages',res.data.totalPages);
                    // self.$store.state.searchedData = data;
                    // console.log(self.$store.state.searchedData);
                    // console.log(data)
                    return data;    
                // });

    }
}

export default actions
