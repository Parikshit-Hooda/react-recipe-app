import "./styles.css";
import { YOUR_APP_ID, YOUR_APP_KEY } from "./key";
import axios from "axios";

export default function App() {
  var url = `https://api.edamam.com/search?q=&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  async function getRecipes() {
    const result = await axios.get(url);
    console.log(result.data);
    return result;
  }

  return (
    <div className="app">
      <button onClick={getRecipes}>Get recipes</button>
    </div>
  );
}
