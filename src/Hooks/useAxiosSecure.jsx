import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);

    // intercept request
    useEffect(() => {
        axiosSecure.interceptors.request.use(config => {
            const token = localStorage.getItem('access_token');

            if (token) {
                config.headers.authorization = `Bearer ${token}`
            }

            return config;
        });

        // intercept response
        axiosSecure.interceptors.response.use(
            response => response,
            async (error) => {
                if (error.response && error.response.status === 401 || error.response.status === 403) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );

    }, [logOut, navigate, axiosSecure]);

    return [axiosSecure];
}

export default useAxiosSecure;