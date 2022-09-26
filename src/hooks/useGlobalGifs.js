import {useContext} from 'react'
import GifsContext from '../context/GifsContext'

function useGlobalGifs(){
    return useContext(GifsContext).gifs
}

export default useGlobalGifs