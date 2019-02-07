import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router";
import Page from "./containers/Page";

class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact render={() => <h1>Hellow</h1>} />
                <Route path="/pages/:name" exact component={Page} />
                <Route render={() => <h1>Not FOund</h1>} />
            </Switch>
        </Layout>
    );
  }
}

export default App;
