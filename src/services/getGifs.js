const apiKey = 'jCiRt6In49f5bYmTOI3kVRF9G9Dlg5YU'

function getGifs({keyword }){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`


 return  fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        const {data} = response;
        if(Array.isArray(data)) {
            const gifsUrl = data.map(image => {
            const {images, title, id} = image
            const {url} = images.downsized_medium
            return { title, id, url}
        })
        return gifsUrl
        }
    })
}

export default getGifs;




