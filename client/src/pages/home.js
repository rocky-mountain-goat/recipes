import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar'
import TileList from '../components/recipeTileList'

function Home(props) {
	console.log('HOME', props)

  return (
    <div>
      <NavBar />
      <div className="container">
				<TileList />
      </div>
    </div>
  );
}

export default Home;
