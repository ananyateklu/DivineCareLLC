import Header from "./components/header.component"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Contactus from "./components/contact.component"
import Home from "./components/home.component"
import Services from "./components/services.component"
import Aboutus from "./components/about.component"
import Location from "./components/location.component"
import Footer from "./components/footer.component"

function App() {
  return (
    <div className="App">
      <Router>
        <Header className="Header"/>
        <Route path="/" exact component={Home}/>
        <Route path="/contactus" exact component={Contactus}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/aboutus" exact component={Aboutus}/>
        <Route path="/location" exact component={Location}/>
        <Footer className="Footer"/>

      </Router>
      
    </div>
  );
}

export default App;
