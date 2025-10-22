import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mic, Video, FileText, Search, Brain, File, Wand2, Crown } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useLanguage } from '../contexts/LanguageContext';
import VoiceInput from './VoiceInput';

interface AIToolsProps {
  onBack: () => void;
}

const tools = [
  {
    id: 'speech',
    icon: Mic,
    title: 'Speech to Text',
    description: 'Convert voice to text instantly',
    gradient: 'from-blue-500 via-cyan-500 to-blue-600',
    bgGlow: 'bg-blue-500/20'
  },
  {
    id: 'youtube',
    icon: Video,
    title: 'YouTube Summarizer',
    description: 'Get quick summaries of videos',
    gradient: 'from-red-500 via-pink-500 to-red-600',
    bgGlow: 'bg-red-500/20'
  },
  {
    id: 'pdf',
    icon: FileText,
    title: 'PDF Summarizer',
    description: 'Extract key points from PDFs',
    gradient: 'from-emerald-500 via-green-500 to-teal-500',
    bgGlow: 'bg-green-500/20'
  },
  {
    id: 'fact',
    icon: Search,
    title: 'Fact Checker',
    description: 'Verify information accuracy',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    bgGlow: 'bg-orange-500/20'
  },
  {
    id: 'emotion',
    icon: Brain,
    title: 'Emotion Detector',
    description: 'Analyze sentiment in text',
    gradient: 'from-purple-500 via-pink-500 to-fuchsia-500',
    bgGlow: 'bg-purple-500/20'
  },
  {
    id: 'notes',
    icon: File,
    title: 'Smart Notes Generator',
    description: 'Create organized notes',
    gradient: 'from-indigo-500 via-purple-500 to-blue-500',
    bgGlow: 'bg-indigo-500/20'
  },
];

export default function AITools({ onBack }: AIToolsProps) {
  const { t } = useLanguage();
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [transcript, setTranscript] = useState('');

  const handleVoiceTranscript = (text: string) => {
    setTranscript(text);
  };

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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/30 relative">
                <Wand2 className="w-5 h-5 text-white" />
                <Crown className="w-3 h-3 text-gold absolute -top-0.5 -right-0.5" />
              </div>
              <div>
                <h1 className="text-2xl gradient-text-premium">{t('aiTools')}</h1>
                <p className="text-sm text-gray-400">{t('aiToolsTagline')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        {/* Voice Recognition Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card rounded-2xl p-8 mb-6 text-center"
        >
          <h2 className="text-2xl gradient-text-premium mb-2">Voice to Text</h2>
          <p className="text-gray-400 mb-6">Tap the mic and start speaking</p>
          
          <div className="flex justify-center mb-6">
            <VoiceInput onTranscript={handleVoiceTranscript} className="scale-125" />
          </div>

          {transcript && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/60 rounded-xl p-4 border border-gold/20"
            >
              <p className="text-white text-lg">{transcript}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => setSelectedTool(tool.id)}
                className="cursor-pointer"
              >
                <div className="premium-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group relative overflow-hidden">
                  {/* Background glow */}
                  <div className={`absolute inset-0 ${tool.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg text-white mb-2">
                      {tool.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Tool Demo */}
        {selectedTool === 'youtube' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="premium-card rounded-2xl p-6 mt-6"
          >
            <h3 className="text-xl text-white mb-4">YouTube Summarizer</h3>
            <Input
              placeholder="Paste YouTube URL here..."
              className="bg-black/60 border-gold/30 text-white placeholder:text-gray-500 rounded-xl h-12 mb-4"
            />
            <Button className="w-full gold-gradient text-black hover:shadow-lg hover:shadow-gold/30 h-12 rounded-xl">
              Generate Summary
            </Button>
          </motion.div>
        )}

        {selectedTool === 'emotion' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="premium-card rounded-2xl p-6 mt-6"
          >
            <h3 className="text-xl text-white mb-4">Emotion Detector</h3>
            <Textarea
              placeholder="Enter text to analyze emotions..."
              className="bg-black/60 border-gold/30 text-white placeholder:text-gray-500 rounded-xl min-h-[120px] mb-4"
            />
            <Button className="w-full gold-gradient text-black hover:shadow-lg hover:shadow-gold/30 h-12 rounded-xl">
              Analyze Sentiment
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
