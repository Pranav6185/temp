import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaCalendarAlt, FaBook, FaQuestionCircle, FaHeadset, FaSearch, FaHeart } from 'react-icons/fa';
import logo from "../assets/super.jpg"


const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdownToggle = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <div className="w-full ">
            {/* Logo and top navigation bar */}
            <div className="container   flex items-center justify-around">
                <div className="flex items-center">
                    <Link to="/" className="mr-6">
                        <div className="flex items-center">
                            <img src={logo} width="180px" height="180px" />
                        </div>
                    </Link>
                </div>

                <div>
                    <div className="flex items-end justify-end">
                        <Link to="/es" className="ml-4 text-sm">
                            <span className="flex items-center">
                                <img src="/spain-flag.png" alt="Español" className="w-6 h-4 mr-1" />
                                Marathi
                            </span>
                        </Link>
                    </div>


                    {/* Main navigation menu with icons */}
                    <div className="border-t border-b text-sm ">
                        <div className="container  flex justify-between ">
                            <div className="flex ">
                                <Link to="/pregnancy-due-date-calculator" className="flex items-center px-4 py-4">
                                    <FaCalculator className="text-gray-500 mr-2" />
                                    <span className="text-gray-700">Pregnancy Due Date Calculator</span>
                                </Link>

                                <Link to="/calendar" className="flex items-center px-4 py-4">
                                    <FaCalendarAlt className="text-gray-500 mr-2" />
                                    <span className="text-gray-700">HealthTrack Calendar</span>
                                </Link>

                                <Link to="/baby-name-directory" className="flex items-center px-4 py-4">
                                    <FaBook className="text-gray-500 mr-2" />
                                    <span className="text-gray-700">Baby Names Directory</span>
                                </Link>

                                <Link to="/pregnancy-questions" className="flex items-center px-4 py-4">
                                    <FaQuestionCircle className="text-gray-500 mr-2" />
                                    <span className="text-gray-700">Pregnancy Questions</span>
                                </Link>

                                <Link to="/live-help" className="flex items-center px-4 py-4">
                                    <FaHeadset className="text-green-600 mr-2" />
                                    <span className="text-green-600">Live Help: 1-800-672-2296</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom navigation with dropdowns */}
                    <div className="mt-3">
                        <div className="container  flex ">
                            <div className="relative group ">
                                <button
                                    className="flex items-center px-6 py-4 bg-cyan-700 text-white rounded-l-full"
                                    onClick={() => handleDropdownToggle('unplanned')}
                                >
                                    Unplanned Pregnancy
                                    <span className="ml-1">▼</span>
                                </button>
                                {activeDropdown === 'unplanned' && (
                                    <div className="absolute z-10 bg-white shadow-lg w-48">
                                        <Link to="/am-i-pregnant" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Am I Pregnant?
                                        </Link>
                                        <Link to="/keep-and-parent" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Keep and Parent
                                        </Link>

                                    </div>
                                )}
                            </div>

                            <div className="relative group">
                                <button
                                    className="flex items-center px-6 py-4 bg-cyan-700 text-white"
                                    onClick={() => handleDropdownToggle('getting')}
                                >
                                    Getting Pregnant
                                    <span className="ml-1">▼</span>
                                </button>
                                {activeDropdown === 'getting' && (
                                    <div className="absolute z-10 bg-white shadow-lg w-48">
                                        <Link to="/fertility" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Fertility
                                        </Link>
                                        <Link to="/ovulation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Ovulation
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div className="relative group">
                                <button
                                    className="flex items-center px-6 py-4 bg-cyan-700 text-white"
                                    onClick={() => handleDropdownToggle('healthy')}
                                >
                                    Healthy Pregnancy
                                    <span className="ml-1">▼</span>
                                </button>
                                {activeDropdown === 'healthy' && (
                                    <div className="absolute z-10 bg-white shadow-lg w-48">
                                        <Link to="/pregnancy-health" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Pregnancy Health
                                        </Link>
                                        <Link to="/nutrition" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Nutrition
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div className="relative group">
                                <button
                                    className="flex items-center px-6 py-4 bg-cyan-700 text-white"
                                    onClick={() => handleDropdownToggle('resources')}
                                >
                                    All  Resources
                                    <span className="ml-1">▼    </span>
                                </button>
                                {activeDropdown === 'resources' && (
                                    <div className="absolute z-10 bg-white shadow-lg w-48">
                                        <Link to="/resources" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Resources
                                        </Link>
                                        <Link to="/ovulationCalendar" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Ovulation Calendar
                                        </Link>
                                        <Link to="/healthy-pregnancy-recipes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Healthy Recipes
                                        </Link>
                                        <Link to="/pregnancy-questions" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Pregnancy Questions
                                        </Link>
                                        <Link to="/nearby-hospitals" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Nearby Hospitals
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div className="relative group">
                                <button
                                    className="flex items-center px-6 py-4 bg-cyan-700 text-white"
                                    onClick={() => handleDropdownToggle('about')}
                                >
                                    About Us
                                    <span className="ml-1">▼</span>
                                </button>
                                {activeDropdown === 'about' && (
                                    <div className="absolute z-10 bg-white shadow-lg w-48">
                                        <Link to="/mission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Our Mission
                                        </Link>
                                        <Link to="/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Our Team
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div className="relative group">
                                <button
                                    className="flex items-center px-6 py-4 bg-cyan-700 text-white"
                                    onClick={() => handleDropdownToggle('register')}
                                >
                                    Register
                                    <span className="ml-1">▼</span>
                                </button>
                                {activeDropdown === 'register' && (
                                    <div className="absolute z-10 bg-white shadow-lg w-48">
                                        <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Login
                                        </Link>
                                        <Link to="/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Sign Up
                                        </Link>
                                    </div>
                                )}
                            </div>


                            {/* <div className="flex items-center ml-auto">

                                <Link to="/donate" className="flex items-center px-6 py-4 bg-green-600 text-white hover:bg-green-700">
                                    <FaHeart className="mr-2" />
                                    DONATE NOW
                                </Link>
                            </div> */}
                        </div>
                    </div>

                </div>




            </div>




        </div>
    );
};

export default Navbar;