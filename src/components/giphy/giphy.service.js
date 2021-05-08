import giphyRepository from './giphy.repository.js'

async function search(searchQuery){
    const giphyResponse = await giphyRepository.makeGiphyRequest(searchQuery);
    return giphyResponse.data.data.map(gif => gif.embed_url)
}

export default {
    search
}
