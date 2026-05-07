import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, Heart, MessageCircle, User, MapPin } from 'lucide-react';
import { useSaved } from '../lib/SavedContext';
import { PROPERTIES } from '../types';

const SavedPage: React.FC = () => {
  const navigate = useNavigate();
  const { savedIds, toggleSaved } = useSaved();
  const savedProperties = PROPERTIES.filter(p => savedIds.includes(p.id));

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="p-6 bg-white border-b border-gray-100 flex items-center justify-between sticky top-0 z-40">
        <h2 className="text-2xl font-serif text-gray-900">Saved Properties</h2>
        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="p-6">
        {savedProperties.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
               <Heart className="w-10 h-10 text-indigo-300" />
            </div>
            <h3 className="text-xl font-serif text-gray-900 mb-2">No Saved Properties</h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Tap the heart icon on any property to save it here for later.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/search')}
              className="mt-8 bg-black text-white px-8 py-3 rounded-xl font-bold"
            >
              Start Exploring
            </motion.button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {savedProperties.map((prop) => (
              <motion.div 
                key={prop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/property/${prop.id}`)}
              >
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-4 shadow-lg">
                   <img 
                    src={prop.imageUrl} 
                    alt={prop.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaved(prop.id);
                    }}
                    className="absolute top-6 right-6 bg-white/80 p-3 rounded-full backdrop-blur-md shadow-sm"
                   >
                     <Heart className="w-5 h-5 text-red-500 fill-current" />
                   </button>
                </div>
                <div className="flex justify-between items-start px-2">
                   <div>
                      <h3 className="text-xl font-serif text-gray-900 leading-none">{prop.title}</h3>
                      <p className="flex items-center gap-1 text-slate-500 text-[10px] mt-2 uppercase tracking-widest font-bold">
                        <MapPin className="w-3 h-3 text-brand-gold" /> {prop.location}
                      </p>
                   </div>
                   <span className="text-xl font-bold text-gray-900">{prop.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-center justify-around py-4 px-6 z-50">
        <div onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium">Home</span>
        </div>
        <div onClick={() => navigate('/search')} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
          <Search className="w-6 h-6" />
          <span className="text-[10px] font-medium">Search</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <Heart className="w-6 h-6 text-brand-gold" />
          <span className="text-[10px] font-bold text-brand-gold border-b-2 border-brand-gold pb-0.5">Saved</span>
        </div>
        <div onClick={() => navigate('/chat')} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
          <MessageCircle className="w-6 h-6" />
          <span className="text-[10px] font-medium">Chat</span>
        </div>
        <div onClick={() => navigate('/agent/agent-1')} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium">Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default SavedPage;
