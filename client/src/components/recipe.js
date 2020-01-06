import React from 'react'
import { useParams } from 'react-router'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

function Recipe(props) {
	const { id } = useParams()
	const RECIPE_QUERY = gql`
		query RecipeQuery {
			recipe(_id: "${ id }") {
				id
				name
				category
				instructions
				imageUrl
				ingredients
			}
		}
	`

	const { loading, error, data } = useQuery(RECIPE_QUERY)

	if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div>
			{data.recipe.name &&
				<p>Recipe: {data.recipe.name}</p>
			}
			{data.recipe.imgUrl && 
				<img src={data.recipe.imageUrl} alt="Recipe"/>
			}
			{!data.recipe.imageUrl && 
				<div>No Image Available</div>
			}
			{data.recipe.category &&
				<p>{data.recipe.category}</p>
			}
    </div>
  );
}

export default Recipe
