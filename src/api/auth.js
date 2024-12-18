import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/custom_user';

export const registerUser = (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};

export const loginUser = (credentials) => {
  return axios.post(`${API_BASE_URL}/login`, credentials);
};
export const logoutUser = (credentials) => {
  return axios.post(`${API_BASE_URL}/logout`, credentials);
};

export const changePassword = (data) => {
  return axios.post(`${API_BASE_URL}/change-password`, data);
};

export const resetPassword = (email) => {
  return axios.post(`${API_BASE_URL}/reset-password`, { email });
};