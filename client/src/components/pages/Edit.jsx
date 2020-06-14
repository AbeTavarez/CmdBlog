import React from "react";

export default function Edit({ title, topic, description }) {
  console.log("edit component-->", this.this.props);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.putArticle();
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
    </div>
  );
}
