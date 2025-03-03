import React from 'react';
import img10 from "../assets/img10.jpeg"
import img11 from "../assets/img11.jpg"
import img12 from "../assets/img12.webp"
import img13 from "../assets/img13.webp"
import img14 from "../assets/img14.jpg"
import img15 from "../assets/img15.avif"

const ResourcesPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Resources Content Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Resource Cards */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="h-48 bg-gray-200">
                            <img src={img10} alt="Pregnancy Guide" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-2">Pregnancy Guide</h3>
                            <p className="text-gray-600 mb-4">Essential information for expecting mothers throughout their pregnancy journey.</p>
                            <a href="/pregnancy-guide" className="inline-block px-4 py-2 bg-coral-400 text-white rounded hover:bg-coral-500 transition-colors duration-300">Learn More</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="h-48 bg-gray-200">
                            <img src={img11} alt="Newborn Care" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-2">Newborn Care</h3>
                            <p className="text-gray-600 mb-4">Tips and guidance for caring for your newborn baby in the first few months.</p>
                            <a href="/newborn-care" className="inline-block px-4 py-2 bg-coral-400 text-white rounded hover:bg-coral-500 transition-colors duration-300">Learn More</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="h-48 bg-gray-200">
                            <img src={img12} alt="Nutrition & Wellness" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-2">Nutrition & Wellness</h3>
                            <p className="text-gray-600 mb-4">Healthy eating and wellness advice for pregnancy and postpartum recovery.</p>
                            <a href="/nutrition" className="inline-block px-4 py-2 bg-coral-400 text-white rounded hover:bg-coral-500 transition-colors duration-300">Learn More</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="h-48 bg-gray-200">
                            <img src={img13} alt="Support Groups" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-2">Support Groups</h3>
                            <p className="text-gray-600 mb-4">Connect with other parents and find emotional support during your journey.</p>
                            <a href="/support-groups" className="inline-block px-4 py-2 bg-coral-400 text-white rounded hover:bg-coral-500 transition-colors duration-300">Learn More</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="h-48 bg-gray-200">
                            <img src={img14} alt="Educational Videos" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-2">Educational Videos</h3>
                            <p className="text-gray-600 mb-4">Watch informative videos about pregnancy, childbirth, and infant care.</p>
                            <a href="/videos" className="inline-block px-4 py-2 bg-coral-400 text-white rounded hover:bg-coral-500 transition-colors duration-300">Learn More</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="h-48 bg-gray-200">
                            <img src={img15} alt="FAQ" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-2">FAQ</h3>
                            <p className="text-gray-600 mb-4">Answers to commonly asked questions about pregnancy and parenting.</p>
                            <a href="/faq" className="inline-block px-4 py-2 bg-coral-400 text-white rounded hover:bg-coral-500 transition-colors duration-300">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;