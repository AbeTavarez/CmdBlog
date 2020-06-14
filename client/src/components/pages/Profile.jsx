import React, { Fragment, Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  getAllArticles,
  getSingleArticle,
  createArticle,
  updateArticle,
  deleteArticle,
  getUserArticles,
} from "../../services/articles";

export default class Profile extends Component {
  state = {
    userArticles: [],
  };

  componentDidMount() {
    if (this.props.currentUser) {
      this.getUserArticles();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.getUserArticles();
    }
  }

  getUserArticles = async () => {
    const userArticles = await getUserArticles();
    this.setState({ userArticles });
  };

  render() {
    console.log("User", this.props.currentUser);
    console.log(this.state.userArticles);
    const { articles, currentUser, destroyArticle, history } = this.props;
    return (
      <>
        <div>
          <h2>My Articles Component</h2>
          <button
            onClick={() => {
              history.push("/new/article");
            }}
          >
            Create New Article
          </button>
        </div>

        {this.state.userArticles.map((article) => (
          <Fragment key={article.id}>
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
