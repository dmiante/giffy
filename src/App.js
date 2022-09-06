import React from "react";
import { Link, Route } from "wouter";
import "./App.css";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import Detail from "./pages/Detail/Detail";
import SearchBar from "./components/SearchBar/SearchBar";
import StaticContext from "./context/StaticContext";
import {GifsContextProvider} from '././context/GifsContext'

function App() {
  return (
    <StaticContext.Provider value={{nombre: 'Provider', online: true}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1>Giffy</h1>
          </Link>
          <SearchBar />
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
