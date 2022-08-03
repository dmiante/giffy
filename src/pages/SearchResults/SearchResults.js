import React, { useEffect, useState } from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import getGifs from '../../services/getGifs';
import SearchBar from '../../components/SearchBar/SearchBar'
import Spinner from '../../components/Spinner/Spinner';

function SearchResults ({ params }){
  
  const {keyword} = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
      }, [keyword])

    return <>
          {loading ?
          <Spinner />
          :
          <div>
            <SearchBar />
            <ListOfGifs gifs={gifs}/>
          </div>
          }
        </>
}

export default SearchResults