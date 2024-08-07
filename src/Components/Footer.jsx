import logo from "../Images/trucktirelogo-removebg.png";
import { FaGlobe } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa6";
import brand2 from "../Images/brand2.png";
import brand3 from "../Images/brand3.png";
import brand4 from "../Images/brand4.png";
import brand1 from "../Images/brand1.png";
import { FaCcPaypal } from "react-icons/fa6";
import { RiMastercardFill } from "react-icons/ri";
const Footer = () => {
    return (
        <div className="mt-10 md:mt-28">
            <div className="flex flex-col md:flex-row items-start  justify-evenly gap-10 bg-[#1D24CA] p-8 md:py-10  md:px-10 lg:px-20">
                <div className="flex flex-col gap-4 text-left">
                    <h1 className="text-white text-2xl font-extrabold uppercase">Why Online Tires ?</h1>
                    <p className="text-white text-lg font-semibold">About Trucktire.com</p>
                    <p className="text-white text-lg font-semibold">Privacy Policy</p>
                    <p className="text-white text-lg font-semibold">Terms and Conditions</p>
                </div>
                <div className="flex flex-col gap-4 text-left">
                    <h1 className="text-white text-2xl font-extrabold uppercase">Support</h1>
                    <p className="text-white text-lg font-semibold">Tire Buying 101</p>
                    <p className="text-white text-lg font-semibold">Return/Refund Policy</p>
                    <p className="text-white text-lg font-semibold">Proper Tire Inflation and Tire Safety Checks</p>
                </div>
                <div className="flex flex-col gap-4  text-left">
                    <h1 className="text-white text-2xl font-extrabold uppercase">Contact</h1>
                    <p className="text-white text-lg font-semibold">+880 1846937397</p>
                    <p className="text-white text-lg font-semibold">info@a2itbd.com</p>
                    <p className="text-white text-lg font-semibold">a2itbd.com</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-evenly  gap-10 lg:gap-10 p-5 md:py-12 md:px-10 lg:px-24" >
                <div className="flex flex-col gap-10">
                    <div className="w-40 lg:w-72 md:pb-0">
                    <img src={logo} alt="logo" />
                    </div>
                    <h1 className="text-base md:text-xl font-extrabold uppercase">Connect with online tires</h1>
                    <div className="flex gap-3 justify-evenly text-3xl md:text-4xl">
                    <FaFacebookSquare />
                    <FaGlobe />
                    <FaLinkedin />
                    <FaInstagramSquare />
                    </div>
                    <div className="py-8 hidden md:inline">
                        <hr className="border-2 border-slate-900 mb-4" />
                        <h1 className=" text-base font-extrabold uppercase">© 2024 - Truck Tire. All Rights Reserved</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <FaMapLocationDot className="text-3xl md:text-5xl font-extrabold" />
                    <h1 className="text-xl font-extrabold uppercase">Location</h1>
                    <h1 className="text-[#1D242B] text-xl  font-semibold">House-1/2 (2nd floor) Block - C/JHA Section-6,</h1>
                    <h1 className="text-[#1D242B] text-xl  font-semibold">Dhaka, Bangladesh</h1>
                </div>
                <div className="flex flex-col gap-5 items-center text-center">
                    <h1 className=" text-xl font-extrabold uppercase">Payment Options</h1>
                    <div className="flex md:flex-col gap-3 justify-evenly items-center text-4xl md:text-5xl md:w-36">
                    <FaCcPaypal />
                    <FaCcVisa />
                    <RiMastercardFill />
                    <SiAmericanexpress />
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-5">
                    <h1 className=" text-xl font-extrabold uppercase">Trusted Brands</h1>
                    <div className="flex flex-col gap-4 justify-evenly text-4xl w-20 lg:w-36">
                    <img src={brand1} alt="" className="w-36" />
                    <img src={brand2} alt="" />
                    <img src={brand3} alt="" />
                    <img src={brand4} alt="" />
                    </div>
                </div>
                <div className="py-8 sm:inblock md:hidden">
                        <hr className="border-2 border-slate-900 mb-4" />
                        <h1 className=" text-base font-extrabold uppercase">© 2024 - Online Tires. All Rights Reserved</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;