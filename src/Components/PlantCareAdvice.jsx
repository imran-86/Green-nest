import React from 'react';
import { Sun, Droplets, Thermometer, Sprout, Shield, AlertCircle, CheckCircle, Cloud, Wind } from 'lucide-react';

const PlantCareAdvice = () => {
    const careTips = [
        {
            id: 1,
            title: "Light Requirements",
            icon: <Sun className="w-6 h-6" />,
            description: "Different plants have different light needs. Learn to identify what your plant requires.",
            tips: [
                "Bright Direct Light: South-facing windows (6+ hours)",
                "Bright Indirect Light: East/West-facing windows (4-6 hours)",
                "Low Light: North-facing windows (2-4 hours)",
                "Rotate plants weekly for even growth",
                "Watch for signs: Leggy growth = needs more light, Bleached leaves = too much direct sun"
            ],
            color: "from-yellow-400 to-orange-500"
        },
        {
            id: 2,
            title: "Watering Guide",
            icon: <Droplets className="w-6 h-6" />,
            description: "Overwatering is the #1 killer of houseplants. Learn when and how to water properly.",
            tips: [
                "Check soil moisture: Finger test 2 inches deep",
                "Water when top 1-2 inches are dry",
                "Use room temperature water",
                "Water thoroughly until it drains from bottom",
                "Morning watering is best",
                "Reduce watering in winter (dormant period)"
            ],
            color: "from-blue-400 to-cyan-500"
        },
        {
            id: 3,
            title: "Temperature & Humidity",
            icon: <Thermometer className="w-6 h-6" />,
            description: "Maintain optimal conditions for your plant's health and growth.",
            tips: [
                "Ideal temperature: 65-75°F (18-24°C)",
                "Avoid cold drafts and heat vents",
                "Tropical plants need 50-60% humidity",
                "Use humidifiers or pebble trays",
                "Group plants to increase humidity",
                "Mist leaves in the morning only"
            ],
            color: "from-green-400 to-emerald-500"
        },
        {
            id: 4,
            title: "Soil & Fertilization",
            icon: <Sprout className="w-6 h-6" />,
            description: "The right soil and nutrients are essential for healthy plant growth.",
            tips: [
                "Use well-draining potting mix",
                "Repot every 1-2 years in spring",
                "Choose pots with drainage holes",
                "Fertilize during growing season (spring-summer)",
                "Use half-strength fertilizer monthly",
                "Flush soil every 3 months to remove salt buildup"
            ],
            color: "from-amber-500 to-yellow-600"
        },
        {
            id: 5,
            title: "Pest Prevention",
            icon: <Shield className="w-6 h-6" />,
            description: "Keep your plants healthy and pest-free with preventive care.",
            tips: [
                "Inspect new plants before bringing home",
                "Quarantine sick plants immediately",
                "Clean leaves regularly with damp cloth",
                "Use neem oil as natural pesticide",
                "Watch for spider mites, mealybugs, aphids",
                "Improve air circulation around plants"
            ],
            color: "from-purple-400 to-pink-500"
        },
        {
            id: 6,
            title: "Common Issues & Solutions",
            icon: <AlertCircle className="w-6 h-6" />,
            description: "Identify and solve common plant problems quickly.",
            tips: [
                "Yellow leaves: Overwatering or nutrient deficiency",
                "Brown tips: Low humidity or chemical in water",
                "Leaf drop: Sudden environmental change",
                "Slow growth: Needs more light or nutrients",
                "Root rot: Reduce watering immediately",
                "Wilting: Check for underwatering or root issues"
            ],
            color: "from-red-400 to-orange-500"
        }
    ];

    const seasonalCare = [
        {
            season: "Spring",
            tips: [
                "Increase watering frequency",
                "Start fertilizing schedule",
                "Best time for repotting",
                "Prune dead growth",
                "Watch for new growth"
            ]
        },
        {
            season: "Summer",
            tips: [
                "Water more frequently",
                "Protect from intense sun",
                "Continue regular fertilizing",
                "Increase humidity",
                "Check for pests regularly"
            ]
        },
        {
            season: "Autumn",
            tips: [
                "Reduce watering gradually",
                "Stop fertilizing by late fall",
                "Move plants away from cold windows",
                "Clean leaves before winter",
                "Prepare for dormancy"
            ]
        },
        {
            season: "Winter",
            tips: [
                "Water sparingly (once every 2-3 weeks)",
                "No fertilization needed",
                "Provide supplemental light",
                "Protect from cold drafts",
                "Group plants for humidity"
            ]
        }
    ];

    return (
        <div className="min-h-screen  py-12">
            <div className="w-10/12 mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Plant Care Guide
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Expert tips and advice to keep your plants healthy and thriving all year round
                    </p>
                </div>

                {/* Main Care Tips Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {careTips.map((tip) => (
                        <div
                            key={tip.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Card Header */}
                            <div className={`bg-gradient-to-r ${tip.color} p-6 text-white`}>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/20 rounded-xl">
                                        {tip.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{tip.title}</h3>
                                        <p className="text-white/90 mt-1">{tip.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Tips List */}
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {tip.tips.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Seasonal Care Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                        Seasonal Care Calendar
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {seasonalCare.map((season) => (
                            <div
                                key={season.season}
                                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                            >
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{season.season}</h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
                                </div>
                                <ul className="space-y-2">
                                    {season.tips.map((tip, index) => (
                                        <li key={index} className="flex items-center gap-2 text-gray-700">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Reference Table */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                        Quick Reference Guide
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="py-3 px-4 text-left font-semibold text-gray-700">Plant Type</th>
                                    <th className="py-3 px-4 text-left font-semibold text-gray-700">Light</th>
                                    <th className="py-3 px-4 text-left font-semibold text-gray-700">Water</th>
                                    <th className="py-3 px-4 text-left font-semibold text-gray-700">Humidity</th>
                                    <th className="py-3 px-4 text-left font-semibold text-gray-700">Difficulty</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="py-3 px-4 font-medium">Succulents & Cacti</td>
                                    <td className="py-3 px-4">Bright Direct</td>
                                    <td className="py-3 px-4">Every 2-3 weeks</td>
                                    <td className="py-3 px-4">Low (30-40%)</td>
                                    <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Easy</span></td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="py-3 px-4 font-medium">Tropical Plants</td>
                                    <td className="py-3 px-4">Bright Indirect</td>
                                    <td className="py-3 px-4">Weekly</td>
                                    <td className="py-3 px-4">High (50-60%)</td>
                                    <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Moderate</span></td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-medium">Low Light Plants</td>
                                    <td className="py-3 px-4">Low to Medium</td>
                                    <td className="py-3 px-4">Every 10-14 days</td>
                                    <td className="py-3 px-4">Medium (40-50%)</td>
                                    <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Easy</span></td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="py-3 px-4 font-medium">Flowering Plants</td>
                                    <td className="py-3 px-4">Bright Indirect</td>
                                    <td className="py-3 px-4">When top soil dry</td>
                                    <td className="py-3 px-4">Medium (40-50%)</td>
                                    <td className="py-3 px-4"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Challenging</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-1">
                        <div className="bg-white rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Need Personalized Advice?
                            </h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Our plant experts are here to help with specific care questions about your plants.
                            </p>
                            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                                Contact Plant Expert
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantCareAdvice;