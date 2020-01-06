import React, { useState }  from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router'
import { CREATE_RECIPE_MUTATION, RECIPES_QUERY } from '../queries/queries'

function AddRecipe(props) {
	const [addRecipe] = useMutation(CREATE_RECIPE_MUTATION)
	const history = useHistory()
	const initialRecipe = {
		name: '',
		category: null,
		imageUrl: null,
		instructions: '',
		ingredients: [
			{ name: '', quantity: 0, measure: null },
			{ name: '', quantity: 0, measure: null },
			{ name: '', quantity: 0, measure: null },
			{ name: '', quantity: 0, measure: null },
			{ name: '', quantity: 0, measure: null }
		]
	}
	const [recipe, setRecipe] = useState(initialRecipe)

	function onFieldChange(e, name) {
		setRecipe({ ...recipe, [name]: e.currentTarget.value })
	}

	async function handleAddRecipe() {
		const result = await addRecipe({ 
			variables: { ...recipe },
			refetchQueries: [{ query: RECIPES_QUERY }]
		})

		if (!result.data.createRecipe) {
			return
		}
		
		history.push(`/recipe/${ result.data.createRecipe.id }`)
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
							// value={ recipe.name }
							onChange={(e) => onFieldChange(e, 'name')}
						/>
					</div>
					<div className="field">
						<div className="select">
							<select
								// value={ recipe.category }
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
				onClick={handleAddRecipe}
			>
				Add Recipe	
			</button>
    </div>
  )
}

export default AddRecipe
