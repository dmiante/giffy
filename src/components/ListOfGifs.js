import React, {useEffect, useState} from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

function ListOfGifs ({ keyword}){

    const [gifs, setGifs] = useState([])

    useEffect(() => {
      getGifs({ keyword }).then(gifs => setGifs(gifs))
    }, [keyword])
  

    return gifs.map(multiGifs => 
          <Gif 
                key={multiGifs.id}
                id={multiGifs.id}
                title={multiGifs.title}
                url={multiGifs.url}
            />
      )
}

export default ListOfGifs