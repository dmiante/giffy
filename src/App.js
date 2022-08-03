import React  from 'react';
import {Link, Route} from 'wouter';
import './App.css';
import Home from './pages/Home/Home'
import SearchBar from './pages/SearchResults/SearchResults';
import Detail from './pages/Detail/Detail'


function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <h1>Giffy</h1>
        </Link>
        <Route
          component={Home}
          path='/'
        />
        <Route
          component={SearchBar} 
          path="/search/:keyword" 
        />
        <Route
          component={Detail}
          path='gif/:id'
        />
      </section>
    </div>
  );
}

export default App;