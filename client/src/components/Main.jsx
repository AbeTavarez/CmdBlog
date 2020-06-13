import React, { Component } from "react";
import { Route } from "react-router-dom";

import {
  getAllArticles,
  getSingleArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../services/articles";
import { getAllUsers, createUser, deleteUser } from "../services/users";

import Articles from "./Articles";
import Categories from "./Categories";
import Login from "./Login";
import Register from "./Register";
import Profile from "./pages/Profile";
import Article from "./Article";
import CreateArticle from "./CreateArticle";
import "./Main.css";
import EditArticle from "./pages/Edit";
export default class Main extends Component {
  state = {
    articles: [],
    users: [],
  };

  componentDidMount() {
    this.getArticles();
    this.getUsers();
  }

  //* Users
  getUsers = async () => {
    const users = await getAllUsers();
    this.setState({ users });
    console.log(users);
  };

  postUser = async (userData) => {
    const newUser = await createUser(userData);
    this.setState((prevState) => ({
      users: [...prevState.users, newUser],
    }));
  };

  destroyUser = async (id) => {
    await deleteUser(id);
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== id),
    }));
  };

  //* Articles
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
          path="/articles/:id"
          render={(props) => (
            <Article
              {...props}
              articles={this.state.articles}
              currentUser={this.state.currentUser}
              destroyArticle={this.destroyArticle}
              putArticle={this.putArticle}
              postArticle={this.postArticle}
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
              users={this.state.users}
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
              currentUser={this.props.currentUser}
              destroyArticle={this.destroyArticle}
              putArticle={this.putArticle}
              postArticle={this.postArticle}
            />
          )}
        />
        <Route
          exact
          path="/articles/create"
          render={(props) => (
            <CreateArticle {...props} postArticle={this.postArticle} />
          )}
        />
        <Route
          exact
          path="/articles/:id/edit"
          render={(props) => {
            const articleId = props.match.params.id;
            const article = this.state.articles.find(
              (article) => article.id === parseInt(articleId)
            );
            return (
              <EditArticle
                {...props}
                article={article}
                putArticle={this.putArticle}
              />
            );
          }}
        />
        <Route
          exact
          path="/articles/:id"
          render={(props) => {
            const articleId = props.match.params.id;
            return (
              <Article
                articleId={articleId}
                currentUser={this.props.currentUser}
              />
            );
          }}
        />
      </div>
    );
  }
}
