import "./App.css";
import { DataStore } from "@aws-amplify/datastore";
import { Proverb } from "./models";

function App() {
  return (
    <div className="App">
      <button onClick={handleClick}>Save and load proverbs</button>
    </div>
  );
}

async function handleClick() {}

export default App;
