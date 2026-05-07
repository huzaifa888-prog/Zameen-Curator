import React from 'react';
import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Share2, Star, MapPin, 
  Phone, MessageSquare, Heart, Home,
  Search, MessageCircle, User, CheckCircle
} from 'lucide-react';
import { AGENTS, PROPERTIES } from '../types';

const AgentInformationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const agent = AGENTS.find(a => a.id === id) || AGENTS[0];
  const agentProperties = PROPERTIES.filter(p => p.agentId === agent.id);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Visual Hero */}
      <div className="relative h-[40vh] w-full">
        <img 
          src={agentProperties[0]?.imageUrl || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"} 
          alt="Agent Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10">
          <button onClick={() => navigate(-1)} className="p-3 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            <button className="p-3 rounded-full bg-black/20 backdrop-blur-md text-white"><Share2 className="w-6 h-6" /></button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent" />
      </div>

      {/* Profile Card */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative -mt-24 px-6 z-20"
      >
        <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-slate-100 flex flex-col items-center text-center">
            <div className="relative mb-6">
               <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl">
                 <img src={agent.imageUrl} alt={agent.name} className="w-full h-full object-cover" />
               </div>
               <div className="absolute top-0 -right-2 bg-yellow-400 p-1.5 rounded-xl border-4 border-white">
                  <CheckCircle className="w-4 h-4 text-gray-900" />
               </div>
            </div>

            <h1 className="text-3xl font-serif text-gray-900">{agent.name}</h1>
            <p className="text-slate-500 font-medium mb-2">{agent.role}</p>
            <p className="flex items-center gap-1 text-[12px] text-slate-400 mb-4">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" /> {agent.location}
            </p>

            <div className="bg-amber-100/50 flex items-center gap-2 px-4 py-1.5 rounded-full mb-8">
               <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
               <span className="text-sm font-bold text-gray-900">{agent.rating} ({agent.reviewsCount} Reviews)</span>
            </div>

            {/* Stats Row */}
            <div className="w-full grid grid-cols-3 gap-4 border-y border-slate-100 py-8 mb-10">
               <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900">{agent.experience}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Years Exp.</span>
               </div>
               <div className="flex flex-col items-center border-x border-slate-100">
                  <span className="text-2xl font-bold text-gray-900">{agent.listingsCount}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Listings</span>
               </div>
               <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center translate-y-1">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase leading-none">PKR</span>
                    <span className="text-2xl font-bold text-gray-900 leading-none">{agent.salesVolume}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">Sales Vol.</span>
               </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex gap-3 mb-4">
               <button className="flex-1 bg-black text-white h-14 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg">
                 <Phone className="w-5 h-5 fill-current" /> Call
               </button>
               <button className="flex-1 border border-slate-200 h-14 rounded-2xl flex items-center justify-center gap-2 font-bold text-gray-900">
                 <MessageSquare className="w-5 h-5" /> Message
               </button>
               <button className="w-14 border border-emerald-100 bg-emerald-50 h-14 rounded-2xl flex items-center justify-center text-emerald-500">
                 <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.312l-1.02 3.737 3.846-1.009c.974.52 2.013.84 3.194.84 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766z" /></svg>
               </button>
            </div>
        </div>

        {/* Listed Properties */}
        <div className="mt-10">
           <div className="flex items-center justify-between mb-6 px-2">
             <h3 className="text-2xl font-serif">Listed Properties</h3>
             <button className="text-[10px] font-extrabold text-brand-gold uppercase tracking-widest">See All</button>
           </div>
           
           <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
              {agentProperties.map(prop => (
                <div key={prop.id} onClick={() => navigate(`/property/${prop.id}`)} className="min-w-[280px] bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                   <div className="relative h-40">
                      <img src={prop.imageUrl} alt={prop.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-yellow-400 text-[8px] font-extrabold px-2 py-1 rounded uppercase">Verified</div>
                   </div>
                   <div className="p-4">
                      <span className="text-lg font-bold text-gray-900">{prop.price}</span>
                      <h4 className="text-md font-serif text-gray-900 mt-1">{prop.title}</h4>
                      <p className="flex items-center gap-1 text-[10px] text-slate-500 mt-1">
                        <MapPin className="w-3 h-3" /> {prop.location}
                      </p>
                      <div className="flex gap-3 mt-3 text-[10px] text-slate-400 font-bold uppercase">
                        <span>{prop.beds} Beds</span>
                        <span>{prop.baths} Baths</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Client Reviews */}
        <div className="mt-10">
           <div className="flex items-center justify-between mb-6 px-2">
             <h3 className="text-2xl font-serif">Client Reviews</h3>
             <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                <span className="text-lg font-bold">4.9</span>
             </div>
           </div>

           <div className="space-y-4">
              {[
                { name: 'Ali Zaman', date: '2 WEEKS AGO', content: `"Hamza's professionalism is unmatched in the Islamabad market. He understood exactly what we were looking for in an investment property..."` },
                { name: 'Sara Farooq', date: '1 MONTH AGO', content: `"Extremely knowledgeable about market trends. The Price Trend Graphs he provided helped us make a data-driven decision..."` }
              ].map((rev, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                   <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-sm">{rev.name.charAt(0)}</div>
                         <div>
                            <h5 className="font-bold text-gray-900 text-sm leading-none">{rev.name}</h5>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">{rev.date}</span>
                         </div>
                      </div>
                      <div className="flex gap-0.5">
                         {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-brand-gold" />)}
                      </div>
                   </div>
                   <p className="text-slate-600 text-sm italic font-light leading-relaxed">
                     {rev.content}
                   </p>
                </div>
              ))}
           </div>

           <button className="w-full mt-8 border border-slate-200 h-14 rounded-2xl text-slate-500 font-bold uppercase tracking-widest text-sm">
             Write a Review
           </button>
        </div>
      </motion.div>

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
        <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
          <Heart className="w-6 h-6" />
          <span className="text-[10px] font-medium">Saved</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
          <MessageCircle className="w-6 h-6" />
          <span className="text-[10px] font-medium">Chat</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <User className="w-6 h-6 text-brand-gold" />
          <span className="text-[10px] font-bold text-brand-gold border-b-2 border-brand-gold pb-0.5">Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default AgentInformationPage;
