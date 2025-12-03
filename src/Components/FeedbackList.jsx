import React from 'react';
import Marquee from "react-fast-marquee";

const FeedbackList = () => {
 
  const feedbackData = [
    {
      id: 1,
      name: "Sarah Johnson",
      feedback: "The snake plant I bought is thriving! Excellent quality and fast delivery. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      feedback: "My Monstera arrived in perfect condition. The care instructions were very helpful for a beginner like me.",
      rating: 4
    },
    {
      id: 3,
      name: "Emily Davis",
      feedback: "Amazing customer service! They helped me choose the perfect plants for my low-light apartment.",
      rating: 5
    },
    {
      id: 4,
      name: "Robert Wilson",
      feedback: "The expert advice saved my dying fiddle leaf fig! Will definitely shop here again.",
      rating: 3
    },
    {
      id: 5,
      name: "Lisa Martinez",
      feedback: "Beautiful plants, healthy and well-packaged. My indoor garden looks amazing now!",
      rating: 5
    },
    {
      id: 6,
      name: "David Thompson",
      feedback: "Great variety of plants. The delivery was faster than expected. Very satisfied!",
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="w-10/12 mx-auto p-6">
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Customer Feedback</h2>
        <p className="my-5 text-gray-600">What our customers are saying about us</p>
      </div>

     
      <div className="mb-8">
        <Marquee
          gradient={true}
          gradientColor="white"
          gradientWidth={100}
          speed={50}
          pauseOnHover={true}
        >
          {feedbackData.map((feedback) => (
            <div 
              key={feedback.id}
              className="mx-4 w-80 flex-shrink-0" 
            >
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  {renderStars(feedback.rating)}
                  <span className="text-sm text-gray-500 font-medium">
                    {feedback.rating}/5
                  </span>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed h-24 overflow-hidden">
                  "{feedback.feedback}"
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {feedback.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-800">{feedback.name}</h3>
                      <p className="text-sm text-gray-500">Customer</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    feedback.rating >= 4 ? 'bg-green-100 text-green-800' :
                    feedback.rating >= 3 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {feedback.rating >= 4 ? 'Excellent' : 
                     feedback.rating >= 3 ? 'Good' : 'Average'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

    
    </div>
  );
};

export default FeedbackList;