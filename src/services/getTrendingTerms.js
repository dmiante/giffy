const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const API_URL = 'https://api.giphy.com/v1'

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse;
    return data;
}

function getTrendingTerms(){
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`


 return  fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}

export default getTrendingTerms