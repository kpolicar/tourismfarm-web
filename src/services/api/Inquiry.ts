import axios from 'axios'

export default {
  postInquiry(payload: object) {
    return axios.post('/inquiry', payload)
      .then(payload => {
        return payload.data;
      })
  }
}
