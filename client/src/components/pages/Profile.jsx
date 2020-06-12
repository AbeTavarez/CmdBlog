import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Profile(props) {
  const { articles, currentUser, destroyArticle, history } = props;
  return (
    <>
      <hr />
      <h3>My Articles Component</h3>
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
              <button onClick={() => destroyArticle(article.id)}>delete</button>
            </>
          )}
          <br />
        </Fragment>
      ))}
    </>
  );
}
