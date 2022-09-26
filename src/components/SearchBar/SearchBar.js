import React, {useState} from 'react';
import {useLocation} from 'wouter'
import './SearchBar.css'


function SearchBar (){
    const [keyword, setKeyword] = useState("");
    const [path, pushLocation] = useLocation()

    function handleChange(e) {
        const newValue = e.target.value;
        setKeyword(newValue);
        //console.log(newValue);
      }

    function handleSubmit(e){
      e.preventDefault();
      //navegar a otra ruta
      pushLocation(`/search/${keyword}`)
      //setKeyword('');
      console.log(path);
      console.log(keyword);
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
              type="text" 
              placeholder="🎁 Search Gif..."
              value={keyword}
              onChange={handleChange}
          />
          <button>Search</button>
        </form>
    )
}

export default SearchBar