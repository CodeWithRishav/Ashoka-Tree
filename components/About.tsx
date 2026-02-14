import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
import { Flower, Heart, Droplets, Wind, ChevronLeft, ChevronRight } from 'lucide-react';
import { TREE_INFO } from '../constants';

const galleryImages = [
  {
    url: "https://media.istockphoto.com/id/1284720085/photo/yellow-saraca-or-saracca-thaipingensis-cantley-ex-prain.jpg?s=612x612&w=0&k=20&c=hwagDPzs2Iym-vwqEHaRH8W9KLlCPZ8eQhPaNLK-cZw=",
    caption: "Vibrant Orange-Yellow Blooms"
  },
  {
    url: "https://cdn.create.vista.com/api/media/small/573930446/stock-photo-fresh-newly-growing-leaves-polyalthia-longifolia-ashoka-tree-native-india",
    caption: "Lush Green Medicinal Foliage"
  },
  {
    url: "https://lalitenterprise.com/cdn/shop/files/Ashoka_Pendula_Plant_4.webp?v=1766302074&width=1445",
    caption: "A Symbol of Peace in Nature"
  },
  {
    url: "https://media.istockphoto.com/id/1499852453/photo/saraca-asoca-commonly-known-as-the-ashoka-tree-is-the-state-flower-of-indian-state-of-odisha.jpg?s=612x612&w=0&k=20&c=8tqaxtYmUnmDEQF5RzDjV7rNxis8A7xwYnwqxzcWEWY=",
    caption: "Sacred groves and biodiversity"
  }
];

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const features = [
    { icon: <Heart className="w-6 h-6" />, title: "Symbolism", desc: "Love, Purity, New Beginnings" },
    { icon: <Flower className="w-6 h-6" />, title: "Appearance", desc: "Lush green leaves, orange flowers" },
    { icon: <Droplets className="w-6 h-6" />, title: "Ayurveda", desc: "Healing properties for health" },
    { icon: <Wind className="w-6 h-6" />, title: "Ecology", desc: "Improves air quality & biodiversity" },
  ];

  // Carousel State
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  const featureContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const featureItemVariants: Variants = {
    hidden: { opacity: 0, x: 50, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 20 }
    }
  };

  return (
    <section id="about-tree" className="min-h-screen relative py-24 overflow-hidden" ref={containerRef}>
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-b from-earth-50 via-white to-earth-100 opacity-80"></motion.div>
        <motion.div style={{ y }} className="absolute top-20 right-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></motion.div>
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }} className="absolute bottom-20 left-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></motion.div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Text Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-6xl font-serif font-bold text-earth-900 leading-tight">
                About the <br/>
                <span className="text-earth-600 italic">Ashoka Tree</span>
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-gradient-to-r from-earth-600 to-earth-300 rounded-full"
              />
            </motion.div>

            <div className="space-y-8">
              {TREE_INFO.description.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="text-lg text-earth-700 leading-relaxed border-l-2 border-earth-200 pl-6"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Cards / Features */}
          <motion.div 
            variants={featureContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={featureItemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
                className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50 transition-all duration-300 group cursor-default"
              >
                <div className="w-14 h-14 bg-earth-100 rounded-2xl flex items-center justify-center text-earth-600 mb-6 group-hover:bg-earth-600 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-earth-300/50 group-hover:shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">{feature.title}</h3>
                <p className="text-earth-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Gallery Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-white/30"
        >
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img 
                src={galleryImages[currentImage].url} 
                alt={galleryImages[currentImage].caption} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-earth-200 text-sm font-medium tracking-wider uppercase mb-2 block">Gallery View</span>
                  <p className="text-white text-2xl md:text-4xl font-serif italic">
                    {galleryImages[currentImage].caption}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-white/20 transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100 border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-white/20 transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100 border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-8 right-8 flex gap-3 z-10">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentImage ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60 w-2'
                }`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;