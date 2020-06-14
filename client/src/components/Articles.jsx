import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Articles({ articles }) {
  return (
    <>
      <h2>Popular Articles</h2>
      {articles.map((article) => (
        <Fragment key={article.id}>
          <Link
            to={`/articles/${article.id}`}
            style={{ textDecoration: "none" }}
          >
            {article.title}
          </Link>
          <br />
          <h3>{article.topic}</h3>
        </Fragment>
      ))}
    </>
  );
}
