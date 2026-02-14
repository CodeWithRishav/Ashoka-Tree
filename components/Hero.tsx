import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDown, Info, Sprout } from 'lucide-react';
import { TREE_INFO } from '../constants';

interface HeroProps {
  onScrollToPlantedBy: () => void;
  onScrollToAbout: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToPlantedBy, onScrollToAbout }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 100 
      }
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-4 py-20 lg:py-0">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-earth-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
         <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
         <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-7xl z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Tree Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1 flex justify-center"
        >
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              rotate: [0, 1, -1, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8, 
              ease: "easeInOut" 
            }}
            className="relative w-full max-w-md aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl ring-8 ring-white/50 backdrop-blur-sm"
          >
            <img 
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop" 
              alt="Ashoka Tree" 
              className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-earth-200 text-earth-800 text-sm font-semibold tracking-wide mb-4 shadow-sm border border-earth-300/50">
                Nature's Blessing
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-serif font-bold text-earth-900 mb-2 tracking-tight"
            >
              {TREE_INFO.englishName}
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl lg:text-4xl font-serif text-earth-600 mb-4"
            >
              {TREE_INFO.hindiName}
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-xl lg:text-2xl font-serif italic text-earth-500 mb-8 flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="w-12 h-[2px] bg-gradient-to-r from-earth-400 to-transparent"></span>
              {TREE_INFO.biologicalName}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onScrollToPlantedBy}
                className="group relative px-8 py-4 bg-earth-700 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-earth-400/50 transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <span className="relative flex items-center gap-2 font-medium">
                  <Sprout className="w-5 h-5" />
                  Planted By
                </span>
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onScrollToAbout}
                className="group px-8 py-4 bg-white text-earth-800 border border-earth-200 rounded-xl hover:bg-earth-50 hover:border-earth-300 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="flex items-center gap-2 font-medium">
                  <Info className="w-5 h-5" />
                  About the Tree
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-earth-400"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;