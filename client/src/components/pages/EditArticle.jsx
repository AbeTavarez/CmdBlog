import React from "react";

export default function Edit({
  articleId,
  articleData,
  putArticle,
  currentArticle,
  handleChange,
}) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          putArticle(articleId, articleData);
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
            value={articleData.title}
            required
            onChange={handleChange}
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
            value={articleData.topic}
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor="description">
          Write your Article here
          <textarea
            rows={10}
            cols={78}
            name="description"
            value={articleData.description}
            required
            onChange={handleChange}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
}
