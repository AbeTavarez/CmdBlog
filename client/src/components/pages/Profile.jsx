import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import {
  getAllArticles,
  getSingleArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../../services/articles";

export default class Profile extends Component {
  render() {
    const { articles, currentUser, destroyArticle, history } = this.props;
    return (
      <>
        <hr />
        <h2>My Articles Component</h2>
        {articles.map((article) => (
          <Fragment key={article.id}>
            {/* small change:  we made the p tags into links to the article item route */}
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
            {currentUser && currentUser.id === article.user_id && (
              <>
                {/* our edit button just needs to route us to the edit component */}
                {/* we also need to interpolate the id in the route */}
                <button
                  onClick={() => history.push(`/article/${article.id}/edit`)}
                >
                  edit
                </button>
                <button onClick={() => destroyArticle(article.id)}>
                  delete
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
