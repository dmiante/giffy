import React, { useState } from 'react';
import {useLocation} from 'wouter';

function SearchBar (){

    const [keyword, setKeyword] = useState("");
    const [_, pushLocation] = useLocation()

    function handleChange(e) {
        const newValue = e.target.value;
        setKeyword(newValue);
        //console.log(newValue);
      }

    function handleSubmit(e){
      e.preventDefault();
      //navegar a otra ruta
      pushLocation(`/gifs/${keyword}`)
      console.log(keyword);
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="🎁 Search Gif..."
            value={keyword}
            onChange={handleChange}/>
            <button>Search</button>
          </form>
        </div>
          )
}

export default SearchBar