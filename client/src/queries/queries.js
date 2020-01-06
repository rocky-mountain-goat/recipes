import gql from 'graphql-tag'

export const RECIPES_QUERY = gql`
	{
		recipes {
			id
			name
		}
	}
`

export const RECIPE_QUERY = gql`
		query RecipeQuery($id: String!) {
			recipe(_id: $id) {
				id
				name
				category
				instructions
				imageUrl
				ingredients
			}
		}
	`

export const DELETE_RECIPE_MUTATION = gql`
	mutation DeleteRecipe($id: String!) {
		deleteRecipe(id: $id) {
			id
		}
	}
`

export const UPDATE_RECIPE_MUTATION = gql`
	mutation UpdateRecipe($id: String! $name: String!, $instructions: String!, $category: String!) {
		updateRecipe(id: $id, name: $name, instructions: $instructions, category: $category) {
			id
			name
			instructions
			category
		}
	}
`

export const CREATE_RECIPE_MUTATION = gql`
	mutation CreateRecipe($name: String!, $instructions: String!, $category: String!) {
		createRecipe(name: $name, instructions: $instructions, category: $category) {
			id
			name
			instructions
			category
		}
	}
`