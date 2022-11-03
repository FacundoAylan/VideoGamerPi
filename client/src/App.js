import "./App.css";
import { Route } from "react-router-dom";
import { Start } from "../src/component/loading/loading";
import { HomePage } from "../src/component/homePage/homePage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Start} />
      <Route exact path="/videogames" component={HomePage} />
    </div>
  );
}

export default App;
