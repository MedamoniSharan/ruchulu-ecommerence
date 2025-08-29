import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn more about our mission and values
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            {/* Story Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Story</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Founded with a vision to revolutionize the way people access and enjoy their daily essentials,
                    we've grown from a small startup to a trusted name in the industry. Our journey has been
                    driven by innovation, customer satisfaction, and a commitment to quality.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in making life easier for our customers while maintaining the highest standards
                    of service and product quality. Our team works tirelessly to ensure that every interaction
                    with our platform is seamless and enjoyable.
                  </p>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-lg overflow-hidden h-64 group"
                >
                  <img
                    src="/images/veg/veg1.jpg"
                    alt="Our Story"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Mission, Vision, Values Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 bg-gray-50 p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <p className="text-gray-600">
                  To provide convenient, reliable, and high-quality services that enhance our customers'
                  daily lives while maintaining sustainable business practices.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 bg-gray-50 p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                <p className="text-gray-600">
                  To become the leading platform for essential services, setting new standards in customer
                  experience and service delivery.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 bg-gray-50 p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
                <p className="text-gray-600">
                  Integrity, innovation, customer focus, and sustainability are the core values that guide
                  our every decision and action.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 