import React from 'react'
import {Link} from 'wouter';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import {useGifs} from '../../hooks/useGifs'

  const POPULAR_GIFS = ['Thor', 'Avengers', 'The beatles', 'Superman', 'Harry Potter']

function Home(){

  const {gifs} = useGifs()


return (
    <div>
      <h3>Last search:</h3>
       <ListOfGifs gifs={gifs}/>
      <h3>Trending Gifs</h3>
      <ul>
        {POPULAR_GIFS.map(popularGifs => (
          <li key={popularGifs}>
            <Link to={`/search/${popularGifs}`}>Gifs de {popularGifs}</Link>
        </li>
        ))}
      </ul>
    </div>
)

}

export default Home