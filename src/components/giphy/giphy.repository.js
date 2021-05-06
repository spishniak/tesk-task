import axios from 'axios';

const API_KEY = 'dZeBBfToBrL0yMY6U7KMQsZosu1BuUWl';

function makeGiphyRequest(searchQuery) {
    return axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchQuery}`)
}

export default {
    makeGiphyRequest,
}