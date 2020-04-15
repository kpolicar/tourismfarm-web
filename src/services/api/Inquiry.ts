import axios from 'axios';

export interface Inquiry {
  id: number;
  name: string;
  email: string;
  message: string;
  from: string;
  to: string;
  adults: number;
  children: number;
  price: number;
  updated_at: string;
  created_at: string;
}

export default {
  postInquiry(payload: object) {
    return axios.post('/inquiries', payload)
      .then((payload) => payload.data);
  },

  resendVerification(recordId: number) {
    return axios.get(`/inquiries/verify/resend/${recordId}`);
  },
};
