import React from "react";

const Comments = (props) => {
  return (
    <>
      <div className="commentContainer">
        <div>{props.content}</div>
        <div> {props.user}</div>
      </div>
    </>
  );
};

export default Comments;
