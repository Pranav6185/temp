import { useState } from "react";

const babyNamesData = [
    { name: "Aiden", gender: "Male", origin: "American" },
    { name: "Sophia", gender: "Female", origin: "Greek" },
    { name: "Liam", gender: "Male", origin: "Irish" },
    { name: "Olivia", gender: "Female", origin: "Latin" },
    { name: "Ethan", gender: "Male", origin: "Hebrew" },
    { name: "Ava", gender: "Female", origin: "German" },
    { name: "Noah", gender: "Male", origin: "Hebrew" },
    { name: "Mia", gender: "Female", origin: "Spanish" },
];

export default function BabyNamesDirectory() {
    const [gender, setGender] = useState("Both");
    const [firstLetter, setFirstLetter] = useState("");
    const [origin, setOrigin] = useState("All");
    const [filteredNames, setFilteredNames] = useState([]);

    const searchBabyNames = () => {
        let results = babyNamesData.filter((nameObj) => {
            return (
                (gender === "Both" || nameObj.gender === gender) &&
                (firstLetter === "" || nameObj.name.startsWith(firstLetter)) &&
                (origin === "All" || nameObj.origin === origin)
            );
        });

        setFilteredNames(results);
    };

    return (
        <div className="bg-gray-100 min-h-screen">


            {/* Search Section */}
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
                <h2 className="text-2xl font-bold text-gray-800">Baby Names Directory</h2>

                <div className="mt-4">
                    <label className="block font-semibold text-gray-600">Gender:</label>
                    <select
                        className="w-full border border-gray-300 p-2 rounded-md"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option>Both</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>

                <div className="mt-4">
                    <label className="block font-semibold text-gray-600">First Letter:</label>
                    <input
                        type="text"
                        placeholder="(optional)"
                        maxLength="1"
                        className="w-full border border-gray-300 p-2 rounded-md"
                        value={firstLetter}
                        onChange={(e) => setFirstLetter(e.target.value.toUpperCase())}
                    />
                </div>

                <div className="mt-4">
                    <label className="block font-semibold text-gray-600">Origin:</label>
                    <select
                        className="w-full border border-gray-300 p-2 rounded-md"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                    >
                        <option>All</option>
                        <option>American</option>
                        <option>Greek</option>
                        <option>Irish</option>
                        <option>Latin</option>
                        <option>Hebrew</option>
                        <option>German</option>
                        <option>Spanish</option>
                    </select>
                </div>

                <button
                    className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md"
                    onClick={searchBabyNames}
                >
                    SEARCH BABY NAMES
                </button>

                <p className="text-gray-600 mt-4">
                    Search the APA’s comprehensive directory of baby names to find the
                    perfect name for your child.
                </p>
            </div>

            {/* Results Section */}
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Results:</h3>
                {filteredNames.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                        {filteredNames.map((nameObj, index) => (
                            <li key={index} className="p-2 border rounded-md bg-gray-50">
                                <strong>{nameObj.name}</strong> - {nameObj.gender}, {nameObj.origin}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600 mt-4">No names found. Try a different search.</p>
                )}
            </div>


        </div>
    );
}
