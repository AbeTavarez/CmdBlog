import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Articles({ articles }) {
  return (
    <>
      <hr />
      <h3>All Users Articles Component</h3>
      {articles.map((article) => (
        <Fragment key={article.id}>
          <Link to={`/articles/${article.id}`}>{article.title}</Link>
          <br />
        </Fragment>
      ))}
    </>
  );
}
