import React from 'react'
import {Link} from 'wouter';
import SearchBar from '../../components/SearchBar/SearchBar'


function Home(){

  const POPULAR_GIFS = ['Thor', 'Avengers', 'The beatles', 'Superman', 'Harry Potter']


return (
    <div>
      <SearchBar />
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