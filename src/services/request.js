import axios from 'axios';

const request = axios.create({
  headers: {common: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }}
});

export default request;
