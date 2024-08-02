import bannerbg5 from "../Images/bg-5.jpg";
import logo from "../Images/logo.png";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
const Contact = () => {
    return (
        <div>
            <div
            className="w-full h-full lg:h-[550px] flex flex-col-reverse md:flex-row items-center justify-center gap-4 lg:gap-28 p-5 lg:p-28" 
            style={{ 
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 10.0), rgba(0, 0, 0, 0)), url(${bannerbg5})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
                }}
            >
            {/* form */}
            <div className="bg-[#1d1d1dcc] p-10 h-full w-full">
                <h2 className="uppercase text-white  text-center font-extrabold text-2xl pb-6">Order Info</h2>
                <ul className="uppercase text-white font-extrabold text-base pb-6 list-disc text-left flex flex-col gap-5">
                    <li>Minumum Orders : <span className="text-red-600">100</span> </li>
                    <li>Maximum Orders : <span className="text-red-600">upto 600</span> </li>
                    <li>Est. Time : <span className="text-red-600">10 Days</span> (Negotiable) </li>
                    <li>Payment Support :<span className="text-red-600"> T/T, Paypal, Swiss Bank, Western Union, MoneyGram Paymet</span> </li>
                </ul>
            </div>
            <div className="w-full bg-[#1D24CAb2] p-8">
                <div>
                    <h2 className="uppercase text-white  text-center font-extrabold text-2xl pb-4">Fill the Form</h2>
                </div>
                <form className="flex flex-col gap-4">
                    <div className="flex gap-8">
                        <input type="text" className="block w-full mt-1 border border-gray-300 p-2 text-xl font-bold" placeholder="Full Name" />
                        <input type="text"  className="block w-full mt-1 border border-gray-300 p-2 text-xl font-bold" placeholder="Email" />
                    </div>
                    <div className="flex gap-8">
                        <select 
                            className="block w-full mt-1 border border-gray-300 p-2 text-xl font-bold"
                            
                        >
                            <option default >Models</option>
                            <option value="295 60R22.5">295 60R22.5</option>
                            <option value="295 70R22.5">295 70R22.5</option>
                            <option value="295 80R22.5">295 80R22.5</option>
                            <option value="315 60R22.5">315 60R22.5</option>
                            <option value="315 80R22.5">315 80R22.5</option>
                            <option value="315 70R22.5">385 50R19.5</option>
                            <option value="385 55R22.5">385 55R22.5</option>
                            <option value="385 65R22.5">385 65R22.5</option>
                            <option value="445 45R22.5">445 45R22.5</option>
                            <option value="11R22.5">11R22.5</option>
                        </select>
                        <select 
                            className="block w-full mt-1 border border-gray-300 p-2 text-xl font-bold"
                            
                        >
                            <option default >Brand</option>
                            <option value="DoubleCoin">DoubleCoin</option>
                            <option value="Redlux">Redlux</option>
                            <option value="Firestone">Firestone</option>
                            <option value="FairKing">FairKing</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" className="block w-full mt-1 border border-gray-300 p-2 text-xl font-bold" placeholder="Quantity (300 piece/pieces min order)" min={100} max={600}/>
                    </div>
                    <div>
                        <input type="text" className="block w-full mt-1 border border-gray-300 p-3 text-xl font-bold h-[7rem]"  placeholder="Type your message here: "/>
                    </div>
                    <button className="uppercase text-center font-extrabold text-2xl bg-white p-2 text-[#1D24CA] hover:bg-slate-300">
                        Submit
                    </button>
                </form>
            </div>
            </div>
            {/* company info */}
            <div className="mt-10 md:mt-28">
                <div className="flex flex-row-reverse gap-10 px-5 md:px-10 lg::px-20 items-center">
                    <div className="px-6 py-4 border-4 border-[#1D24CA]  text-2xl lg:text-4xl uppercase font-extrabold text-[#1D24CA]  w-full md:w-1/2 text-center" >Way to reach us!</div>
                    <div className="w-full hidden md:inline">
                        <hr className="border-2 border-[#1D24CA] rounded-full" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-end justify-evenly px-8 md:px-10 lg:px-20 py-10 gap-10 ">
                    <div className="w-52 md:w-96">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <FaMapLocationDot className="text-[#1D24CA]  text-5xl font-extrabold" />
                        <h1 className="text-[#1D24CA]  text-2xl font-extrabold">Location</h1>
                        <h1 className="text-[#1D242B] text-xl  font-semibold">House-1/2 (2nd floor) Block - C/JHA Section-6,</h1>
                        <h1 className="text-[#1D242B] text-xl  font-semibold">Dhaka, Bangladesh</h1>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-[#1D24CA]  text-2xl font-extrabold flex items-center gap-3">
                            <MdMarkEmailUnread className="text-[#1D24CA]  text-2xl font-extrabold" />
                            Email:   
                            <span className="text-[#1D242B] text-xl  font-semibold"> info@a2itbd.com</span></h1>
                        <h1 className="text-[#1D24CA]  text-2xl font-extrabold  flex items-center gap-3">
                            <FaPhoneSquareAlt className="text-[#1D24CA]  text-2xl font-extrabold" />
                            Phone: 
                            <span className="text-[#1D242B] text-xl  font-semibold"> +880 1846937397</span></h1>
                        <h1 className="text-[#1D24CA]  text-2xl font-extrabold  flex items-center gap-3">
                            <FaGlobe className="text-[#1D24CA]  text-2xl font-extrabold" />
                            Website: 
                            <span className="text-[#1D242B] text-xl  font-semibold"> a2itbd.com</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;