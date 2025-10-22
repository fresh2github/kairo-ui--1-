import { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, Link2, FileText, Clock, Save, ArrowLeft, Brain, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { useLanguage } from '../contexts/LanguageContext';
import VoiceInput from './VoiceInput';

interface LearnWiseProps {
  onBack: () => void;
}

export default function LearnWise({ onBack }: LearnWiseProps) {
  const { t } = useLanguage();
  const [pdfLink, setPdfLink] = useState('');
  const [textInput, setTextInput] = useState('');
  const [summary, setSummary] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSummary = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setSummary(`📚 **Summary Generated**\n\n**Key Points:**\n• Introduction to Machine Learning fundamentals\n• Supervised vs Unsupervised Learning explained\n• Common algorithms: Linear Regression, Decision Trees, Neural Networks\n• Real-world applications in business and technology\n\n**Important Concepts:**\n- Training and testing data splits\n- Model evaluation metrics\n- Overfitting and underfitting\n\n**Recommended Next Steps:**\n1. Practice with sample datasets\n2. Explore Python libraries (scikit-learn, TensorFlow)\n3. Build a simple prediction model`);
      setIsGenerating(false);
    }, 2000);
  };

  const handleVoiceTranscript = (text: string) => {
    setTextInput(text);
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl gradient-text-premium">{t('learnWise')}</h1>
                <p className="text-sm text-gray-400">{t('learnWiseTagline')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        <Tabs defaultValue="summarize" className="w-full">
          <TabsList className="grid w-full grid-cols-3 premium-glass border border-gold/20 rounded-xl p-1">
            <TabsTrigger 
              value="summarize" 
              className="rounded-lg data-[state=active]:gold-gradient data-[state=active]:text-black"
            >
              <FileText className="w-4 h-4 mr-2" />
              Summarize
            </TabsTrigger>
            <TabsTrigger 
              value="notes" 
              className="rounded-lg data-[state=active]:gold-gradient data-[state=active]:text-black"
            >
              <FileText className="w-4 h-4 mr-2" />
              Notes
            </TabsTrigger>
            <TabsTrigger 
              value="prep" 
              className="rounded-lg data-[state=active]:gold-gradient data-[state=active]:text-black"
            >
              <Clock className="w-4 h-4 mr-2" />
              Quick Prep
            </TabsTrigger>
          </TabsList>

          <TabsContent value="summarize" className="mt-6 space-y-6">
            {/* Upload Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="premium-card rounded-2xl p-6"
            >
              <h3 className="text-lg text-white mb-4">Upload or Paste Link</h3>
              
              {/* PDF Upload */}
              <div className="border-2 border-dashed border-gold/30 rounded-xl p-8 text-center hover:border-gold/50 transition-all cursor-pointer mb-4">
                <Upload className="w-12 h-12 text-gold mx-auto mb-3" />
                <p className="text-white mb-1">Drop PDF here or click to upload</p>
                <p className="text-sm text-gray-400">Maximum file size: 10MB</p>
              </div>

              {/* Link Input */}
              <div className="relative">
                <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/60" />
                <Input
                  value={pdfLink}
                  onChange={(e) => setPdfLink(e.target.value)}
                  placeholder="Or paste a PDF/article link here..."
                  className="pl-10 bg-black/60 border-gold/30 text-white placeholder:text-gray-500 rounded-xl h-12 focus:border-gold/60"
                />
              </div>
            </motion.div>

            {/* Text Input with Voice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="premium-card rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-white">Or Paste Your Text</h3>
                <VoiceInput onTranscript={handleVoiceTranscript} />
              </div>
              
              <Textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Paste your notes, article, or lecture content here..."
                className="min-h-[200px] bg-black/60 border-gold/30 text-white placeholder:text-gray-500 rounded-xl focus:border-gold/60"
              />
              
              <Button
                onClick={generateSummary}
                disabled={isGenerating || (!pdfLink && !textInput)}
                className="w-full mt-4 gold-gradient text-black hover:shadow-lg hover:shadow-gold/30 h-12 rounded-xl"
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                    Generating Summary...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate AI Summary
                  </>
                )}
              </Button>
            </motion.div>

            {/* Summary Output */}
            {summary && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="premium-card rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg gradient-text-premium">✨ AI Summary</h3>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
                <div className="bg-black/60 rounded-xl p-4 border border-gold/20">
                  <p className="text-gray-200 whitespace-pre-line leading-relaxed">{summary}</p>
                </div>
              </motion.div>
            )}
          </TabsContent>

          <TabsContent value="notes" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="premium-card rounded-2xl p-6 text-center py-20"
            >
              <FileText className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">Saved Notes</h3>
              <p className="text-gray-400">Your AI-generated summaries will appear here</p>
            </motion.div>
          </TabsContent>

          <TabsContent value="prep" className="mt-6 space-y-6">
            {/* Quick Prep Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="premium-card rounded-2xl p-6 text-center"
            >
              <Clock className="w-16 h-16 text-gold mx-auto mb-4" />
              <h2 className="text-2xl gradient-text-premium mb-2">⚡ Quick Preparation</h2>
              <p className="text-gray-400">Last-minute exam prep tools and instant study aids</p>
            </motion.div>

            {/* Quick Prep Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Flashcards Generator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="premium-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg text-white mb-2">📇 Flashcards</h3>
                <p className="text-sm text-gray-400 mb-4">Auto-generate flashcards from your notes in seconds</p>
                <Button variant="outline" className="w-full border-gold/30 text-gold hover:bg-gold/10">
                  Create Flashcards
                </Button>
              </motion.div>

              {/* Quick Quiz */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="premium-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg text-white mb-2">❓ Quick Quiz</h3>
                <p className="text-sm text-gray-400 mb-4">Test yourself with AI-generated questions</p>
                <Button variant="outline" className="w-full border-gold/30 text-gold hover:bg-gold/10">
                  Start Quiz
                </Button>
              </motion.div>

              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="premium-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg text-white mb-2">🎯 Key Points</h3>
                <p className="text-sm text-gray-400 mb-4">Extract only the most important information</p>
                <Button variant="outline" className="w-full border-gold/30 text-gold hover:bg-gold/10">
                  Get Key Points
                </Button>
              </motion.div>

              {/* Memory Tricks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="premium-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg text-white mb-2">🧠 Memory Tricks</h3>
                <p className="text-sm text-gray-400 mb-4">Mnemonics and memory aids for quick recall</p>
                <Button variant="outline" className="w-full border-gold/30 text-gold hover:bg-gold/10">
                  Generate Tricks
                </Button>
              </motion.div>
            </div>

            {/* Study Timer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="premium-card rounded-2xl p-6"
            >
              <h3 className="text-lg gradient-text-premium mb-4">⏱️ Pomodoro Study Timer</h3>
              <div className="text-center mb-4">
                <div className="text-6xl gradient-text-premium mb-4">25:00</div>
                <div className="flex gap-3 justify-center">
                  <Button className="gold-gradient text-black hover:shadow-lg hover:shadow-gold/30">
                    Start Focus
                  </Button>
                  <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                    Take Break
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Quick Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="premium-card rounded-2xl p-6"
            >
              <h3 className="text-lg gradient-text-premium mb-4">💡 Last-Minute Study Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-sm">1</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Focus on summaries:</strong> Review main headings, bold terms, and chapter summaries first.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-sm">2</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Use active recall:</strong> Test yourself instead of just re-reading. It's 2x more effective.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-sm">3</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Take micro-breaks:</strong> 5 minutes every 25 minutes helps retention and prevents burnout.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-sm">4</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Teach it out loud:</strong> Explaining concepts as if teaching someone else solidifies understanding.
                  </p>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
