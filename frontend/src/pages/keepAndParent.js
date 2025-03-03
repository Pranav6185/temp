import React from "react";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.webp";
import img9 from "../assets/img9.jpeg";

const PregnancyPage = () => {
    return (
        <div className="bg-pink-100 min-h-screen">
            {/* Hero Section */}
            <div className="text-center py-12 bg-pink-200">
                <h1 className="text-4xl font-bold text-gray-800">Keep & Parent</h1>
            </div>

            {/* Parenting Info Section */}
            <div className="max-w-4xl mx-auto p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Parenting is the Hardest Job You’ll Love</h2>
                <p className="text-gray-600 mt-2">
                    When facing an unplanned pregnancy, you may decide that parenting alone or with your partner is the best choice for you.
                    Single-parent families are more common than ever. Here are articles to help you get started.
                </p>
            </div>

            {/* Keep & Parent Posts */}
            <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src={img6} alt="Your First Prenatal Visit" className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-lg font-semibold mt-4">Your First Prenatal Visit</h3>
                    <p className="text-gray-600 text-sm mt-2">If you did not meet with your health care provider before your pregnancy, your first prenatal visit will generally be around 8 weeks after...</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src={img7} alt="Financial Help for Pregnant Women" className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-lg font-semibold mt-4">Financial Help for Pregnant Women</h3>
                    <p className="text-gray-600 text-sm mt-2">Let’s review the various sources of financial help for pregnant women that may be available to you...</p>
                </div>
            </div>

            {/* Featured Posts */}
            <div className="max-w-5xl mx-auto p-6">
                <h2 className="text-2xl font-semibold text-gray-800">Featured Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src={img8} alt="Intracytoplasmic Sperm Injection (ICSI)" className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-lg font-semibold mt-4">Intracytoplasmic Sperm Injection (ICSI)</h3>
                        <p className="text-gray-600 text-sm mt-2">ICSI involves the direct injection of sperm into eggs obtained from IVF...</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src={img9} alt="Donor Insemination" className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-lg font-semibold mt-4">Donor Insemination</h3>
                        <p className="text-gray-600 text-sm mt-2">A simple procedure that uses a syringe to place sperm into a woman’s vagina...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PregnancyPage;

