import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Heart, 
  Home, 
  Briefcase, 
  Users,
  Clock,
  Calendar,
  BookOpen,
  Utensils,
  Baby,
  GraduationCap,
  TrendingUp,
  Shield,
  Zap,
  Coffee,
  ShoppingBag,
  Lightbulb,
  CheckCircle2,
  Star,
  Activity,
  Moon,
  Apple,
  PhoneCall,
  MapPin,
  AlertTriangle,
  Target,
  MessageCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import VoiceInput from './VoiceInput';

interface WomenAIProps {
  onBack: () => void;
}

type UserCategory = 'housewife' | 'workingwoman' | 'teen' | null;
type DetailView = 'health' | 'homemanage' | 'career' | 'safety' | null;

export default function WomenAI({ onBack }: WomenAIProps) {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<UserCategory>(null);
  const [showLastMinute, setShowLastMinute] = useState(false);
  const [detailView, setDetailView] = useState<DetailView>(null);

  const userCategories = [
    {
      id: 'housewife' as const,
      icon: Home,
      title: 'Housewife',
      description: 'Home management, meal planning, family care',
      gradient: 'from-pink-500 to-rose-500',
      color: 'pink',
    },
    {
      id: 'workingwoman' as const,
      icon: Briefcase,
      title: 'Working Woman',
      description: 'Career growth, work-life balance, time management',
      gradient: 'from-purple-500 to-indigo-500',
      color: 'purple',
    },
    {
      id: 'teen' as const,
      icon: GraduationCap,
      title: 'Teen Girl',
      description: 'Education, self-care, personal development',
      gradient: 'from-blue-500 to-cyan-500',
      color: 'blue',
    },
  ];

  const generalCategories = [
    {
      id: 'health' as const,
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Period tracking, nutrition, mental health',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      id: 'homemanage' as const,
      icon: Home,
      title: 'Home Management',
      description: 'Meal planning, budgeting, organization',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'career' as const,
      icon: Briefcase,
      title: 'Career & Education',
      description: 'Skill development, job search, mentorship',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'safety' as const,
      icon: Shield,
      title: 'Safety & Security',
      description: 'Personal safety tips, legal rights',
      gradient: 'from-red-500 to-orange-500',
    },
  ];

  const housewifeFeatures = [
    {
      id: 'health' as const,
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Self-care routines, stress management',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      id: 'homemanage' as const,
      icon: Calendar,
      title: 'Home Organization',
      description: 'Cleaning schedules, decluttering tips, storage hacks',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Baby,
      title: 'Family Care',
      description: 'Childcare tips, elderly care, family health',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: ShoppingBag,
      title: 'Smart Shopping',
      description: 'Budget grocery lists, seasonal buying, quality checks',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const workingWomanFeatures = [
    {
      id: 'career' as const,
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Skill development, networking, salary negotiation',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Productivity hacks, scheduling, work-life balance',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      id: 'health' as const,
      icon: Heart,
      title: 'Self-Care',
      description: 'Stress relief, wellness routines, mental health',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Team management, communication, confidence building',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const teenFeatures = [
    {
      icon: BookOpen,
      title: 'Study Tips',
      description: 'Exam preparation, focus techniques, learning methods',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Star,
      title: 'Personal Growth',
      description: 'Confidence building, goal setting, self-discovery',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'health' as const,
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Period care, nutrition, fitness, mental health',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Lightbulb,
      title: 'Life Skills',
      description: 'Money management, social skills, decision making',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const lastMinutePreparations = [
    {
      category: 'Morning Rush',
      icon: Coffee,
      items: [
        '5-min breakfast ideas',
        'Quick makeup routine',
        'Express outfit selection',
        'Fast hair styling',
      ],
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      category: 'Unexpected Guests',
      icon: Users,
      items: [
        '15-min house cleanup',
        'Quick snacks to prepare',
        'Instant room freshener tips',
        'Emergency hosting hacks',
      ],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      category: 'Last-Min Event',
      icon: Calendar,
      items: [
        'Quick dress-up guide',
        'Fast party-ready look',
        'Gift ideas on short notice',
        'Instant confidence boosters',
      ],
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      category: 'Emergency Meal',
      icon: Utensils,
      items: [
        '10-min meal recipes',
        'Pantry staple dishes',
        'Quick dessert ideas',
        'Fast cooking shortcuts',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const healthWellnessContent = [
    {
      title: 'Period Care & Tracking',
      icon: Calendar,
      items: [
        'Track your cycle to predict periods',
        'Manage cramps: heat therapy, exercise, rest',
        'Iron-rich foods during menstruation',
        'Pain management: consult doctor if severe',
        'Stay hydrated and avoid excess caffeine',
      ],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Nutrition & Fitness',
      icon: Apple,
      items: [
        'Balanced diet: proteins, carbs, healthy fats',
        'Include leafy greens, fruits daily',
        '30-min exercise 4-5 times per week',
        'Calcium & Vitamin D for bone health',
        'Healthy snacks: nuts, yogurt, fruits',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Mental Health',
      icon: Heart,
      items: [
        'Practice self-compassion daily',
        'Talk about your feelings openly',
        'Set healthy boundaries in relationships',
        'Seek professional help when needed',
        'Practice mindfulness and meditation',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Sleep & Recovery',
      icon: Moon,
      items: [
        'Get 7-8 hours of quality sleep',
        'Create bedtime routine for better sleep',
        'Avoid screens 1 hour before bed',
        'Keep bedroom cool and dark',
        'Practice relaxation techniques',
      ],
      gradient: 'from-blue-500 to-indigo-500',
    },
  ];

  const homeManagementContent = [
    {
      title: 'Meal Planning',
      icon: Utensils,
      items: [
        'Plan weekly menu on Sundays',
        'Batch cooking saves time',
        'Keep pantry staples stocked',
        'Use leftovers creatively',
        'Involve family in meal decisions',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Home Organization',
      icon: Home,
      items: [
        'Declutter one room at a time',
        'Use storage boxes and labels',
        'Daily 10-minute tidy-up routine',
        'One in, one out rule for items',
        'Create designated spaces for everything',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Budget Management',
      icon: ShoppingBag,
      items: [
        'Track monthly expenses',
        'Create grocery list before shopping',
        'Buy seasonal produce for savings',
        'Use coupons and cashback offers',
        'Set aside emergency fund monthly',
      ],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Time Management',
      icon: Clock,
      items: [
        'Create daily to-do lists',
        'Prioritize important tasks first',
        'Batch similar tasks together',
        'Set realistic daily goals',
        'Schedule me-time daily',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  const careerEducationContent = [
    {
      title: 'Skill Development',
      icon: TrendingUp,
      items: [
        'Identify in-demand skills in your field',
        'Take online courses (Coursera, Udemy)',
        'Attend workshops and webinars',
        'Build portfolio of projects',
        'Network with industry professionals',
      ],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Career Advancement',
      icon: Target,
      items: [
        'Set clear career goals annually',
        'Ask for feedback from managers',
        'Take on challenging projects',
        'Develop leadership skills',
        'Negotiate salary confidently',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Work-Life Balance',
      icon: Heart,
      items: [
        'Set boundaries between work and home',
        'Learn to delegate tasks',
        'Take regular breaks during work',
        'Use vacation days for rest',
        'Prioritize self-care activities',
      ],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Education & Learning',
      icon: BookOpen,
      items: [
        'Never stop learning new things',
        'Read industry-related books/blogs',
        'Get certifications in your field',
        'Join professional communities',
        'Share knowledge with others',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const safetySecurityContent = [
    {
      title: 'Personal Safety',
      icon: Shield,
      items: [
        'Trust your instincts always',
        'Share location with trusted contacts',
        'Avoid isolated areas at night',
        'Keep emergency contacts handy',
        'Learn basic self-defense moves',
      ],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'Digital Safety',
      icon: Lightbulb,
      items: [
        'Use strong, unique passwords',
        'Enable two-factor authentication',
        'Don\'t share personal info online',
        'Be cautious of scams and phishing',
        'Review privacy settings regularly',
      ],
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Emergency Preparedness',
      icon: PhoneCall,
      items: [
        'Save emergency numbers: Police, Ambulance',
        'Keep first-aid kit at home',
        'Know your address/location always',
        'Have safety apps on phone',
        'Inform family of your whereabouts',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Legal Rights',
      icon: BookOpen,
      items: [
        'Know your workplace rights',
        'Understand domestic violence laws',
        'Legal aid available for women',
        'Property and inheritance rights',
        'Seek legal counsel when needed',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  const getCurrentFeatures = () => {
    switch (selectedCategory) {
      case 'housewife':
        return housewifeFeatures;
      case 'workingwoman':
        return workingWomanFeatures;
      case 'teen':
        return teenFeatures;
      default:
        return [];
    }
  };

  const handleFeatureClick = (feature: any) => {
    if (feature.id) {
      setDetailView(feature.id as DetailView);
    }
  };

  const handleGeneralCategoryClick = (categoryId: string) => {
    setDetailView(categoryId as DetailView);
  };

  const CategorySelectionView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      {/* Welcome Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-8 text-center"
      >
        <Sparkles className="w-16 h-16 text-gold mx-auto mb-4" />
        <h2 className="text-2xl gradient-text-premium mb-2">Empowering Women with AI</h2>
        <p className="text-gray-400">
          Select your category to get personalized guidance and support
        </p>
      </motion.div>

      {/* User Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {userCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedCategory(category.id)}
              className="cursor-pointer"
            >
              <div className="premium-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-white mb-2 text-center">{category.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed text-center">
                  {category.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* General Categories */}
      <div>
        <h3 className="text-lg gradient-text-premium mb-4">📚 Explore Topics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {generalCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => handleGeneralCategoryClick(category.id)}
                className="cursor-pointer"
              >
                <div className="premium-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg text-white mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {category.description}
                  </p>
                  <Badge className="mt-3 bg-gold/20 text-gold border-gold/30">
                    Click to explore
                  </Badge>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Last Minute Preparation Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setShowLastMinute(true)}
        className="cursor-pointer"
      >
        <div className="premium-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg text-white mb-1">⚡ Last-Minute Preparation</h3>
              <p className="text-sm text-gray-400">
                Quick solutions for unexpected situations
              </p>
            </div>
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
              Emergency
            </Badge>
          </div>
        </div>
      </motion.div>

      {/* Daily Tip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-3">💡 Daily Empowerment Tip</h3>
        <p className="text-gray-300 leading-relaxed">
          "You are capable of amazing things. Take a moment today to acknowledge your strength, celebrate your achievements, and remember that self-care isn't selfish—it's necessary."
        </p>
      </motion.div>
    </div>
  );

  const CategoryDetailView = () => {
    const features = getCurrentFeatures();
    const currentCategory = userCategories.find(c => c.id === selectedCategory);
    if (!currentCategory) return null;

    const Icon = currentCategory.icon;

    return (
      <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${currentCategory.gradient} flex items-center justify-center shadow-lg`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl gradient-text-premium">{currentCategory.title}</h2>
              <p className="text-sm text-gray-400">{currentCategory.description}</p>
            </div>
          </div>
          <Button
            onClick={() => setSelectedCategory(null)}
            variant="outline"
            className="w-full border-gold/30 text-gold hover:bg-gold/10"
          >
            Change Category
          </Button>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => handleFeatureClick(feature)}
                className="cursor-pointer"
              >
                <div className="premium-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <FeatureIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.id && (
                    <Badge className="mt-3 bg-gold/20 text-gold border-gold/30">
                      Click for details
                    </Badge>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Assistant with Voice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="premium-card rounded-2xl p-6"
        >
          <h3 className="text-lg gradient-text-premium mb-4">💬 Ask AI Assistant</h3>
          <VoiceInput
            onTranscript={(text) => {
              console.log('Voice input:', text);
            }}
            placeholder="Ask me anything... (e.g., quick breakfast ideas)"
          />
          <p className="text-xs text-gray-500 mt-2 text-center">
            Use voice or type to get instant personalized advice
          </p>
        </motion.div>

        {/* Quick Access to Last Minute */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => setShowLastMinute(true)}
          className="cursor-pointer"
        >
          <div className="premium-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-1">Need something quick?</h3>
                <p className="text-sm text-gray-400">
                  Access last-minute preparation guides
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  const LastMinuteView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-500/30">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl gradient-text-premium">⚡ Last-Minute Preparation</h2>
            <p className="text-sm text-gray-400">Quick solutions when you need them most</p>
          </div>
        </div>
        <Button
          onClick={() => setShowLastMinute(false)}
          variant="outline"
          className="w-full border-gold/30 text-gold hover:bg-gold/10"
        >
          Back to Categories
        </Button>
      </motion.div>

      {/* Last Minute Scenarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lastMinutePreparations.map((scenario, index) => {
          const ScenarioIcon = scenario.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="cursor-pointer"
            >
              <div className="premium-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${scenario.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <ScenarioIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg text-white mb-3">{scenario.category}</h3>
                <ul className="space-y-2">
                  {scenario.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Emergency Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">🚨 Pro Tips for Quick Prep</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-gold">1</span>
            </div>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Keep essentials ready:</strong> Maintain a "quick-prep" box with basics like safety pins, stain remover, and multi-purpose ingredients.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-gold">2</span>
            </div>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Plan your fallbacks:</strong> Have 2-3 go-to outfits and meals memorized that you can pull together in minutes.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-gold">3</span>
            </div>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Stay calm:</strong> A confident attitude covers a lot. Take a deep breath, prioritize what matters most, and trust yourself.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Ask for Help */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">💬 Need Instant Help?</h3>
        <VoiceInput
          onTranscript={(text) => {
            console.log('Emergency query:', text);
          }}
          placeholder="Ask for quick solutions... (e.g., 5-min breakfast ideas)"
        />
        <p className="text-xs text-gray-500 mt-2 text-center">
          Get instant AI-powered solutions for your urgent needs
        </p>
      </motion.div>
    </div>
  );

  const HealthWellnessView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg">
            <Heart className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl gradient-text-premium">❤️ Health & Wellness</h2>
            <p className="text-sm text-gray-400">Your health is your wealth</p>
          </div>
        </div>
        <Button
          onClick={() => {
            setDetailView(null);
            setSelectedCategory(null);
          }}
          variant="outline"
          className="w-full border-gold/30 text-gold hover:bg-gold/10"
        >
          Back
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {healthWellnessContent.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="premium-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-white">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">💬 Ask Health Question</h3>
        <VoiceInput
          onTranscript={(text) => console.log('Health query:', text)}
          placeholder="Ask anything about health... (e.g., period pain remedies)"
        />
      </motion.div>
    </div>
  );

  const HomeManagementView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
            <Home className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl gradient-text-premium">🏠 Home Management</h2>
            <p className="text-sm text-gray-400">Run your home like a pro</p>
          </div>
        </div>
        <Button
          onClick={() => {
            setDetailView(null);
            setSelectedCategory(null);
          }}
          variant="outline"
          className="w-full border-gold/30 text-gold hover:bg-gold/10"
        >
          Back
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {homeManagementContent.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="premium-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-white">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">💬 Ask Home Management Question</h3>
        <VoiceInput
          onTranscript={(text) => console.log('Home query:', text)}
          placeholder="Ask anything... (e.g., meal planning tips)"
        />
      </motion.div>
    </div>
  );

  const CareerEducationView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
            <Briefcase className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl gradient-text-premium">📚 Career & Education</h2>
            <p className="text-sm text-gray-400">Grow your career, expand your knowledge</p>
          </div>
        </div>
        <Button
          onClick={() => {
            setDetailView(null);
            setSelectedCategory(null);
          }}
          variant="outline"
          className="w-full border-gold/30 text-gold hover:bg-gold/10"
        >
          Back
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {careerEducationContent.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="premium-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-white">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">💬 Ask Career Question</h3>
        <VoiceInput
          onTranscript={(text) => console.log('Career query:', text)}
          placeholder="Ask anything... (e.g., how to negotiate salary)"
        />
      </motion.div>
    </div>
  );

  const SafetySecurityView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl gradient-text-premium">🛡️ Safety & Security</h2>
            <p className="text-sm text-gray-400">Your safety is our priority</p>
          </div>
        </div>
        <Button
          onClick={() => {
            setDetailView(null);
            setSelectedCategory(null);
          }}
          variant="outline"
          className="w-full border-gold/30 text-gold hover:bg-gold/10"
        >
          Back
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {safetySecurityContent.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="premium-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-white">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="premium-card rounded-2xl p-6 border-2 border-red-500/30"
      >
        <h3 className="text-lg text-red-400 mb-3">🆘 Emergency Contacts</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          In case of emergency, please call:
        </p>
        <div className="space-y-2">
          <p className="text-white text-sm">• Police: 100</p>
          <p className="text-white text-sm">• Women Helpline: 1091</p>
          <p className="text-white text-sm">• Ambulance: 108</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">💬 Ask Safety Question</h3>
        <VoiceInput
          onTranscript={(text) => console.log('Safety query:', text)}
          placeholder="Ask anything about safety... (completely confidential)"
        />
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl gradient-text-premium">{t('womenAI')}</h1>
                <p className="text-sm text-gray-400">{t('womenAITagline')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {detailView === 'health' ? (
          <motion.div
            key="health"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <HealthWellnessView />
          </motion.div>
        ) : detailView === 'homemanage' ? (
          <motion.div
            key="homemanage"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <HomeManagementView />
          </motion.div>
        ) : detailView === 'career' ? (
          <motion.div
            key="career"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CareerEducationView />
          </motion.div>
        ) : detailView === 'safety' ? (
          <motion.div
            key="safety"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SafetySecurityView />
          </motion.div>
        ) : showLastMinute ? (
          <motion.div
            key="lastminute"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <LastMinuteView />
          </motion.div>
        ) : selectedCategory ? (
          <motion.div
            key="category"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CategoryDetailView />
          </motion.div>
        ) : (
          <motion.div
            key="selection"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CategorySelectionView />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
