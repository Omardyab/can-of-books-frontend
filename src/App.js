import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import LogIn from "./LoginButton.js";
import { withAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Books from "./myFavoriteBooks.js"
import Profile from "./Profile.js"

class App extends React.Component {

  render() {
    console.log('app', this.props)
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
              <Switch>
                <Route exact path="/">
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                  
                  { this.props.auth0.isAuthenticated? <Books /> : <LogIn />}
                  
                </Route>
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                <Route exact path="/profile">
                <Profile />
                </Route>               
                
              </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
