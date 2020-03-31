import axios from 'axios'

export default {
  getPricing() {
    return axios.get('/prices')
      .then(payload => {
        return payload.data;
      })
  }
}
