import React from 'react';
import ReactDOM from 'react-dom';
import './fedModules.decl.d';
import NavBar from 'nav/NavBar'
import Collection from 'collection/Collection';
import './index.scss';
import useStore from 'host/store';


const App = () => {
  const { count, increment } = useStore();

  return (
    <div className='container'>
      <NavBar/>
      <Collection/>
      <button className='tempbtn' onClick={increment}>{count}</button>
    </div>
  ) 
};
ReactDOM.render(<App />, document.getElementById('app'));
