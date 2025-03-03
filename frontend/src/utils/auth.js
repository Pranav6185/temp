import axios from "axios";

export const loginUser = async (email, password) => {
    try {
        const { data } = await axios.post("http://localhost:5000/api/auth/login", { email, password });
        localStorage.setItem("token", data.token);
        return data;
    } catch (error) {
        console.error("Login failed", error);
        return null;
    }
};

export const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
};
