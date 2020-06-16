import React, { Component } from "react";

import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextareaAutosize,
} from "@material-ui/core";

export default class Edit extends Component {
  state = {
    article: {
      title: "",
      description: "",
      topic: "",
      imagePath: "",
      category_id: 0,
    },
  };

  componentDidMount() {
    this.setState({ article: this.props.currentArticleData });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
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
    const {
      title,
      topic,
      description,
      category_id,
      imagePath,
    } = this.state.article;

    return (
      <FormControl onSubmit={this.handleSubmit}>
        <hr />
        <h3>Edit Article</h3>
        <label htmlFor="title">
          Title
          <Input
            id="title_id"
            type="text"
            name="title"
            value={title}
            required
            autoFocus
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="imagePath">
          Image Path
          <Input
            id="image_path"
            type="text"
            name="imagePath"
            value={imagePath}
            required
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="topic">
          Article Topic
          <Input
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
          <Input
            id="category_id"
            type="number"
            name="category_id"
            value={category_id}
            required
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="description">
          <TextareaAutosize
            rows={40}
            cols={200}
            name="description"
            value={description}
            required
            onChange={this.handleChange}
          />
        </label>

        <Button>Submit</Button>
      </FormControl>
    );
  }
}
