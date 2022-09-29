import React, {useCallback, useEffect, useRef} from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import Spinner from '../../components/Spinner/Spinner';

import {useGifs} from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen';
import debounce from 'just-debounce-it';
import useTitle from '../../hooks/useSEO'
import { Helmet } from 'react-helmet';

function SearchResults ({ params }){
  
  const {keyword} = params
  const {loading, gifs, setPage} = useGifs({ keyword })
  const visorRef = useRef()
  const {isNearScreen} = useNearScreen({
    externalRef: !loading && visorRef,
    once: false
  })

  const title = gifs ? `${gifs.length} results of ${keyword}` : ''
  useTitle(title)
  
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
            <Helmet>
              <title>{title}</title>
              <meta name='description' content={title}></meta>
            </Helmet>
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