import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { getAllComments } from "../services/comments";
import Comments from "./Comments";
import CreateComment from "./CreateComment";

export default class Article extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.getComments();
  }

  getComments = async () => {
    let { id } = this.props.match.params;
    const comments = await getAllComments(id);
    this.setState({ comments });
    console.log(this.state);
  };
  render() {
    const { currentArticle } = this.props;
    const comments = this.state.comments;
    const articleComments = comments.map((comment, index) => (
      <Comments
        key={index}
        id={comment.id}
        content={comment.content}
        user={comment.user.username}
      />
    ));
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
        <div className="comments">
          <div>
            <div>{articleComments}</div>
          </div>
          {
            // <CreateComment
            //   // currentUser={this.props.currentUser}
            //   currentArticle={currentArticle}
            // />
          }
        </div>
      </div>
    );
  }
}
