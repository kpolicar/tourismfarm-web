import axios from 'axios';
import Vue from 'vue';

interface PriceData {
  type: string;
  base: number;
  tax: number;
}

export default {
  getPricing() {
    return axios.get<PriceData>('/prices')
      .then((payload) => Vue._.mapKeys(payload.data, (data, apartment) => Vue._.camelCase(apartment)));
  },
};
