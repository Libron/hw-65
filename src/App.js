import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router";
import Page from "./containers/Page/Page";
import Admin from "./containers/Admin/Admin";

class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Page} />
                <Route path="/pages/admin" exact component={Admin} />
                <Route path="/pages/:name" component={Page} />
                <Route render={() => <h1>Not found !</h1>} />
            </Switch>
        </Layout>
    );
  }
}

export default App;
