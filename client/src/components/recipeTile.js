import React from 'react'
import { Link } from "react-router-dom"

function Tile(props) {
  return (
    <div className="column">
			<Link to={`/recipe/${props.recipe.id}`}>
				<article className="tile is-child notification is-info">
					{props.recipe.imgUrl && 
						<img src={props.recipe.imageUrl} alt="Recipe"/>
					}
					{!props.recipe.imageUrl && 
						<div>No Image Available</div>
					}
					<p>{props.recipe.name}</p>
					<p>{props.recipe.category}</p>
				</article>
			</Link>
    </div>
  );
}

export default Tile
