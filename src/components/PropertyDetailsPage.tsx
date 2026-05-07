import React from 'react';
import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Share2, Heart, MapPin, 
  Bed, Bath, Layout, Layers, Phone, 
  MessageSquare, ChevronRight
} from 'lucide-react';
import { PROPERTIES, AGENTS } from '../types';
import { useSaved } from '../lib/SavedContext';

const PropertyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isSaved, toggleSaved } = useSaved();
  const property = PROPERTIES.find(p => p.id === id) || PROPERTIES[0];
  const agent = AGENTS.find(a => a.id === property.agentId) || AGENTS[0];

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Visual Hero */}
      <div className="relative h-[60vh] w-full">
        <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10">
          <button onClick={() => navigate(-1)} className="p-3 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            <button className="p-3 rounded-full bg-black/20 backdrop-blur-md text-white"><Share2 className="w-6 h-6" /></button>
            <button 
              onClick={() => toggleSaved(property.id)}
              className="p-3 rounded-full bg-black/20 backdrop-blur-md text-white"
            >
              <Heart className={`w-6 h-6 ${isSaved(property.id) ? 'text-red-500 fill-current' : ''}`} />
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="relative -mt-16 px-6 z-20">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 max-w-4xl mx-auto">
           <div className="flex justify-between items-start mb-2">
              <h1 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                {property.title} - <br /> {property.location.split(',')[0]}
              </h1>
              <div className="mt-2 bg-yellow-400 text-[10px] font-extrabold px-2 py-1 rounded flex items-center gap-1 uppercase">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Verified
              </div>
           </div>
           
           <div className="mb-6">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Asking Price</span>
             <p className="text-4xl font-bold text-gray-900">{property.price}</p>
           </div>

           <p className="flex items-center gap-2 text-slate-500 font-medium mb-8">
             <MapPin className="w-4 h-4 text-brand-gold" /> {property.location}
           </p>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'BEDS', val: property.beds, icon: Bed },
                { label: 'BATHS', val: property.baths, icon: Bath },
                { label: 'SQ.FT', val: property.sqft.split(' ')[0], icon: Layout },
                { label: 'TYPE', val: property.type, icon: Layers },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 rounded-3xl bg-indigo-50/50 border border-indigo-100/50">
                   <stat.icon className="w-5 h-5 text-brand-gold mb-2" />
                   <span className="text-lg font-bold text-gray-900 whitespace-nowrap">{stat.val}</span>
                   <span className="text-[8px] font-bold text-slate-400 tracking-tighter uppercase">{stat.label}</span>
                </div>
              ))}
           </div>

           <div onClick={() => navigate(`/agent/${agent.id}`)} className="flex items-center justify-between p-4 bg-slate-900 rounded-[1.5rem] mb-10 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold">
                  <img src={agent.imageUrl} alt={agent.name} className="w-full h-full object-cover" />
                </div>
                <div>
                   <h4 className="text-white font-medium leading-none mb-1">{agent.name}</h4>
                   <p className="text-[10px] text-slate-400">{agent.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                 <button className="p-2.5 rounded-full bg-slate-800 text-brand-gold group-hover:bg-slate-700 transition-colors"><Phone className="w-4 h-4" /></button>
                 <button className="p-2.5 rounded-full bg-slate-800 text-brand-accent group-hover:bg-slate-700 transition-colors"><MessageSquare className="w-4 h-4" onClick={(e) => { e.stopPropagation(); navigate('/chat'); }} /></button>
              </div>
           </div>

           <div className="mb-10">
              <h3 className="text-2xl font-serif mb-4">Overview</h3>
              <p className="text-slate-600 leading-relaxed font-light">{property.description || "Ideally located in the heart of the luxury district, this property offers a refined living experience. Featuring high-end finishes, bespoke architectural details, and breathtaking views, it represents the pinnacle of modern estate design."}</p>
              <button className="mt-4 flex items-center gap-1 text-[10px] font-extrabold text-brand-gold uppercase tracking-widest">
                Read More <ChevronRight className="w-3 h-3 rotate-90" />
              </button>
           </div>
        </div>
      </motion.div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-xl border-t border-slate-100 flex gap-4 z-50">
        <button className="flex-1 h-16 rounded-2xl bg-indigo-50 text-indigo-700 font-bold border border-indigo-100 shadow-sm" onClick={() => navigate('/chat')}>SCHEDULE VISIT</button>
        <button className="flex-1 h-16 rounded-2xl bg-slate-900 text-brand-gold font-bold shadow-xl" onClick={() => navigate('/chat')}>MAKE OFFER</button>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;

