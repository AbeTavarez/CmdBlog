import api from "./api-helper";

export const getAllUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const getSingleUser = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};
