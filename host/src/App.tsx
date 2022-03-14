import React from 'react';
import ReactDOM from 'react-dom';
import './fedModules.decl.d';
import NavBar from 'nav/NavBar'
import Collection from 'collection/Collection';
import './index.scss';
import useStore from 'host/store';


const App = () => {
  const { count, increment, clear } = useStore();

  return (
    <div className='container'>
      <NavBar/>
      <Collection/>
      <div className='flex w-screen flex-row'>
        <button className='tempbtn' onClick={increment}>{count}</button>
        <button className='tempbtn' onClick={clear}>Clear</button>
      </div>
    </div>


      
  ) 
};
ReactDOM.render(<App />, document.getElementById('app'));
