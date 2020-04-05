import axios from 'axios'

export default {
  postInquiry(payload) {
    return axios.post('/inquiry', payload)
      .then(payload => {
        return payload.data;
      })
  }
}
