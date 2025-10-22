import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, Crown, Sparkles, Eye, EyeOff, Chrome, Apple, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Separator } from './ui/separator';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

interface LoginSignupProps {
  onLogin: () => void;
}

export default function LoginSignup({ onLogin }: LoginSignupProps) {
  const { t } = useLanguage();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black relative overflow-hidden">
      {/* Background effects with premium glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-silver rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* KAIRO Logo - Premium */}
      <motion.div 
        className="absolute top-8 left-8 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center relative shadow-lg shadow-gold/40">
          <Crown className="w-6 h-6 text-black" />
          <Sparkles className="w-3 h-3 text-black absolute -top-0.5 -right-0.5" fill="currentColor" />
        </div>
        <span className="text-3xl gradient-text-premium tracking-wider">
          KAIRO
        </span>
      </motion.div>

      {/* Language Selector */}
      <div className="absolute top-8 right-8">
        <LanguageSelector />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <div className="premium-glass rounded-3xl p-8 md:p-10 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl mb-2 gradient-text-premium">
              {isSignup ? t('signup') : t('login')}
            </h1>
            <p className="text-gray-400">
              {isSignup ? 'Join KAIRO AI today' : 'Welcome back to KAIRO AI'}
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <Button
              type="button"
              onClick={() => handleSocialLogin('Google')}
              variant="outline"
              className="w-full border-gold/30 text-white hover:bg-gold/10 h-12 rounded-xl"
            >
              <Chrome className="w-5 h-5 mr-2" />
              Continue with Google
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                onClick={() => handleSocialLogin('Apple')}
                variant="outline"
                className="border-gold/30 text-white hover:bg-gold/10 h-12 rounded-xl"
              >
                <Apple className="w-5 h-5 mr-2" />
                Apple
              </Button>
              <Button
                type="button"
                onClick={() => handleSocialLogin('Facebook')}
                variant="outline"
                className="border-gold/30 text-white hover:bg-gold/10 h-12 rounded-xl"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Facebook
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <Separator className="bg-gold/20" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-3 text-sm text-gray-400">
              Or continue with email
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/60" />
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 bg-black/60 border-gold/30 text-white placeholder:text-gray-500 rounded-xl h-12 focus:border-gold/60 focus:ring-gold/30"
                  required
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/60" />
              <Input
                type="email"
                placeholder={t('email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-black/60 border-gold/30 text-white placeholder:text-gray-500 rounded-xl h-12 focus:border-gold/60 focus:ring-gold/30"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/60" />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder={t('password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 bg-black/60 border-gold/30 text-white placeholder:text-gray-500 rounded-xl h-12 focus:border-gold/60 focus:ring-gold/30"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gold/60 hover:text-gold transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {isSignup && (
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/60" />
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder={t('confirmPassword')}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 pr-10 bg-black/60 border-gold/30 text-white placeholder:text-gray-500 rounded-xl h-12 focus:border-gold/60 focus:ring-gold/30"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gold/60 hover:text-gold transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            )}

            {/* Remember Me / Terms */}
            {!isSignup ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-gold/30 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-400 cursor-pointer">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-gold hover:text-yellow-400 transition-colors"
                >
                  {t('forgotPassword')}
                </button>
              </div>
            ) : (
              <div className="flex items-start gap-2">
                <Checkbox 
                  id="terms" 
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                  className="border-gold/30 data-[state=checked]:bg-gold data-[state=checked]:border-gold mt-0.5"
                />
                <label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer">
                  I agree to the{' '}
                  <a href="#" className="text-gold hover:text-yellow-400">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-gold hover:text-yellow-400">Privacy Policy</a>
                </label>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSignup && !acceptTerms}
              className="w-full gold-gradient hover:shadow-xl hover:shadow-gold/30 text-black h-12 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSignup ? 'Create Account' : 'Sign In'}
            </Button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {isSignup ? t('alreadyHaveAccount') : t('dontHaveAccount')}
            </p>
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="mt-2 text-gold hover:text-yellow-400 transition-colors"
            >
              {isSignup ? t('login') : t('signup')}
            </button>
          </div>

          {/* Security Badge */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
              <Lock className="w-3 h-3" />
              Your data is encrypted and secure
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-gray-500">
            By continuing, you agree to KAIRO AI's Terms of Service and Privacy Policy
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
