import React from 'react';

function Tile(props) {
  return (
    <div className="column">
			<article className="tile is-child notification is-info">
				{props.recipe.imgUrl && 
					<img src={props.recipe.imgUrl} alt="Recipe"/>
				}
				{!props.recipe.imgUrl && 
					<div>No Image Available</div>
				}
				<p>{props.recipe.name}</p>
				<p>{props.recipe.category}</p>
			</article>
    </div>
  );
}

export default Tile;
