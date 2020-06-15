import React, { Component } from "react";

export default class CreateArticle extends Component {
  state = {
    article: {
      title: "",
      description: "",
      topic: "",
      category_id: 0,
    },
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      article: {
        ...this.state.article,
        [name]: value,
      },
    });
  };
  //! create alert to tell user that article is create
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("from createArticle->>.", this.state.article);
    const { postArticle, history } = this.props;
    postArticle(this.state.article);
    history.push("/profile");
  };
  render() {
    console.log(this.props.categories);
    const {
      title,
      topic,
      description,
      imagePath,
      category_id,
    } = this.state.article;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create new Article</h3>
        <label htmlFor="title">
          Title
          <input
            id="title_id"
            type="text"
            name="title"
            value={title}
            required
            autoFocus
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
        <label>
          Category id
          <input
            id="category_id"
            type="number"
            name="category_id"
            value={category_id}
            required
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="description">
          Write your Article here
          <textarea
            rows={20}
            cols={40}
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
