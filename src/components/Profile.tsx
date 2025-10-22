import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, User, Mail, Phone, Edit2, LogOut, Crown, Globe, Bell, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Switch } from './ui/switch';
import { Input } from './ui/input';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

interface ProfileProps {
  onBack: () => void;
  onLogout: () => void;
}

export default function Profile({ onBack, onLogout }: ProfileProps) {
  const { t } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [name, setName] = useState('Alex Johnson');
  const [email, setEmail] = useState('alex.johnson@email.com');
  const [phone, setPhone] = useState('+91 98765 43210');

  return (
    <div className="min-h-screen pb-20 bg-black">
      {/* Header */}
      <div className="premium-glass border-b border-gold/20 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={onBack}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gold"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl gradient-text-premium">{t('profile')}</h1>
                <p className="text-sm text-gray-400">Manage your account</p>
              </div>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card rounded-2xl p-6"
        >
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <Avatar className="w-24 h-24 border-4 border-gold/50 shadow-lg shadow-gold/20">
                <AvatarImage src="" />
                <AvatarFallback className="text-2xl gold-gradient text-black">
                  {name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full gold-gradient flex items-center justify-center shadow-lg shadow-gold/40">
                <Crown className="w-4 h-4 text-black" />
              </div>
            </div>
            <h2 className="text-2xl text-white mb-1">{name}</h2>
            <p className="text-gray-400">{email}</p>
          </div>

          {/* Edit Form */}
          {isEditing ? (
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/60" />
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 bg-black/60 border-gold/30 text-white rounded-xl h-12"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/60" />
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-black/60 border-gold/30 text-white rounded-xl h-12"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/60" />
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10 bg-black/60 border-gold/30 text-white rounded-xl h-12"
                />
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 gold-gradient text-black hover:shadow-lg hover:shadow-gold/30"
                >
                  Save Changes
                </Button>
                <Button
                  onClick={() => setIsEditing(false)}
                  variant="outline"
                  className="flex-1 border-gold/30 text-gold hover:bg-gold/10"
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <Button
              onClick={() => setIsEditing(true)}
              className="w-full gold-gradient text-black hover:shadow-lg hover:shadow-gold/30"
            >
              <Edit2 className="w-4 h-4 mr-2" />
              {t('editProfile')}
            </Button>
          )}
        </motion.div>

        {/* Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="premium-card rounded-2xl p-6"
        >
          <h3 className="text-xl text-white mb-4">{t('settings')}</h3>
          
          <div className="space-y-4">
            {/* Language Setting */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-gold/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                  <Globe className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-white">{t('language')}</p>
                  <p className="text-sm text-gray-400">Choose your language</p>
                </div>
              </div>
              <LanguageSelector />
            </div>

            {/* Notifications */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-gold/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white">{t('notifications')}</p>
                  <p className="text-sm text-gray-400">Enable push notifications</p>
                </div>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            {/* Privacy */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-gold/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white">{t('privacy')}</p>
                  <p className="text-sm text-gray-400">Manage privacy settings</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            onClick={onLogout}
            variant="outline"
            className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50 h-14 rounded-xl"
          >
            <LogOut className="w-5 h-5 mr-2" />
            {t('logout')}
          </Button>
        </motion.div>

        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="premium-card rounded-2xl p-6 text-center"
        >
          <Crown className="w-12 h-12 text-gold mx-auto mb-3" />
          <h3 className="text-xl gradient-text-premium mb-2">KAIRO AI Premium</h3>
          <p className="text-gray-400 mb-4">Experience the full power of AI</p>
          <Button className="gold-gradient text-black hover:shadow-lg hover:shadow-gold/30">
            Upgrade Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
