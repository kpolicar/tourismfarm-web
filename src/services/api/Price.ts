import axios from 'axios'

interface PriceData {
  type: string
  base: number
  tax: number
}

export default {
  getPricing() {
    return axios.get<PriceData>('/prices')
      .then(payload => {
        return _.mapKeys(payload.data, (data, apartment) => _.camelCase(apartment));
      })
  }
}
