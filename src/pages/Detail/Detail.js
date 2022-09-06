import React from 'react';
import Gif from '../../components/Gif/Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs'

function Detail ({params}){
    const gifs = useGlobalGifs()

    const gif = gifs.find(singleGif => singleGif.id === params.id)
    console.log(gif);
    return <Gif {...gif}/>
}

export default Detail