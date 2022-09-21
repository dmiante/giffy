import React from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import Spinner from '../../components/Spinner/Spinner';
import {useGifs} from '../../hooks/useGifs'

function SearchResults ({ params }){
  
  const {keyword} = params
  const {loading, gifs, setPage} = useGifs({keyword})

  const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return <>
          {loading ?
          <Spinner />
          :
          <>
            <h3>{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs}/>
          </>
        }
          <br />
          <button onClick={handleNextPage}>Go to Next Page</button>
        </>
}

export default SearchResults