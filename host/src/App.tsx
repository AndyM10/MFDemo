import React from 'react';
import ReactDOM from 'react-dom';
import './fedModules.decl.d';
import NavBar from 'nav/NavBar';

import './index.scss';

const App = () => (
  <div className=''>
    <NavBar/>
    <div>Name: host</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
