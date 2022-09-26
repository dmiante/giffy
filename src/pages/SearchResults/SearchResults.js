import React, {useCallback, useEffect, useRef} from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import Spinner from '../../components/Spinner/Spinner';

import {useGifs} from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen';
import debounce from 'just-debounce-it';

function SearchResults ({ params }){
  
  const {keyword} = params
  const {loading, gifs, setPage} = useGifs({ keyword })
  const visorRef = useRef()
  const {isNearScreen} = useNearScreen({
    externalRef: !loading && visorRef,
    once: false
  })
  
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 100
    ), [])
    
    useEffect(function () {
    console.log(isNearScreen);
    if(isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

    return <>
          {
          loading ?
          <Spinner />
          :
          <>
            <h3 className='App-title'>
              {decodeURI(keyword)}
            </h3>
            <ListOfGifs gifs={gifs}/>
            <div id='visor' ref={visorRef}></div>
          </>
        }
        </>
}

export default SearchResults