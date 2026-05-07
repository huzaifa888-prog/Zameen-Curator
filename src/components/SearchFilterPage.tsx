import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Search, Filter, Home, MapPin, 
  Map as MapIcon, List, Heart, ChevronDown, MessageCircle, User 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PROPERTIES } from '../types';
import { useSaved } from '../lib/SavedContext';

const SearchFilterPage: React.FC = () => {
  const navigate = useNavigate();
  const { toggleSaved, isSaved } = useSaved();
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000000]);
  const [minBeds, setMinBeds] = useState<number | null>(null);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = propertyType ? p.type === propertyType : true;
      const matchesPrice = p.priceNumeric >= priceRange[0] && p.priceNumeric <= priceRange[1];
      const matchesBeds = minBeds ? p.beds >= minBeds : true;
      
      return matchesSearch && matchesType && matchesPrice && matchesBeds;
    });
  }, [searchQuery, propertyType, priceRange, minBeds]);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="p-6 bg-white border-b border-gray-100 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 text-gray-600" />
          <h2 className="text-xl font-serif text-gray-900" onClick={() => navigate('/home')}>Zameen Curator</h2>
        </div>
        <div className="bg-slate-100 p-1.5 rounded-lg flex items-center gap-1">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=40&h=40" 
            alt="User"
            className="w-8 h-8 rounded-md object-cover"
          />
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto">
        <header className="mb-6">
           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Premium Inventory</span>
           <h1 className="text-3xl font-serif text-gray-900">Explore Curated Estates</h1>
        </header>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search location or estate name..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/20 shadow-sm"
          />
        </div>

        {/* Filter Chips & View Toggle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
           <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold whitespace-nowrap transition-colors ${showFilters ? 'bg-indigo-900 text-white border-indigo-900' : 'bg-white border-slate-200 text-slate-600'}`}
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              {['House', 'Apartment', 'Penthouse'].map(type => (
                <button 
                  key={type}
                  onClick={() => setPropertyType(propertyType === type ? null : type)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold whitespace-nowrap transition-colors ${propertyType === type ? 'bg-brand-gold text-white border-brand-gold' : 'bg-white border-slate-200 text-slate-600'}`}
                >
                  {type}
                </button>
              ))}
           </div>

           <div className="bg-slate-100 p-1 rounded-full flex items-center text-sm self-center md:self-auto">
             <button 
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${viewMode === 'list' ? 'bg-black text-white shadow-md' : 'text-gray-500'}`}
             >
                <List className="w-4 h-4" />
                List
             </button>
             <button 
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${viewMode === 'map' ? 'bg-black text-white shadow-md' : 'text-gray-500'}`}
             >
                <MapIcon className="w-4 h-4" />
                Map
             </button>
           </div>
        </div>

        {/* Expandable Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-bold text-gray-900">Price Range</span>
                    <span className="text-lg font-serif text-brand-gold">PKR {priceRange[0] / 100000}L — {priceRange[1] / 10000000}Cr</span>
                  </div>
                  <div className="relative h-2 bg-slate-100 rounded-full mb-8 mt-4 mx-2">
                    <div 
                      className="absolute bg-brand-gold rounded-full h-full" 
                      style={{ 
                        left: `${(priceRange[0] / 500000000) * 100}%`, 
                        right: `${100 - (priceRange[1] / 500000000) * 100}%` 
                      }} 
                    />
                    <input 
                      type="range" min="0" max="500000000" step="1000000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pointer-events-auto"
                    />
                    <input 
                      type="range" min="0" max="500000000" step="1000000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pointer-events-auto"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-400">
                    <span>MIN</span>
                    <span>MAX</span>
                  </div>
                </div>

                <div>
                   <span className="text-lg font-bold text-gray-900 block mb-4">Minimum Bedrooms</span>
                   <div className="flex gap-2">
                      {[2, 3, 4, 5, 6].map(num => (
                        <button 
                          key={num}
                          onClick={() => setMinBeds(minBeds === num ? null : num)}
                          className={`flex-1 py-3 rounded-xl border font-bold transition-colors ${minBeds === num ? 'bg-black text-white border-black' : 'bg-white border-slate-200 text-slate-500'}`}
                        >
                          {num}+
                        </button>
                      ))}
                   </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between">
                <button 
                  onClick={() => {
                    setPriceRange([0, 500000000]);
                    setMinBeds(null);
                    setPropertyType(null);
                  }}
                  className="text-sm font-bold text-slate-400 hover:text-gray-900"
                >
                  Reset All
                </button>
                <button 
                  onClick={() => setShowFilters(false)}
                  className="bg-black text-white px-8 py-3 rounded-xl text-sm font-bold"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6 px-2">
           <p className="text-sm text-slate-500">
              Found <span className="font-bold text-gray-900">{filteredProperties.length}</span> curated estates
           </p>
           <button className="flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-widest">
              Sort: Newest
              <ChevronDown className="w-3 h-3" />
           </button>
        </div>

        {/* Results List - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
           {filteredProperties.map((prop) => (
             <motion.div 
              key={prop.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/property/${prop.id}`)}
              className="group cursor-pointer"
             >
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-4 shadow-lg">
                   <img 
                    src={prop.imageUrl} 
                    alt={prop.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   <div className="absolute top-6 left-6 flex gap-2">
                      <div className="bg-yellow-400/90 text-[10px] font-extrabold px-3 py-1.5 rounded-lg flex items-center gap-1 text-gray-900 uppercase">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                      </div>
                   </div>
                   <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaved(prop.id);
                    }}
                    className={`absolute bottom-6 right-6 p-3 rounded-full backdrop-blur-md transition-all ${isSaved(prop.id) ? 'bg-white shadow-md' : 'bg-black/20 hover:bg-black/40'}`}
                   >
                     <Heart className={`w-6 h-6 transition-colors ${isSaved(prop.id) ? 'text-red-500 fill-current' : 'text-white'}`} />
                   </button>
                </div>
                <div className="px-2">
                   <div className="flex justify-between items-start">
                      <h3 className="text-xl font-serif text-gray-900 leading-tight group-hover:text-brand-gold transition-colors">{prop.title}</h3>
                      <span className="text-lg font-bold text-gray-900 ml-2 whitespace-nowrap">{prop.price}</span>
                   </div>
                   <p className="flex items-center gap-1 text-slate-500 text-[10px] mt-2 uppercase font-bold tracking-widest">
                     <MapPin className="w-3 h-3 text-brand-gold" /> {prop.location}
                   </p>
                   <div className="flex items-center gap-6 mt-4 text-slate-400 text-[10px] font-bold uppercase pt-4 border-t border-slate-100">
                      <span className="flex items-center gap-1.5"><Home className="w-3 h-3" /> {prop.beds} Beds</span>
                      <span className="flex items-center gap-1.5"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 11a1 1 0 011 1v1h14V4a1 1 0 011-1h2a1 1 0 011 1v15a1 1 0 01-1 1H5a1 1 0 01-1-1v-2H3a1 1 0 01-1-1v-2a1 1 0 011-1h1z" /></svg> {prop.baths} Baths</span>
                      <span className="flex items-center gap-1.5"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> {prop.sqft}</span>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-2xl font-serif text-gray-900 mb-2">No Properties Found</h3>
            <p className="text-slate-500">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-center justify-around py-4 px-6 z-50">
        <div onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <Search className="w-6 h-6 text-brand-gold" />
          <span className="text-[10px] font-bold text-brand-gold border-b-2 border-brand-gold pb-0.5">Search</span>
        </div>
        <div onClick={() => navigate('/saved')} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
          <Heart className="w-6 h-6" />
          <span className="text-[10px] font-medium">Saved</span>
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

// Simple checkcircle used instead of lucide one if missing or for variety
const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);

export default SearchFilterPage;

