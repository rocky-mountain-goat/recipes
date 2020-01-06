import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useMutation } from '@apollo/react-hooks'
import { DELETE_RECIPE_MUTATION, RECIPES_QUERY } from '../queries/queries'

function Tile(props) {
	const [deleteRecipe] = useMutation(DELETE_RECIPE_MUTATION)
	const history = useHistory()

	function handleDeleteRecipe(event, recipeId) {
		event.preventDefault()
		try {
			const result = deleteRecipe({ 
				variables: { id: recipeId },
				refetchQueries: [{ query: RECIPES_QUERY }]
			})

			if (!result.data.deleteRecipe) {
				return
			}
			
			history.push('/')
		}
		catch(error) {
			console.error('DELETE ERROR', error);
		}
	}

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
					<button onClick={e => handleDeleteRecipe(e, props.recipe.id)}>
						Delete Recip
					</button>
				</article>
			</Link>
    </div>
  );
}

export default Tile
