import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-between py-16 px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" 
          alt="Luxury Home" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="text-brand-accent p-4 mb-4">
           {/* Logo Icon Replacement */}
           <div className="w-16 h-16 border-2 border-brand-accent flex items-center justify-center">
             <div className="w-8 h-8 border-2 border-brand-accent"></div>
           </div>
        </div>
        <h1 className="text-white text-5xl font-serif text-center tracking-tight">
          Zameen Curator
        </h1>
        <p className="text-gray-300 mt-2 text-lg font-light">
          Find Your Dream Home
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-md flex flex-col gap-4">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/home')}
          className="w-full bg-brand-accent text-black font-semibold py-4 rounded-xl flex items-center justify-center gap-2 text-lg"
        >
          Get Started <span className="text-xl">→</span>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full border border-gray-600 text-white font-medium py-4 rounded-xl text-lg backdrop-blur-md"
        >
          Login
        </motion.button>

        <p className="text-gray-400 text-[10px] text-center uppercase tracking-[0.2em] mt-8">
          Exclusively for high-net-worth individuals
        </p>

        <div className="flex justify-center gap-1 mt-4">
          <div className="w-6 h-1 bg-brand-accent rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
