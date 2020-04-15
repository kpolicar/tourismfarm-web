import Vue from 'vue';
import Vuex from 'vuex';
import PricesApi from '@/services/api/Price.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pricing: {
      camping: {
        type: 'per-person',
        base: 0,
        tax: 0,
      },
      grandApartment: {
        type: 'per-night',
        base: 0,
        tax: 0,
      },
    },
  },
  mutations: {
    setPricing(state, data) {
      state.pricing = data;
    },
  },
  actions: {
    updatePricing({ commit }) {
      PricesApi.getPricing()
        .then((data) => commit('setPricing', data));
    },
  },
  modules: {},
});
