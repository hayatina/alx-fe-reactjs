// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <Switch>
          <Route path="/" exact component={RecipeList} />
          <Route path="/recipe/:id" component={RecipeDetailsWrapper} />
        </Switch>
      </div>
    </Router>
  );
}

// Wrapper to extract recipeId from URL params and pass it to RecipeDetails
const RecipeDetailsWrapper = (props) => {
  const { match } = props;
  const { id } = match.params;
  return <RecipeDetails recipeId={id} />;
};

export default App;
