import React, { Component } from "react";

import "./Register.css";
export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password } = this.state;
    const { handleRegisterSubmit, history } = this.props;
    return (
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegisterSubmit(this.state);
          history.push("/");
          this.setState({
            username: "",
            email: "",
            password: "",
          });
        }}
      >
        <h3>Register</h3>
        <label htmlFor="username">
          username:
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="email">
          email:
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="password">
          password:
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button className="submit-btn">Submit</button>
      </form>
    );
  }
}
