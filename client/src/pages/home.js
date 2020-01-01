import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar'
import Tile from '../components/recipeTile'

function Home(props) {
	console.log('HOME', props)
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		if(props.recipes) {
			const recipes = props.recipes.map((recipe, index) => 
				<Tile key={index} recipe={recipe} />
			)
			// setRecipes('recipes', props.recipes)
		}
  });

  return (
    <div>
      <NavBar />
      <div className="container">
				{/* <TileRow />
        <TileRow /> */}
				{recipes && 
					recipes
				}
      </div>
    </div>
  );
}

export default Home;
