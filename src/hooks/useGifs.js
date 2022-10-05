import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs ({ keyword, rating } = { keyword: null, rating: null }){
    
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);

    const [page, setPage] = useState(INITIAL_PAGE)
    const {gifs, setGifs} = useContext(GifsContext);
    
    //recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'rock'
    const ratingToUse = rating || localStorage.getItem('lastRating') || 'g'

      useEffect(function () {
        setLoading(true)
        
        getGifs({ keyword: keywordToUse, rating: ratingToUse })
        .then(gifs => {
          setGifs(gifs)
          setLoading(false)
          //guardamos la keyword en el localStorage
          localStorage.setItem('lastKeyword', keyword)
          localStorage.setItem('lastRating', rating)
        })
        }, [keyword, setGifs, rating])

      useEffect(function (){
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)
        getGifs({keyword: keywordToUse, page, rating: ratingToUse})
        .then(nextGifs => {
          setGifs(prevGifs => prevGifs.concat(nextGifs))
          setLoadingNextPage(false)
        })
      }, [keywordToUse, page, setGifs, ratingToUse])


    return {loading, loadingNextPage, gifs, page, setPage, rating}
}