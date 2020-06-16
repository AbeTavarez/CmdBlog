import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Button } from "@material-ui/core";

export default class Profile extends Component {
  render() {
    const { currentUser, destroyArticle, history } = this.props;
    return (
      <>
        <div>
          <h2>My Articles Component</h2>
          <Button
            onClick={() => {
              history.push("/new/article");
            }}
          >
            Create new Article
            {<AddCircleIcon style={{ color: "#047aed" }} />}
          </Button>
        </div>

        {this.props.articles.map((article) => (
          <Fragment key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
            {currentUser && currentUser.id === article.user_id && (
              <>
                <Button
                  onClick={() => history.push(`/article/${article.id}/edit`)}
                >
                  edit
                  {<EditIcon style={{ color: "green" }} />}
                </Button>
                <Button onClick={() => destroyArticle(article.id)}>
                  Delete
                  {<DeleteForeverIcon color="secondary" />}
                </Button>
              </>
            )}
            <br />
          </Fragment>
        ))}
      </>
    );
  }
}
