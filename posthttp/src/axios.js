import axios from 'axios'
const instance = axios.create( {
    baseURL:"https://jsonplaceholder.typicode.com"
} )
//also you can also make instance for authorization 
instance.defaults.headers.common[ 'Authorization' ] = 'AUTH TOKEN FROM INSTANCE'
export default instance