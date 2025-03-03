import React, { useEffect, useState } from "react";
import axios from "axios";

const PregnancyQuestionsCenter = () => {
    const [blogs, setBlogs] = useState([]);
    const [newBlog, setNewBlog] = useState({ title: "", description: "", image: "" });

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/blogs");
            setBlogs(response.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    const addBlog = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/blogs", newBlog, {
                headers: { "Content-Type": "application/json" }
            });
            console.log("Blog added:", response.data);
            setNewBlog({ title: "", description: "", image: "" }); // Reset form
            fetchBlogs(); // Refresh blog list
        } catch (error) {
            console.error("Error adding blog:", error.response?.data || error);
        }
    };


    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-6">Pregnancy Questions Center</h1>

            {/* Blog Form */}
            <form onSubmit={addBlog} className="bg-gray-100 p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-semibold mb-2">Add New Blog</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={newBlog.title}
                    onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                    className="w-full p-2 mb-2 border rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newBlog.description}
                    onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })}
                    className="w-full p-2 mb-2 border rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newBlog.image}
                    onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
                    className="w-full p-2 mb-2 border rounded"
                    required
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
                    Add Blog
                </button>
            </form>

            {/* Blog List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div key={blog._id} className="bg-white rounded-lg shadow-lg p-4">
                        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md" />
                        <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
                        <p className="text-gray-600 mt-1">{blog.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PregnancyQuestionsCenter;
