import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import BlogRoutes from './Components/BlogRoutes';
import Details from './Components/Details'

function App() {
  return (
    <div>
      <Details>
        <Header/>
        <Nav/>
        <BlogRoutes/>
      </Details>
    </div>
  );
}

export default App;
