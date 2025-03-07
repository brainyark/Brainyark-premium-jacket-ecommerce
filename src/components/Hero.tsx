import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Fashion background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Elevate Your Style with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-400">BrainyArk</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Discover our premium collection of jackets and shoes designed for those who dare to stand out. Crafted with innovation and style in mind.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/products?category=jackets" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 transition-colors"
            >
              Shop Jackets
            </Link>
            <Link 
              to="/products?category=shoes" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Shop Shoes
            </Link>
          </div>
        </div>
      </div>
      
      <div className="relative bg-gradient-to-r from-indigo-700 to-purple-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-lg font-medium mb-4 md:mb-0">
              New Summer Collection Available Now!
            </p>
            <Link 
              to="/products?category=new" 
              className="inline-flex items-center text-white bg-indigo-900 hover:bg-indigo-800 px-5 py-2 rounded-md transition-colors"
            >
              View Collection <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;