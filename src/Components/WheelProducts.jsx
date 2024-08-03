import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WheelProduct = () => {
    const [wheels, setwheels] = useState([]);

    useEffect(() => {
        fetch('wheel.json')
            .then(res => res.json())
            .then(data => setwheels(data))
            .catch(error => console.error('Error fetching tire data:', error));
    }, [setwheels]);

    return (
        <div className="container mx-auto mt-28 px-10 md:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 px-4">
                {wheels.map((wheel) => (
                    <div key={wheel.id} className="border border-gray-300 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                        <div className="relative group">
                            <img src={wheel.image} alt={wheel.model} className="w-full h-48 object-contain transition-transform duration-200 group-hover:scale-110" />
                        </div>
                        <h2 className="text-xl font-bold text-center mt-2">{wheel.model}</h2>
                        <p className="text-center text-gray-700">{wheel.Price} USD</p>
                        <div className="text-center mt-4">
                            <Link to={`/wheel/${wheel.id}`} className="inline-block">
                                <Link 
                                to={`/wheel/${wheel.id}`}className="bg-white border-2 border-[#1D24CA] text-[#1D24CA] font-bold py-2 px-6 rounded hover:bg-[#1D24CA] transition-colors duration-200 hover:text-white">
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

export default WheelProduct;
