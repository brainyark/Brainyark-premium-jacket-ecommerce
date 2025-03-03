import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Brain, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">BrainyArk</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-purple-200 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-purple-200 transition-colors">Products</Link>
            <Link to="/about" className="hover:text-purple-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-purple-200 transition-colors">Contact</Link>
            
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={toggleProfileMenu}
                  className="flex items-center hover:text-purple-200 transition-colors focus:outline-none"
                >
                  <span className="mr-2">{user?.name}</span>
                  <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                </button>
                
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <Link 
                      to="/orders" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Your Orders
                    </Link>
                    <button 
                      onClick={() => {
                        logout();
                        setIsProfileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login" 
                className="hover:text-purple-200 transition-colors flex items-center"
              >
                <User className="h-5 w-5 mr-1" />
                Sign In
              </Link>
            )}
            
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 hover:text-purple-200 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-indigo-900 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">0</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-indigo-600" onClick={toggleMenu}>Home</Link>
            <Link to="/products" className="block px-3 py-2 rounded-md hover:bg-indigo-600" onClick={toggleMenu}>Products</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-indigo-600" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-indigo-600" onClick={toggleMenu}>Contact</Link>
            <Link to="/cart" className="block px-3 py-2 rounded-md hover:bg-indigo-600" onClick={toggleMenu}>Cart</Link>
            
            {isAuthenticated ? (
              <>
                <div className="px-3 py-2 text-white font-medium border-t border-indigo-700 mt-2 pt-2">
                  Signed in as {user?.name}
                </div>
                <Link to="/profile" className="block px-3 py-2 rounded-md hover:bg-indigo-600" onClick={toggleMenu}>Your Profile</Link>
                <Link to="/orders" className="block px-3 py-2 rounded-md hover:bg-indigo-600" onClick={toggleMenu}>Your Orders</Link>
                <button 
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-indigo-600 text-white"
                >
                  <div className="flex items-center">
                    <LogOut className="h-5 w-5 mr-2" />
                    Sign out
                  </div>
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="block px-3 py-2 rounded-md hover:bg-indigo-600 border-t border-indigo-700 mt-2 pt-2" 
                onClick={toggleMenu}
              >
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Sign In
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;