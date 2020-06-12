import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/shared/Footer";

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
    console.log(this.state.currentUser);
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Main
          handleRegisterSubmit={this.handleRegisterSubmit}
          currentUser={this.state.currentUser}
          handleLoginSubmit={this.handleLoginSubmit}
        />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
