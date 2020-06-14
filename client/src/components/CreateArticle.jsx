import React, { Component } from "react";

export default class CreateArticle extends Component {
  state = {
    article: {
      title: "",
      description: "",
      topic: "",
    },
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  //! create alert to tell user that article is create
  handleSubmit = (e) => {
    e.preventDefault();
    const { postArticle, history } = this.props;
    postArticle(this.state);
    history.push("/profile");
    console.log(this.state);
  };
  render() {
    const { title, topic, description, imagePath } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <hr />
        <h3>Create new Article</h3>
        <label htmlFor="title">
          Title
          <input
            id="title_id"
            type="text"
            name="title"
            value={title}
            required
            onChange={this.handleChange}
          />
        </label>
        {/* <label htmlFor="imagePath">
          Image Path
          <input
            id="image_path"
            type="text"
            name="imagePath"
            value={imagePath}
            required
            onChange={this.handleChange}
          />
        </label> */}
        <label htmlFor="topic">
          Article Topic
          <input
            id="topic_id"
            type="text"
            name="topic"
            value={topic}
            required
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="description">
          Write your Article here
          <textarea
            rows={10}
            cols={78}
            name="description"
            value={description}
            required
            onChange={this.handleChange}
          />
        </label>

        <button>Submit</button>
      </form>
    );
  }
}
