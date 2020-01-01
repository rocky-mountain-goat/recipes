import React from 'react';
import Tile from '../components/recipeTile'

function TileRow() {
  return (
		<div className="columns is-mobile">
			<div className="column">
				<Tile />
			</div>
			<div className="column">
				<Tile />
			</div>
		</div>
  );
}

export default TileRow;
