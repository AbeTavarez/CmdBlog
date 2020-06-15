import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default class Profile extends Component {
  render() {
    const { currentUser, destroyArticle, history } = this.props;
    return (
      <>
        <div>
          <h2>My Articles Component</h2>
          <button
            onClick={() => {
              history.push("/new/article");
            }}
          >
            Create new Article
            {<AddCircleIcon style={{ color: "#047aed" }} />}
          </button>
        </div>

        {this.props.articles.map((article) => (
          <Fragment key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
            {currentUser && currentUser.id === article.user_id && (
              <>
                <button
                  onClick={() => history.push(`/article/${article.id}/edit`)}
                >
                  edit
                  {<EditIcon style={{ color: "green" }} />}
                </button>
                <button onClick={() => destroyArticle(article.id)}>
                  Delete
                  {<DeleteForeverIcon color="secondary" />}
                </button>
              </>
            )}
            <br />
          </Fragment>
        ))}
      </>
    );
  }
}
