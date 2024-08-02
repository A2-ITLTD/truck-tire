import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="w-ful">
            {/* 1st navbar */}
            <div className="bg-[#1D242B] text-white font-semibold text-xs md:text-base py-2  px-5 md:px-20 flex justify-center md:justify-end gap-5 md:gap-10 ">
                <button className="flex items-center gap-1 md:gap-2 hover:text-[#dae155]"><RiAccountCircleFill /> Create Account</button>
                <button className="flex items-center gap-1 md:gap-2 hover:text-[#dae155]"> <IoLogIn />Login</button>
                <p className="hover:text-[#dae155]">Call or Text (+880 1846937397)</p>
            </div>
            {/* main navbar */}
            <div className="px-4 lg:px-20 py-2 md:py-3 text-sm lg:text-xl font-extrabold text-[#1D242B] flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
                <div>
                    <img src={logo} alt="logo" className="h-10 md:h-24" />
                </div>
                <div>
                    <ul className="flex gap-2 lg:gap-10 pb-2 md:pb-0">
                        <Link to="/" className="hover:text-[#1D24CA]">HOME</Link>
                        <Link  to="/About" className="hover:text-[#1D24CA]">ABOUT</Link>
                        <Link  to="/About" className="hover:text-[#1D24CA]">WHEELS</Link>
                        <div className="dropdown">
                        <Link to="/Product" tabIndex={0} role="button" className="hover:text-[#1D24CA]">TIRES</Link>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-3 shadow flex flex-col gap-2">
                            <Link className="hover:text-[#1D24CA]"><a>11R22.5</a></Link>
                            <Link className="hover:text-[#1D24CA]"><a>295 60R22.5</a></Link>
                            <Link className="hover:text-[#1D24CA]"><a>295 70R22.5</a></Link>
                            <Link className="hover:text-[#1D24CA]"><a>295 80R22.5</a></Link>
                            <Link className="hover:text-[#1D24CA]"><a>315 60R22.5</a></Link>
                            <Link className="hover:text-[#1D24CA]"><a>315 70R22.5</a></Link>
                            <Link className="hover:text-[#1D24CA]"><a>315 80R22.5</a></Link>
                            <Link className="hover:text-[#1D24CA]"><a>385 55R22.5</a></Link>
                            <Link className="hover:text-[#1D24CA]"><a>385 65R22.5</a></Link>
                            <Link className="hover:text-[#1D24CA]"><a>385 50R19.5</a></Link>
                            <Link className="hover:text-[#1D24CA]"><a>445 45R22.5</a></Link>
                        </ul>
                        </div>
                        <Link to="/Contact" className="hover:text-[#1D24CA]">CONTACT</Link>
                    </ul>
                </div>
            </div>
            <div className="bg-[#1D24CA] py-3 text-white font-semibold text-sm md:text-lg text-center">
                <p className="tracking-normal hover:tracking-wider hover:transition duration-500">Enjoy Free Shipping On All Tire And Wheel Purchase</p>
            </div>
        </div>
    );
};

export default Navbar;
