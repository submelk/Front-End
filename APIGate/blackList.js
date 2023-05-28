import apiClient from "./axios.config";

// export const getBlackListIdQR = async (link) => {
//   const { data } = await axios.get(
//     `https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=200x200&chl=${link}`
//   );
//   return data;
// };
export const getBlackList = async (page, { sex, name, subject, res }) => {
  const { data } = await apiClient.get(`blacklist?page=${page}&per_page=18`, {
    params: {
      ...(sex ? { sex } : {}),
      ...(name ? { name } : {}),
      ...(subject ? { subject } : {}),
      ...(res ? { residence: res } : {}),
    },
  });
  return data;
};
export const getBlackListIdRep = async (id) => {
  const { data } = await apiClient.get(`blacklist?report_number=${id}`);
  return data;
};
