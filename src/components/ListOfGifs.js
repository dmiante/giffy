import React, {useEffect, useState} from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

function ListOfGifs ({ params }){

    const { keyword } = params
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifs({ keyword }).then(gifs => setGifs(gifs))
    }, [keyword])
  

    return <div>
        {
        gifs.map(({ id, title, url }) =>
        <Gif 
            key={id}
            title={title}
            url={url}
          />)
        }
    </div>
}

export default ListOfGifs