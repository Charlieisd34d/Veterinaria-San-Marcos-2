import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    try {
      const sesionGuardada = localStorage.getItem("admin_autenticado");
      if (sesionGuardada) {
        const sesion = JSON.parse(sesionGuardada);
        if (sesion?.token) {
          config.headers.Authorization = `Bearer ${sesion.token}`;
        }
      }
    } catch {
      // Ignorar error de parseo en localStorage
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
