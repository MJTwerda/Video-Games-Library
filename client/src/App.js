import React from "react";
import './App.css';

import { Route } from "react-router-dom";
import Videogames from "./Containers/Videogames/Videogames.js";
import NavBar from "./Components/NavBar/NavBar.js";
import DetailGame from './Containers/DetailGame/DetailGame.js';
import CreateGame from './Components/CreateGame/CreateGame.js';
import Home from './Components/Home/Home.js';

function App() {

  return (
    <React.Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/:algo' component={NavBar} />
      <Route exact path='/creategame' component={CreateGame} />
      <Route path='/videogames' component={Videogames} />
      <Route exact path='/videogame/:id' 
            render={({match}) => <DetailGame idGame={match.params.id} />} 
            />
    </React.Fragment>
  );
}

export default App;
