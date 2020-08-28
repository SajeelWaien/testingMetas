import React from "react";
import ReactDOM from "react-dom";
import CustomComponent from './custom-component'
import CustomComponent1 from './custom-component1'
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'



function App() {
  return (
    <>
           
       <Router>
      <Switch>
        <Link to='/comp' >Comp1</Link>
        <Link to='/comp1' >Comp2</Link>
        <Route path='/' exact render={props => <div > Root</div>} />
        <Route path='/comp' render={props => <CustomComponent label="Component 1" {...props} />} />
        <Route path='/comp1' render={props => <CustomComponent1 label="Component 2" {...props} />} /> 
      </Switch>
      </Router>

    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
