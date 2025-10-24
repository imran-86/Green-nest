import React from 'react';

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
      feedback:  "Amazing customer service! They helped me choose the perfect plants for my low-light apartment.",
      rating: 5
    },
    {
      id: 4,
      name: "Robert Wilson",
      feedback: "The expert advice saved my dying fiddle leaf fig! Will definitely shop here again.",
      rating: 3
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
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Customer Feedback</h2>
        <p className="text-gray-600">What our customers are saying about us</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feedbackData.map((feedback) => (
          <div
            key={feedback.id}
            className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              {renderStars(feedback.rating)}
              <span className="text-sm text-gray-500 font-medium">
                {feedback.rating}/5
              </span>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
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
        ))}
      </div>

      
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-800">{feedbackData.length}</div>
            <div className="text-sm text-gray-600">Total Reviews</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800">
              {(feedbackData.reduce((sum, item) => sum + item.rating, 0) / feedbackData.length).toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800">
              {feedbackData.filter(item => item.rating >= 4).length}
            </div>
            <div className="text-sm text-gray-600">Positive Reviews</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800">
              {feedbackData.filter(item => item.rating <= 3).length}
            </div>
            <div className="text-sm text-gray-600">Needs Improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackList;