import React, { useEffect, useState } from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import getGifs from '../../services/getGifs';
import SearchBar from '../../components/SearchBar/SearchBar'

function SearchResults ({ params }){
  
  const {keyword} = params;
  const [gifs, setGifs] = useState([]);

    useEffect(() => {
      getGifs({ keyword })
      .then(gifs => 
        setGifs(gifs))
      }, [keyword])

    return <>
          <SearchBar />
          <ListOfGifs gifs={gifs}/>
        </>
}

export default SearchResults