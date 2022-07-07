import React, { useEffect, useState } from 'react';
import './App.css';
import getGifs from './services/getGifs';
import Gif from './components/Gif' 



function App() {

  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({keyword: 'thor'}).then(gifs => setGifs(gifs))
  }, [])


  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(multiGifs => 
            <Gif 
            key={multiGifs.id}
            id={multiGifs.id}
            title={multiGifs.title}
            url={multiGifs.url}/>
        )}
      </section>
    </div>
  );
}

export default App;