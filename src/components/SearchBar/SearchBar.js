import React from 'react';
import {useLocation} from 'wouter'
import './SearchBar.css'
import useForm from './hook';

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchBar ({initialKeyword = '', initialRating = 'g'}){
  const {keyword, rating, times, updateKeyword, updateRating} = useForm({
    initialKeyword,
    initialRating
  })
  
  const [path, pushLocation] = useLocation()
    function handleChange(e) {
        updateKeyword(e.target.value)
      }

    function handleSubmit(e){
      e.preventDefault();
      //navegar a otra ruta
      if(keyword !== '') pushLocation(`/search/${keyword}/${rating}`)
      //setKeyword('');
      console.log(path);
      console.log(keyword);
    }

    function handleChangeRating(e){
      const handleRating = e.target.value
      updateRating(handleRating)
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
              type="text" 
              placeholder="🎁 Search Gif..."
              value={keyword}
              onChange={handleChange}
          />
          <div className='op_rating'>
            <select onChange={handleChangeRating} value={rating}>
              <option disabled>Rating type</option>
              {RATINGS.map(rating => 
              <option key={rating}>{rating}</option>)}
            </select>
          </div>
          <button>Search</button>
          <small>{times}</small>
        </form>
    )
}

export default SearchBar