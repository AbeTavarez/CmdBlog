import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Article extends Component {
  render() {
    const { currentArticle } = this.props;
    // console.log("single-->", article);
    // console.log(article);
    return (
      <div>
        <h1>Article id </h1>
        <div>{currentArticle.title}</div>
      </div>
      // <div>
      //   <hr />
      //   <h2>Single Article</h2>
      //   {articles.map((article) => (
      //     <Fragment key={article.id}>
      //       <h2>{article.title}</h2>
      //       <div>
      //         <img src={article.image_path} alt="" />
      //       </div>
      //       <h5>{article.topic}</h5>
      //       <br />
      //       <p>{article.description}</p>
      //       <div>{article.comments}</div>
      //       <div>
      //         <small>
      //           Created by: {article.user.username},{article.created_at} ago,
      //           last updated: {article.updated_at}.
      //         </small>
      //       </div>
      //     </Fragment>
      //   ))}
      // </div>
    );
  }
}
