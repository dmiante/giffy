import React from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import Spinner from '../../components/Spinner/Spinner';
import {useGifs} from '../../hooks/useGifs'

function SearchResults ({ params }){
  
  const {keyword} = params;
  const {loading, gifs} = useGifs({keyword})

    return <>
          {loading ?
          <Spinner />
          :
          <>
            <h3>{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs}/>
          </>
          }
        </>
}

export default SearchResults