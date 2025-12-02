
import React from 'react';

const ExpertCard = ({ expert }) => {
    const { name, specialization, experience, image, bio, plantsCount } = expert;

    return (
        <div className="bg-white p-5 rounded-xl shadow-lg overflow-hidden hover:shadow-xl ">
           
            <div className="relative">
                <img 
                    src={image} 
                    alt={name}
                    className="w-full h-40 object-cover"
                />
                
                <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {experience}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
                <p className="text-green-600 font-semibold mb-3">{specialization}</p>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {bio}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                        {plantsCount}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ExpertCard;