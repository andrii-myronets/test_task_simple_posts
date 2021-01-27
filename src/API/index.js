import Axios from 'axios';

export const BASE_URL = 'https://tzfrontend.herokuapp.com';

export const server = Axios.create({
  baseURL: BASE_URL
});