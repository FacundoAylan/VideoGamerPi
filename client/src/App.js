import "./App.css";
import { Route } from "react-router-dom";
import { Start } from "../src/component/loading/loading";
import { HomePage } from "../src/component/homePage/homePage";
import { VideogamerID} from "../src/component/homePage/videogamerID/videogamerID"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Start} />
      <Route exact path="/videogames" component={HomePage} />
      <Route exact path="/videogames/:id" component={VideogamerID} />
    </div>
  );
}

export default App;
