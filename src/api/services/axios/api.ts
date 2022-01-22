import axios from 'axios'

const config = {
    baseURL: `https://api.unsplash.com/`,
}

export default axios.create(config)