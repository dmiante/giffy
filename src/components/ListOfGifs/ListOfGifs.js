import React from 'react';
import Gif from '../Gif/Gif';

function ListOfGifs ({gifs}){

    return <div>
        {
        gifs.map(({ id, title, url }) =>
        <Gif 
            id={id}
            key={id}
            title={title}
            url={url}
          />)
        }
    </div>
}

export default ListOfGifs