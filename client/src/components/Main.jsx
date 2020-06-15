import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import {
  getAllArticles,
  getUserArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../services/articles";

import { getAllCategories } from "../services/categories";
import { getAllUsers, createUser, deleteUser } from "../services/users";

import Articles from "./Articles";
import Categories from "./Categories";
import Login from "./Login";
import Register from "./Register";
import Profile from "./pages/Profile";
import Article from "./Article";
import CreateArticle from "./CreateArticle";
import "./Main.css";
import EditArticle from "./pages/EditArticle";
export default class Main extends Component {
  state = {
    articles: [],
    userArticles: [],
    users: [],
    categories: [],
  };

  componentDidMount() {
    if (this.props.currentUser) {
      this.getArticles();
      this.getCategories();
      this.getUsers();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.getArticles();
      this.getCategories();
      this.getUserArticles();
    }
    if (prevState.articles !== this.state.articles) {
      this.getUserArticles();
    }
  }

  //* Gets All Data
  componentDidMount() {
    this.getArticles();
    this.getUsers();
    this.getCategories();
  }

  //* Users
  getUsers = async () => {
    const users = await getAllUsers();
    this.setState({ users });
  };

  getUserArticles = async () => {
    const userArticles = await getUserArticles();
    this.setState({ userArticles });
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

  //* Categories
  getCategories = async () => {
    const categories = await getAllCategories();
    this.setState({ categories });
  };

  //* Articles
  getArticles = async () => {
    const articles = await getAllArticles();
    this.setState({ articles });
  };
  //* Creates Article and set it to state
  postArticle = async (articleData) => {
    const newArticle = await createArticle(articleData);
    this.setState((prevState) => ({
      articles: [...prevState.articles, newArticle],
    }));
  };

  putArticle = async (id, articleData) => {
    const updatedArticle = await updateArticle(id, articleData);
    console.log(id, updatedArticle.id);

    this.setState((prevState) => ({
      articles: prevState.articles.map((article) =>
        article.id == id ? updatedArticle : article
      ),
    }));
  };

  destroyArticle = async (id) => {
    await deleteArticle(id);
    this.setState((prevState) => ({
      userArticles: prevState.userArticles.filter(
        (article) => article.id != id
      ),
    }));
  };

  //* Handles change
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <div className="container">
        <Switch>
          <Route
            exact
            path="/user/login"
            render={(props) => (
              <Login
                {...props}
                handleLoginSubmit={this.props.handleLoginSubmit}
              />
            )}
          />

          <Route
            exact
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
            render={(props) => {
              const articleId = props.match.params.id;
              const currentArticle = this.state.articles.find(
                (article) => article.id === parseInt(articleId)
              );
              console.log(currentArticle);
              return (
                <Article
                  {...props}
                  currentUser={this.props.currentUser}
                  currentArticle={currentArticle}
                  destroyArticle={this.destroyArticle}
                  putArticle={this.putArticle}
                  postArticle={this.postArticle}
                />
              );
            }}
          />

          <Route
            exact
            path="/categories"
            render={(props) => (
              <Categories
                {...props}
                categories={this.state.categories}
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
                articles={this.state.userArticles}
                currentUser={this.props.currentUser}
                destroyArticle={this.destroyArticle}
                putArticle={this.putArticle}
                postArticle={this.postArticle}
              />
            )}
          />
          <Route
            exact
            path="/new/article"
            render={(props) => (
              <CreateArticle
                {...props}
                postArticle={this.postArticle}
                categories={this.state.categories}
              />
            )}
          />
          <Route
            exact
            path="/article/:id/edit"
            render={(props) => {
              const articleId = props.match.params.id;
              const currentArticle = this.state.articles.find(
                (article) => article.id === parseInt(articleId)
              );
              // this.setArticleInState(currentArticle);
              // const currentArticleData = this.state.formData;
              return (
                <EditArticle
                  {...props}
                  articleId={articleId}
                  articleData={this.state.formData}
                  putArticle={this.putArticle}
                  currentArticleData={currentArticle}
                  handleChange={this.handleChange}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
