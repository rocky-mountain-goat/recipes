import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Tile from './recipeTile'
import { Link } from 'react-router-dom'
import { RECIPES_QUERY } from '../queries/queries'

function TileList(props) {
	const { loading, error, data } = useQuery(RECIPES_QUERY)

	if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

	return (
		<div>
			{data.recipes.length === 0 &&
				<p>No recipes have been added. Please <Link to="/add">add a recipe</Link> to get started.</p>
			}
			{
				data.recipes.map(recipe => <Tile { ...props } key={recipe.id} recipe={recipe} />)
			}
		</div>
	)
}

export default TileList
