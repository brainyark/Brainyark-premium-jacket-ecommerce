import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ShoppingCart, Heart, Star, Truck, Shield, RotateCcw, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const { isAuthenticated } = useAuth();
  
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[0]);
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [product]);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/products" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Back to Products
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (isAuthenticated) {
      // In a real app, this would add the product to the cart
      console.log('Added to cart:', {
        product,
        color: selectedColor,
        size: selectedSize,
        quantity
      });
      
      // For demo purposes, we'll just show an alert
      alert(`Added ${quantity} ${product.name} to cart!`);
    } else {
      setShowAuthModal(true);
    }
  };
  
  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    // Add to cart after successful authentication
    console.log('Added to cart after auth:', {
      product,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
    alert(`Added ${quantity} ${product.name} to cart!`);
  };
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/products" className="hover:text-indigo-600">Products</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to={`/products?category=${product.category}`} className="hover:text-indigo-600">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-700">{product.name}</span>
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden bg-gray-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
            </div>
            
            <p className="text-2xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</p>
            
            <p className="text-gray-700 mb-8">{product.description}</p>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 rounded-full border ${
                      selectedColor === color 
                        ? 'border-indigo-600 ring-2 ring-indigo-600 ring-opacity-50' 
                        : 'border-gray-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <button className="text-sm text-indigo-600 hover:text-indigo-800">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-center rounded-md ${
                      selectedSize === size 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-l-md bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                >
                  -
                </button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 h-10 text-center border-t border-b border-gray-300"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-r-md bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart */}
            <div className="flex space-x-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button className="p-3 rounded-md border border-gray-300 hover:bg-gray-50">
                <Heart className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            
            {/* Product Features */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">2-year warranty on all products</span>
              </div>
              <div className="flex items-center">
                <RotateCcw className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default ProductDetail;