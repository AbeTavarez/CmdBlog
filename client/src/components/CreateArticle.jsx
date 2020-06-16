import React, { Component } from "react";
import "./CreateArticle.css";

export default class CreateArticle extends Component {
  state = {
    article: {
      title: "",
      description: "",
      topic: "",
      image_path: "",
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
    // console.log("from createArticle->>.", this.state.article);
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
      image_path,
      category_id,
    } = this.state.article;

    return (
      <div className="create-form">
        <form onSubmit={this.handleSubmit}>
          <h3>Create new Article</h3>
          <div className="input-area">
            <label htmlFor="title">
              <input
                className="input-title"
                placeholder="Article Title"
                id="title_id"
                type="text"
                name="title"
                value={title}
                required
                autoFocus
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="input-area">
            <label htmlFor="imagePath">
              <input
                className="input-image-link"
                placeholder="Image Link"
                id="image_path"
                type="text"
                name="image_path"
                value={image_path}
                required
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="input-area">
            <label htmlFor="input-topic">
              <input
                className="input-topic"
                placeholder="Article Topic"
                id="topic_id"
                type="text"
                name="topic"
                value={topic}
                required
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="input-area">
            <label>
              <input
                className="input-category"
                id="category_id"
                type="number"
                name="category_id"
                value={category_id}
                required
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="description">
              <textarea
                className="input-description"
                rows={20}
                cols={80}
                name="description"
                value={description}
                required
                onChange={this.handleChange}
              />
            </label>
          </div>

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
