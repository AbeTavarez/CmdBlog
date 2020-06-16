import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Button } from "@material-ui/core";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    const { currentUser, destroyArticle, history } = this.props;
    return (
      <>
        <div>
          <h1 className="profile">Profile</h1>
          <Button
            onClick={() => {
              history.push("/new/article");
            }}
          >
            <div className="create-new">Create new Article</div>
            {<AddCircleIcon style={{ color: "#047aed" }} />}
          </Button>
        </div>

        {this.props.articles.map((article) => (
          <Fragment key={article.id}>
            <Link to={`/articles/${article.id}`} className="profile-area">
              {article.title}
            </Link>
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
            <hr />
          </Fragment>
        ))}
      </>
    );
  }
}
