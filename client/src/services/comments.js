import api from "./api-helper";

export const getAllComments = async (id) => {
  const res = await api.get(`/articles/${id}/comments`);
  return res.data;
};
export const createArticle = async (commentData) => {
  const res = await api.post(`/articles/${id}/comments`, {
    article: commentData,
  });
  return res.data;
};
