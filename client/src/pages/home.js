import React from 'react';
import NavBar from '../components/navBar'
import TileList from '../components/recipeTileList'

function Home(props) {
  return (
    <div>
      <NavBar type="add" />
      <div className="container">
				<TileList { ...props } />
      </div>
    </div>
  );
}

export default Home
