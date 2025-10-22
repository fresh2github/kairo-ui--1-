import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Siren, Phone, MapPin, Users, AlertTriangle, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

interface SafetyWingProps {
  onBack: () => void;
}

export default function SafetyWing({ onBack }: SafetyWingProps) {
  const { t } = useLanguage();
  const [sosActive, setSosActive] = useState(false);

  const emergencyContacts = [
    { id: 1, name: 'Mom', phone: '+91 98765 43210', relation: 'Family' },
    { id: 2, name: 'Dad', phone: '+91 98765 43211', relation: 'Family' },
    { id: 3, name: 'Best Friend', phone: '+91 98765 43212', relation: 'Friend' },
  ];

  const handleSOS = () => {
    setSosActive(true);
    // Simulate SOS alert
    setTimeout(() => setSosActive(false), 3000);
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center shadow-lg shadow-red-500/30">
                <Siren className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl gradient-text-premium">{t('safetyWing')}</h1>
                <p className="text-sm text-gray-400">{t('safetyWingTagline')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
        {/* SOS Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="premium-card rounded-2xl p-8 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSOS}
            className={`w-40 h-40 rounded-full mx-auto mb-4 ${
              sosActive
                ? 'bg-red-500 animate-pulse'
                : 'bg-gradient-to-br from-red-500 to-pink-600'
            } shadow-2xl shadow-red-500/50 flex items-center justify-center`}
          >
            <Siren className="w-20 h-20 text-white" />
          </motion.button>
          <h3 className="text-2xl text-white mb-2">Emergency SOS</h3>
          <p className="text-gray-400 mb-4">
            {sosActive ? 'Alerting emergency contacts...' : 'Tap to alert your emergency contacts'}
          </p>
          {sosActive && (
            <div className="text-red-400 animate-pulse">
              🚨 SOS Alert Sent!
            </div>
          )}
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="premium-card rounded-2xl p-6 text-center cursor-pointer hover:shadow-xl hover:shadow-gold/10 transition-all"
          >
            <MapPin className="w-12 h-12 text-gold mx-auto mb-3" />
            <p className="text-white">Share Location</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="premium-card rounded-2xl p-6 text-center cursor-pointer hover:shadow-xl hover:shadow-gold/10 transition-all"
          >
            <Phone className="w-12 h-12 text-gold mx-auto mb-3" />
            <p className="text-white">Call Police</p>
          </motion.div>
        </div>

        {/* Emergency Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="premium-card rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg text-white">Emergency Contacts</h3>
            <Button variant="outline" size="sm" className="border-gold/30 text-gold hover:bg-gold/10">
              <Users className="w-4 h-4 mr-2" />
              Add
            </Button>
          </div>
          <div className="space-y-3">
            {emergencyContacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-gold/10"
              >
                <div>
                  <p className="text-white">{contact.name}</p>
                  <p className="text-sm text-gray-400">{contact.phone}</p>
                </div>
                <Button size="sm" className="gold-gradient text-black">
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Safety Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="premium-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-gold" />
            <h3 className="text-lg text-white">Safety Tips</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
              <span>Always share your location when traveling alone</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
              <span>Keep emergency contacts updated</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
              <span>Trust your instincts in unsafe situations</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
