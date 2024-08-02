import { useState } from "react";
import bannerbg4 from "../Images/bg-4.jpg";
import { MdDeliveryDining } from "react-icons/md";
import { FaRegSquareFull } from "react-icons/fa6";
const About = () => {
    const [ searchby , setSearchBy ] = useState(true);
    const handleSearchSize = () =>{
        setSearchBy(true);
    }
    const handleSearchVehicle = () =>{
        setSearchBy(false);
    }
    return (
        <div >
            {/* banner section */}
            <div 
            className="w-full h-[550px] flex flex-col lg:flex-row items-center justify-center gap-10" 
            style={{ 
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${bannerbg4})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
                }}
            >
                {/* search options */}
                <div className="w-full px-5 md:px-10">
                <div className="uppercase text-white text-2xl font-extrabold text-center bg-[#040404b2] py-4 mb-3 ">
                        Search for tires
                </div>
                <div className="bg-[#040404b2] p-5 md:p-14 ">
                
                    {/* buttons */}
                    <div className="flex space-x-4">
                        <button 
                            onClick={handleSearchSize} 
                            className={`py-2 px-4 text-sm md:text-2xl font-extrabold ${searchby ? 'underline underline-offset-8 underline-[#1D24CA] text-[#1D24CA]' : 'text-white'}`}
                        >
                            TIRES BY SIZE
                        </button>
                        <button 
                            onClick={handleSearchVehicle} 
                            className={`py-2 px-4 text-sm md:text-2xl font-extrabold ${!searchby ? 'underline underline-offset-8 underline-[#1D24CA] text-[#1D24CA]' : 'text-white'}`}
                        >
                            TIRES BY VEHICLE
                        </button>
                    </div>
                    {
                        searchby === true ? 
                        <div className="flex justify-evenly gap-3 md:gap-8 pt-7">
                            <select 
                                className="block w-full mt-1 border border-gray-300 p-2 text-sm md:text-xl font-bold"
                                
                            >
                                <option value="">WIDTH</option>
                                <option value="155">155</option>
                                <option value="165">165</option>
                                <option value="175">175</option>
                                <option value="185">185</option>
                                <option value="195">195</option>
                                <option value="205">205</option>
                                <option value="215">215</option>
                                <option value="225">225</option>
                                <option value="235">235</option>
                                <option value="245">245</option>
                                <option value="255">255</option>
                                <option value="265">265</option>
                                <option value="275">275</option>
                                <option value="285">285</option>
                                <option value="295">295</option>
                                <option value="305">305</option>
                                <option value="315">315</option>
                                <option value="325">325</option>
                                <option value="335">335</option>
                                <option value="345">345</option>
                                <option value="355">355</option>
                            </select>
                            <select 
                                className="block w-full mt-1 border border-gray-300 p-3 text-sm md:text-xl font-bold"
                                
                            >
                                <option default >RATIO</option>
                                <option value="155">60</option>
                                <option value="165">70</option>
                                <option value="175">80</option>
                            </select>
                            <select 
                                className="block w-full mt-1 border border-gray-300 p-3 text-sm md:text-xl font-bold"
                                
                            >
                                <option value="">DIAMETER</option>
                                <option value="155">R15</option>
                            </select>
                        </div> : 
                        <div>
                            {/* select */}
                            <div className="flex justify-between gap-8 pt-7">
                            <select 
                                className="block w-full mt-1 border border-gray-300 p-3 text-sm md:text-xl font-bold"
                                
                            >
                                <option value="">YEAR</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                
                            </select>
                            <select 
                                className="block w-full mt-1 border border-gray-300 p-3 text-sm md:text-xl font-bold"
                                
                            >
                                <option value="">MAKE</option>
                                <option value="ACURA">ACURA</option>
                                <option value="ALFA ROMEO">ALFA ROMEO</option>
                                <option value="AUDI">AUDI</option>
                                <option value="BENTLEY">BENTLEY</option>
                                <option value="BMW">BMW</option>
                                <option value="BUICK">BUICK</option>
                                <option value="CADILLAC">CADILLAC</option>
                                <option value="CHEVROLET">CHEVROLET</option>
                                <option value="CHRYSLER">CHRYSLER</option>
                                <option value="DODGE">DODGE</option>
                                <option value="FIAT">FIAT</option>
                                <option value="FORD">FORD</option>
                                <option value="GENESIS">GENESIS</option>
                                <option value="GMC">GMC</option>
                                <option value="HONDA">HONDA</option>
                                <option value="HYUNDAI">HYUNDAI</option>
                                <option value="INFINITI">INFINITI</option>
                                <option value="JAGUAR">JAGUAR</option>
                                <option value="JEEP">JEEP</option>
                                <option value="KIA">KIA</option>
                                <option value="LAND ROVER">LAND ROVER</option>
                                <option value="LEXUS">LEXUS</option>
                                <option value="LINCOLN">LINCOLN</option>
                                <option value="MASERATI">MASERATI</option>
                                <option value="MAZDA">MAZDA</option>
                                <option value="MERCEDES-BENZ">MERCEDEES-BENZ</option>
                                <option value="MINI">MINI</option>
                                <option value="MITSUBISHI">MITSUBISHI</option>
                                <option value="NISSAN">NISSAN</option>
                                <option value="RAM">RAM</option>
                                <option value="ROLLS-ROYCE">MASERATI</option>
                                <option value="SUBARU">SUBARU</option>
                                <option value="TESLA">TESLA</option>
                                <option value="TOYOTA">TOYOTA</option>
                                <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                                <option value="VOLVO">VOLVO</option>
                            </select>
                            </div>
                            <div className="flex justify-between gap-8 pt-7">
                            <select 
                                className="block w-full mt-1 border border-gray-300 p-3 text-sm md:text-xl font-bold "
                                
                            >
                                <option value="">MODEL</option>
                                <option value="ARTEON">ARTEON</option>
                                <option value="ATLAS">ATLAS</option>
                                <option value="ATLAS CROSS SPORT">ATLAS CROSS SPORT</option>
                                <option value="GOLF">GOLF</option>
                                <option value="GTI">GTI</option>
                                <option value="JETTA">JETTA</option>
                                <option value="PASSAT">PASSAT</option>
                                <option value="TIGUAN">TIGUAN</option>
                            </select>
                            <select 
                                className="block w-full mt-1 border border-gray-300 p-3 text-sm md:text-xl font-bold"
                                
                            >
                                <option value="">OPTION</option>
                                <option value="UNITED EDITION 4MOTION">UNITED EDITION 4MOTION</option>
                                <option value="HIGHLINE 4MOTION">HIGHLINE 4MOTION</option>
                                <option value="TRENDLINE">TRENDLINE</option>
                                <option value="TRENDLINE 4MOTION">TRENDLINE 4MOTION</option>
                                <option value="COMFORTLINE 4MOTION">COMFORTLINE 4MOTION</option>
                            </select>
                            </div>
                        </div>
                    }
                </div>
                </div>
                {/* discount text */}
                <div className="w-full px-10">
                    <h1 className="uppercase text-2xl md:text-5xl italic text-white font-extrabold flex items-center gap-2 md:gap-6">Discount Up to 
                        <span className="uppercase text-5xl md:text-8xl text-red-600 font-extrabold">55%</span>
                    </h1>
                    <p className="uppercase text-xl md:text-3xl italic text-white font-extrabold flex items-center gap-3"> Free Home delivery <MdDeliveryDining className="text-5xl" /></p>
                </div>
            </div>
            {/* Info section */}
            <div className="text-[#1D242B] px-8 md:px-24 py-10 md:py-28">
                <div className="flex flex-col gap-8 pb-10">
                    <h1 className="uppercase text-3xl font-extrabold flex items-center gap-6">
                        <span className="text-red-600"><FaRegSquareFull /></span>All season tires
                    </h1>
                    <p className="text-base font-medium text-justify">
                    Save both time and money by purchasing your summer and all-season tires online. We offer discounts on a wide selection of premium quality tires, catering to all budgets, and delivering them across Canada. Whether you need tires for cars or trucks, we have a variety of models to meet your tire requirements. Our inventory includes touring, performance, light truck, and off-road products, all at the most competitive prices. Shop now to ensure you're prepared and safe for 2023!
                    </p>
                    <p className="text-base font-medium text-justify">
                    While the use of summer or all-season tires isn't mandatory, we strongly advise against using winter tires during the summer. It might be tempting to save money by using the same tires year-round, given that winter tires are mandatory. However, this approach is risky and not cost-effective. Winter tires are specifically designed for below-freezing temperatures, which means they can deteriorate faster in warmer weather. If your winter tires become worn out, it is illegal to drive with them.
                    </p>
                    <p className="text-base font-medium text-justify">
                    To prevent damage to your winter tires and ensure optimal performance, we highly recommend purchasing summer or all-season tires. Explore our inventory today and find the best products for your vehicle!
                    </p>
                </div>
                <div className="flex flex-col gap-8  pl-8 md:pl-14">
                    <h1 className="uppercase text-xl md:text-3xl font-extrabold flex items-center gap-6">
                        <span className="text-red-600"><FaRegSquareFull /></span>
                        TIRES: FROM TOP-QUALITY BRANDS
                    </h1>
                    <p className="text-base font-medium text-justify">
                    We proudly offer a selection of world-renowned, premium quality brands. Whether you're seeking the ultimate off-road adventure or a smooth touring experience, we have the perfect tires for you.
                    <br />
                    <br />
                    Among our top-tier brands, you'll find:
                    </p>
                    <ul className="text-[#1D24CA] list-disc pl-5 font-bold">
                        <li>Fairking</li>
                        <li>Firestone</li>
                        <li>Dublecoin</li>
                        <li>Roadlux</li>

                    </ul>
                    <h1 className="uppercase text-xl md:text-3xl font-extrabold flex items-center gap-6">
                        <span className="text-red-600"><FaRegSquareFull /></span>
                        Touring
                    </h1>
                    <p className="text-base font-medium text-justify">
                    The General Altimax RT45 is one of the top-selling all-season products on the market. Why? Its remarkable durability, quiet performance, and affordable price. If you're seeking a smooth ride and long-lasting quality, General could be the perfect brand for you.
                    </p>
                    <h1 className="uppercase text-xl md:text-3xl font-extrabold flex items-center gap-6">
                        <span className="text-red-600"><FaRegSquareFull /></span>
                        Performance
                    </h1>
                    <p className="text-base font-medium text-justify">
                    For sports cars and high-performance driving, Firestone’s Firehawk brand is an outstanding choice. These tires deliver exceptional performance on dry pavement, superior handling, excellent stability, and impressive capabilities.
                    </p>
                    <h1 className="uppercase text-xl md:text-3xl font-extrabold flex items-center gap-6">
                        <span className="text-red-600"><FaRegSquareFull /></span>
                        Off-road and all terrain
                    </h1>
                    <p className="text-base font-medium text-justify">
                    For off-road and all-terrain adventures, we highly recommend the BFGoodrich All Terrain KO2. This premium brand is approved for winter driving in Canada. Featuring CoreGard technology, these tires provide exceptional performance both on and off the road.
                    </p>
                    <h1 className="uppercase text-xl md:text-3xl font-extrabold flex items-center gap-6">
                        <span className="text-red-600"><FaRegSquareFull /></span>
                        WHY PURCHASE YOUR TIRES ONLINE WITH US?
                    </h1>
                    <p className="text-base font-medium text-justify">
                    Our mission is to ensure our clients equip their vehicles with the best models available on the market. We're proud to offer top-quality tires at prices that fit our customers' budgets.
                    </p>
                    <p className="text-base font-medium text-justify">
                    When you buy from us, you also receive the same guarantees as the manufacturers.
                    </p>
                    <p className="text-base font-medium text-justify">
                    To purchase the best summer tires for your vehicle, reach out to our experts.
                    </p>
                    <p className="text-base font-medium text-justify">
                    If you need assistance or have any questions about our products, please contact us. We are here to help!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;