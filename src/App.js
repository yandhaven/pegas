import React from 'react';

import './App.css';
import Director from './components/Director/Director';
import { Route } from 'react-router-dom';
import Contab from './components/Contab/Contab';

function App() {
  return (

    <div>
      <Route path="/director" render={() => <Director />} />
      <Route path="/contab" render={() => <Contab />} />
    </div>

    // <div className="app-wrapper">

    //   <div className="app-wrapper-content">

    //   <Route path="/director" render={() => <UsersContainer  />} />

    //   </div>

    // </div>
  );
}

export default App;
