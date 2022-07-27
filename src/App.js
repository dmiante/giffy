import React  from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import {Link, Route} from 'wouter';
import SearchBar from './components/SearchBar';


function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <SearchBar />
        <Link to="/gifs/thor">THOR</Link>
        <Link to="/gifs/superman">SUPERMAN</Link>
        <Link to="/gifs/pokemon">POKEMON</Link>
        <Route
        component={ListOfGifs} 
        path="/gifs/:keyword" />
      </section>
    </div>
  );
}

export default App;