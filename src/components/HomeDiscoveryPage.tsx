import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Heart, ChevronRight, Home, MessageCircle, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PROPERTIES } from '../types';
import { useSaved } from '../lib/SavedContext';

const HomeDiscoveryPage: React.FC = () => {
  const navigate = useNavigate();
  const { isSaved, toggleSaved } = useSaved();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="p-6 flex items-center justify-between bg-white border-b border-gray-100 sticky top-0 z-40">
        <h2 className="text-2xl font-serif text-gray-900 leading-none">Zameen Curator</h2>
        <div className="flex items-center gap-4">
          <Search className="w-6 h-6 text-gray-600" onClick={() => navigate('/search')} />
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6 max-w-7xl mx-auto">
        {/* Search Bar Placeholder */}
        <div className="relative mb-8">
          <div className="flex items-center bg-white rounded-2xl p-4 shadow-sm border border-gray-100 gap-3">
            <MapPin className="w-5 h-5 text-brand-accent" />
            <input 
              type="text" 
              placeholder="DHA Phase 6, Karachi" 
              className="flex-1 bg-transparent border-none outline-none text-gray-700"
              onClick={() => navigate('/search')}
              readOnly
            />
            <button className="bg-black text-white p-2 rounded-xl" onClick={() => navigate('/search')}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>
          </div>

          <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
            {['Buy', 'Rent', 'Commercial', 'New'].map((type, i) => (
              <button 
                key={type}
                onClick={() => navigate('/search')}
                className={`px-8 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-black text-white' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Properties Section */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Featured Properties</h3>
            <button 
              onClick={() => navigate('/search')}
              className="text-brand-gold font-medium text-sm transition-opacity hover:opacity-80"
            >
              View All
            </button>
          </div>
          
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
            {PROPERTIES.slice(0, 4).map((prop) => (
              <motion.div 
                key={prop.id}
                whileHover={{ y: -5 }}
                onClick={() => navigate(`/property/${prop.id}`)}
                className="min-w-[300px] bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer"
              >
                <div className="relative h-48">
                  <img src={prop.imageUrl} alt={prop.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-yellow-400/90 text-[10px] font-bold px-2 py-1 rounded text-gray-900 uppercase">
                    Verified
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaved(prop.id);
                    }}
                    className="absolute top-4 right-4 bg-white/80 p-2 rounded-full backdrop-blur-sm"
                  >
                    <Heart className={`w-4 h-4 ${isSaved(prop.id) ? 'text-red-500 fill-current' : 'text-gray-900'}`} />
                  </button>
                </div>
                <div className="p-4">
                  <span className="text-xl font-bold text-gray-900">{prop.price}</span>
                  <h4 className="text-lg font-serif mt-1">{prop.title}</h4>
                  <p className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                    <MapPin className="w-3 h-3" /> {prop.location}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-gray-600 text-[12px] pt-3 border-t border-gray-50">
                    <span className="flex items-center gap-1 opacity-80"><Home className="w-3 h-3" /> {prop.beds}</span>
                    <span className="flex items-center gap-1 opacity-80"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 11a1 1 0 011 1v1h14V4a1 1 0 011-1h2a1 1 0 011 1v15a1 1 0 01-1 1H5a1 1 0 01-1-1v-2H3a1 1 0 01-1-1v-2a1 1 0 011-1h1z" /></svg> {prop.baths}</span>
                    <span className="flex items-center gap-1 opacity-80"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> {prop.sqft}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Nearby You Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Nearby You</h3>
            <button onClick={() => navigate('/search')} className="text-brand-gold font-medium text-sm">Map View</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROPERTIES.slice(4, 12).map((prop, i) => (
              <motion.div 
                key={`${prop.id}-${i}`}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/property/${prop.id}`)}
                className="bg-indigo-50/50 p-4 rounded-3xl flex gap-4 border border-indigo-100 cursor-pointer"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={prop.imageUrl} alt={prop.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-bold text-gray-900">{prop.price}</span>
                    <Heart 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSaved(prop.id);
                      }}
                      className={`w-4 h-4 ${isSaved(prop.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
                    />
                  </div>
                  <h4 className="text-md font-serif mt-1 leading-tight">{prop.title}</h4>
                  <p className="flex items-center gap-1 text-gray-500 text-[12px] mt-1">
                    <MapPin className="w-3 h-3" /> {prop.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-center justify-around py-4 px-6 z-50">
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <Home className="w-6 h-6 text-brand-gold" />
          <span className="text-[10px] font-bold text-brand-gold border-b-2 border-brand-gold pb-0.5">Home</span>
        </div>
        <div 
          onClick={() => navigate('/search')}
          className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer"
        >
          <Search className="w-6 h-6" />
          <span className="text-[10px] font-medium">Search</span>
        </div>
        <div 
          onClick={() => navigate('/saved')}
          className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer"
        >
          <Heart className="w-6 h-6" />
          <span className="text-[10px] font-medium">Saved</span>
        </div>
        <div 
          onClick={() => navigate('/chat')}
          className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-[10px] font-medium">Chat</span>
        </div>
        <div 
           onClick={() => navigate('/agent/agent-1')}
          className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer"
        >
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium">Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default HomeDiscoveryPage;

