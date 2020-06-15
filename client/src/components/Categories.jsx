import React from "react";
import { Link } from "react-router-dom";

export default function Categories({ users, articles, categories }) {
  console.log("categories-->", categories);
  const byCat = categories.filter((cat) => cat.id === articles.category_id);
  // console.log(articles.foreach((art) => art.category_id));

  return (
    <>
      {categories.map((category) => (
        <div key={category.id}>
          <h3 key={category.id}>{category.name}</h3>
          {/* <Link>
          to={`/articles/${article.id}`}
          </Link> */}
        </div>
      ))}
    </>
  );
}
