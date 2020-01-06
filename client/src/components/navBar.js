import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

function NavBar(props) {
	const { id } = useParams()
  return (
		<nav className="navbar is-info" role="navigation" aria-label="main navigation">
			<div className="container">
				<div className="navbar-brand">
					<Link to='/'>
						Recipes
					</Link>
					{props.type === 'edit' &&
						<Link className="button" to={`/recipe/edit/${ id }`}>
							Edit Recipe
						</Link>
					}
					{props.type === 'add' &&
						<Link className="button" to={`/add`}>
							Add Recipe
						</Link>
					}
				</div>
			</div>
		</nav>
  )
}

export default NavBar
