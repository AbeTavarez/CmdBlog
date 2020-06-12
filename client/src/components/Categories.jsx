import React from "react";

const Categories = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <h3>{user.username}</h3>
      ))}
    </>
  );
};

export default Categories;
