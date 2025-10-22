import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Send, 
  MessageSquareHeart, 
  Crown,
  Smile,
  Frown,
  Meh,
  Heart,
  BookOpen,
  Phone,
  Wind,
  Music,
  Brain,
  Calendar,
  Sparkles,
  TrendingUp,
  Users,
  Shield,
  Lightbulb,
  HeartHandshake,
  Activity
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import VoiceInput from './VoiceInput';

interface TalkZoneProps {
  onBack: () => void;
}

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

type MoodType = 'great' | 'good' | 'okay' | 'sad' | 'anxious' | null;

export default function TalkZone({ onBack }: TalkZoneProps) {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm KAIRO AI. I'm here to listen and support you. How are you feeling today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [currentMood, setCurrentMood] = useState<MoodType>(null);

  const moods = [
    { id: 'great' as const, icon: Smile, label: 'Great', color: 'from-green-500 to-emerald-500' },
    { id: 'good' as const, icon: Smile, label: 'Good', color: 'from-blue-500 to-cyan-500' },
    { id: 'okay' as const, icon: Meh, label: 'Okay', color: 'from-yellow-500 to-orange-500' },
    { id: 'sad' as const, icon: Frown, label: 'Sad', color: 'from-purple-500 to-pink-500' },
    { id: 'anxious' as const, icon: Heart, label: 'Anxious', color: 'from-red-500 to-orange-500' },
  ];

  const selfCareActivities = [
    {
      icon: Wind,
      title: 'Breathing Exercise',
      description: '4-7-8 technique for instant calm',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Music,
      title: 'Calming Music',
      description: 'Soothing sounds to relax',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Brain,
      title: 'Meditation',
      description: '5-minute guided meditation',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: BookOpen,
      title: 'Journaling',
      description: 'Write down your thoughts',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const mentalHealthResources = [
    {
      icon: Phone,
      title: 'Crisis Helpline',
      description: '24/7 support for immediate help',
      action: 'Available Anytime',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Support Groups',
      description: 'Connect with others who understand',
      action: 'Find Groups',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: HeartHandshake,
      title: 'Therapy Options',
      description: 'Find licensed therapists',
      action: 'Explore',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: BookOpen,
      title: 'Self-Help Resources',
      description: 'Articles, videos, and guides',
      action: 'Learn More',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  const copingStrategies = [
    {
      title: 'For Anxiety',
      icon: Shield,
      strategies: [
        'Practice deep breathing (4-7-8 method)',
        'Ground yourself: 5-4-3-2-1 technique',
        'Talk to someone you trust',
        'Gentle exercise or stretching',
        'Listen to calming music',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'For Sadness',
      icon: Heart,
      strategies: [
        'Allow yourself to feel emotions',
        'Reach out to a friend or family',
        'Do something you enjoy',
        'Get sunlight and fresh air',
        'Practice self-compassion',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'For Stress',
      icon: Activity,
      strategies: [
        'Take regular breaks',
        'Prioritize and organize tasks',
        'Physical exercise releases tension',
        'Practice mindfulness',
        'Set healthy boundaries',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'For Loneliness',
      icon: Users,
      strategies: [
        'Call or text a friend',
        'Join online communities',
        'Volunteer for a cause',
        'Engage in group activities',
        'Remember: reaching out is strength',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const positiveAffirmations = [
    "I am worthy of love and respect",
    "My feelings are valid",
    "I am doing the best I can",
    "It's okay to not be okay",
    "I am stronger than I think",
    "This too shall pass",
    "I deserve happiness and peace",
    "I am enough, just as I am",
  ];

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate AI response with emotional intelligence
    setTimeout(() => {
      const responses = [
        "I understand how you're feeling. Thank you for sharing that with me. Would you like to talk more about it?",
        "That sounds challenging. Remember, it's okay to feel this way. How can I support you right now?",
        "I'm here to listen. Your feelings are valid and important. What's on your mind?",
        "Thank you for trusting me with this. Take your time - I'm here whenever you need to talk.",
        "I hear you. It takes courage to open up. Would you like to explore some coping strategies together?",
      ];
      
      const aiResponse: Message = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleVoiceTranscript = (text: string) => {
    setInputMessage(text);
  };

  const handleMoodSelection = (mood: MoodType) => {
    setCurrentMood(mood);
    const moodMessage = `I'm feeling ${mood} today`;
    setInputMessage(moodMessage);
    
    // Auto-send mood update
    const newMessage: Message = {
      id: messages.length + 1,
      text: moodMessage,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const moodResponses: Record<string, string> = {
        great: "That's wonderful! I'm so happy to hear that. What's making today great for you?",
        good: "I'm glad you're feeling good! Keep that positive energy going. 😊",
        okay: "It's completely normal to feel just okay sometimes. Want to talk about what's on your mind?",
        sad: "I'm sorry you're feeling sad. Your feelings are valid. I'm here to listen and support you. 💙",
        anxious: "I understand anxiety can be overwhelming. Let's work through this together. Would a breathing exercise help?",
      };

      const aiResponse: Message = {
        id: messages.length + 2,
        text: moodResponses[mood] || "Thank you for sharing how you feel. I'm here for you.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const ChatView = () => (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex gap-3 mb-4 ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <Avatar className={`w-10 h-10 border-2 ${message.isUser ? 'border-gold/50' : 'border-purple-500/50'} shadow-lg`}>
                <AvatarFallback className={message.isUser ? 'gold-gradient text-black' : 'bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white'}>
                  {message.isUser ? 'U' : <Crown className="w-5 h-5" />}
                </AvatarFallback>
              </Avatar>
              
              <div className={`flex flex-col max-w-[70%] ${message.isUser ? 'items-end' : 'items-start'}`}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.isUser
                      ? 'gold-gradient text-black'
                      : 'premium-card text-white'
                  }`}
                >
                  <p className="leading-relaxed">{message.text}</p>
                </div>
                <span className="text-xs text-gray-500 mt-1 px-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="premium-glass border-t border-gold/20 p-4 md:p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1 relative">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
              className="bg-black/60 border-gold/30 text-white placeholder:text-gray-500 rounded-xl h-12 pr-12 focus:border-gold/60"
            />
          </div>
          
          <VoiceInput onTranscript={handleVoiceTranscript} />
          
          <Button
            onClick={sendMessage}
            disabled={!inputMessage.trim()}
            className="gold-gradient text-black hover:shadow-lg hover:shadow-gold/30 h-12 w-12 p-0 rounded-xl"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Quick Responses */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['I feel anxious', 'Need advice', 'Feeling lonely', 'Just want to talk'].map((quick) => (
            <button
              key={quick}
              onClick={() => setInputMessage(quick)}
              className="px-4 py-2 rounded-xl bg-black/60 border border-gold/30 text-sm text-gray-300 hover:border-gold/50 hover:text-gold transition-all whitespace-nowrap"
            >
              {quick}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const MoodTrackerView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      {/* Mood Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-6 text-center"
      >
        <h2 className="text-xl gradient-text-premium mb-2">How are you feeling today?</h2>
        <p className="text-gray-400 text-sm mb-6">Track your mood to understand patterns</p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {moods.map((mood) => {
            const Icon = mood.icon;
            return (
              <motion.button
                key={mood.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleMoodSelection(mood.id)}
                className={`premium-card rounded-xl p-4 hover:shadow-xl transition-all ${
                  currentMood === mood.id ? 'ring-2 ring-gold' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${mood.color} flex items-center justify-center mx-auto mb-2`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white text-sm">{mood.label}</p>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Self-Care Activities */}
      <div>
        <h3 className="text-lg gradient-text-premium mb-4">🌿 Quick Self-Care</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selfCareActivities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="premium-card rounded-2xl p-6 cursor-pointer hover:shadow-2xl hover:shadow-gold/10 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activity.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white mb-2">{activity.title}</h3>
                <p className="text-sm text-gray-400">{activity.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Daily Affirmation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="premium-card rounded-2xl p-6 text-center"
      >
        <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
        <h3 className="text-lg gradient-text-premium mb-3">✨ Today's Affirmation</h3>
        <p className="text-xl text-white mb-4 leading-relaxed">
          "{positiveAffirmations[Math.floor(Math.random() * positiveAffirmations.length)]}"
        </p>
        <Button
          variant="outline"
          className="border-gold/30 text-gold hover:bg-gold/10"
          onClick={() => window.location.reload()}
        >
          Get New Affirmation
        </Button>
      </motion.div>
    </div>
  );

  const ResourcesView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      {/* Mental Health Resources */}
      <div>
        <h3 className="text-lg gradient-text-premium mb-4">🆘 Get Help & Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mentalHealthResources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="premium-card rounded-2xl p-6 cursor-pointer hover:shadow-2xl hover:shadow-gold/10 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{resource.description}</p>
                <Badge className="bg-gold/20 text-gold border-gold/30">
                  {resource.action}
                </Badge>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Coping Strategies */}
      <div>
        <h3 className="text-lg gradient-text-premium mb-4">💪 Coping Strategies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {copingStrategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="premium-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${strategy.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white">{strategy.title}</h3>
                </div>
                <ul className="space-y-2">
                  {strategy.strategies.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <Heart className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Emergency Support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="premium-card rounded-2xl p-6 border-2 border-red-500/30"
      >
        <h3 className="text-lg text-red-400 mb-3">🆘 In Crisis?</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          If you're having thoughts of self-harm or suicide, please reach out for immediate help. You are not alone, and people want to help you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-black/40 rounded-lg p-3 border border-red-500/30">
            <p className="text-white text-sm">National Suicide Prevention Lifeline</p>
            <p className="text-gold">1-800-273-8255</p>
          </div>
          <div className="bg-black/40 rounded-lg p-3 border border-red-500/30">
            <p className="text-white text-sm">Crisis Text Line</p>
            <p className="text-gold">Text "HELLO" to 741741</p>
          </div>
        </div>
      </motion.div>

      {/* Mental Health Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">💡 Daily Mental Health Tips</h3>
        <div className="space-y-3">
          {[
            'Practice gratitude - write 3 things you\'re grateful for daily',
            'Stay connected - reach out to friends and family regularly',
            'Move your body - even 10 minutes of exercise helps',
            'Limit social media - take breaks for mental peace',
            'Sleep well - aim for 7-8 hours of quality sleep',
            'Be kind to yourself - treat yourself with compassion',
          ].map((tip, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Lightbulb className="w-3 h-3 text-gold" />
              </div>
              <p className="text-gray-300 text-sm">{tip}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen pb-20 bg-black">
      {/* Header */}
      <div className="premium-glass border-b border-gold/20 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto p-4 md:p-6">
          <div className="flex items-center gap-4">
            <Button
              onClick={onBack}
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gold"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <MessageSquareHeart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl gradient-text-premium">{t('talkZone')}</h1>
                <p className="text-sm text-gray-400">{t('talkZoneTagline')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="grid w-full grid-cols-3 premium-glass border border-gold/20 rounded-xl p-1 m-4 md:m-6 mb-0">
            <TabsTrigger 
              value="chat" 
              className="rounded-lg data-[state=active]:gold-gradient data-[state=active]:text-black"
            >
              <MessageSquareHeart className="w-4 h-4 mr-2" />
              Talk
            </TabsTrigger>
            <TabsTrigger 
              value="mood" 
              className="rounded-lg data-[state=active]:gold-gradient data-[state=active]:text-black"
            >
              <Heart className="w-4 h-4 mr-2" />
              Mood
            </TabsTrigger>
            <TabsTrigger 
              value="resources" 
              className="rounded-lg data-[state=active]:gold-gradient data-[state=active]:text-black"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="mt-0 h-[calc(100vh-180px)]">
            <ChatView />
          </TabsContent>

          <TabsContent value="mood" className="mt-0">
            <MoodTrackerView />
          </TabsContent>

          <TabsContent value="resources" className="mt-0">
            <ResourcesView />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
