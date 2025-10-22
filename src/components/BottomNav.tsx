import { Home, MessageSquareHeart, Wand2, User, Crown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const { t } = useLanguage();
  
  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Home' },
    { id: 'talkzone', icon: MessageSquareHeart, label: 'Chat' },
    { id: 'aitools', icon: Wand2, label: 'Tools' },
    { id: 'profile', icon: User, label: t('profile') },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 premium-glass border-t border-gold/20 backdrop-blur-2xl">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-gold'
                }`}
              >
                <div className={`p-2 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'gold-gradient scale-110 shadow-lg shadow-gold/40' 
                    : 'bg-transparent'
                }`}>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-black' : ''}`} />
                </div>
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Premium bottom accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </div>
  );
}
