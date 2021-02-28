import axios from 'axios';

export const loginApiCall = payload => {
  return axios
    .post('http://localhost:5000/login', payload)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err.response;
    });
};
