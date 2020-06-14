import api from "./api-helper";

// All routes matches the backend

//::::::::::::GEt::::::::::::::::::::::::
export const getAllCategories = async () => {
  const res = await api.get("/categories");
  return res.data;
};
