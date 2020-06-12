import api from "./api-helper";

export const getAllUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const getSingleUser = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

export const createUser = async (userData) => {
  const resp = await api.post("/users", { user: userData });
  return resp.data;
};

export const updateUser = async (id, userData) => {
  const resp = await api.put(`/users/${id}`, { user: userData });
  return resp.data;
};

export const deleteUser = async (id) => {
  const resp = await api.delete(`/users/${id}`);
  return resp.data;
};
