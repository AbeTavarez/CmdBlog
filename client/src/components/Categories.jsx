import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ users, categories }) => {
  console.log("categories-->", categories);
  return (
    <>
      {categories.map((category) => (
        <h3 key={category.id}>{category.name}</h3>
      ))}
    </>
  );
};

export default Categories;
