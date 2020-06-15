import React, { Component } from "react";

export default class Edit extends Component {
  state = {
    article: {
      title: "",
      description: "",
      topic: "",
      category_id: 0,
    },
  };

  componentDidMount() {
    this.setState({ article: this.props.currentArticleData });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState((prevState) => ({
      article: {
        [name]: value,
      },
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { article } = this.state;
    console.log("from edit Article->>.", this.state.article);
    const { putArticle, history } = this.props;
    putArticle(this.props.articleId, article);
    history.push("/");
  };
  render() {
    console.log("from edit--->", this.state.currentArticleData);
    const { title, topic, description, category_id } = this.state.article;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <hr />
          <h3>Edit Article</h3>
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
      </div>
    );
  }
}
