import React, { Component } from 'react';

class NewIngredient extends Component {

    constructor(props){
        super(props);
        this.state = {
            ingredient: "",
            quantity: "",
            error: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     

    //Fuction to handle the change of the inputs and update the state
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
            error: null
        });
    }

    //Function to send the data of ingredients to the recipes
    handleSubmit(event){
        event.preventDefault();
        if(this.state.ingredient === "" || this.state.quantity === ''){
            this.setState({
                error: true
            });
            alert("Tienes que llenar los campos para poder agregar un nuevo ingrediente");
        }
        else{
            const id = `id${this.state.ingredient}-${String(this.state.quantity)}-${Date.now()}`;
            this.props.add(this.state.ingredient, this.state.quantity, id);
            this.setState({ingredient: '', quantity: ''});
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <hr/>
                <label htmlFor="ingredient">Ingrediente </label>
                <input name="ingredient" 
                type="text"
                onChange={this.handleChange} 
                value={this.state.ingredient}
                className={this.state.error ? `is-invalid form-control` : `form-control`}
                />
                <label htmlFor="quantity">Cantidades </label>
                <input name="quantity"
                type='text'
                onChange={this.handleChange} 
                value={this.state.quantity}
                className={this.state.error ? `is-invalid form-control` : `form-control`}
                />
                <br/>
                <input type="submit"
                value="Agregar ingrediente"
                className="btn btn-primary"/>
            </form>
        )
    }
}

export default NewIngredient;