import React, { useState } from "react";

const AddResourceForm = ({ onResourceAdded }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newResource = { title, content, category };

        try {
            const response = await fetch("http://localhost:3000/api/resources", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newResource),
            });

            if (response.ok) {
                const addedResource = await response.json();
                onResourceAdded(addedResource);
                setTitle("");
                setContent("");
                setCategory("");
                alert("Resource added successfully!");
            } else {
                alert("Failed to add resource");
            }
        } catch (error) {
            console.error("Error adding resource:", error);
        }
    };

    return (
        <div>
            <h2>Add Pregnancy Resource</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <button type="submit">Add Resource</button>
            </form>
        </div>
    );
};

export default AddResourceForm;
