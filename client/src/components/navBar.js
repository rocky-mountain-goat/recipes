import React from 'react';

function NavBar() {
  return (
		<nav className="navbar is-info" role="navigation" aria-label="main navigation">
			<div className="container">
				<div className="navbar-brand">
					<p>Recipes</p>
					<button className="button">Add Recipe</button>
				</div>
			</div>
		</nav>
  );
}

export default NavBar;
