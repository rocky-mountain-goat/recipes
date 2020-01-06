import React from 'react'
import NavBar from '../components/navBar'
import EditRecipe from '../components/editRecipe'

function EditRecipePage(props) {
  return (
    <div>
      <NavBar />
      <div className="container">
				<EditRecipe { ...props } />
      </div>
    </div>
  );
}

export default EditRecipePage
