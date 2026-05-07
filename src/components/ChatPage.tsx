import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, Heart, MessageCircle, User, CheckCircle } from 'lucide-react';

const CHATS = [
  { id: 1, name: 'Hamza Al-Fayed', lastMsg: 'The Obsidian Manor is available for a visit tomorrow at 4 PM.', time: '2m ago', active: true, online: true, img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100' },
  { id: 2, name: 'Ahmed Mansoor', lastMsg: 'I have shared the floor plans for Modernist Oasis with you.', time: '1h ago', active: false, online: true, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100' },
  { id: 3, name: 'Zeeshan Malik', lastMsg: 'Thank you for your interest in the Regency Heights. The price is negotiable.', time: '3h ago', active: false, online: false, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100' },
  { id: 4, name: 'Ayesha Khan', lastMsg: 'We can schedule a video tour for the Emaar Oceanfront apartment.', time: '5h ago', active: false, online: false, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100' },
  { id: 5, name: 'Sara Qureshi', lastMsg: 'The documents for your offer on Pearl Penthouse are ready.', time: 'Yesterday', active: false, online: true, img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100' },
  { id: 6, name: 'Property Support', lastMsg: 'Your account verification is complete. Welcome to Zameen Curator.', time: '2 days ago', active: false, online: false, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=100' },
  { id: 7, name: 'Bilal Ahmed', lastMsg: 'New listings matching your preference in Sector F-7 were added today.', time: '3 days ago', active: false, online: false, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100' },
  { id: 8, name: 'Zameen Concierge', lastMsg: 'How can I assist your luxury property search today?', time: '1 week ago', active: false, online: false, img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100' },
];

const ChatPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="p-6 bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-between mb-4">
           <h2 className="text-2xl font-serif text-gray-900">Messages</h2>
           <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
           </div>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search conversations..." 
            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
        </div>
      </header>

      <div className="divide-y divide-gray-100">
        {CHATS.map((chat) => (
          <motion.div 
            key={chat.id}
            whileHover={{ backgroundColor: 'white' }}
            className={`p-6 flex gap-4 cursor-pointer transition-colors ${chat.active ? 'bg-indigo-50/50' : 'hover:bg-white'}`}
          >
            <div className="relative flex-shrink-0">
               <div className="w-14 h-14 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <img src={chat.img} alt={chat.name} className="w-full h-full object-cover" />
               </div>
               {chat.online && (
                 <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" />
               )}
            </div>
            <div className="flex-1 min-w-0">
               <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900 flex items-center gap-1">
                    {chat.name} {chat.id < 3 && <CheckCircle className="w-3 h-3 text-brand-gold fill-current" />}
                  </h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">{chat.time}</span>
               </div>
               <p className="text-sm text-slate-500 truncate">{chat.lastMsg}</p>
            </div>
          </motion.div>
        ))}
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
        <div onClick={() => navigate('/saved')} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
          <Heart className="w-6 h-6" />
          <span className="text-[10px] font-medium">Saved</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <MessageCircle className="w-6 h-6 text-brand-gold" />
          <span className="text-[10px] font-bold text-brand-gold border-b-2 border-brand-gold pb-0.5">Chat</span>
        </div>
        <div onClick={() => navigate('/agent/agent-1')} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium">Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default ChatPage;
