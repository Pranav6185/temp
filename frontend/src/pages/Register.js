import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
            alert(response.data.message);  // Show success message
            navigate("/login");
        } catch (error) {
            console.error("Registration failed", error.response?.data?.message || error.message);
            alert(error.response?.data?.message || "Registration failed! Try again.");
        }
    };


    return (
        // <div>
        //     <h2>Register</h2>
        //     <form onSubmit={handleSubmit}>
        //         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        //         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        //         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        //         <button type="submit">Register</button>
        //     </form>
        // </div>
        <div className="w-full  flex justify-center items-center">
            <div className="p-6 bg-pink-100 rounded-lg shadow-md border border-pink-200 mt-10 max-w-[450px]">
                <h2 className="text-2xl font-semibold text-pink-800 mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 mb-4 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
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
                        Sign Up
                    </button>
                </form>
            </div>

        </div>

    );
};

export default Register;
