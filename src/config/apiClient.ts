import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';

// Create Axios instance with base configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attach token if available
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response Interceptor: Global error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        console.error('Unauthorized. Please log in again.');
        if (typeof window !== 'undefined') {
          localStorage.removeItem('auth_token');
          window.location.href = '/login';
        }
      } else if (status === 500) {
        console.error('Server error. Please try again later.');
      }
    } else if (error.request) {
      console.error('No response from server. Check your network.');
    }
    return Promise.reject(error);
  }
);

export default apiClient;
