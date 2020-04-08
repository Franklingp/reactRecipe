import React from 'react';
import { useHistory } from 'react-router-dom';

const Recipe = (props) => {
    const {id, calories, name, ingredients} = props;
    const history = useHistory();

    //Method to edit the recipe
    const handleEdit = () => {
		history.push('/agregar', {id, calories, name, ingredients});
    };
    
    //Method to delete the recipe
    const handleDelete = () => {
        props.handleDelete(id);
    };
    

    return(
        <div className='card' style={{marginBottom: '24px'}}>
            <div className="card-body">
                <h4 className="card-title">Receta para hacer {name}</h4>
                <span className="card-text">Calorias: {calories}</span>
                <br />
                
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    Ingredientes:
                </li>
                {
                    ingredients.map((single, i) => {
                        return (
                            <li key={i} className="list-group-item">
                                {single.ingredient} : {single.quantity}
                            </li>							
                        )
                    })
                }
            </ul>
            <button className="btn btn-outline-primary"
            onClick={handleEdit}>Editar</button>
            <button className="btn btn-outline-primary"
            onClick={handleDelete}> Eliminar</button> 
        </div>
    )
}

export default Recipe;