import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/services/api/Price.ts'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pricing: {
      camp: {
        type: 'per-person',
        base: 0,
        tax: 0
      }
    }
  },
  mutations: {
    setPricing(state, data) {
      state.pricing = data
    }
  },
  actions: {
    updatePricing({ commit }) {
      api.getPricing()
        .then(data => commit('setPricing', data))
    }
  },
  modules: {},
});
