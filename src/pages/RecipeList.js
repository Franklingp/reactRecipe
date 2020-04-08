import React from 'react';
import { Link } from 'react-router-dom';
import Recipe from '../component/Recipe';

const RecipeList = (props) => {
	const { recipes, handleDelete } = props;
	return(
		<section>
		<h1>Lista de recetas</h1>
			{
				recipes.length === 0 ? <h4>No hay recetas guardadas</h4> : 
				recipes.map((recipe) => {
					return(
						<Recipe key={recipe.id}
						handleDelete={handleDelete}
						{...recipe}
						/>
					);
				})
			}
			<br/>
			<Link to="/agregar" className='btn btn-primary'>Agregar nueva receta</Link>
		</section>
	);
}

export default RecipeList;