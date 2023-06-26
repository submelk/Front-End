import axios from "axios";

const apiClient = axios.create({
  // baseURL: 'https://deelay.me/6000/http://192.168.100.80:8000/api/',
  baseURL: "http://87.107.162.33:5555/api/",
  headers: {
    "Content-type": "application/json",
  },
});

// apiClient.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {
//         //TODO ask error codes from server
//         if (+error?.response?.status === 401 && location.pathname !== '/login') {
//             localStorage.removeItem('access');
//             localStorage.removeItem('refresh');

//             // navigate to login page
//             location.href = '/login';
//         }
//         return Promise.reject(error);
//     },
// );

// apiClient.interceptors.request.use(function (config) {
//     const token = localStorage.getItem('access');
//     if (!!token) {
//         const parsedToken = JSON.parse(token);
//         (config as any).headers['Authorization'] = 'Bearer ' + parsedToken;
//     }
//     return config;
// });

// export const fileApi = async (
//     url: string,
//     data: FormData,
//     onUploadProgress?: ((progressEvent: any) => void) | undefined,
// ) => {
//     try {
//         const headers = {
//             Accept: 'application/json',
//             'Content-Type': 'multipart/form-data',
//         };
//         const response = await apiClient({
//             url,
//             data,
//             method: 'post',
//             headers,
//             onUploadProgress,
//         });

//         return Promise.resolve(response.data);
//     } catch (error: any) {
//         return Promise.reject(error.response);
//     }
// };

export default apiClient;
