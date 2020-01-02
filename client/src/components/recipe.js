import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import gql from 'graphql-tag'
import  { Query } from 'react-apollo'

function Recipe(props) {
	console.log('RECIPE PROPS', props)
	const { id } = useParams()
	console.log('RECIPE ID', id)
	const RECIPE_QUERY = gql`
		query RecipeQuery {
		recipe(_id: "${id}") {
			name
			category
		}
  }
	`
  return (
    <div>
			<Query query={RECIPE_QUERY}>
					{
						({ loading, error, data }) => {
							console.log('DATA', data)
							if(loading) return <h4>Loading...</h4>
							if(error) console.log(error)
							return (
								<div>
									Recipe: {data.recipe.name}
									{data.recipe.imgUrl && 
										<img src={data.recipe.imageUrl} alt="Recipe"/>
									}
									{!data.recipe.imageUrl && 
										<div>No Image Available</div>
									}
									<p>{data.recipe.name}</p>
									<p>{data.recipe.category}</p>
								</div>
							)
						}
					}
				</ Query>
    </div>
  );
}

export default Recipe
