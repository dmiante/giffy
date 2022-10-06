import React from 'react'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs.js';
import {useGifs} from '../../hooks/useGifs'
import TrendingSearches from '../../components/TrendingSearches/TrendingSearch';
import {Helmet} from 'react-helmet' 


function Home(){

  const {gifs} = useGifs()


return (
  <>
    <Helmet>
      <title>Home | Giffy</title>
    </Helmet>
    <div className='App-wrapper'>
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
    </div>
  </>
)

}

export default Home