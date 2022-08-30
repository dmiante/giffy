import {useEffect, useState} from 'react'
import getGifs from '../services/getGifs';

export function useGifs ({keyword} = {keyword: ''}){
    
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);
    


      useEffect(() => {
        setLoading(true)
        //recuperamos la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastkeyword') || 'rock'
        
        getGifs({ keyword: keywordToUse })
        .then(gifs => {
          setGifs(gifs)
          setLoading(false)
          //guardamos la keyword en el localStorage
          localStorage.setItem('lastkeyword', keyword)
        })
        }, [keyword])

    return {loading, gifs}
}