import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./assets/css/Bases.css"
import "./assets/css/Reset.css"

import Header from './components/Header';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register';
import Footer from "./components/Footer";
import PersonalInjectReg from "./components/PersonalInjectReg";
import GroupInjectReg from "./components/GroupInjectReg";
import UserProfile from "./components/UserProfile";
import ResearchReg from "./components/ResearchReg";
import ResearchCertify from "./components/ResearchCertify";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/personalinjectreg' component={PersonalInjectReg} />
        <Route path='/groupinjectreg' component={GroupInjectReg} />
        <Route path='/userprofile' component={UserProfile} />
        <Route path='/researchreg' component={ResearchReg} />
        <Route path='/researchcertify' component={ResearchCertify} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
