import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

import {
  verifyUser,
  loginUser,
  registerUser,
  removeToken,
} from "./services/auth";
import { Redirect } from "react-router-dom";

class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    this.handleVerify();
  }

  //* AUTH
  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  };

  handleRegisterSubmit = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  };

  handleLogout = () => {
    this.setState({
      currentUser: null,
    });

    localStorage.clear();
    removeToken();
    this.renderRedirect();
  };

  renderRedirect = () => {
    return <Redirect to="/" />;
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Main
          currentUser={this.state.currentUser}
          handleRegisterSubmit={this.handleRegisterSubmit}
          handleLoginSubmit={this.handleLoginSubmit}
        />
      </div>
    );
  }
}

export default App;
