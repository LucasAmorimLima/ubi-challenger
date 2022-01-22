import axios from 'axios'

const config = {
    baseURL: `http://localhost:3333`,
}

export default axios.create(config)