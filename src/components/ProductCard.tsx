import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category }) => {
  const { isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  const handleAddToCart = () => {
    if (isAuthenticated) {
      // In a real app, this would add the product to the cart
      console.log('Added to cart:', { id, name, price, quantity: 1 });
      alert(`Added ${name} to cart!`);
    } else {
      setShowAuthModal(true);
    }
  };
  
  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    // Add to cart after successful authentication
    console.log('Added to cart after auth:', { id, name, price, quantity: 1 });
    alert(`Added ${name} to cart!`);
  };
  
  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <Link to={`/products/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-64 object-cover"
          />
        </Link>
        <div className="p-4">
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200 mb-2">
            {category}
          </span>
          <Link to={`/products/${id}`}>
            <h3 className="text-lg font-semibold mb-2 hover:text-purple-600 transition-colors">{name}</h3>
          </Link>
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-bold">${price.toFixed(2)}</p>
            <button 
              onClick={handleAddToCart}
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
};

export default ProductCard;