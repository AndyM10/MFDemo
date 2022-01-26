import React from 'react';
import ReactDOM from 'react-dom';
import './fedModules.decl.d';

import './index.scss';

const NavBar = React.lazy(
  () => import('nav/NavBar')
)
const App = () => (
  <div className=''>
    <React.Suspense fallback='loading...'>
      <NavBar/>
    </React.Suspense>
    <div>Name: host</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
