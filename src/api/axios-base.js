import axios from 'axios'
import config from '../../config/config'

const axiosInstance = axios.create({
    baseURL: config.BASE_URL,
    timeout: 5000
})

export default axiosInstance