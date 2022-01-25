import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import NavBar from './NavBar';

const App = () => (
  <div className='flex'>
    <NavBar/>
    <div>Name: nav</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
