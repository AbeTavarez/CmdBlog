import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
          <h5>{article.topic}</h5>
        </div>
      ))}
    </div>
  );
}
