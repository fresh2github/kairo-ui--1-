import { motion, AnimatePresence } from 'motion/react';
import { Mic, MicOff } from 'lucide-react';
import { useVoiceRecognition } from '../hooks/useVoiceRecognition';
import { useLanguage } from '../contexts/LanguageContext';

interface VoiceInputProps {
  onTranscript?: (text: string) => void;
  className?: string;
}

const languageMap: { [key: string]: string } = {
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
  hi: 'hi-IN',
};

export default function VoiceInput({ onTranscript, className = '' }: VoiceInputProps) {
  const { language, t } = useLanguage();
  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    isSupported,
  } = useVoiceRecognition({
    language: languageMap[language],
    onResult: (text) => {
      if (onTranscript) {
        onTranscript(text);
      }
    },
  });

  if (!isSupported) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={isListening ? stopListening : startListening}
        className={`relative p-4 rounded-full transition-all duration-300 ${
          isListening
            ? 'bg-gradient-to-br from-red-500 to-pink-500 shadow-lg shadow-red-500/50'
            : 'bg-gradient-to-br from-gold to-yellow-600 shadow-lg shadow-gold/50'
        }`}
      >
        <AnimatePresence mode="wait">
          {isListening ? (
            <motion.div
              key="listening"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <MicOff className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Mic className="w-6 h-6 text-black" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing ring when listening */}
        {isListening && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-red-500"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [1, 0, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        )}
      </motion.button>

      {/* Status text */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <span className="text-sm text-gold animate-pulse">
              {t('voiceListening')}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transcript preview */}
      <AnimatePresence>
        {transcript && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 bg-black/90 border border-gold/30 rounded-xl px-4 py-2 backdrop-blur-xl max-w-xs"
          >
            <p className="text-sm text-gray-300 truncate">{transcript}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
