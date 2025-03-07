import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 mr-2 text-purple-400" />
              <span className="text-xl font-bold">BrainyArk</span>
            </div>
            <p className="text-gray-400 mb-4">
              Elevate your style with our premium jackets and shoes. Where fashion meets innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=jackets" className="text-gray-400 hover:text-purple-400 transition-colors">Jackets</Link></li>
              <li><Link to="/products?category=shoes" className="text-gray-400 hover:text-purple-400 transition-colors">Shoes</Link></li>
              <li><Link to="/products?category=new" className="text-gray-400 hover:text-purple-400 transition-colors">New Arrivals</Link></li>
              <li><Link to="/products?category=sale" className="text-gray-400 hover:text-purple-400 transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">123 Fashion Street</p>
            <p className="text-gray-400 mb-2">Nairobi, Kenya</p>
            <p className="text-gray-400 mb-2">+254 114 595 589</p>
            <p className="text-gray-400 flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              antonywaithaka80@gmail.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 BrainyArk LMT. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Shipping Info</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;