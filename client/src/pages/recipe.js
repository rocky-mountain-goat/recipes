import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar'
import Recipe from '../components/recipe'

function RecipePage(props) {
	console.log('Recipe Page', props)
  return (
    <div>
      <NavBar />
      <div className="container">
				<Recipe { ...props } />
      </div>
    </div>
  );
}

export default RecipePage;
