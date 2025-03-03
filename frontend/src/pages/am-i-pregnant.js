import React from "react";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpg";

const PregnancyPage1 = () => {
    return (
        <div className="bg-pink-100 min-h-screen">
            {/* Hero Section */}
            <div className="text-center py-12 bg-pink-200">
                <h1 className="text-4xl font-bold text-gray-800">Am I Pregnant?</h1>
            </div>

            {/* How to Know Section */}
            <div className="max-w-4xl mx-auto p-6">
                <h2 className="text-2xl font-semibold text-gray-800">How to Know if You’re Pregnant</h2>
                <p className="text-gray-600 mt-2">
                    Feeling nauseous? Breasts a bit tender? Your period is late! Could your body be telling you you’re pregnant?
                    How to know requires knowing if you’re experiencing the key signs and symptoms of pregnancy.
                </p>
            </div>

            {/* Am I Pregnant Topics */}
            <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src={img1} alt="Pregnancy Symptoms" className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-lg font-semibold mt-4">Pregnancy Symptoms</h3>
                    <p className="text-gray-600 text-sm mt-2">Check symptoms and what to do next.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src={img2} alt="How Pregnancy Happens" className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-lg font-semibold mt-4">How Pregnancy Happens</h3>
                    <p className="text-gray-600 text-sm mt-2">Learn about conception and processes before indication.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src={img3} alt="Pregnancy Tests" className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-lg font-semibold mt-4">Pregnancy Tests</h3>
                    <p className="text-gray-600 text-sm mt-2">Know which test to take and how to use it for accurate results.</p>
                </div>
            </div>

            {/* Featured Posts */}
            <div className="max-w-5xl mx-auto p-6">
                <h2 className="text-2xl font-semibold text-gray-800">Featured Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src={img4} alt="Bacterial Vaginosis" className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-lg font-semibold mt-4">Bacterial Vaginosis</h3>
                        <p className="text-gray-600 text-sm mt-2">A bacterial infection with unknown infection rates.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src={img5} alt="Cervical Cancer" className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-lg font-semibold mt-4">Cervical Cancer</h3>
                        <p className="text-gray-600 text-sm mt-2">Cells in the cervix grow out of control and impact normal function.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PregnancyPage1;
