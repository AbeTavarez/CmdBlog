import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Articles({ articles }) {
  //   console.log("articles-->", articles);
  return (
    <>
      <h2>Popular Articles</h2>
      {articles.map((article) => (
        <div key={article.id}>
          <Link
            to={`/articles/${article.id}`}
            style={{ textDecoration: "none" }}
          >
            {article.title}
          </Link>
          <br />
          <h3>{article.topic}</h3>
        </div>
      ))}
    </>
  );
}
