import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
    const {data} = apiResponse;
        if(Array.isArray(data)) {
            const gifsUrl = data.map(image => {
            const {images, title, id} = image
            const {url} = images.downsized_medium
            return { title, id, url}
        })
        return gifsUrl
        }
}

function getGifs({limit = 25, keyword, page = 0}){
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=r&lang=en`


 return  fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}

export default getGifs;




