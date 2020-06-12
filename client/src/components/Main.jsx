import React, { Component } from "react";
import { Route } from "react-router-dom";

import Articles from "./Articles";
import Login from "./Login";
import Register from "./Register";
import { getAllArticles } from "../services/articles";
import Profile from "./pages/Profile";

export default class Main extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.getArticles();
  }
  //* Get all Articles
  getArticles = async () => {
    const articles = await getAllArticles();
    console.log(articles);
    this.setState({ articles });
  };

  render() {
    return (
      <div>
        <h1>MAIN Component</h1>

        <Route
          path="/user/login"
          render={(props) => (
            <Login
              {...props}
              handleLoginSubmit={this.props.handleLoginSubmit}
            />
          )}
        />

        <Route
          path="/user/register"
          render={(props) => (
            <Register
              {...props}
              handleRegisterSubmit={this.props.handleRegisterSubmit}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={(props) => (
            <Articles
              {...props}
              articles={this.state.articles}
              currentUser={this.props.currentUser}
            />
          )}
        />

        <Route
          exact
          path="/articles"
          render={(props) => (
            <Articles
              {...props}
              articles={this.state.articles}
              currentUser={this.props.currentUser}
            />
          )}
        />

        <Route
          exact
          path="/profile"
          render={(props) => (
            <Profile
              {...props}
              articles={this.state.articles}
              currentUser={(this, this.state.currentUser)}
            />
          )}
        />
      </div>
    );
  }
}
