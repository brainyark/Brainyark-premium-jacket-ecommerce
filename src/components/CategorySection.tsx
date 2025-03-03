import React from 'react';
import { Link } from 'react-router-dom';

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Shop By Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden group h-96">
            <img 
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" 
              alt="Jackets" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Jackets</h3>
              <p className="text-gray-200 mb-4">Stylish jackets for every occasion</p>
              <Link 
                to="/products?category=jackets" 
                className="inline-block bg-white text-indigo-700 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden group h-96">
            <img 
              src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" 
              alt="Shoes" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Shoes</h3>
              <p className="text-gray-200 mb-4">Step up your game with our premium footwear</p>
              <Link 
                to="/products?category=shoes" 
                className="inline-block bg-white text-indigo-700 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;