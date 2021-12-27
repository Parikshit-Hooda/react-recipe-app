import "./styles.css";
import { YOUR_APP_ID, YOUR_APP_KEY } from "./key";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  var url = `https://api.edamam.com/search?q=&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  async function getRecipes() {
    const result = await axios.get(url);
    console.log(result.data);
    return result;
  }

  const onSubmitFn = (e) => {
    e.preventDefault();
    setrecipes(e.result.hits);
    getRecipes();
  }

  return (
    <div className="app">
      <h3>Recipe hut</h3>
      <form className="app__searchForm" onSubmit = {onSubmitFn}>
        <input
          type="text"
          placeholder="enter ingredient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <button className = "app__submit" type="submit" value="Search recipe">
          Search recipe
        </button>
      </form>

<div>

    <h3>Recipes</h3>
    {recipes.map((recipe) => {
    return <RecipeTile recipeProp = {recipe} />
    }}

  </div>

    </div>
  );
}
