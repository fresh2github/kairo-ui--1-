import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  UserCircle, 
  Dumbbell, 
  Briefcase, 
  Heart, 
  Wrench,
  Utensils,
  Scissors,
  Fan,
  WashingMachine,
  Lightbulb,
  CheckCircle2,
  ChefHat,
  TrendingUp,
  Trophy,
  Apple,
  Activity,
  Target,
  Users,
  MessageCircle,
  Brain,
  Moon,
  Smile
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import VoiceInput from './VoiceInput';

interface MenAIProps {
  onBack: () => void;
}

type CategoryView = 'main' | 'fixing' | 'food' | 'grooming' | 'fitness' | 'career' | 'mental';

export default function MenAI({ onBack }: MenAIProps) {
  const { t } = useLanguage();
  const [currentView, setCurrentView] = useState<CategoryView>('main');

  const categories = [
    {
      id: 'fixing' as const,
      icon: Wrench,
      title: 'Quick Fixes',
      description: 'Repair fans, appliances, and common household issues',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 'food' as const,
      icon: Utensils,
      title: 'Bachelor Menu',
      description: 'Simple, quick meals for busy bachelors',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 'grooming' as const,
      icon: Scissors,
      title: 'Grooming Guide',
      description: 'Style tips, skincare, and grooming essentials',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'fitness' as const,
      icon: Dumbbell,
      title: 'Fitness & Health',
      description: 'Workout plans, nutrition, wellness tips',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      id: 'career' as const,
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Professional development, networking',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      id: 'mental' as const,
      icon: Heart,
      title: 'Mental Health',
      description: 'Stress management, emotional support',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const fixingGuides = [
    {
      title: 'Ceiling Fan Not Working',
      icon: Fan,
      steps: [
        'Check if the circuit breaker is ON',
        'Ensure the fan switch is in the correct position',
        'Tighten loose wire connections at the switch',
        'Replace the capacitor if fan runs slowly',
        'Clean dust buildup on motor and blades',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Washing Machine Issues',
      icon: WashingMachine,
      steps: [
        'Not draining: Check drain hose for clogs',
        'Not spinning: Ensure load is balanced',
        'Leaking water: Inspect door seal and hoses',
        'Not starting: Check power supply and door lock',
        'Noisy: Level the machine and check for objects',
      ],
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Electrical Quick Fixes',
      icon: Lightbulb,
      steps: [
        'Flickering lights: Tighten bulb and check connections',
        'Outlet not working: Reset circuit breaker',
        'Switch problems: Turn off power, clean contacts',
        'Blown fuse: Replace with same amp rating',
        'Important: Call electrician for complex issues',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const bachelorMeals = [
    {
      category: '5-Minute Breakfast',
      icon: ChefHat,
      items: [
        { name: 'Egg Toast', time: '5 min', difficulty: 'Easy' },
        { name: 'Oats Bowl', time: '3 min', difficulty: 'Easy' },
        { name: 'Banana Smoothie', time: '2 min', difficulty: 'Easy' },
        { name: 'Quick Sandwich', time: '5 min', difficulty: 'Easy' },
      ],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      category: '10-Minute Lunch',
      icon: Utensils,
      items: [
        { name: 'Pasta Aglio e Olio', time: '10 min', difficulty: 'Easy' },
        { name: 'Fried Rice', time: '10 min', difficulty: 'Easy' },
        { name: 'Ramen Upgrade', time: '8 min', difficulty: 'Easy' },
        { name: 'Veggie Wrap', time: '7 min', difficulty: 'Easy' },
      ],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      category: '15-Minute Dinner',
      icon: ChefHat,
      items: [
        { name: 'Chicken Stir Fry', time: '15 min', difficulty: 'Medium' },
        { name: 'One-Pot Pasta', time: '12 min', difficulty: 'Easy' },
        { name: 'Quesadilla', time: '10 min', difficulty: 'Easy' },
        { name: 'Grilled Sandwich', time: '8 min', difficulty: 'Easy' },
      ],
      gradient: 'from-red-500 to-pink-500',
    },
  ];

  const groomingGuides = [
    {
      title: 'Daily Skincare',
      icon: Heart,
      tips: [
        'Cleanse face twice daily (morning & night)',
        'Use moisturizer with SPF in the morning',
        'Exfoliate 2-3 times per week',
        'Stay hydrated - drink 8 glasses of water',
        'Get 7-8 hours of sleep for skin repair',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Hair Care',
      icon: Scissors,
      tips: [
        'Shampoo 2-3 times per week (not daily)',
        'Use conditioner after every shampoo',
        'Get haircut every 4-6 weeks',
        'Avoid excessive heat styling',
        'Try hair oils for scalp health',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Beard Maintenance',
      icon: Scissors,
      tips: [
        'Trim beard every 2-3 days for shape',
        'Use beard oil daily to prevent itching',
        'Wash beard 2-3 times per week',
        'Comb beard daily to train hair direction',
        'Moisturize skin underneath beard',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Style Essentials',
      icon: TrendingUp,
      tips: [
        'Keep nails clean and trimmed weekly',
        'Use deodorant/antiperspirant daily',
        'Maintain good posture for confidence',
        'Invest in well-fitting basics',
        'Match belt with shoes for polish',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const fitnessContent = [
    {
      title: 'Beginner Workout Plans',
      icon: Dumbbell,
      items: [
        '3-day full body split for beginners',
        '20-minute home workouts (no equipment)',
        'Push-ups, squats, planks - master the basics',
        'Progressive overload principles',
        'Rest days are crucial for muscle growth',
      ],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'Nutrition Basics',
      icon: Apple,
      items: [
        'Eat 1g protein per lb of body weight',
        'Include complex carbs: rice, oats, sweet potato',
        'Healthy fats: nuts, avocado, olive oil',
        'Meal prep Sundays for the week ahead',
        'Stay hydrated: 3-4 liters of water daily',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Fitness Goals',
      icon: Target,
      items: [
        'Weight loss: Calorie deficit + cardio 3x/week',
        'Muscle gain: Calorie surplus + strength training',
        'Track progress with photos, not just weight',
        'Set SMART goals: Specific, Measurable, Achievable',
        'Consistency beats perfection every time',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Recovery & Rest',
      icon: Activity,
      items: [
        'Sleep 7-9 hours for muscle recovery',
        'Stretch daily to prevent injuries',
        'Ice baths or cold showers reduce soreness',
        'Active recovery: light walks, yoga',
        'Listen to your body - rest when needed',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const careerContent = [
    {
      title: 'Skill Development',
      icon: Trophy,
      items: [
        'Learn in-demand skills: AI, data analysis, coding',
        'Take online courses (Coursera, Udemy, LinkedIn)',
        'Build a portfolio of real projects',
        'Get certifications in your field',
        'Practice 1 hour daily - 30-day challenge',
      ],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Networking Tips',
      icon: Users,
      items: [
        'Attend industry events and conferences',
        'Connect on LinkedIn - personalize requests',
        'Join professional communities online',
        'Offer value first before asking for help',
        'Follow up within 24 hours after meeting',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Job Search Strategy',
      icon: Briefcase,
      items: [
        'Tailor resume for each job application',
        'Use keywords from job description',
        'Network referrals increase chances by 5x',
        'Practice STAR method for interviews',
        'Follow up after interviews with thank you note',
      ],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Leadership & Communication',
      icon: MessageCircle,
      items: [
        'Practice active listening in meetings',
        'Learn to give constructive feedback',
        'Take ownership of mistakes and learn',
        'Mentor junior team members',
        'Improve public speaking with practice',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const mentalHealthContent = [
    {
      title: 'Stress Management',
      icon: Brain,
      items: [
        'Practice deep breathing: 4-7-8 technique',
        'Exercise releases endorphins (natural mood booster)',
        'Time management reduces overwhelm',
        'Set boundaries - learn to say no',
        'Take regular breaks during work',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Mindfulness & Meditation',
      icon: Moon,
      items: [
        'Start with 5 minutes of meditation daily',
        'Use apps: Headspace, Calm, Insight Timer',
        'Practice gratitude - write 3 things daily',
        'Mindful eating: focus on your meals',
        'Evening journaling to process emotions',
      ],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Emotional Wellness',
      icon: Heart,
      items: [
        'Talk to someone you trust about feelings',
        'It\'s okay to not be okay - seek help',
        'Limit social media for mental peace',
        'Engage in hobbies you enjoy',
        'Professional therapy is a sign of strength',
      ],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Healthy Habits',
      icon: Smile,
      items: [
        'Morning routine: wake up same time daily',
        'Limit caffeine after 2 PM for better sleep',
        'Spend time in nature weekly',
        'Connect with friends regularly',
        'Laugh more - watch comedy, play games',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const MainView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      {/* Welcome Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-8 text-center"
      >
        <UserCircle className="w-16 h-16 text-gold mx-auto mb-4" />
        <h2 className="text-2xl gradient-text-premium mb-2">Smart Living for Men</h2>
        <p className="text-gray-400">
          Fix problems, cook quick meals, groom like a pro
        </p>
      </motion.div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setCurrentView(category.id as CategoryView)}
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

      {/* Quick Tip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-3">💪 Daily Challenge</h3>
        <p className="text-gray-300 leading-relaxed">
          Try a 5-minute meditation today. Mental strength is just as important as physical strength. Your mind deserves the same attention as your body.
        </p>
      </motion.div>
    </div>
  );

  const FixingView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
            <Wrench className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl gradient-text-premium">🔧 Quick Fixes & Repairs</h2>
            <p className="text-sm text-gray-400">DIY solutions for common household problems</p>
          </div>
        </div>
        <Button
          onClick={() => setCurrentView('main')}
          variant="outline"
          className="w-full border-gold/30 text-gold hover:bg-gold/10"
        >
          Back to Categories
        </Button>
      </motion.div>

      {/* Fixing Guides */}
      <div className="grid grid-cols-1 gap-4">
        {fixingGuides.map((guide, index) => {
          const Icon = guide.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="premium-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${guide.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-white">{guide.title}</h3>
              </div>
              <ul className="space-y-2">
                {guide.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Safety Warning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="premium-card rounded-2xl p-6 border-2 border-red-500/30"
      >
        <h3 className="text-lg text-red-400 mb-3">⚠️ Safety First</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Always turn off power at the breaker before working on electrical issues. If you're unsure about any repair, consult a professional. Your safety is more important than saving money.
        </p>
      </motion.div>

      {/* Ask for Help */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">💬 Ask for Repair Help</h3>
        <VoiceInput
          onTranscript={(text) => {
            console.log('Repair query:', text);
          }}
          placeholder="Describe the problem... (e.g., my fan is making noise)"
        />
      </motion.div>
    </div>
  );

  const FoodView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
            <Utensils className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl gradient-text-premium">🍳 Bachelor's Menu</h2>
            <p className="text-sm text-gray-400">Quick, simple meals for busy men</p>
          </div>
        </div>
        <Button
          onClick={() => setCurrentView('main')}
          variant="outline"
          className="w-full border-gold/30 text-gold hover:bg-gold/10"
        >
          Back to Categories
        </Button>
      </motion.div>

      {/* Meal Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bachelorMeals.map((mealCategory, index) => {
          const Icon = mealCategory.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="premium-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mealCategory.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-white">{mealCategory.category}</h3>
              </div>
              <div className="space-y-2">
                {mealCategory.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-gold/10">
                    <span className="text-white text-sm">{item.name}</span>
                    <div className="flex gap-2">
                      <Badge className="bg-gold/20 text-gold border-gold/30 text-xs">
                        {item.time}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Kitchen Essentials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">🛒 Bachelor Kitchen Essentials</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Rice', 'Eggs', 'Bread', 'Pasta', 'Instant Noodles', 'Canned Beans', 'Frozen Veggies', 'Basic Spices'].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 p-2 bg-black/40 rounded-lg border border-gold/10">
              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Ask for Recipe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">💬 Ask for Recipe</h3>
        <VoiceInput
          onTranscript={(text) => {
            console.log('Recipe query:', text);
          }}
          placeholder="What ingredients do you have? (e.g., I have eggs and bread)"
        />
      </motion.div>
    </div>
  );

  const GroomingView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
            <Scissors className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl gradient-text-premium">✂️ Grooming Guide</h2>
            <p className="text-sm text-gray-400">Look sharp, feel confident</p>
          </div>
        </div>
        <Button
          onClick={() => setCurrentView('main')}
          variant="outline"
          className="w-full border-gold/30 text-gold hover:bg-gold/10"
        >
          Back to Categories
        </Button>
      </motion.div>

      {/* Grooming Guides */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groomingGuides.map((guide, index) => {
          const Icon = guide.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="premium-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${guide.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-white">{guide.title}</h3>
              </div>
              <ul className="space-y-2">
                {guide.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Grooming Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">📅 Weekly Grooming Schedule</h3>
        <div className="space-y-2">
          {[
            { day: 'Daily', task: 'Face wash, moisturize, deodorant' },
            { day: 'Mon/Wed/Fri', task: 'Shampoo & condition hair' },
            { day: 'Tue/Thu', task: 'Exfoliate face' },
            { day: 'Every 2-3 days', task: 'Trim/shape beard' },
            { day: 'Weekly', task: 'Trim nails, deep clean' },
            { day: '4-6 weeks', task: 'Get professional haircut' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-gold/10">
              <span className="text-gold text-sm">{item.day}</span>
              <span className="text-gray-300 text-sm">{item.task}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Ask for Grooming Advice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">💬 Ask Grooming Advice</h3>
        <VoiceInput
          onTranscript={(text) => {
            console.log('Grooming query:', text);
          }}
          placeholder="Ask anything... (e.g., best products for dry skin)"
        />
      </motion.div>
    </div>
  );

  const FitnessView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
            <Dumbbell className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl gradient-text-premium">💪 Fitness & Health</h2>
            <p className="text-sm text-gray-400">Build strength, improve health, live better</p>
          </div>
        </div>
        <Button
          onClick={() => setCurrentView('main')}
          variant="outline"
          className="w-full border-gold/30 text-gold hover:bg-gold/10"
        >
          Back to Categories
        </Button>
      </motion.div>

      {/* Fitness Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fitnessContent.map((section, index) => {
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

      {/* Ask Fitness Question */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">💬 Ask Fitness Question</h3>
        <VoiceInput
          onTranscript={(text) => {
            console.log('Fitness query:', text);
          }}
          placeholder="Ask anything... (e.g., best exercises for abs)"
        />
      </motion.div>
    </div>
  );

  const CareerView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
            <Briefcase className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl gradient-text-premium">📈 Career Growth</h2>
            <p className="text-sm text-gray-400">Advance your career, build your future</p>
          </div>
        </div>
        <Button
          onClick={() => setCurrentView('main')}
          variant="outline"
          className="w-full border-gold/30 text-gold hover:bg-gold/10"
        >
          Back to Categories
        </Button>
      </motion.div>

      {/* Career Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {careerContent.map((section, index) => {
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

      {/* Ask Career Question */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">💬 Ask Career Question</h3>
        <VoiceInput
          onTranscript={(text) => {
            console.log('Career query:', text);
          }}
          placeholder="Ask anything... (e.g., how to negotiate salary)"
        />
      </motion.div>
    </div>
  );

  const MentalHealthView = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
            <Heart className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl gradient-text-premium">❤️ Mental Health</h2>
            <p className="text-sm text-gray-400">Your mental health matters - take care of yourself</p>
          </div>
        </div>
        <Button
          onClick={() => setCurrentView('main')}
          variant="outline"
          className="w-full border-gold/30 text-gold hover:bg-gold/10"
        >
          Back to Categories
        </Button>
      </motion.div>

      {/* Mental Health Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mentalHealthContent.map((section, index) => {
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

      {/* Crisis Support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="premium-card rounded-2xl p-6 border-2 border-pink-500/30"
      >
        <h3 className="text-lg text-pink-400 mb-3">🆘 Need Immediate Help?</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          If you're in crisis or need someone to talk to right now, please reach out:
        </p>
        <div className="space-y-2">
          <p className="text-white text-sm">• Crisis Helpline: Available 24/7</p>
          <p className="text-white text-sm">• Talk to a trusted friend or family member</p>
          <p className="text-white text-sm">• Professional therapy is always an option</p>
        </div>
      </motion.div>

      {/* Ask Mental Health Question */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="premium-card rounded-2xl p-6"
      >
        <h3 className="text-lg gradient-text-premium mb-4">💬 Ask for Support</h3>
        <VoiceInput
          onTranscript={(text) => {
            console.log('Mental health query:', text);
          }}
          placeholder="Share how you're feeling... (completely confidential)"
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <UserCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl gradient-text-premium">{t('menAI')}</h1>
                <p className="text-sm text-gray-400">{t('menAITagline')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {currentView === 'main' && (
          <motion.div
            key="main"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MainView />
          </motion.div>
        )}
        {currentView === 'fixing' && (
          <motion.div
            key="fixing"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <FixingView />
          </motion.div>
        )}
        {currentView === 'food' && (
          <motion.div
            key="food"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <FoodView />
          </motion.div>
        )}
        {currentView === 'grooming' && (
          <motion.div
            key="grooming"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <GroomingView />
          </motion.div>
        )}
        {currentView === 'fitness' && (
          <motion.div
            key="fitness"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <FitnessView />
          </motion.div>
        )}
        {currentView === 'career' && (
          <motion.div
            key="career"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CareerView />
          </motion.div>
        )}
        {currentView === 'mental' && (
          <motion.div
            key="mental"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MentalHealthView />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
