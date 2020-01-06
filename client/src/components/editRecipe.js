import React, { useState, useEffect }  from 'react'
import gql from 'graphql-tag'
import { useParams, useHistory } from 'react-router'
import { useQuery, useMutation } from '@apollo/react-hooks'

const UPDATE_RECIPE_MUTATION = gql`
	mutation UpdateRecipe($id: String! $name: String!, $instructions: String!, $category: String!) {
		updateRecipe(id: $id, name: $name, instructions: $instructions, category: $category) {
			id
			name
			instructions
			category
		}
	}
`

const DELETE_RECIPE_MUTATION = gql`
	mutation DeleteRecipe($id: String!) {
		deleteRecipe(id: $id) {
			id
		}
	}
`

// mutation {
//   deleteRecipe(id: "5e0d0a4d01f25c43d596f6e3") {
//     id
//     name
//     category
//     instructions
//   }
// }

function EditRecipe(props) {
	const history = useHistory()
	const [updateRecipe] = useMutation(UPDATE_RECIPE_MUTATION)
	const [deleteRecipe] = useMutation(DELETE_RECIPE_MUTATION)
	const [recipe, setRecipe] = useState({name: '', category: '', imageUrl: '', instructions: '', ingredients: []})
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

	useEffect(() => {
		if (data && data.recipe) {
			setRecipe(data.recipe)
		}
	}, [data])

	if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

	function onFieldChange(e, name) {
		setRecipe({ ...recipe, [name]: e.currentTarget.value })
	}

	async function handleUpdateRecipe() {
		const result = await updateRecipe({ variables: { ...recipe }})
		if (!result.data.updateRecipe) {
			return
		}
		history.push(`/recipe/${ recipe.id }`)
	}

	async function handleDeleteRecipe() {
		try {
			const result = await deleteRecipe({ variables: { id: recipe.id }})
			if (!result.data.deleteRecipe) {
				return
			}
			window.location.href = '/'
		}
		catch(error) {
			console.error(error);
			window.location.href = '/'
		}

	}

  return (
    <div>
			<div className="columns is-mobile">
				<div className="column">
					<div className="field">
						<input
							className="input"
							type="text"
							name="name"
							placeholder="Enter Name"
							value={ recipe.name }
							onChange={(e) => onFieldChange(e, 'name')}
						/>
					</div>
					<div className="field">
						<div className="select">
							<select
								value={ recipe.category }
								name="category"
								onChange={(e) => onFieldChange(e, 'category')}
							>
								<option>Select Category</option>
								<option value="American">American</option>
								<option value="Italian">Italian</option>
								<option value="Mexican">Mexican</option>
								<option value="Fusion">Fusion</option>
								<option value="Asian">Asian</option>
							</select>
						</div>
					</div>
				</div>
				<div className="column">
					<textarea
						className="textarea"
						placeholder="Enter Instructions"
						value={ recipe.instructions }
						name="instructions"
						onChange={(e) => onFieldChange(e, 'instructions')}
					>
					</textarea>
				</div>
			</div>
			<button
				className="button"
				onClick={handleUpdateRecipe}
			>
				Update Recipe	
			</button>
			<button
				className="button"
				onClick={handleDeleteRecipe}
			>
				Delete Recipe	
			</button>
    </div>
  )
}

export default EditRecipe
