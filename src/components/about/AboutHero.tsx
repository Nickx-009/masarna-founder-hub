
import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-masarna-orange/10"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-[5%] w-48 h-48 rounded-full bg-masarna-teal/10"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-masarna-orange to-masarna-teal bg-clip-text text-transparent">
              Meet Masarna
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your operational partner in building and scaling exceptional startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in operational excellence as a competitive advantage. 
              Our team of experienced operators helps you focus on what matters most—growing your business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
