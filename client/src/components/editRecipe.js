import React, { useState, useEffect }  from 'react'
import { useParams, useHistory } from 'react-router'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { UPDATE_RECIPE_MUTATION, RECIPE_QUERY } from '../queries/queries'

function EditRecipe(props) {
	const history = useHistory()
	const [updateRecipe] = useMutation(UPDATE_RECIPE_MUTATION)
	const [recipe, setRecipe] = useState({name: '', category: '', imageUrl: '', instructions: '', ingredients: []})
	const { id } = useParams()
	const { loading, error, data } = useQuery(RECIPE_QUERY, {
		variables: { id }
	})

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
    </div>
  )
}

export default EditRecipe
