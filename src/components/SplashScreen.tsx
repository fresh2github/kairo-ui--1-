import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Crown, Sparkles, Zap } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden relative">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: Math.random() * 3 
            }}
          />
        ))}
      </div>

      {/* Logo Container */}
      <motion.div 
        className="flex flex-col items-center gap-6 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Premium Logo Circle */}
        <div className="relative">
          <motion.div
            className="w-40 h-40 rounded-full gold-gradient flex items-center justify-center relative overflow-hidden"
            animate={{ 
              boxShadow: [
                '0 0 40px rgba(255, 215, 0, 0.4)',
                '0 0 80px rgba(255, 215, 0, 0.6)',
                '0 0 40px rgba(255, 215, 0, 0.4)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Inner circle with subtle gradient */}
            <div className="absolute inset-2 rounded-full bg-black/80 backdrop-blur-sm" />
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full" />
              <div className="absolute top-12 right-6 w-2 h-2 bg-white rounded-full" />
              <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white rounded-full" />
              <div className="absolute bottom-12 right-12 w-2.5 h-2.5 bg-white rounded-full" />
            </div>
            
            <div className="relative z-10 flex items-center justify-center">
              <span className="text-7xl font-black text-black tracking-wider drop-shadow-2xl">K</span>
              <Crown className="w-8 h-8 text-black absolute -top-2 -right-2 drop-shadow-lg" />
              <Sparkles className="w-5 h-5 text-black absolute -bottom-1 -left-1" fill="currentColor" />
            </div>
            
            {/* Rotating AI Circuit */}
            <motion.div 
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="black" strokeWidth="1" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
                <circle cx="50" cy="15" r="2" fill="black" />
                <circle cx="85" cy="50" r="2" fill="black" />
                <circle cx="50" cy="85" r="2" fill="black" />
                <circle cx="15" cy="50" r="2" fill="black" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Outer glowing rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-gold/50"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute inset-0 rounded-full border border-gold/30"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: 0.5,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* App Name with Premium Styling */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-7xl gradient-text-premium tracking-wider drop-shadow-2xl">
            KAIRO
          </h1>
          <div className="flex items-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <Zap className="w-4 h-4 text-gold" fill="currentColor" />
            <span className="text-sm text-silver tracking-widest">AI</span>
            <Zap className="w-4 h-4 text-gold" fill="currentColor" />
            <div className="h-px w-12 bg-gradient-to-r from-gold via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          className="text-xl text-silver tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Smarter. Safer. Stronger.
        </motion.p>

        {/* Premium Loading Animation */}
        <div className="flex gap-3 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full gold-gradient shadow-lg shadow-gold/50"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
