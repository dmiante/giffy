import {useContext} from 'react'
import GifsContext from '../context/GifsContext'

function useGlobalGifs(){
    const {gifs} = useContext(GifsContext)
    return gifs
}

export default useGlobalGifs