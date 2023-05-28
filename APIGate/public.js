import apiClient from "./axios.config";

export const getHomePageData = async () => {
  const { data } = await apiClient.get('get_homepage_data');
  return data;
};

export const postContactUs = async (form) => {
  const { data } = await apiClient.post(`contactUs`, { ...form });
  return data;
};
