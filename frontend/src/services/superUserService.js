import axios from 'axios';

const API_URL = 'http://localhost:8000/'; // Asegúrate de que esta URL es correcta

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}token/`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error de autenticación: ' + (error.response?.data?.detail || error.message));
  }
};

const createSuperUser = (username, password, token) => {
  return axios.post(`${API_URL}create_super_user/`, { username, password }, {
    headers: {
      'Authorization': `Bearer ${token}` // Asegúrate de pasar el token correctamente
    }
  });
};

const superUserService = {
  login,
  createSuperUser,
};

export default superUserService;
