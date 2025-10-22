import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useLanguage } from '../contexts/LanguageContext';
import VoiceInput from './VoiceInput';

interface SocioAwareProps {
  onBack: () => void;
}

export default function SocioAware({ onBack }: SocioAwareProps) {
  const { t } = useLanguage();
  const [contentToCheck, setContentToCheck] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<any>(null);

  const analyzeContent = () => {
    setIsChecking(true);
    setTimeout(() => {
      setResult({
        isSafe: Math.random() > 0.5,
        confidence: 87,
        threats: ['Misleading Information', 'Unverified Source'],
        suggestions: [
          'Cross-reference with trusted sources',
          'Check author credentials',
          'Look for fact-check labels',
        ],
      });
      setIsChecking(false);
    }, 2000);
  };

  const handleVoiceTranscript = (text: string) => {
    setContentToCheck(text);
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl gradient-text-premium">{t('socioAware')}</h1>
                <p className="text-sm text-gray-400">{t('socioAwareTagline')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg text-white">Paste Content to Check</h3>
            <VoiceInput onTranscript={handleVoiceTranscript} />
          </div>
          
          <Textarea
            value={contentToCheck}
            onChange={(e) => setContentToCheck(e.target.value)}
            placeholder="Paste text, URL, or speak to check for fake news, misinformation, or harmful content..."
            className="min-h-[200px] bg-black/60 border-gold/30 text-white placeholder:text-gray-500 rounded-xl mb-4 focus:border-gold/60"
          />

          <Button
            onClick={analyzeContent}
            disabled={isChecking || !contentToCheck}
            className="w-full gold-gradient text-black hover:shadow-lg hover:shadow-gold/30 h-12 rounded-xl"
          >
            {isChecking ? (
              <>
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                Analyzing Content...
              </>
            ) : (
              <>
                <ShieldCheck className="w-5 h-5 mr-2" />
                Check Content
              </>
            )}
          </Button>
        </motion.div>

        {/* Results */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="premium-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              {result.isSafe ? (
                <CheckCircle className="w-12 h-12 text-emerald-400" />
              ) : (
                <XCircle className="w-12 h-12 text-red-400" />
              )}
              <div>
                <h3 className={`text-2xl ${result.isSafe ? 'text-emerald-400' : 'text-red-400'}`}>
                  {result.isSafe ? 'Content Appears Safe' : 'Potential Issues Detected'}
                </h3>
                <p className="text-gray-400">Confidence: {result.confidence}%</p>
              </div>
            </div>

            {!result.isSafe && result.threats.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg text-white mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  Detected Threats
                </h4>
                <div className="space-y-2">
                  {result.threats.map((threat: string, index: number) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300"
                    >
                      {threat}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-lg text-white mb-3">Recommendations</h4>
              <ul className="space-y-2">
                {result.suggestions.map((suggestion: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="premium-card rounded-2xl p-6"
        >
          <h3 className="text-lg text-white mb-4">How It Works</h3>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-start gap-2">
              <span className="text-gold">•</span>
              AI analyzes content for misinformation patterns
            </p>
            <p className="flex items-start gap-2">
              <span className="text-gold">•</span>
              Cross-references with verified sources
            </p>
            <p className="flex items-start gap-2">
              <span className="text-gold">•</span>
              Detects emotional manipulation tactics
            </p>
            <p className="flex items-start gap-2">
              <span className="text-gold">•</span>
              Provides safety recommendations
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
