import React from 'react'
import NavBar from '../components/navBar'
import AddRecipe from '../components/addRecipe'

function AddRecipePage(props) {
  return (
    <div>
      <NavBar />
      <div className="container">
				<AddRecipe { ...props } />
      </div>
    </div>
  );
}

export default AddRecipePage
