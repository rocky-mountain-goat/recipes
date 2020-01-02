import React, { Component } from 'react'
import gql from 'graphql-tag'
import  { Query } from 'react-apollo'
import Tile from './recipeTile'

const RECIPES_QUERY = gql`
	query RecipesQuery {
		recipes {
			id
			name
			category
			imageUrl
		}
	}
`

export class TileList extends Component {
	render() {
		return (
			<div>
				<Query query={RECIPES_QUERY}>
					{
						({ loading, error, data }) => {
							if(loading) return <h4>Loading...</h4>
							if(error) console.log(error)
							return data.recipes.map((recipe) => <Tile key={recipe.id} recipe={recipe} />)
						}
					}
				</ Query>
			</div>
		)
	}
}

export default TileList
