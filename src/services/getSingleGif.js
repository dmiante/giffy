const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const API_URL = 'https://api.giphy.com/v1'

const fromApiResponseToGifs = apiResponse => {
    const {data} = apiResponse
    const {images, title, id} = data
    const {url} = images.downsized_medium
    return { title, id, url}
}

export default function getSingleGif ({ id }){
    return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}
