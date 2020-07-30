import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Login from './components/Login';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Register from './components/Register';
import CreateArtice from './components/CreateArtice';
import SingleArtice from './components/SingleArtice';
import Footer from './components/Footer';

const Main = withRouter(({ location }) => {
  console.log(location)
  return (
    <div>
      {
        !["/login", "/register"].includes(location.pathname) &&
        <Navbar />
      }

      <Route path="/" exact>
        <Welcome/>
      </Route>

      <Route path="/new-artice">
        <CreateArtice />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/single-article">
        <SingleArtice />
      </Route>

      {
        !["/login", "/register"].includes(location.pathname) &&
        <Footer />
      }
    </div>
  )
});

ReactDOM.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
