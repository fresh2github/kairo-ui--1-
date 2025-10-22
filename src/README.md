# KAIRO AI - Premium Mobile Application

A premium, AI-powered mobile application featuring multilingual support, voice recognition, and a sophisticated black theme with gold accents.

## ✨ Features

### 🌍 Multilanguage Support
- **5 Languages Supported:**
  - English
  - Spanish (Español)
  - French (Français)
  - German (Deutsch)
  - Hindi (हिन्दी)
- Easy language switching via dropdown selector
- All UI elements and features translated
- Persistent language preference

### 🎤 Voice Recognition
- **Speech-to-Text Integration**
  - Native browser Web Speech API
  - Real-time transcription
  - Multi-language support (matches selected UI language)
  - Visual feedback during recording
  - Available in:
    - Dashboard search
    - LearnWise text input
    - SocioAware content checking
    - TalkZone messaging
    - AITools voice-to-text feature

### 🎨 Premium Black Theme
- **Sophisticated Design:**
  - Pure black background (#000000)
  - Gold (#FFD700) and Silver (#C0C0C0) accents
  - Glossy glass-morphism effects
  - Metallic gradients
  - Ambient glow effects
  - Premium shadows and lighting

### 📱 App Sections

1. **Dashboard** - Central hub with all features
2. **LearnWise** - AI-powered study summaries with voice input
3. **SpendWise** - Budget tracking and expense management
4. **SocioAware** - Fake news and content safety detection
5. **WomenAI** - Guidance for women across all life stages
6. **MenAI** - Lifestyle and wellness for men
7. **SafetyWing** - Emergency SOS and safety features
8. **TalkZone** - AI chat support with voice messaging
9. **AITools** - Collection of AI-powered utilities
10. **Profile** - User settings and preferences

## 🚀 Getting Started

The application is built with:
- React + TypeScript
- Tailwind CSS v4.0
- Motion (Framer Motion)
- Lucide React Icons
- ShadCN UI Components

### Language Context

The app uses React Context for language management:

```tsx
import { useLanguage } from './contexts/LanguageContext';

function Component() {
  const { t, language, setLanguage } = useLanguage();
  return <h1>{t('welcomeBack')}</h1>;
}
```

### Voice Recognition Hook

Use the custom voice recognition hook:

```tsx
import { useVoiceRecognition } from './hooks/useVoiceRecognition';

function Component() {
  const { isListening, transcript, startListening, stopListening } = useVoiceRecognition({
    onResult: (text) => console.log('Transcribed:', text),
  });
}
```

### Premium Theme Classes

Custom CSS classes available:

- `.premium-glass` - Glass-morphism card with gold border
- `.gold-gradient` - Gold gradient background
- `.gradient-text-premium` - Gold gradient text
- `.glow-gold` - Gold glow effect
- `.premium-card` - Premium card with metallic accents

## 🎯 Key Components

### LanguageSelector
Dropdown component for language selection with flags

### VoiceInput
Floating action button for voice input with visual feedback

### All Feature Pages
Updated with:
- Premium black theme
- Gold/silver accents
- Translated content
- Voice input integration where applicable

## 🔧 Customization

### Adding New Languages

Edit `/contexts/LanguageContext.tsx`:

```tsx
const translations: Translations = {
  en: { ... },
  newLang: {
    welcomeBack: 'Translation here',
    // ...
  }
};
```

### Theme Colors

Edit `/styles/globals.css`:

```css
:root {
  --gold: #FFD700;
  --silver: #C0C0C0;
  --bronze: #CD7F32;
}
```

## 📝 Notes

- Voice recognition requires browser support (Chrome, Edge, Safari)
- Language preference persists during session
- All components are responsive
- Premium theme optimized for mobile devices

## 🎨 Design Philosophy

The KAIRO AI application embodies premium luxury through:
- Minimalist black backgrounds
- Metallic gold and silver accents
- Smooth animations and transitions
- Sophisticated typography
- Professional glassmorphism effects

---

**KAIRO AI** - Smarter. Safer. Stronger.
