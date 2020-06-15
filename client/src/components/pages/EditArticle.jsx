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

  async componentDidMount() {
    this.setState({ article: this.props.currentArticle });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      article: {
        ...this.state.article,
        [name]: value,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("from edit Article->>.", this.state.article);
    const { putArticle, history } = this.props;
    putArticle(this.state.article);
    history.push("/profile");
  };
  render() {
    console.log("from edit--->", this.props.currentArticleData);
    const {
      title,
      topic,
      description,
      category_id,
    } = this.props.currentArticle;
    // this.setState({
    //   formData: {
    //     title,
    //     topic,
    //     description,
    //   },
    // });
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.handleSubmit;
          }}
        >
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
              onChange={props.handleChange}
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
              onChange={props.handleChange}
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
              onChange={props.handleChange}
            />
          </label>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
