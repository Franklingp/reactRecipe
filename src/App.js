import React, {Component} from 'react';
import './assets/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; //Link

//Components || pages
import RecipeList from './pages/RecipeList';
import NewRecipe from './pages/NewRecipe';
import NotFound from './pages/NotFound';
import Navbar from './component/Navbar';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      recipes: [
        {
          id: 1,
          name: 'Pizza',
          ingredients:[
              {
                id: 1,
                ingredient: 'tomate',
                quantity: 5
              },
              {
                id: 2,
                ingredient: 'queso',
                quantity: 8
              },
              {
                id: 3,
                ingredient: 'masa',
                quantity: 2
              }
          ],
          calories: 300
        }
      ]
    };
    
    this.newRecipe = this.newRecipe.bind(this);
  }
  

  //This function is for catch a new recipe and update the list in the state
  newRecipe(object, isEdit){
    if(isEdit){
      let newRecipes = this.state.recipes.filter(recipe => recipe.id === object.id ? false : true);
      this.setState({
        recipes: [...newRecipes, object]
      });
    }else{
      this.setState({
        recipes: [...this.state.recipes, object]
      });
    }
  }

  //Method to delete a recipe
  //This is not the best way to do this.
  deleteRecipe = (id) => {
    const newList = this.state.recipes.filter(recipe => recipe.id !== id);
    this.setState({
      recipes: newList
    });
  }

  render(){
    return(
      <section style={{textAlign: 'center', width: '50%'}} className={'mx-auto'}>
        <Router>
          <Navbar />
          <Switch history={this.history}>
            <Redirect exact from="/" to="/receta" />
            <Route path="/receta" render={ () => <RecipeList recipes={this.state.recipes} 
            handleDelete={this.deleteRecipe}/>}/>
            <Route path="/agregar" render={() => <NewRecipe new={this.newRecipe}/>}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </section>
    ) 
  };
}

export default App;
