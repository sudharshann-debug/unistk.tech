
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20geometric%20pattern%20with%20gears%2C%20tools%2C%20and%20maintenance%20symbols%20scattered%20across%20a%20light%20background%2C%20minimalist%20technical%20illustration%20with%20soft%20colors%20and%20clean%20lines%2C%20digital%20art%20style%20with%20subtle%20gradients&width=1920&height=1080&seq=maintenance-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center">
            <i className="ri-tools-fill text-3xl text-purple-600"></i>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Under Maintenance
          </h1>
          
          <div className="text-xl text-gray-600 mb-6">
            We're working hard to improve your experience{dots}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-rocket-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Performance</h3>
              <p className="text-sm text-gray-600">Optimizing for faster load times</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-palette-line text-2xl text-green-600"></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Design</h3>
              <p className="text-sm text-gray-600">Refreshing the user interface</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="ri-shield-check-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Security</h3>
              <p className="text-sm text-gray-600">Enhancing system protection</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-600">Progress</span>
              <span className="text-sm font-medium text-purple-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer">
            <i className="ri-mail-line mr-2"></i>
            Get Notified
          </button>
          
          <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors whitespace-nowrap cursor-pointer">
            <i className="ri-twitter-line mr-2"></i>
            Follow Updates
          </button>
        </div>

        <div className="mt-8 text-gray-500 text-sm">
          <p>Expected completion: <span className="font-medium text-purple-600">Coming Soon</span></p>
          <p className="mt-2">Questions? Contact us at <span className="font-medium text-purple-600">Cyberstudioz.in</span></p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}
