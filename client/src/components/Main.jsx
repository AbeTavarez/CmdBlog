import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import {
  getAllArticles,
  getSingleArticle,
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
    users: [],
    categories: [],
    formData: {
      title: "",
      topic: "",
      description: "",
    },
  };

  componentDidMount() {
    if (this.props.currentUser) {
      this.getArticles();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.getArticles();
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
    console.log(articles);
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
            path="/new/article"
            render={(props) => (
              <CreateArticle {...props} postArticle={this.postArticle} />
            )}
          />
          <Route
            exact
            path="/article/:id/edit"
            render={(props) => {
              const articleId = props.match.params.id;
              const currentArticle = this.state.formData;
              return (
                <EditArticle
                  {...props}
                  articleId={articleId}
                  articleData={this.state.formData}
                  putArticle={this.putArticle}
                  currentArticle={currentArticle}
                  handleChange={this.handleChange}
                />
              );
            }}
          />
          {/* <Route
            exact
            path="/article/:id"
            render={(props) => {
              const articleId = props.match.params.id;
              return (
                <Article
                  articleId={articleId}
                  currentUser={this.props.currentUser}
                />
              );
            }}
          /> */}
          <Redirect
            path="/"
            // {this.props.currentUser ? <Redirect to="/profile" /> : <Articles />}
          />
        </Switch>
      </div>
    );
  }
}
