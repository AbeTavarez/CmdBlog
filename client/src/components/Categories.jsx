import React from "react";
import "./Categories.css";
export default function Categories({ users, articles, categories }) {
  return (
    <div className="categories-container">
      <div className="cat-head">Categories</div>
      {categories.map((category) => (
        <div key={category.id}>
          <h3 key={category.id}>{category.name}</h3>
          {/* <Link>
          to={`/articles/${article.id}`}
          </Link> */}
        </div>
      ))}
    </div>
  );
}
