import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key:'33aa6be6a5cdca63ec7c671940c8bdcb',
        language:'es-ES'
    }

})

export default movieDB;