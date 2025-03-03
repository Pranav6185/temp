import React, { useEffect, useState } from "react";
import AddResourceForm from "../components/AddResourceForm";

const Home = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        fetchResources();
    }, []);

    const fetchResources = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/resources");
            const data = await response.json();
            setResources(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleResourceAdded = (newResource) => {
        setResources([...resources, newResource]); // Update UI instantly
    };

    return (
        <div>
            <h1>Pregnancy Resources</h1>
            <AddResourceForm onResourceAdded={handleResourceAdded} />
            <ul>
                {resources.map((item) => (
                    <li key={item._id}>
                        <strong>{item.title}</strong> - {item.category} <br />
                        {item.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
