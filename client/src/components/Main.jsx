import React, { Component } from "react";
import { Route } from "react-router-dom";

import {
  getAllArticles,
  getSingleArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../services/articles";
import Articles from "./Articles";
import Categories from "./Categories";
import Login from "./Login";
import Register from "./Register";
import Profile from "./pages/Profile";
import "./Main.css";
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

  postArticle = async (articleData) => {
    const newArticle = await createArticle(articleData);
    this.setState((prevState) => ({
      articles: [...prevState.articles, newArticle],
    }));
  };

  putArticle = async (id, articleData) => {
    const updatedArticle = await updateArticle(id, articleData);
    this.setState((prevState) => ({
      articles: prevState.articles.map((article) =>
        article.id === id ? updatedArticle : article
      ),
    }));
  };

  destroyArticle = async (id) => {
    await deleteArticle(id);
    this.setState((prevState) => ({
      articles: prevState.articles.filter((article) => article.id !== id),
    }));
  };

  render() {
    return (
      <div className="container">
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
          path="/categories"
          render={(props) => (
            <Categories
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
              currentUser={this.state.currentUser}
              destroyArticle={this.destroyArticle}
              putArticle={this.putArticle}
              postArticle={this.postArticle}
            />
          )}
        />
      </div>
    );
  }
}