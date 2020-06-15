import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Article extends Component {
  render() {
    const { currentArticle } = this.props;
    console.log("single-->", currentArticle);
    // console.log(article);
    return (
      <div>
        <div>
          <h1>{currentArticle.title}</h1>
        </div>
        <div>
          <p>{currentArticle.topic}</p>
        </div>
        <div>
          <p>{currentArticle.description}</p>
        </div>
        <div>
          <p>Created: {currentArticle.created_at}</p>
          <p>Last update: {currentArticle.updated_at}</p>
          <p>Author: {currentArticle.user.username}</p>
        </div>
      </div>
    );
  }
}
