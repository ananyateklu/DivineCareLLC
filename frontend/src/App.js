import Header from "./components/header.component"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      <Header className="Header"/>
      </Router>
      
    </div>
  );
}

export default App;
