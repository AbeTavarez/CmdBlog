import React from "react";
import { Link } from "react-router-dom";

import "./Articles.css";

export default function Articles({ articles }) {
  return (
    <div className="sort-container">
      <div className="page-title">Popular Articles</div>
      {articles.map((article) => (
        <div key={article.id}>
          <Link
            to={`/articles/${article.id}`}
            style={{ textDecoration: "underline" }}
          >
            <div className="article-title">{article.title}</div>
          </Link>
          <br />
          <div className="article-topic-articles">{article.topic}</div>
        </div>
      ))}
    </div>
  );
}
