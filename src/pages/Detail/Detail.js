import React from 'react';

function Detail ({params}){
    console.log(params.id)
    return <h2>Gif con id {params.id}</h2>
}

export default Detail