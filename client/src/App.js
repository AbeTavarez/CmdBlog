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
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Main
          handleRegisterSubmit={this.handleRegisterSubmit}
          currentUser={this.state.currentUser}
          handleLoginSubmit={this.handleLoginSubmit}
        />
      </div>
    );
  }
}

export default App;
