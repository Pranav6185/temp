import { useEffect, useState } from "react";
import axios from "axios";

export default function Calendar() {
    const [entries, setEntries] = useState([]);
    const [formData, setFormData] = useState({
        date: "",
        type: "appointment",
        description: "",
        notes: "",
    });

    // Fetch calendar entries from backend
    useEffect(() => {
        axios.get("https://temp-backend-chi.vercel.app/api/calendar")
            .then(res => setEntries(res.data))
            .catch(err => console.error(err));
    }, []);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://temp-backend-chi.vercel/api/calendar", formData)
            .then(res => {
                setEntries([...entries, res.data]);
                setFormData({ date: "", type: "appointment", description: "", notes: "" });
            })
            .catch(err => console.error(err));
    };

    // Handle delete
    const handleDelete = (id) => {
        axios.delete(`https://temp-backend-chi.vercel/api/calendar/${id}`)
            .then(() => setEntries(entries.filter(entry => entry._id !== id)))
            .catch(err => console.error(err));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Pregnancy Calendar</h2>

            {/* Add Entry Form */}
            <form onSubmit={handleSubmit} className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                    >
                        <option value="appointment">Doctor's Appointment</option>
                        <option value="health_progress">Health Progress</option>
                    </select>
                </div>
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border p-2 rounded w-full mt-2"
                    required
                />
                <input
                    type="text"
                    name="notes"
                    placeholder="Additional Notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="border p-2 rounded w-full mt-2"
                />
                <button
                    type="submit"
                    className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Entry
                </button>
            </form>

            {/* Calendar Entries */}
            <ul>
                {entries.map((entry) => (
                    <li key={entry._id} className="border-b p-3 flex justify-between items-center">
                        <div>
                            <p className="font-semibold">{entry.description} ({entry.type})</p>
                            <p className="text-sm text-gray-500">{new Date(entry.date).toDateString()}</p>
                            {entry.notes && <p className="text-sm">{entry.notes}</p>}
                        </div>
                        <button
                            onClick={() => handleDelete(entry._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}