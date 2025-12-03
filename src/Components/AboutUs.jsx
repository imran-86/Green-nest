import React from 'react';

const AboutUs = () => {
    return (
        <div className="min-h-screen  py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About GreenHome
                    </h1>
                    <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
                </div>

                {/* Main Content */}
                <div className="space-y-8">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
                        <p className="text-gray-600 leading-relaxed">
                            GreenHome was born from a simple passion: bringing the beauty and benefits 
                            of nature into every home. What started as a small collection of indoor 
                            plants has grown into a community of plant lovers dedicated to making 
                            indoor gardening accessible, enjoyable, and rewarding for everyone.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To transform living spaces into green sanctuaries by providing 
                            healthy, beautiful plants and the knowledge needed to help them thrive.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                Provide quality indoor plants for every home
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                Educate and empower plant enthusiasts
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                Promote sustainable and green living
                            </li>
                        </ul>
                    </div>

                    {/* Team Section */}
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { name: 'Alex Morgan', role: 'Founder & Plant Expert' },
                                { name: 'Sarah Chen', role: 'Head Gardener' },
                                { name: 'Mike Rodriguez', role: 'Customer Care' }
                            ].map((member, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-bold mx-auto mb-3">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <h3 className="font-semibold text-gray-800">{member.name}</h3>
                                    <p className="text-sm text-gray-500">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                            <p className="mb-6">Have questions about plants or need care advice?</p>
                            <button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;