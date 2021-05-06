import giphyRepository from './giphy.repository.js'

function search(searchQuery){
    return giphyRepository.makeGiphyRequest(searchQuery)
}

export default {
    search
}
