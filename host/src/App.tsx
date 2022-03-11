import React from 'react';
import ReactDOM from 'react-dom';
import './fedModules.decl.d';
import NavBar from 'nav/NavBar'
import Collection from 'collection/Collection';
import './index.scss';

const App = () => (
  <div className='container'>
      <NavBar/>
      <Collection/>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
