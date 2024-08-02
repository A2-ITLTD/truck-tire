import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Details = () => {
    const tires = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    const [loading, setLoading] = useState(true);
    const [newTire, setNewTire] = useState(null); 
    const [quantity, setQuantity] = useState(100);
    const [total, setTotal] = useState(0);
    const [randomTires, setRandomTires] = useState([]);

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

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
        setTotal(newTire.price * newQuantity);
    };

    return (
        <div>
            <div className="mt-16 flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-20 px-5 md:px-20">
                <div className="w-44 h-44 md:w-1/2 md:h-full  lg:px-20">
                    <img src={newTire.image} alt={newTire.model} className="w-40 h-40 md:w-full md:h-full" />
                </div>
                <div className="flex flex-col justify-end gap-8 w-full md:w-1/2">
                    <hr className="border-2 border-zinc-800" />
                    <div className="flex justify-between items-center ">
                        <h1 className="uppercase text-2xl text-[rgb(29,36,202)] font-extrabold">{newTire.model}</h1>
                        <h1 className="text-2xl font-extrabold">{newTire.price}</h1>
                    </div>
                    <hr className="border-2 border-zinc-800" />
                    <div className="flex flex-col md:flex-row gap-4 justify-end text-righ items-end md:items-center">
                        <label className="uppercase text-xl font-extrabold">Quantity: </label>
                        <input 
                            type="number" 
                            min={100} 
                            placeholder="min : 100" 
                            className="border-4 border-[#1D24CA] p-2"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                    </div>
                    <div className="text-right">
                        <h1 className="uppercase text-xl font-extrabold">Total: ${total}</h1>
                    </div>
                    <div className="text-right">
                        <button className="border-4 border-[#1D24CA] text-[#1D24CA] uppercase text-lg font-extrabold p-2 hover:bg-[#1D24CA] hover:text-white">Checkout</button>
                    </div>
                </div>
            </div>
            {/* suggestion tires */}
            <div className="mt-10 md:mt-28">
                <div className="flex flex-row-reverse  gap-6 md:gap-10 px-5 md:px-20 items-center">
                    <div className="px-2 py-4 border-4 border-[#1D24CA]  text-2xl lg:text-4xl uppercase font-extrabold text-[#1D24CA] w-full md:w-2/3 text-center">Similar Tires</div>
                    <div className="w-full hidden md:inline">
                        <hr className="border-2 border-[#1D242B] rounded-full" />
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
