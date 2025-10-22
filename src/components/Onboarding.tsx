import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Shield, Zap, Crown } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

interface OnboardingProps {
  onComplete: () => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Crown,
      title: t('onboardingTitle1'),
      description: t('onboardingDesc1'),
      gradient: 'from-gold via-yellow-500 to-gold',
      color: 'text-gold'
    },
    {
      icon: Brain,
      title: t('onboardingTitle2'),
      description: t('onboardingDesc2'),
      gradient: 'from-blue-500 via-cyan-500 to-blue-600',
      color: 'text-cyan-400'
    },
    {
      icon: Shield,
      title: t('onboardingTitle3'),
      description: t('onboardingDesc3'),
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
      color: 'text-emerald-400'
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black relative overflow-hidden">
      {/* Background decoration with premium glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-silver rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="w-full max-w-md z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            {/* Premium Icon */}
            <motion.div
              className={`w-36 h-36 rounded-3xl bg-gradient-to-br ${slides[currentSlide].gradient} flex items-center justify-center mb-8 shadow-2xl`}
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 40px rgba(255, 215, 0, 0.3)',
                  '0 0 80px rgba(255, 215, 0, 0.5)',
                  '0 0 40px rgba(255, 215, 0, 0.3)',
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
              }}
            >
              {(() => {
                const Icon = slides[currentSlide].icon;
                return <Icon className="w-20 h-20 text-white drop-shadow-2xl" />;
              })()}
            </motion.div>

            {/* Title */}
            <h2 className={`text-4xl mb-4 ${slides[currentSlide].color} drop-shadow-lg`}>
              {slides[currentSlide].title}
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 gold-gradient shadow-lg shadow-gold/50' 
                  : 'w-2 bg-gray-700'
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          {currentSlide > 0 && (
            <Button
              onClick={prevSlide}
              variant="outline"
              className="flex-1 bg-transparent border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50"
            >
              {t('next')}
            </Button>
          )}
          <Button
            onClick={nextSlide}
            className="flex-1 gold-gradient hover:shadow-xl hover:shadow-gold/30 text-black border-0 transition-all duration-300"
          >
            {currentSlide === slides.length - 1 ? t('getStarted') : t('next')}
          </Button>
        </div>

        {/* Skip button */}
        {currentSlide < slides.length - 1 && (
          <button
            onClick={onComplete}
            className="w-full mt-4 text-gray-400 hover:text-gold transition-colors"
          >
            {t('skip')}
          </button>
        )}
      </div>
    </div>
  );
}
