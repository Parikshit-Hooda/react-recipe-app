import "./styles.css";
import { YOUR_APP_ID, YOUR_APP_KEY } from "./key";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");

  var url = `https://api.edamam.com/search?q=&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  async function getRecipes() {
    const result = await axios.get(url);
    console.log(result.data);
    return result;
  }

  return (
    <div className="app">
      <h3>Recipe hut</h3>
      <form className="app__searchForm">
        <input
          type="text"
          placeholder="enter ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" value="Search recipe">
          Search recipe
        </button>
      </form>
    </div>
  );
}
