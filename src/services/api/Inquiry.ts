import axios from 'axios'

export default {
  postInquiry(payload: object) {
    return axios.post('/inquiries', payload)
      .then(payload => {
        return payload.data;
      })
  }
}
