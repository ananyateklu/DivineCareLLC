import React, { useEffect } from 'react';
import Header from "./components/header.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contactus from "./components/contact.component";
import Home from "./components/home.component";
import Services from "./components/services.component";
import Aboutus from "./components/about.component";
import Location from "./components/location.component";
import Footer from "./components/footer.component";
import "./App.css"

import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <Router>
        <Header className="Header" />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Route
          render={({location}) => (
            <TransitionGroup>
              <CSSTransition key= {location.key} timeout={450} classNames="fade">
                <Switch location= {location}>
                  <Route path="/" exact component={Home} />
                  <Route path="/contactus" exact component={Contactus} />
                  <Route path="/services" exact component={Services} />
                  <Route path="/aboutus" exact component={Aboutus} />
                  <Route path="/location" exact component={Location} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />

        <Footer className="Footer" />
      </Router>
    </div>
  );
}

export default App;
