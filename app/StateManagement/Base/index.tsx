import axios from 'axios';

const BaseApi = axios.create({
  baseURL: 'https://reqres.in/api',
});

export default BaseApi;
