import React from 'react';
import {Link} from 'wouter'
import './Gif.css'

function Gif ({url, title, id}){
    return (
        <div className='Gif'>
            <Link to={`/${id}`} className='Gif-link'>
                <h4>{title}</h4>
                <img loading='lazy'src={url} alt={title}/>
            </Link>
        </div>
          )
}

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id
})