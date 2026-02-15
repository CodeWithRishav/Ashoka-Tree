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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95, rotateX: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: { 
        type: "spring", 
        damping: 18, 
        stiffness: 90,
        mass: 0.8
      }
    }
  };

  return (
    <section id="planted-by" className="min-h-screen py-24 bg-white/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-earth-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-earth-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center p-4 bg-earth-100 rounded-full mb-6 shadow-sm ring-4 ring-earth-50"
          >
            <Leaf className="w-8 h-8 text-earth-600" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-serif font-bold text-earth-900 mb-6 tracking-tight"
          >
            Planted by Members
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-earth-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A collaborative effort by the CBHDP Group students who dedicated their time and spirit to plant this sacred tree.
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
                y: -15,
                transition: { type: "spring", stiffness: 400, damping: 12 }
              }}
              className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-earth-100 hover:border-earth-300 hover:shadow-2xl hover:shadow-earth-200/50 transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-20 pointer-events-none"></div>

              {/* Decorative background leaf */}
              <Leaf className="absolute -bottom-6 -right-6 w-32 h-32 text-earth-100 opacity-20 group-hover:opacity-100 group-hover:text-earth-50 transition-all duration-500 rotate-[-15deg] group-hover:rotate-0 group-hover:scale-110 z-0" />
              
              <div className="flex items-start justify-between mb-5 relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360, backgroundColor: "#608653", color: "#ffffff" }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-2xl bg-earth-50 flex items-center justify-center text-earth-600 shadow-inner group-hover:shadow-lg transition-colors"
                >
                  <User className="w-6 h-6" />
                </motion.div>
                <span className="text-xs font-mono font-medium text-earth-500 bg-earth-50 px-3 py-1 rounded-lg border border-earth-100 group-hover:bg-earth-600 group-hover:text-white group-hover:border-earth-600 transition-colors duration-300">
                  #{String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-earth-900 group-hover:text-earth-700 transition-colors mb-2">
                  {member.name}
                </h3>
                
                {/* Animated underline */}
                <div className="h-0.5 w-12 bg-earth-200 mb-3 group-hover:w-full group-hover:bg-earth-400 transition-all duration-500"></div>
                
                <p className="text-sm text-earth-500 font-medium flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-earth-400 opacity-0 group-hover:opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-earth-300 group-hover:bg-earth-500 transition-colors"></span>
                  </span>
                  <span className="opacity-70 group-hover:opacity-100 transition-opacity">ENO:</span> {member.eno}
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