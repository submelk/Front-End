import apiClient from "./axios.config";

export const getFaq = async () => {
  const { data } = await apiClient.get("faq");
  return data;
};

export const getHome = async () => {
  const { data } = await apiClient.get(`home`);
  return data;
};
