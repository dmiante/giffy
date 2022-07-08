import React  from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import {Link, Route} from 'wouter'


function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <Link to="/gif/thor">THOR</Link>
        <Link to="/gif/superman">SUPERMAN</Link>
        <Link to="/gif/pokemon">POKEMON</Link>
        <Route
        component={ListOfGifs} 
        path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;