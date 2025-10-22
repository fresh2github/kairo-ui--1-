import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  PiggyBank, 
  ShieldCheck, 
  Sparkles, 
  UserCircle, 
  Siren,
  MessageSquareHeart,
  Wand2,
  Search,
  Zap,
  Crown
} from 'lucide-react';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import VoiceInput from './VoiceInput';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const features = [
  {
    id: 'learnwise',
    icon: Brain,
    title: 'learnWise',
    tagline: 'learnWiseTagline',
    gradient: 'from-blue-500 via-blue-600 to-cyan-500',
    bgGlow: 'bg-blue-500/20'
  },
  {
    id: 'spendwise',
    icon: PiggyBank,
    title: 'spendWise',
    tagline: 'spendWiseTagline',
    gradient: 'from-emerald-500 via-green-600 to-teal-500',
    bgGlow: 'bg-emerald-500/20'
  },
  {
    id: 'socioaware',
    icon: ShieldCheck,
    title: 'socioAware',
    tagline: 'socioAwareTagline',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    bgGlow: 'bg-orange-500/20'
  },
  {
    id: 'womenai',
    icon: Sparkles,
    title: 'womenAI',
    tagline: 'womenAITagline',
    gradient: 'from-pink-500 via-rose-500 to-purple-500',
    bgGlow: 'bg-pink-500/20'
  },
  {
    id: 'menai',
    icon: UserCircle,
    title: 'menAI',
    tagline: 'menAITagline',
    gradient: 'from-indigo-500 via-purple-600 to-blue-500',
    bgGlow: 'bg-indigo-500/20'
  },
  {
    id: 'safetywing',
    icon: Siren,
    title: 'safetyWing',
    tagline: 'safetyWingTagline',
    gradient: 'from-red-500 via-red-600 to-pink-600',
    bgGlow: 'bg-red-500/20'
  },
  {
    id: 'talkzone',
    icon: MessageSquareHeart,
    title: 'talkZone',
    tagline: 'talkZoneTagline',
    gradient: 'from-purple-500 via-violet-600 to-fuchsia-500',
    bgGlow: 'bg-purple-500/20'
  },
  {
    id: 'aitools',
    icon: Wand2,
    title: 'aiTools',
    tagline: 'aiToolsTagline',
    gradient: 'from-teal-500 via-cyan-600 to-blue-500',
    bgGlow: 'bg-teal-500/20'
  },
];

export default function Dashboard({ onNavigate }: DashboardProps) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const handleVoiceTranscript = (text: string) => {
    setSearchQuery(text);
  };

  return (
    <div className="min-h-screen pb-20 bg-black">
      {/* Header */}
      <div className="sticky top-0 z-10 premium-glass border-b border-gold/20">
        <div className="max-w-7xl mx-auto p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12 border-2 border-gold/50 shadow-lg shadow-gold/20">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-gold to-yellow-600 text-black">
                  K
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg text-white">{t('welcomeBack')}</h2>
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-gold animate-pulse" fill="currentColor" />
                  <span className="text-sm text-gray-400">{t('aiOnline')}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <LanguageSelector />
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center relative shadow-lg shadow-gold/40">
                  <Crown className="w-7 h-7 text-black" />
                  <Sparkles className="w-3 h-3 text-white absolute -top-1 -right-1" fill="currentColor" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Search Bar with Voice */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/60" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('askKairo')}
                className="pl-10 bg-black/60 border-gold/30 text-white placeholder:text-gray-500 rounded-xl h-12 focus:border-gold/60 focus:ring-gold/30"
              />
            </div>
            <VoiceInput onTranscript={handleVoiceTranscript} />
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                onClick={() => onNavigate(feature.id)}
                className="cursor-pointer"
              >
                <div className="premium-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group relative overflow-hidden">
                  {/* Background glow */}
                  <div className={`absolute inset-0 ${feature.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg text-white mb-2">
                      {t(feature.title)}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {t(feature.tagline)}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
        >
          <div className="premium-card rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">{t('tasksToday')}</p>
                <p className="text-2xl text-white">8</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Brain className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="premium-card rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">{t('budgetLeft')}</p>
                <p className="text-2xl text-white">₹2,450</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <PiggyBank className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="premium-card rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">{t('safetyStatus')}</p>
                <p className="text-2xl text-white">{t('safe')}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
