import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
import bgdetails from "../Images/bgdetails.jpg";

const Details = () => {
    const tires = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    const [loading, setLoading] = useState(true);
    const [newTire, setNewTire] = useState(null); 
    const [quantity, setQuantity] = useState(100);
    const [total, setTotal] = useState(0);
    const [randomTires, setRandomTires] = useState([]);
    const [verified, setVerified] = useState(false);

    const getRandomTires = (tires, count) => {
        let shuffled = tires.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() => {
        setLoading(true); 
        setTimeout(() => {
            if (tires) {
                const foundTire = tires.find(tire => tire.id === intId);
                if (foundTire) {
                    setNewTire(foundTire);
                    setTotal(foundTire.price * 100); 
                    setRandomTires(getRandomTires(tires, 6));
                } else {
                    console.log(`Tire with id ${intId} not found`);
                }
            }
            setLoading(false); 
        }, 1000); 
    }, [tires, intId]);

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    if (!newTire) {
        console.log(`Tire with id ${intId} not found or tires data is undefined`);
        return <div>Error: Tire data not found</div>;
    }


    const handleOrder = e => {
        e.preventDefault();
        const username = e.target.elements.user_name.value;
        const number = e.target.elements.user_phone.value;
        const email = e.target.elements.user_email.value;
        const address = e.target.elements.address.value;
        const quantity = e.target.elements.quantity.value;
        const samplequantity = e.target.elements.samplequantity.value;
        const message = e.target.elements.message.value;
        const productName = newTire.name;
        const category = newTire.model;
        const price = newJutes.Price;
        
        // send message to whatsapp
        const whatsappNumber = "+8801871733305" 


        var url = "https://wa.me/" + whatsappNumber + "?text="
        + "*Name :* " + username + "%0a"
        + "*Number :* " + number + "%0a"
        + "*Email :* " + email + "%0a"
        + "*Address :* " + address + "%0a"
        + "*Product Name :* " + productName + "%0a"
        + "*Product Category :* " + category + "%0a"
        + "*Product Price :* " + price + "%0a"
        + "*Quantity :* " + quantity + "%0a"
        + "*Sample Quantity :* " + samplequantity + "%0a"
        + "*Note :* " + message + "%0a%0a";

        window.open(url, '_blank').focus();
        
    
    };

    // recapcha 
    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(true);
      }

    return (
        <div className="">
            <div 
                className="px-5 md:px-20" 
                style={{ 
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 10.0), rgba(0, 0, 0, 0)), url(${bgdetails})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
                }}>
            <div className="pt-16 flex flex-row- gap-6 md:gap-10 pb-10 items-center">
                <div className="px-2 py-4 border-4 border-[#ffffff] bg-[#0000008d]  text-2xl lg:text-4xl uppercase font-extrabold text-white w-full md:w-2/3 text-center">{newTire.model}</div>
                <div className="w-full hidden md:inline">
                    <hr className="border-2 border-[#ffffff] rounded-full" />
                </div>
            </div>
            {/* main product details */}
            <div className=" flex flex-col md:flex-row gap-6">
                {/* images */}
                <div className="w-full h-fit p-5 flex flex-col justify-top items-center border-4 border-[#1D24CA] bg-[#e2e8f05b]">
                    {/* bg-[#e2e8f072] */}
                    <div>
                        <img src={newTire.image} className="rounded-md object-contain object-center" />
                    </div>
                </div>
                {/* details */}
                <div className="w-full p-5 md:p-10 shadow-lg text-left flex flex-col gap-5 bg-[#040404c1] text-white">
                    {/* table 1 */}
                    <div className="overflow-x-auto">
                    <table className="table border-2 border-zinc-300">
                    <tbody>
                         {/* row 1 */}
                        <tr>
                            <td>Name: </td>
                            <td>{newTire.name}</td>
                        </tr>  
                         {/* row 2 */}
                        <tr>
                            <td>Model: </td>
                            <td>{newTire.model}</td>
                        </tr> 
                        {/* row 3 */}
                        <tr>
                            <td>Price:</td>
                            <td>{newTire.Price} $</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td>Rating: </td>
                            <td><span className="text-lg font-semibold flex gap-2 items-center"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> </span></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

                    {/* table 2 */}
                    <h1 className="text-xl font-semibold text-white">Specifications</h1>
                    <div className="overflow-x-auto ">
                        <table className="table border-2 border-zinc-300 bg-[#040404c1] text-white">
                            <tbody className="">
                                <tr>
                                    <td>Width:</td>
                                    <td>{newTire.Width}</td>
                                </tr>
                                <tr>
                                    <td>Diameter:</td>
                                    <td>{newTire.Diameter}</td>
                                </tr>
                                <tr>
                                    <td>Place of Origin:</td>
                                    <td>{newTire.PlaceofOrigin}</td>
                                </tr>
                                <tr>
                                    <td>Warranty:</td>
                                    <td>{newTire.Warranty}</td>
                                </tr>
                                <tr>
                                    <td>Type:</td>
                                    <td>{newTire.Type}</td>
                                </tr>
                                <tr>
                                    <td>Tire Design:</td>
                                    <td>{newTire.TireDesign}</td>
                                </tr>
                                <tr>
                                    <td>Rim Size:</td>
                                    <td>{newTire.RimSize}</td>
                                </tr>
                                <tr>
                                    <td>Tire Size:</td>
                                    <td>{newTire.TireSize}</td>
                                </tr>
                                <tr>
                                    <td>Brand Name:</td>
                                    <td>{newTire.BrandName}</td>
                                </tr>
                                <tr>
                                    <td>Speed Symbol:</td>
                                    <td>{newTire.SpeedSymbol}</td>
                                </tr>
                                
                                <tr>
                                    <td>Equipment:</td>
                                    <td>{newTire.Equipment}</td>
                                </tr>
                                <tr>
                                    <td>Certification:</td>
                                    <td>{newTire.Certification}</td>
                                </tr>
                                <tr>
                                    <td>Supply Ability:</td>
                                    <td>{newTire.SupplyAbility}</td>
                                </tr>
                                <tr>
                                    <td>Quantity (pieces):</td>
                                    <td>{newTire.Quantity}</td>
                                </tr>
                                <tr>
                                    <td>Lead time (days):</td>
                                    <td>{newTire.Leadtime}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <hr className="w-full border-2 mt-10" />
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/Contact" className="py-2 px-6 text-lg font-medium bg-[#1D24CA] text-white">Contact Supplier</Link>
                    </div>
                </div>
                {/* form */}
                <div className="p-5 md:p-8 h-fit shadow-lg text-left flex flex-col gap-5 bg-[#040404d7] text-white">
                    <h1 className="text-xl font-semibold text-white">Order here</h1>
                    <form onSubmit={handleOrder} className='flex flex-col w-full gap-5'>
                        <input type="text" name="user_name" placeholder='Name' className='py-1 px-5  border-[1px] border-zinc-400 bg-black text-base text-white' required />
                        <input 
                        type="tel" 
                        required 
                        name="user_phone"  
                        placeholder="WhatsApp Number" 
                        className="py-1 px-5  border-[1px] border-zinc-400 bg-black text-base text-white" 
                        onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                            }
                        }}
                        />
                        <input type="email" name="user_email" placeholder='Email' className='py-1 px-5  border-[1px] border-zinc-400 bg-black text-base text-white' />
                        <textarea type="text" name="address" placeholder='Write Your Address' className='py-1 px-5  border-[1px] border-zinc-400 bg-black text-base text-white' required></textarea>
                        
                        <select name="quantity" className="py-1 px-5 border-[1px] border-zinc-400 text-base bg-black  text-white" required>
                            <option value="">Select Quantity</option>
                            <option value="100">100</option>
                            <option value="100 -250 ">100 - 250</option>
                            <option value="250 - 500">250 - 500</option>
                            <option value="500 - 1000">500 - 1000</option>
                            <option value="1000 - 2500">1000 - 2500</option>
                            <option value="2500 - 5000">2500 - 5000</option>
                            <option value="5000 - 10000">5000 - 10000</option>
                            <option value="10000 - 20000">10000 - 20000</option>
                            <option value="20000+">20000+</option>
                        </select>
                        <select name="samplequantity" className="py-1 px-5 border-[1px] border-zinc-400 bg-black text-base text-white">
                            <option value="">Select Sample Quantity</option>
                            <option value="100 -250 ">50</option>
                            <option value="100 -250 ">50 - 100</option>
                            <option value="100 -250 ">100 - 250</option>
                            <option value="250 - 500">250 - 500</option>
                            <option value="500 - 1000">500 - 1000</option>
                            <option value="1000 - 2500">1000 - 2500</option>
                            <option value="2500 - 5000">2500 - 5000</option>
                            <option value="5000 - 10000">5000 - 10000</option>
                            <option value="10000 - 20000">10000 - 20000</option>
                            <option value="20000+">20000+</option>
                        </select>
                        <textarea type="text" name="message" placeholder='Any Message or change about product ?' className='py-1 px-5 border-[1px] border-zinc-400 bg-black text-base text-white'></textarea>
                        <ReCAPTCHA
                            sitekey="6LeJCxIqAAAAAHDpkzr3Rk8HFfig7jMmXxjepUaU"
                            onChange={onChange}
                            className="bg-black text-base text-white"
                        />
                        <button type="submit" value="Send" className=' text-white font-semibold py-2 px-6 hover:bg-slate-700 bg-[#1D24CA]' disabled={!verified}>Send</button>
                    </form>
                </div>
            </div>
            </div>
            {/* suggestion tires */}
            <div className="mt-10 md:mt-28">
                <div className="flex flex-row-reverse  gap-6 md:gap-10 px-5 md:px-20 items-center">
                    <div className="px-2 py-4 border-4 border-[#1D24CA]  text-2xl lg:text-4xl uppercase font-extrabold text-[#1D24CA] w-full md:w-2/3 text-center">Similar Tires</div>
                    <div className="w-full hidden md:inline">
                        <hr className="border-2 border-[#1D242B]" />
                    </div>
                </div>
                <div className="mt-10 md:mt-20 px-5 md:px-20">
                    <div className="flex flex-wrap justify-between text-center">
                        {randomTires.map(tire => (
                            <Link to={`/tire/${tire.id}`} key={tire.id} className="w-56 md:w-48  p-12 md:p-8 border border-gray-300 rounded-md m-2">
                                <div className="relative group">
                                    <img src={tire.image} alt={tire.model} className="w-full h-auto transition-transform duration-200 group-hover:scale-110" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        {tire.model}
                                    </div>
                                </div>
                                <h2 className="text-lg font-bold text-center mt-2">{tire.model}</h2>
                                <p className="text-center">{tire.price} USD</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
