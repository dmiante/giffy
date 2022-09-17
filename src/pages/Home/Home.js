import React from 'react'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import {useGifs} from '../../hooks/useGifs'
import TrendingSearches from '../../components/TrendingSearches/TrendingSearches';


function Home(){

  const {gifs} = useGifs()


return (
    <div className="App-home">
      <div className='App-lastSearch'>
        <h3 className='App-title'>
          Last Search
        </h3>
        <ListOfGifs gifs={gifs}/>
      </div>
      <div className='App-category'>
       <TrendingSearches />
      </div>
    </div>
)

}

export default Home