
import React, { useState } from 'react';
import ExpertCard from './ExpertCard';

const Experts = () => {
    
    const experts = [
        {
            id: 1,
            name: "Dr. Sarah Chen",
            specialization: "Tropical Plants Specialist",
            experience: "12+ years",
            image: "https://cdn.pixabay.com/photo/2018/05/29/18/16/dr-3439566_1280.jpg",
            bio: "Expert in tropical plant care and indoor gardening. Specializes in Monstera, Fiddle Leaf Figs, and rare tropical species.",
            plantsCount: "5000+ plants cared for"
        },
        {
            id: 2,
            name: "Michael Rodriguez",
            specialization: "Succulent & Cactus Expert",
            experience: "8+ years",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
            bio: "Passionate about drought-resistant plants. Expert in succulent propagation and desert plant care.",
            plantsCount: "3000+ succulents nurtured"
        },
        {
            id: 3,
            name: "Emily Watson",
            specialization: "Air Purifying Plants Guru",
            experience: "10+ years",
            image: "https://media.istockphoto.com/id/144877289/photo/pretty-woman.jpg?s=2048x2048&w=is&k=20&c=etuz_x_PZbIPOEqEu8rnouQhc7O2rSHbSpxzHwbASRE=",
            bio: "NASA-certified air purifying plant expert. Specializes in plants that improve indoor air quality.",
            plantsCount: "4000+ air purifying plants"
        },
        {
            id: 4,
            name: "David Kim",
            specialization: "Bonsai Master",
            experience: "15+ years",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
            bio: "Traditional bonsai artist with international recognition. Expert in miniature tree cultivation and styling.",
            plantsCount: "1000+ bonsai trees shaped"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Meet Our Green Experts
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get professional advice from our team of plant care specialists with years of experience
                    </p>
                </div>

               
                <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {experts.map(expert => (
                        <ExpertCard key={expert.id} expert={expert} />
                    ))}
                </div>

                
                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Need Personalized Plant Care Advice?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Our experts are here to help you with any plant care questions or issues you might have.
                        </p>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                            Book a Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experts;