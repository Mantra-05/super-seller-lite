import React from 'react';
import { Star, StarHalf, MessageSquare, ThumbsUp, ThumbsDown, MoreVertical, Search, Filter, ChevronDown } from 'lucide-react';

interface Review {
  id: number;
  customer: string;
  avatar: string;
  product: string;
  rating: number;
  date: string;
  comment: string;
  likes: number;
  dislikes: number;
  verified: boolean;
  status: 'positive' | 'neutral' | 'negative';
}

interface ReviewsProps {
  onNavigate: (item: string) => void;
}

const Reviews: React.FC<ReviewsProps> = ({ onNavigate }) => {
  // Sample review data - replace with actual API data
  const reviews: Review[] = [
    {
      id: 1,
      customer: 'John Smith',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      product: 'iPhone 15 Pro',
      rating: 4.5,
      date: '2024-06-10',
      comment: 'Great phone with amazing camera quality. Battery life could be better though.',
      likes: 24,
      dislikes: 2,
      verified: true,
      status: 'positive'
    },
    {
      id: 2,
      customer: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      product: 'MacBook Air M2',
      rating: 5,
      date: '2024-06-05',
      comment: 'Lightweight and powerful. Perfect for my work and studies. The battery lasts all day!',
      likes: 42,
      dislikes: 0,
      verified: true,
      status: 'positive'
    },
    {
      id: 3,
      customer: 'Mike Brown',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      product: 'AirPods Pro',
      rating: 3.5,
      date: '2024-05-28',
      comment: 'Good sound quality but the battery drains quickly. Comfortable to wear for long hours.',
      likes: 8,
      dislikes: 3,
      verified: false,
      status: 'neutral'
    }
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarHalf key={i} className="w-4 h-4 text-yellow-400 fill-current" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300 fill-current" />);
      }
    }
    
    return stars;
  };

  // Function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'positive':
        return 'bg-green-100 text-green-800';
      case 'negative':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Customer Reviews</h2>
          <p className="text-sm text-gray-500">Manage and respond to customer feedback</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search reviews..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Reviews</p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1">1,284</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="inline-flex items-center text-sm font-medium text-green-600">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 01-1.707-.707L10 5.586 8.707 6.88a1 1 0 01-1.414-1.415l2-2a1 1 0 011.414 0l2 2A1 1 0 0112 7z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M12 7a1 1 0 01.707 1.707l-2 2a1 1 0 01-1.414 0l-2-2A1 1 0 018.707 6.88L10 8.172l1.293-1.293A1 1 0 0112 7z" clipRule="evenodd" />
              </svg>
              12.5%
            </span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average Rating</p>
              <div className="flex items-center mt-1">
                <div className="flex">
                  {renderStars(4.2)}
                </div>
                <span className="ml-2 text-gray-900 font-semibold">4.2</span>
              </div>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>5 star</span>
              <span>65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
              <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Response Rate</p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1">92%</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <div className="text-sm text-gray-500">
                <span className="font-medium text-gray-900">84</span> of 92 reviews responded
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Reviews</h3>
            <div className="flex items-center space-x-3 mt-3 sm:mt-0">
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>All Products</option>
                <option>iPhone 15 Pro</option>
                <option>MacBook Air M2</option>
                <option>AirPods Pro</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>All Ratings</option>
                <option>5 Stars</option>
                <option>4 Stars</option>
                <option>3 Stars</option>
                <option>2 Stars</option>
                <option>1 Star</option>
              </select>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <img 
                    src={review.avatar} 
                    alt={review.customer}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-gray-900">{review.customer}</h4>
                      {review.verified && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          Verified Buyer
                        </span>
                      )}
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(review.status)}`}>
                        {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        {review.rating.toFixed(1)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Review for <span className="text-blue-600">{review.product}</span>
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </div>
              </div>
              
              <p className="mt-3 text-gray-700">
                {review.comment}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex space-x-4">
                  <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    <span>{review.likes}</span>
                  </button>
                  <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                    <ThumbsDown className="w-4 h-4 mr-1" />
                    <span>{review.dislikes}</span>
                  </button>
                  <button className="flex items-center text-sm text-blue-600 hover:text-blue-700">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    <span>Reply</span>
                  </button>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-2 sm:mb-0">
            Showing <span className="font-medium text-gray-700">1-{reviews.length}</span> of <span className="font-medium text-gray-700">128</span> reviews
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </button>
            <span className="px-2">...</span>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              8
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
