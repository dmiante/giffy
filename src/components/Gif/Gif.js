import React from 'react';

function Gif ({url, title}){
    return (
        <div>
            <img src={url} alt={title}/>
        </div>
          )
}

export default Gif