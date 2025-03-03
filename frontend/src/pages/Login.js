import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // ✅ Import axios

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            localStorage.setItem("token", response.data.token);
            alert("Login successful!");
            navigate("/project");
        } catch (error) {
            console.error("Login failed", error.response?.data?.message || error.message);
            alert(error.response?.data?.message || "Login failed! Check your credentials.");
        }
    };

    return (
        // <div>
        //     <h2>Login</h2>
        //     <form onSubmit={handleSubmit}>
        //         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        //         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        //         <button type="submit">Login</button>
        //     </form>
        // </div>
        <div className="w-full  flex justify-center items-center">
            <div className="p-6 bg-pink-100 rounded-lg shadow-md border border-pink-200 mt-10 max-w-[450px]">
                <h2 className="text-2xl font-semibold text-pink-800 mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 mb-4 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 mb-4 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-pink-600 transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>

        </div>

    );
};

export default Login;
