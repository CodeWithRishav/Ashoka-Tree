import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import PlantedBy from './components/PlantedBy';
import About from './components/About';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  // Simple state to handle smooth scrolling offset if needed, 
  // but standard ID scrolling usually suffices. 
  // We'll stick to native behavior with CSS scroll-behavior: smooth.

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Preload logic can be added here if needed, keeping it simple for now.

  return (
    <div className="antialiased text-slate-800 bg-earth-50 min-h-screen selection:bg-earth-200 selection:text-earth-900">
      
      {/* Navigation Bar (Floating) */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 120 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-center pointer-events-none"
      >
        <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/40 pointer-events-auto flex gap-6 items-center">
          <span className="font-serif font-bold text-earth-800 hidden sm:block">Ashoka</span>
          <div className="h-4 w-px bg-earth-200 hidden sm:block"></div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-medium text-earth-600 hover:text-earth-900 transition-colors">Home</button>
          <button onClick={() => scrollToSection('planted-by')} className="text-sm font-medium text-earth-600 hover:text-earth-900 transition-colors">Members</button>
          <button onClick={() => scrollToSection('about-tree')} className="text-sm font-medium text-earth-600 hover:text-earth-900 transition-colors">About</button>
        </div>
      </motion.nav>

      <main>
        <Hero 
          onScrollToPlantedBy={() => scrollToSection('planted-by')}
          onScrollToAbout={() => scrollToSection('about-tree')}
        />
        
        <PlantedBy />
        
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default App;