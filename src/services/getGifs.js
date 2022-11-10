const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const API_URL = process.env.REACT_APP_GIPHY_API_URL


const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse;
        if(Array.isArray(data)) {
            const gifsUrl = data.map(image => {
            const {images, title, id} = image
            const {url} = images.downsized_medium
            return { title, id, url}
        })
        return gifsUrl
        }
        return []
}

function getGifs({limit = 5, keyword = 'morty', page = 0, rating = 'g'}){
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`


 return  fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}

export default getGifs;




