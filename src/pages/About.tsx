import React from 'react';
import { Brain, Award, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Kenyan fashion team" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-indigo-100 mb-8">
              BrainyArk was founded with a simple mission: to create premium fashion that combines African heritage, style, comfort, and innovation.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            At BrainyArk, we believe that fashion should be both expressive and functional. Our mission is to create high-quality jackets and shoes that showcase African craftsmanship while empowering individuals to express their unique style with exceptional comfort and durability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center p-4 bg-indigo-100 text-indigo-600 rounded-full mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Craftsmanship</h3>
            <p className="text-gray-600">
              We partner with skilled Kenyan artisans to create products that blend traditional techniques with modern design, ensuring exceptional quality that stands the test of time.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center p-4 bg-indigo-100 text-indigo-600 rounded-full mb-4">
              <Sparkles className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovative Design</h3>
            <p className="text-gray-600">
              Our design team draws inspiration from Kenya's rich cultural heritage to create fashion that's both authentically African and globally appealing.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center p-4 bg-indigo-100 text-indigo-600 rounded-full mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
            <p className="text-gray-600">
              We're committed to sustainable practices and supporting local communities through fair employment and skills development programs across Kenya.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The BrainyArk Journey</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  BrainyArk was founded in 2018 by Antony Njangiru, a visionary entrepreneur from Nairobi who saw an opportunity to showcase Kenyan craftsmanship to the world through high-quality jackets and shoes.
                </p>
                <p>
                  What started as a small workshop in Nairobi has grown into a beloved brand with customers worldwide. Our commitment to quality, innovation, and authentic African design has remained unchanged, even as we've expanded our product lines and reach.
                </p>
                <p>
                  Today, BrainyArk continues to celebrate Kenyan heritage while pushing the boundaries of fashion, creating pieces that help our customers express their unique style while providing the comfort and durability they deserve.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1551856221-aa82fa4c6b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="BrainyArk workshop in Nairobi" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            The passionate individuals behind BrainyArk who work tirelessly to bring you the best in Kenyan fashion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src="https://th.bing.com/th/id/OIP.oQH88HihixliEBuSY6V41AHaE7?rs=1&pid=ImgDetMain" 
                alt="CEO" 
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Antony Njangiru</h3>
            <p className="text-indigo-600 mb-3">Founder & CEO</p>
            <p className="text-gray-600">
              With a passion for Kenyan craftsmanship and global fashion, Antony brings vision and leadership to BrainyArk.
            </p>
          </div>
          
          <div className="text-center">
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src="https://i.pinimg.com/736x/e1/fa/cb/e1facb09b976e735d3bd1f0d0a7ab928.jpg" 
                alt="Head of Design" 
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Dennis Githae</h3>
            <p className="text-indigo-600 mb-3">Head of Design</p>
            <p className="text-gray-600">
              Dennis's innovative designs blend traditional African aesthetics with contemporary style, establishing BrainyArk as a leader in fashion.
            </p>
          </div>
          
          <div className="text-center">
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src="https://i.pinimg.com/originals/60/17/37/60173700703f0c51e85ba4a1a945ef78.jpg" 
                alt="Production Manager" 
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Brian Maina</h3>
            <p className="text-indigo-600 mb-3">Production Manager</p>
            <p className="text-gray-600">
              Brian ensures that every BrainyArk product meets our high standards of quality while supporting local artisans.
            </p>
          </div>
          
          <div className="text-center">
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Marketing Director" 
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Ann Njeri</h3>
            <p className="text-indigo-600 mb-3">Marketing Director</p>
            <p className="text-gray-600">
              Ann's creative campaigns have helped bring Kenyan fashion to a global audience through authentic storytelling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;