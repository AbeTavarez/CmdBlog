import React, { Component } from "react";

export default class CreateComment extends Component {
  state = {
    comment: {
      content: "",
      user: "",
      article: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      ...this.state.comment,
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventdefault();
    const { postComment } = this.props;
  };
  render() {
    const { content, user, article } = this.state.article;
    return (
      <form>
        <input
          className="comment-input"
          placeholder="write commment here..."
          value={comment.content}
          autoFocus
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
