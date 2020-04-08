import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import NewIngredient from '../component/NewIngredient';

class NewRecipe extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: "",
            name: "",
            calories: 0,
            ingredients: [],
            error: null
        }
        this.deleteIngredient = this.deleteIngredient.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleIngredient = this.handleIngredient.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isEdit = false;
    }

    componentDidMount(){
        if(this.props.location.state !== undefined){
            this.isEdit = true;
            this.setState({
                ...this.props.location.state
            })
        }
    }

    //Function to handle the changes in the form and update the state
    handleChange(event){
        this.setState({ 
            [event.target.name]: event.target.value,
            error: null 
        });
    }

    //This function catch the data of news ingredients of the Ingredient component 
    //and update the state to add news ingredients
    handleIngredient(ing, cant, id){
        let newIngredient = {
            id: id,
            ingredient: ing,
            quantiry: cant
        }
        this.setState({
            ingredients: [...this.state.ingredients, newIngredient]
        });
    }

    //Function to add a new recipe in the main
    handleSubmit(){
        if(this.state.name === "" || this.state.ingredients.length === 0){
            this.setState({
                error: true
            })
            alert('Debes debes de llenar todos los campos para poder agregar una nueva receta y tener al menos un igrediente');
        }else{
            if(this.isEdit === true){
                this.props.new(this.state, this.isEdit);
                alert('Se ha editado la receta correctamente');
                this.props.history.push('/');
            }else{
                this.setState(
                    {id: `id${this.state.name}-${String(this.state.calories)}-${Date.now()}`},
                    () => {
                        this.props.new(this.state, this.isEdit);
                        alert('Se ha agregado una nueva receta');
                        this.props.history.push('/');
                    }
                );
            } 
        }
    }

    //Funsion to delete an ingredient of the list
    deleteIngredient(id){
        this.setState({
            ingredients: this.state.ingredients.filter(ig => ig.id !== id)
        });
    }
    
    render(){
        return(
            <section>
                <h1>Agregar una nueva receta</h1>
                <form>
                    <label htmlFor="name">Nombre</label>
                    <input name="name" 
                    className={this.state.error ? `is-invalid form-control` : `form-control`}
                    onChange={this.handleChange} 
                    value={this.state.name}/>
                    <label htmlFor="calories">Calorias</label>
                    <input name='calories' value={this.state.calories}
                    className={this.state.error ? `is-invalid form-control` : `form-control`}
                    onChange={this.handleChange} type="number"/>
                    <h4>Ingredientes:</h4>
                </form>
                <ul className='list-group'>         
                {
                    this.state.ingredients.map((ingredient, index) => {
                        return(
                            <li 
                            key={ingredient.id || index}
                            className="list-group-item">
                                <span>{ingredient.ingredient}</span>
                                <span> - </span>
                                <span>{ingredient.quantity} </span>
                                <button type="button" 
                                className='btn btn-outline-danger'
                                onClick={() => {this.deleteIngredient(ingredient.id)}}>
                                    X
                                </button>
                            </li>
                        );
                    })
                }
                </ul>
                <br/>
                <button onClick={this.handleSubmit} className="btn btn-primary">Agregar receta</button>
                <NewIngredient add={this.handleIngredient} history={this.props.history}/>
            </section>
        )
    }
}

export default withRouter(NewRecipe);