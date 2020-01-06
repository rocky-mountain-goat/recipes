import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Tile from './recipeTile'

const RECIPES_QUERY = gql`
	{
		recipes {
			id
			name
		}
	}
`

function TileList(props) {
	const { loading, error, data } = useQuery(RECIPES_QUERY)

	if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

	return (
		<div>
			{
				data.recipes.map(recipe => <Tile { ...props } key={recipe.id} recipe={recipe} />)
			}
		</div>
	)
}

export default TileList
