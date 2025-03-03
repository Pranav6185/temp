import React, { useState } from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Search, Menu, X, ChevronRight, MessageCircle, Calendar, Calculator, Heart, Facebook, Twitter, Instagram } from 'lucide-react';
import img7 from "../assets/bg-img-7.webp"
import logo from "../assets/super.jpg"

const HomePage = () => {
    // const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (!token) {
    //         navigate("/login");
    //     }
    // }, [navigate]);

    return (
        <div className="min-h-screen font-sans bg-white text-gray-700 ">
            {/* Header */}
            <header className="bg-white shadow-sm ">
                <div className="container mx-auto px-4 py-3 flex justify-end items-end">


                    <div className="flex items-center">
                        <button className="p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        <div className="hidden md:flex items-center space-x-4">
                            <button className="p-2">
                                <Search size={20} />
                            </button>
                            <div className="bg-pink-500 text-white px-4 py-2 rounded-md flex items-center">
                                <MessageCircle size={18} className="mr-2" />
                                <span>Chat now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md p-4">
                    <nav className="flex flex-col space-y-3">
                        <Link to="/pregnancy-questions" className="py-2 border-b border-gray-100">Pregnancy Questions Center</Link>
                        <Link to="/unplanned-pregnancy" className="py-2 border-b border-gray-100">Unplanned Pregnancy</Link>
                        <Link to="/healthy-pregnancy" className="py-2 border-b border-gray-100">Healthy Pregnancy</Link>
                        <Link to="/getting-pregnant" className="py-2 border-b border-gray-100">Getting Pregnant</Link>
                        <Link to="/tools" className="py-2 border-b border-gray-100">Pregnancy Tools</Link>
                        <Link to="/blog" className="py-2 border-b border-gray-100">Blog</Link>
                        <div className="py-2 flex items-center space-x-2">
                            <Search size={18} />
                            <span>Search</span>
                        </div>
                    </nav>
                </div>
            )}

            {/* Hero Section */}
            <div className="bg-gray-100 bg-opacity-50 bgimg h-[500px]">
                <div className="container mx-auto px-4 py-8 text-center pt-28 ">
                    <h2 className="text-4xl font-semibold text-blue-800 mb-2 text-5xl pb-5">PREGNANT ?</h2>
                    <h3 className="text-2xl text-pink-500 mb-6 font-bold pb-4">WE'RE HERE FOR YOU.</h3>
                    <p className="text-gray-600 mb-4 max-w-2xl mx-auto pb-2">
                        Pregnancy comes with so many questions. We've captured dozens of the top questions to create the Pregnancy Questions Center. Come see what so many people are asking!
                    </p>
                    <Link
                        to="/pregnancy-questions"
                        className="bg-blue-500 text-white px-6 py-3 rounded-full inline-block"
                    >
                        PREGNANCY QUESTIONS CENTER
                    </Link>
                </div>
            </div>

            {/* Welcome Section */}
            <section className="container mx-auto px-4 py-8 text-center w-6/12 mt-8">
                <h2 className="font-bold text-blue-900 text-5xl mb-7">GARBHSUTRA
                    <h2 className='mt-2'>Nurturing Motherhood</h2></h2>
                <h3 className=" text-orange-600 mb-4 font-bold text-3xl ">Supporting Your Pregnancy Journey</h3>
                <p className="text-gray-800 mb-6 max-w-2xl mx-auto text-lg">
                    From conception through birth and all the wonderful in-betweens, our nurses and pregnancy educators are here to provide the resources and information you need for the healthiest possible pregnancy.
                </p>
                <hr className="w-24  mx-auto border-pink-300 mb-8 " />
            </section>

            {/* Main Categories */}
            <section className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-3 gap-4">
                    {/* Unplanned Pregnancy */}
                    <div className="bg-pink-100 p-6 rounded-md unplanimg h-[300px] ">
                        <h3 className="text-xl font-medium text-pink-700 mb-2">Unplanned Pregnancy</h3>
                        <div className="flex justify-between items-center">

                            <Link to="/unplanned-pregnancy" className="text-pink-500 flex items-center">
                                Learn More <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Healthy Pregnancy */}
                    <div className="bg-pink-50 p-6 rounded-md healthyimg h-[300px]">
                        <h3 className="text-xl font-medium text-pink-700 mb-2">Healthy Pregnancy</h3>
                        <div className="flex justify-between items-center">

                            <Link to="/healthy-pregnancy" className="text-pink-500 flex items-center">
                                Learn more <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Getting Pregnant */}
                    <div className="bg-blue-50 p-6 rounded-md get-preg h-[300px]">
                        <h3 className="text-xl font-medium text-pink-700 mb-2 ">Getting Pregnant</h3>
                        <div className="flex justify-between items-center">

                            <Link to="/getting-pregnant" className="text-pink-500 flex items-center">
                                Learn more <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Planning Tools */}
            <section className="container mx-auto px-4 py-8 bg-gray-100">
                <h2 className=" text-sky-900 mb-6 text-center text-5xl font-bold">Planning Your Pregnancy Tools</h2>
                <p className="text-slate-600  mb-8 max-w-2xl mx-auto text-center text-lg">
                    From conception through birth and all the wonderful in-betweens, our nurses and pregnancy educators are here to provide the resources and information you need for the healthiest possible pregnancy.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

                    <Link to="/ovulationCalendar">
                        {/* Ovulation Calendar */}
                        <div className="flex flex-col items-center p-2   hover:bg-white hover:rounded-2xl hover:border-black  hover:border-2  ">
                            <div className="w-12 h-12 flex items-center justify-center text-pink-500 mb-3">
                                <Calendar size={50} />
                            </div>
                            <h3 className="text-lg font-medium text-gray-700 mb-1 hover:text-pink-500">Ovulation calendar</h3>
                            <p className="text-gray-500 text-center text-sm mb-2">
                                Do you know your days of ovulation? When are you most fertile?
                            </p>
                            <Link to="/tools/ovulation-calendar" className="text-blue-500 text-sm">
                                Calculate now
                            </Link>
                        </div>
                    </Link>

                    {/* Due Date Calculator */}
                    <Link to="/calendar">
                        <div className="flex flex-col items-center p-2  hover:bg-white hover:rounded-2xl hover:border-black  hover:border-2  ">
                            <div className="w-12 h-12 flex items-center justify-center text-pink-500 mb-3">
                                <Calculator size={50} />
                            </div>
                            <h3 className="text-lg font-medium text-gray-700 mb-1">HealthTracker Calender</h3>
                            <p className="text-gray-500 text-center text-sm mb-2">
                                Estimate how far along you are and see weekly development.
                            </p>
                            <Link to="/tools/due-date-calculator" className="text-blue-500 text-sm">
                                Calculate now
                            </Link>
                        </div>
                    </Link>

                    <Link to="/pregnancy-questions" >
                        {/* Baby Names */}
                        <div className="flex flex-col items-center p-2  hover:bg-white hover:rounded-2xl hover:border-black  hover:border-2  ">
                            <div className="w-12 h-12 flex items-center justify-center text-pink-500 mb-3">
                                <Heart size={50} />
                            </div>
                            <h3 className="text-lg font-medium text-gray-700 mb-1">Pregnancy Questions </h3>
                            <p className="text-gray-500 text-center text-sm mb-2">
                                Search our comprehensive directory of baby names to find the perfect name.
                            </p>
                            <Link to="/tools/baby-names" className="text-blue-500 text-sm">
                                Search names
                            </Link>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Giving Tuesday */}
            <section className="container mx-auto px-4 py-8 text-center">
                <h3 className="text-xl font-bold text-teal-500 mb-2">GIVING TUESDAY</h3>
                <p className="text-teal-600 text-lg mb-4">Every gift makes a meaningful impact</p>
                <button className="bg-red-500 text-white px-6 py-3 rounded-full inline-flex items-center">
                    DONATE TODAY <Heart size={16} className="ml-2" />
                </button>

            </section>

            {/* Talk to an Educator */}
            <section className="container mx-auto px-4 py-8">
                <div className="rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <img
                                src={img7}
                                alt="Pregnant woman"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-white p-6 md:w-1/2 flex flex-col items-center justify-center">
                            <h3 className="flex flex-col text-2xl font-medium">
                                <span className="text-green-600 text-7xl mb-1">Talk <span className='text-gray-400'>to a</span> </span>
                                <span className="text-gray-400 text-7xl mb-1">Pregnancy</span>
                                <span className="text-gray-400  text-7xl"> Educator Now</span>
                            </h3>
                            <p className="text-gray-600 my-8 font-bold ">
                                We're available:<br />
                                Mon-Fri 7am - 10pm<br />
                                Sat-Sun 9am - 7pm
                            </p>
                            <p className="text-gray-600 mb-4">
                                Click CHAT NOW or call <a href="tel:8006722296" className="text-blue-500">(800) 672-2296</a>
                            </p>
                            <button className="bg-pink-400 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300">
                                CHAT NOW
                            </button>
                        </div>

                    </div>
                </div>
            </section>





            {/* Newsletter Signup */}
            <section className="bg-pink-100 py-8">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-xl font-medium text-pink-600 mb-2">Track Your Baby's Development</h3>
                    <p className="text-gray-600 mb-6">Subscribe to our week-by-week Pregnancy Newsletter</p>

                    <form className="max-w-md mx-auto space-y-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                        <div className="relative">
                            <select
                                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 appearance-none"
                            >
                                <option value="">How many weeks pregnant are you?</option>
                                <option value="1">1 week</option>
                                <option value="2">2 weeks</option>
                                {/* Add more options here */}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <ChevronRight size={16} />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white px-6 py-2 rounded-full"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white pt-8 pb-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center mb-6">
                        <img
                            src={logo}
                            alt="American Pregnancy Association Logo"
                            className="h-[100px] w-[100px] mb-2"
                        />
                        <h2 className="text-pink-400  font-semibold text-2xl">GARBHSUTRA</h2>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mb-6">
                        <a href="#" className="text-gray-400 hover:text-blue-600">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-pink-500">
                            <Instagram size={24} />
                        </a>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
                        {/* Outreach */}
                        <div>
                            <h4 className="font-medium mb-3">Outreach</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><Link to="/donate">Donate</Link></li>
                                <li><Link to="/partner">Partner With Us</Link></li>
                                <li><Link to="/sponsors">Corporate Sponsors</Link></li>
                            </ul>
                        </div>

                        {/* Pregnancy Journeys */}
                        <div>
                            <h4 className="font-medium mb-3">Pregnancy Journeys</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><Link to="/getting-pregnant">Getting Pregnant</Link></li>
                                <li><Link to="/healthy-pregnancy">Healthy Pregnancy</Link></li>
                                <li><Link to="/unplanned-pregnancy">Unplanned Pregnancy</Link></li>
                            </ul>
                        </div>

                        {/* Pregnancy Tools */}
                        <div>
                            <h4 className="font-medium mb-3">Pregnancy Tools</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><Link to="/tools/ovulation-calendar">Ovulation Calendar</Link></li>
                                <li><Link to="/tools/baby-names">Baby Names Directory</Link></li>
                                <li><Link to="/tools/due-date-calculator">Pregnancy Due Date Calculator</Link></li>
                                <li><Link to="/tools/quiz">Pregnancy Quiz</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default HomePage;