import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,comedy,horror,documentary} from './url'

function App() {
  return (
    <div className="App">
     
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={documentary} title='Documentary' isSmall/>

    </div>
  );
}

export default App;
