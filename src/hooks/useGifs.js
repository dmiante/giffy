import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs ({keyword} = {keyword: ''}){
    
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE)
    const {gifs, setGifs} = useContext(GifsContext);
    
    //recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastkeyword') || 'rock'

      useEffect(function () {
        setLoading(true)
        
        getGifs({ keyword: keywordToUse })
        .then(gifs => {
          setGifs(gifs)
          setLoading(false)
          //guardamos la keyword en el localStorage
          localStorage.setItem('lastkeyword', keyword)
        })
        }, [keyword, keywordToUse, setGifs])

      useEffect(function (){
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)
        getGifs({keyword: keywordToUse, page})
        .then(nextGifs => {
          setGifs(prevGifs => prevGifs.concat(nextGifs))
          setLoadingNextPage(false)
        })
      }, [page])


    return {loading, loadingNextPage, gifs, setPage}
}