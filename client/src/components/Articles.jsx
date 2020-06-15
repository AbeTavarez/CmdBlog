import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Articles({ articles }) {
  //   console.log("articles-->", articles);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      <h2>Popular Articles</h2>
      {articles.map((article) => (
        <Card key={article.id}>
          <Link
            to={`/articles/${article.id}`}
            style={{ textDecoration: "none" }}
          >
            {article.title}
          </Link>
          <br />
          <h5>{article.topic}</h5>
        </Card>
      ))}
    </>
  );
}
