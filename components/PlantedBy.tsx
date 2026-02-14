import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Leaf, User } from 'lucide-react';
import { MEMBERS } from '../constants';

const PlantedBy: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        damping: 20, 
        stiffness: 90 
      }
    }
  };

  return (
    <section id="planted-by" className="min-h-screen py-24 bg-white/50 backdrop-blur-sm relative">
      <div className="container mx-auto max-w-7xl px-4">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center p-3 bg-earth-100 rounded-full mb-4"
          >
            <Leaf className="w-6 h-6 text-earth-600" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-earth-900 mb-4"
          >
            Planted by Members
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-earth-600 text-lg max-w-2xl mx-auto"
          >
            A collaborative effort by the CBHDP Group students who dedicated their time to plant this sacred tree.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="group relative bg-white rounded-2xl p-6 shadow-md border border-earth-100 hover:border-earth-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative background leaf */}
              <Leaf className="absolute -bottom-4 -right-4 w-24 h-24 text-earth-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-[-15deg]" />
              
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-earth-50 flex items-center justify-center group-hover:bg-earth-100 transition-colors duration-300">
                  <User className="w-6 h-6 text-earth-600" />
                </div>
                <span className="text-xs font-mono font-medium text-earth-400 bg-earth-50 px-2 py-1 rounded-md border border-earth-100">
                  #{index + 1}
                </span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-earth-900 group-hover:text-earth-700 transition-colors mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-earth-500 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-earth-400"></span>
                  ENO: {member.eno}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PlantedBy;