import bannerbg from "../Images/bg1.jpg";
import bannerbg2 from "../Images/bg2.jpg";
import bannerbg3 from "../Images/bg-3.jpg";
import tire from "../Images/tire.png";
import wheellogo from "../Images/car.png";
import truck from "../Images/express-delivery.png";
import install from "../Images/settings.png";
import brand2 from "../Images/brand2.png";
import brand3 from "../Images/brand3.png";
import brand4 from "../Images/brand4.png";
import brand1 from "../Images/brand1.png";
import poster1 from "../Images/poster1.png";
import poster2 from "../Images/poster2.jpg";
import poster3 from "../Images/poster3.jpg";
import poster4 from "../Images/poster4.jpg";
import track from "../Images/tire track.png";
import track3 from "../Images/track3.png";
import tabbg from "../Images/tab-bg.jpg";
import tabbg2 from "../Images/tab-bg2.jpg";
import tabbg3 from "../Images/tab-bg3.jpg";
import { FaArrowPointer } from "react-icons/fa6";
import 'animate.css';
import '../index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Banner = () => {

    const [tires, setTires] = useState([])
    const [wheels, setWheels] = useState([])
    useEffect(() =>{
            fetch('tire.json')
            .then(res => res.json())
            .then(data => setTires(data))
            fetch('wheel.json')
            .then(res => res.json())
            .then(data => setWheels(data))
    }, [setTires, setWheels]);

    const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
          chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
      };
    
      const tireGroups = chunkArray(tires, 4);
    
      const wheelGroups = chunkArray(wheels, 4);

    return (
        <div>
            {/* Banner */}
            <section>
                <div className="relative w-full h-[500px] shadow-2xl" 
                style={{ 
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${bannerbg2})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
                }}>
                    <div className="absolute  bottom-14 md:bottom-20 lg:bottom-12 px-10 lg:left-20  text-sm md:text-xl font-extrabold ">
                        <div className="text-white text-lg md:text-4xl lg:text-5xl uppercase mb-3 md:mb-12">
                            <h1>Find Your Way to Our Store</h1>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-4 lg:gap-8">
                            <Link to="/Product" className="bg-white py-2 md:py-2 px-2 md:px-6 border-4 border-[#1D24CA] bg-opacity-70 flex items-center gap-2">
                                <img src={tire} alt="tire" className="w-20 h-20" />
                                BUY TIRES</Link>
                            <Link to="/WheelProducts" className="bg-white py-2 md:py-2 px-2 md:px-6 border-4 border-[#1D24CA] bg-opacity-70 flex items-center gap-2">
                                <img src={tire} alt="tire" className="w-20 h-20" />
                                BUY WHEELS</Link>
                            <div className="bg-white py-2 md:py-2 px-2 md:px-6 border-4 border-[#1D24CA] bg-opacity-70 flex gap-3 items-center ">
                                <img src={tire} alt="tire" className="w-20 h-20"  />
                                <h1 className="flex flex-col items-center">PACKAGE <span>WHEELS AND TIRES</span></h1>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            {/* How it works */}
            <section className="mt-16 md:mt-28">
                <div className="flex gap-10 px-5 md:px-20 items-center">
                    <div className="px-6 py-4 border-4 border-[#1D24CA] md:text-2xl lg:text-4xl uppercase font-extrabold text-[#1D24CA] w-full lg:w-1/2 text-center" >How We Operate</div>
                    <div className="w-full hidden md:inline">
                        <hr className="border-2 border-[#1D24CA] rounded-full" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center gap-4 md:px-10 lg:gap-20 lg:px-36 pt-10">
                    <div className=" md:p-4 lg:p-10  flex flex-col justify-center items-center text-center">
                        <img src={wheellogo} alt="wheel icon" className="w-40 h-40" />
                        <h1 className="text-2xl uppercase font-extrabold pt-8 pb-4">Find What You Need</h1>
                        <p className="text-base font-semibold opacity-70 ">Find the things you need by using our simple search tools. Searches can be done by brand, size, or vehicle.</p>
                    </div>
                    <div className="p-10  flex flex-col justify-center items-center text-center">
                        <img src={truck} alt="wheel icon" className="w-40 h-40" />
                        <h1 className="text-2xl uppercase font-extrabold pt-8 pb-4">Get Fast Shipping</h1>
                        <p className="text-base font-semibold opacity-70 ">Your order can be shipped by us to any location in the US. Free delivery is offered on some items.
                        </p>
                    </div>
                    <div className="p-10 flex flex-col justify-center items-center text-center ">
                        <img src={install} alt="wheel icon" className="w-40 h-40" />
                        <h1 className="text-2xl uppercase font-extrabold pt-8 pb-4">Have It Expertly Installed</h1>
                        <p className="text-base font-semibold opacity-70">We have a nationwide network of installers who can expertly install our products, ensuring they meet our high standards of professionalism.
                        </p>
                    </div>
                </div>
            </section>
            {/* popular brands */}
            <section className="mt-32">
                <div>
                    <div className="flex flex-row-reverse gap-10 px-5 md:px-10 lg:px-20 items-center">
                        <div className="px-2 py-4 border-4 border-[#1D242B] md:text-2xl lg:text-4xl uppercase font-extrabold text-[#1D242B] w-full lg:w-2/3 text-center" >TOP SELLING BRANDS</div>
                        <div className="w-full hidden md:inline">
                            <hr className="border-2 border-[#1D242B] rounded-full " />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-full  h-96 md:h-80 mt-20 px-5 md:px-10 lg:px-20 blur-sm inset-0" style={{ 
                        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${bannerbg3})`,
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center'
                            }}>
                        </div>
                        <div className="absolute bottom-20  md:bottom-28 lg:bottom-20 flex flex-col md:flex-row items-center  md:justify-evenly  w-full">
                                <img src={brand1} alt="brand logo" className="w-28 lg:w-44 hover:cursor-zoom-in"/>
                                <img src={brand2} alt="brand logo"  className="w-28 lg:w-44"/>
                                <img src={brand3} alt="brand logo"  className="w-32 lg:w-56"/>
                                <img src={brand4} alt="brand logo" className="w-28 lg:w-44"/>
                        </div>
                    </div> 
                </div>
            </section>
            {/* Discounts */}
            <section  className="my-32">
                    <div className="relative">
                    <div className="flex gap-10 px-5 md:px-10 lg:px-20 items-center">
                        <div className="px-2 py-4 border-4 border-[#1D24CA] md:text-2xl lg:text-4xl uppercase font-extrabold text-[#1D24CA] w-full md:w-2/3 text-center" >Discounts</div>
                        <div className="w-full hidden md:inblock">
                            <hr className="border-2 border-[#1D242B] rounded-full" />
                        </div>
                    </div>
                    <div className="mt-20 md:px-10 lg:px-20">
                    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} interval={3000}>
                    <div className="flex flex-col md:flex-row justify-evenly md:h-44 gap-6 px-5 md:gap-6 lg:h-72">
                    <img src={poster1} alt="Poster 1" className="object-contain h-full"/>
                    <img src={poster2} alt="Poster 2" className="object-contain h-full"/>
                    <img src={poster3} alt="Poster 3" className="object-contain h-full"/>
                    <img src={poster4} alt="Poster 4" className="object-contain h-full"/>
                    </div>
                    </Carousel>
                    </div>
                    </div>
                    <div className="relative bottom-16 bg-[#1D24CA] h-48 -z-10 flex justify-between"> 
                        <img src={track} alt="" className="h-full w-64" />
                        <img src={track3} alt="" className="h-full w-72 hidden md:inblock" />
                    </div>
            </section>
            {/* why online tirees ? */}
            <section>
                <div className="flex gap-10 px-5 md:px-10 lg:px-20 items-center">
                    <div className="px-2 py-4 border-4 border-[#1D24CA] md:text-2xl lg:text-4xl uppercase font-extrabold text-[#1D24CA] w-full lg:w-2/3 text-center" >Why buy from Us ?</div>
                    <div className="w-full hidden md:inblock">
                        <hr className="border-2 border-[#1D242B] rounded-full" />
                    </div>
                </div>
                <div className="p-5 md:p-10 lg:p-20">
                    <Tabs>
                        <TabList className="flex flex-col md:flex-row justify-center text-current gap-4">
                        <Tab className="bg-[#1D242B] text-white lg:py-4 p-3 md:p-4  lg:px-8 text-sm md:text-base lg:text-xl font-extrabold " selectedClassName="         bg-[#1D24CA] text-white ">Affordable Tire Solutions</Tab>
                        <Tab className="bg-[#1D242B] text-white lg:py-4 p-3 md:p-4  lg:px-8 text-sm md:text-base lg:text-xl font-extrabold " selectedClassName="         bg-[#1D24CA] text-white ">Unbeatable Discounts on Tires</Tab>
                        <Tab className="bg-[#1D242B] text-white lg:py-4 p-3 md:p-4  lg:px-8 text-sm md:text-base lg:text-xl font-extrabold  " selectedClassName="         bg-[#1D24CA] text-white ">The Lowest Prices on Quality Tires</Tab>
                        </TabList>

                        <TabPanel>
                        <div className="w-full md:h-[500px] border-4 border-[#1D24CA] p-4 md:px-8 lg:px-14 flex justify-center items-center md:gap-5 lg:gap-24" style={{ 
                        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${tabbg})`,
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center'
                            }}>
                            <div className="flex flex-col gap-4 md:gap-8 lg:pt-24">
                                <h2 className="text-white text-base md:text-3xl lg:text-5xl font-extrabold">Get Affordable Tires from Us!</h2>

                                <p className="text-white text-xs md:text-base font-extrabold text-justify lg:pr-96">Our mission is to satisfy our customers by saving you money and delivering the best value possible. Skeptical? Try us out and see for yourself. We believe our competitive prices and unmatched service will perfectly meet your needs.</p>

                                <h2 className="text-white text-xs md:text-2xl lg:text-4xl font-extrabold flex gap-2 items-center bg-[#1D24CA] p-3 w-fit">FIND YOUR NEW TIRES WITH A SINGLE CLICK! <FaArrowPointer /></h2>
                            </div> 
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="w-full md:h-[500px] border-4 border-[#1D24CA] p-4 md:px-8 lg:px-14 flex justify-center items-center md:gap-5 lg:gap-24" style={{ 
                        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${tabbg2})`,
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center'
                            }}>
                            <div className="flex flex-col gap-4 md:gap-8 lg:pt-24">
                                <h2 className="text-white text-base md:text-3xl lg:text-5xl font-extrabold">Huge Savings on Tires!</h2>

                                <p className="text-white text-xs md:text-base font-extrabold text-justify lg:pr-96">With direct ties to manufacturers and strong relationships with tire companies, we’re able to offer substantial discounts. Enjoy extra savings when purchasing wheel and tire packages! At onlinetires.com, we proudly show the savings you get. Browse your favorite brands and see for yourself how we provide unmatched prices.</p>

                                <h2 className="text-white text-xs 
                                md:text-2xl lg:text-4xl font-extrabold flex gap-2 items-center bg-[#1D24CA] p-3 w-fit">FIND YOUR NEW TIRES WITH A SINGLE CLICK! <FaArrowPointer /></h2>
                            </div> 
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="w-full h-[500px] border-4 border-[#1D24CA] md:p-8 lg:px-14 flex justify-center items-center  gap-5 lg:gap-24" style={{ 
                        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${tabbg3})`,
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center'
                            }}>
                            <div className="flex flex-col gap-8 lg:pt-24">
                                <h2 className="text-white md:text-2xl lg:text-5xl font-extrabold">Lowest Prices on Tires Guaranteed!</h2>

                                <p className="text-white text-base font-extrabold text-justify lg:pr-96">At onlinetires.com, we’re dedicated to you. Our mission is to provide the best tire brands for your vehicle at unbeatable prices. We bypass middlemen and deal directly with manufacturers to guarantee you won’t overpay for top-quality, long-lasting tires. We handle the hard work so you can shop stress-free! Explore our selection knowing you’re getting the best prices available.</p>

                                <h2 className="text-white md:text-2xl lg:text-4xl font-extrabold flex gap-2 items-center bg-[#1D24CA] p-3 w-fit">FIND YOUR NEW TIRES WITH A SINGLE CLICK! <FaArrowPointer /></h2>
                            </div> 
                        </div>
                        </TabPanel>
                    </Tabs>
                    </div>
            </section>

            {/* Tires */}
            <section className="mt-28">
                <div className="flex flex-row-reverse gap-10 px-5 md:px-10 lg:px-20 items-center">
                    <div className="px-2 py-4 border-4 border-[#1D24CA] md:text-2xl lg:text-4xl uppercase font-extrabold text-[#1D24CA] w-full lg:w-2/3 text-center" >Tires</div>
                    <div className="w-full hidden md:inline">
                        <hr className="border-2 border-[#1D242B] rounded-full" />
                    </div>
                </div> 
                <div className="mt-20 px-10 lg:px-20">
                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} interval={3000}>
                    {
                    tireGroups.map((group, index) => (
                    <div key={index} className="flex  flex-col md:flex-row justify-evenly">
                        {
                        group.map((tire, idx) => (
                        <Link to={`/tire/${tire.id}`} className="relative w-44 h-full hover:scale-125 transform transition-transform duration-300" title={tire.model}>
                            <img src={tire.image} alt={tire.model} className="w-28 h-full"/>
                        </Link>
                        ))
                        }
                    </div>
                    ))
                    }
                </Carousel>
                </div>       
            </section>

            {/* Wheels */}
            <section className="mt-28">
                <div className="flex flex-row gap-10 px-5 md:px-10 lg:px-20 items-center">
                    <div className="px-2 py-4 border-4 border-[#1D24CA] md:text-2xl lg:text-4xl uppercase font-extrabold text-[#1D24CA] w-full lg:w-2/3 text-center" >Wheels</div>
                    <div className="w-full hidden md:inline">
                        <hr className="border-2 border-[#1D242B] rounded-full" />
                    </div>
                </div>
                <div className="mt-20 px-10 lg:px-20">
                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} interval={3000}>
                    {
                    wheelGroups.map((group, index) => (
                    <div key={index} className="flex  flex-col md:flex-row justify-evenly">
                        {
                        group.map((wheel, idx) => (
                        <Link to={`/tire/${wheel.id}`} className="relative w-44 h-full hover:scale-125 transform transition-transform duration-300" title={wheel.model}>
                            <img src={wheel.image} alt={wheel.name} className="w-28 h-full"/>
                        </Link>
                        ))
                        }
                    </div>
                    ))
                    }
                </Carousel>
                </div>       
            </section>
        </div>
    );
};

export default Banner;