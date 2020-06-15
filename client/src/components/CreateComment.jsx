import React, { Component } from "react";

export default class CreateComment extends Component {
  state = {
    comment: {
      content: "",
      user: props.user,
      article: props.article,
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
        <textarea
          rows={10}
          className="comment-input"
          placeholder="write commment here..."
          value={comment.content}
          required
          autoFocus
          onChange={this.handleChange}
        />
        <button type="submit">comment</button>
      </form>
    );
  }
}
