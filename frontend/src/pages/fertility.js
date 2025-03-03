import React from "react";

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
                {[
                    { title: "Your First Prenatal Visit", desc: "If you did not meet with your health care provider before your pregnancy, your first prenatal visit will generally be around 8 weeks after...", img: "https://source.unsplash.com/300x200/?doctor,pregnancy" },
                    { title: "Financial Help for Pregnant Women", desc: "Let’s review the various sources of financial help for pregnant women that may be available to you...", img: "https://source.unsplash.com/300x200/?family,finance" }
                ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Featured Posts */}
            <div className="max-w-5xl mx-auto p-6">
                <h2 className="text-2xl font-semibold text-gray-800">Featured Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {[
                        { title: "Intracytoplasmic Sperm Injection (ICSI)", desc: "ICSI involves the direct injection of sperm into eggs obtained from IVF...", img: "https://source.unsplash.com/300x200/?microscope,sperm" },
                        { title: "Donor Insemination", desc: "A simple procedure that uses a syringe to place sperm into a woman’s vagina...", img: "https://source.unsplash.com/300x200/?medical,injection" }
                    ].map((post, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img src={post.img} alt={post.title} className="w-full h-40 object-cover rounded-md" />
                            <h3 className="text-lg font-semibold mt-4">{post.title}</h3>
                            <p className="text-gray-600 text-sm mt-2">{post.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-pink-200 py-12 mt-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Track Your Baby’s Development</h2>
                <p className="text-gray-600 mt-2">Subscribe to our week-by-week Pregnancy Newsletter</p>
                <div className="mt-4 flex flex-col md:flex-row justify-center gap-4">
                    <input type="text" placeholder="First Name" className="p-2 rounded-lg border w-64" />
                    <input type="email" placeholder="Email Address" className="p-2 rounded-lg border w-64" />
                    <input type="text" placeholder="Weeks Pregnant?" className="p-2 rounded-lg border w-64" />
                    <button className="bg-pink-500 text-white px-6 py-2 rounded-lg">Subscribe</button>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 text-center">
                <h2 className="text-xl font-semibold">American Pregnancy Association</h2>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:text-pink-400">Privacy Policy</a>
                    <a href="#" className="hover:text-pink-400">Donate</a>
                    <a href="#" className="hover:text-pink-400">Contact</a>
                </div>
                <p className="text-sm mt-4">© 2024 American Pregnancy Association. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PregnancyPage;
