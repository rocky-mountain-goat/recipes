import React from 'react';
import NavBar from '../components/navBar'
import Recipe from '../components/recipe'

function RecipePage(props) {
  return (
    <div>
      <NavBar type="edit" />
      <div className="container">
				<Recipe { ...props } />
      </div>
    </div>
  );
}

export default RecipePage
