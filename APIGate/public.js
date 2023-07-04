import apiClient from "./axios.config";

export const getFaq = async () => {
  const { data } = await apiClient.get("faq");
  return data;
};

export const getHome = async () => {
  const { data } = await apiClient.get(`home`);
  return data;
};
export const getProjectList = async () => {
  const { data } = await apiClient.get(`project/list`);
  return data;
};
export const postCunsult = async ({ c_name, c_telephone }) => {
  const { data } = await apiClient.post(`add/consultation`, {
    c_name,
    c_telephone,
  });
  return data;
};
