import React from "react";

export default function Categories({ users, articles, categories }) {
  console.log("categories-->", categories);
  console.log("articles-->", articles);
  const byCat = articles.filter((ar) => ar.category_id === categories.id);
  console.log(byCat);
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
