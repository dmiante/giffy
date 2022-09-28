import React from 'react';
import useSingleGif from '../../hooks/useSingleGif';
import Gif from '../../components/Gif/Gif'
import Spinner from '../../components/Spinner/Spinner';
import { Redirect } from 'wouter';
import useSEO from '../../hooks/useSEO';

function Detail ({params}){
    const {gif, isLoading, isError} = useSingleGif({id: params.id})
    const title = gif ? gif.title : ''
    useSEO({title, description: `Detail of ${title}`})
    
    if(isLoading) return <Spinner />
    if(isError) return <Redirect to='/404'/>
    if (!gif) return null


    return <>
        <h3 className='App-title'>{gif.title}</h3>
        <Gif {...gif}/>
    </>
}

export default Detail