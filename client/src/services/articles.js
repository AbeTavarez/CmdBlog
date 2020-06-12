import api from "./api-helper";

// All routes matches the backend

//::::::::::::GEt::::::::::::::::::::::::
export const getAllArticles = async () => {
  const res = await api.get("/articles");
  return res.data;
};

//::::::::::::GET::::::::::::::::::::::::
export const getSingleArticle = async (id) => {
  const res = await api.get(`/articles/${id}`);
  return res.data;
};

//::::::::::::POST::::::::::::::::::::::::
export const createArticle = async (articleData) => {
  const res = await api.post("/articles", { article: articleData });
  return res.data;
};

//::::::::::::PUT::::::::::::::::::::::::
export const updateArticle = async (id, articleData) => {
  const res = await api.put(`/articles/${id}`, { article: articleData });
  return res.data;
};

//::::::::::::DELETE::::::::::::::::::::::::
export const deleteArticle = async (id) => {
  const res = await api.delete(`/articles/${id}`);
  return res;
};

//::::::::::::DELETE::::::::::::::::::::::::
export const getUserArticles = async () => {
  const res = await api.get("/userArticles");
  return res.data;
};
