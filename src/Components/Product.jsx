import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {
    const [tires, setTires] = useState([]);

    useEffect(() => {
        fetch('tire.json')
            .then(res => res.json())
            .then(data => setTires(data))
            .catch(error => console.error('Error fetching tire data:', error));
    }, [setTires]);

    return (
        <div className="container mx-auto mt-28 px-10 md:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 px-4">
                {tires.map((tire) => (
                    <div key={tire.id} className="border border-gray-300 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                        <div className="relative group">
                            <img src={tire.image} alt={tire.model} className="w-full h-48 object-contain transition-transform duration-200 group-hover:scale-110" />
                        </div>
                        <h2 className="text-xl font-bold text-center mt-2">{tire.model}</h2>
                        <p className="text-center text-gray-700">{tire.Price} USD</p>
                        <div className="text-center mt-4">
                            <Link to={`/details/${tire.id}`} className="inline-block">
                                <Link 
                                to={`/tire/${tire.id}`}className="bg-white border-2 border-[#1D24CA] text-[#1D24CA] font-bold py-2 px-6 rounded hover:bg-[#1D24CA] transition-colors duration-200 hover:text-white">
                                    View Details
                                </Link>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
