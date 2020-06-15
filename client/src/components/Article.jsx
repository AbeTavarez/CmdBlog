import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Article extends Component {
  render() {
    const { currentArticle } = this.props;
    console.log("single-->", currentArticle);
    // console.log(article);
    return (
      <div>
        <h1>{currentArticle.title}</h1>
      </div>
    );
  }
}
