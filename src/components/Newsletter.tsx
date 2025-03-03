import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // In a real app, you would send this to your backend
    }
  };
  
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-purple-100 mb-8">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          
          {subscribed ? (
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-xl">Thanks for subscribing!</p>
              <p className="mt-2">You'll be the first to know about our latest products and offers.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md text-gray-900 w-full sm:w-auto sm:flex-1 max-w-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-medium px-6 py-3 rounded-md flex items-center justify-center transition-colors"
              >
                Subscribe <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;