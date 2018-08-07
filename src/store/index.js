import Vue from 'vue'
import Vuex from 'vuex'
import api from '../config/api'
Vue.use(Vuex)
const state = {
    test: 'hone',
    testMutation: {}
}
const mutations = {
    TESTMUTATION(state, data) {
        state.testMutation = data;
    }
}
const actions =  {
    async searchMoive({commit, state}, params) {
        const {subjects} = await api.search(params);
        return subjects;
    }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store