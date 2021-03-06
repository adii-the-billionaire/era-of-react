import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://desi-burger-e2c90-default-rtdb.firebaseio.com/'
});

export default instance;