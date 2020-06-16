import React, { Component } from "react";
import { getAllComments } from "../services/comments";
import Comments from "./Comments";
// import CreateComment from "./CreateComment";
import "./Article.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
export default class Article extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.getComments();
  }

  getComments = async () => {
    let { id } = this.props.match.params;
    const comments = await getAllComments(id);
    this.setState({ comments });
    console.log(this.state);
  };
  render() {
    const { currentArticle } = this.props;
    const comments = this.state.comments;
    const articleComments = comments.map((comment, index) => (
      <Comments
        key={index}
        id={comment.id}
        content={comment.content}
        user={comment.user.username}
      />
    ));
    console.log("single-->", currentArticle);
    // console.log(article);
    return (
      <>
        {currentArticle && (
          <div>
            <div>
              <div className="article-title">{currentArticle.title}</div>
            </div>
            <div>
              <img src={currentArticle.image_path} />
            </div>
            <div>
              <p>{currentArticle.topic}</p>
            </div>
            <div className="article-container">
              <div>{currentArticle.description}</div>
              <div className="credits">
                <span>Created: {currentArticle.created_at}</span>
                <br />
                <span>Last update: {currentArticle.updated_at}</span>
                <hr />
                <span>Author: {currentArticle.user.username}</span>
              </div>
            </div>
            <div className="comments">
              <div>
                <div>
                  {articleComments.map((c) => (
                    <div className="comm">
                      {<ThumbUpAltIcon />}
                      {c}by
                    </div>
                  ))}
                </div>
              </div>
              {
                // <CreateComment
                //   // currentUser={this.props.currentUser}
                //   currentArticle={currentArticle}
                // />
              }
            </div>
          </div>
        )}
      </>
    );
  }
}
