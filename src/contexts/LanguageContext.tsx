import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'hi' | 'ta' | 'ml' | 'te';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Common
    welcomeBack: 'Welcome back!',
    aiOnline: 'AI Online',
    askKairo: 'Ask KAIRO anything...',
    tasksToday: 'Tasks Today',
    budgetLeft: 'Budget Left',
    safetyStatus: 'Safety Status',
    safe: 'Safe ✓',
    
    // Features
    learnWise: 'LearnWise',
    learnWiseTagline: 'Summarize notes, prep fast.',
    spendWise: 'SpendWise',
    spendWiseTagline: 'Track, analyze, and save smart.',
    socioAware: 'SocioAware',
    socioAwareTagline: 'Detect fake or harmful content.',
    womenAI: 'WomenAI',
    womenAITagline: 'Guidance for housewives, working women & teens.',
    menAI: 'MenAI',
    menAITagline: 'Simplify routines, fix problems.',
    safetyWing: 'SafetyWing',
    safetyWingTagline: 'Emergency, tracking, and contacts.',
    talkZone: 'TalkZone',
    talkZoneTagline: 'Feel heard and supported.',
    aiTools: 'AI Tools',
    aiToolsTagline: 'Use speech-to-text, YouTube summary, etc.',
    
    // Onboarding
    onboardingTitle1: 'Your AI Companion',
    onboardingDesc1: 'Meet KAIRO AI - your personal assistant for learning, spending, safety, and more.',
    onboardingTitle2: 'Smart Features',
    onboardingDesc2: 'Access powerful tools designed to make your daily life easier and more efficient.',
    onboardingTitle3: 'Get Started',
    onboardingDesc3: 'Join thousands who trust KAIRO AI for a smarter, safer lifestyle.',
    next: 'Next',
    skip: 'Skip',
    getStarted: 'Get Started',
    
    // Auth
    login: 'Login',
    signup: 'Sign Up',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password?',
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: 'Already have an account?',
    
    // Profile
    profile: 'Profile',
    settings: 'Settings',
    language: 'Language',
    notifications: 'Notifications',
    privacy: 'Privacy',
    logout: 'Logout',
    editProfile: 'Edit Profile',
    
    // Voice
    voiceListening: 'Listening...',
    voiceSpeak: 'Speak now',
    voiceTapToSpeak: 'Tap to speak',
    voiceProcessing: 'Processing...',
  },
  es: {
    // Common
    welcomeBack: '¡Bienvenido de nuevo!',
    aiOnline: 'IA en línea',
    askKairo: 'Pregunta a KAIRO cualquier cosa...',
    tasksToday: 'Tareas hoy',
    budgetLeft: 'Presupuesto restante',
    safetyStatus: 'Estado de seguridad',
    safe: 'Seguro ✓',
    
    // Features
    learnWise: 'LearnWise',
    learnWiseTagline: 'Resume notas, prepárate rápido.',
    spendWise: 'SpendWise',
    spendWiseTagline: 'Rastrea, analiza y ahorra inteligentemente.',
    socioAware: 'SocioAware',
    socioAwareTagline: 'Detecta contenido falso o dañino.',
    womenAI: 'WomenAI',
    womenAITagline: 'Orientación para amas de casa, mujeres trabajadoras y adolescentes.',
    menAI: 'MenAI',
    menAITagline: 'Simplifica rutinas, resuelve problemas.',
    safetyWing: 'SafetyWing',
    safetyWingTagline: 'Emergencia, seguimiento y contactos.',
    talkZone: 'TalkZone',
    talkZoneTagline: 'Siéntete escuchado y apoyado.',
    aiTools: 'Herramientas IA',
    aiToolsTagline: 'Usa voz a texto, resumen de YouTube, etc.',
    
    // Onboarding
    onboardingTitle1: 'Tu Compañero IA',
    onboardingDesc1: 'Conoce KAIRO AI - tu asistente personal para aprender, gastar, seguridad y más.',
    onboardingTitle2: 'Funciones Inteligentes',
    onboardingDesc2: 'Accede a herramientas poderosas diseñadas para hacer tu vida diaria más fácil y eficiente.',
    onboardingTitle3: 'Comenzar',
    onboardingDesc3: 'Únete a miles que confían en KAIRO AI para un estilo de vida más inteligente y seguro.',
    next: 'Siguiente',
    skip: 'Saltar',
    getStarted: 'Comenzar',
    
    // Auth
    login: 'Iniciar sesión',
    signup: 'Registrarse',
    email: 'Correo electrónico',
    password: 'Contraseña',
    confirmPassword: 'Confirmar contraseña',
    forgotPassword: '¿Olvidaste tu contraseña?',
    dontHaveAccount: '¿No tienes una cuenta?',
    alreadyHaveAccount: '¿Ya tienes una cuenta?',
    
    // Profile
    profile: 'Perfil',
    settings: 'Configuración',
    language: 'Idioma',
    notifications: 'Notificaciones',
    privacy: 'Privacidad',
    logout: 'Cerrar sesión',
    editProfile: 'Editar perfil',
    
    // Voice
    voiceListening: 'Escuchando...',
    voiceSpeak: 'Habla ahora',
    voiceTapToSpeak: 'Toca para hablar',
    voiceProcessing: 'Procesando...',
  },
  fr: {
    // Common
    welcomeBack: 'Bon retour!',
    aiOnline: 'IA en ligne',
    askKairo: 'Demandez à KAIRO...',
    tasksToday: "Tâches aujourd'hui",
    budgetLeft: 'Budget restant',
    safetyStatus: 'État de sécurité',
    safe: 'Sûr ✓',
    
    // Features
    learnWise: 'LearnWise',
    learnWiseTagline: 'Résumez les notes, préparez rapidement.',
    spendWise: 'SpendWise',
    spendWiseTagline: 'Suivez, analysez et économisez intelligemment.',
    socioAware: 'SocioAware',
    socioAwareTagline: 'Détectez le contenu faux ou nuisible.',
    womenAI: 'WomenAI',
    womenAITagline: 'Conseils pour femmes au foyer, travailleuses et adolescentes.',
    menAI: 'MenAI',
    menAITagline: 'Simplifiez les routines, résolvez les problèmes.',
    safetyWing: 'SafetyWing',
    safetyWingTagline: "Urgence, suivi et contacts.",
    talkZone: 'TalkZone',
    talkZoneTagline: 'Sentez-vous entendu et soutenu.',
    aiTools: 'Outils IA',
    aiToolsTagline: 'Utilisez la voix en texte, résumé YouTube, etc.',
    
    // Onboarding
    onboardingTitle1: 'Votre Compagnon IA',
    onboardingDesc1: "Rencontrez KAIRO AI - votre assistant personnel pour l'apprentissage, les dépenses, la sécurité et plus.",
    onboardingTitle2: 'Fonctions Intelligentes',
    onboardingDesc2: 'Accédez à des outils puissants conçus pour rendre votre vie quotidienne plus facile et efficace.',
    onboardingTitle3: 'Commencer',
    onboardingDesc3: 'Rejoignez des milliers qui font confiance à KAIRO AI pour un mode de vie plus intelligent et sûr.',
    next: 'Suivant',
    skip: 'Passer',
    getStarted: 'Commencer',
    
    // Auth
    login: 'Connexion',
    signup: "S'inscrire",
    email: 'Email',
    password: 'Mot de passe',
    confirmPassword: 'Confirmer le mot de passe',
    forgotPassword: 'Mot de passe oublié?',
    dontHaveAccount: "Vous n'avez pas de compte?",
    alreadyHaveAccount: 'Vous avez déjà un compte?',
    
    // Profile
    profile: 'Profil',
    settings: 'Paramètres',
    language: 'Langue',
    notifications: 'Notifications',
    privacy: 'Confidentialité',
    logout: 'Déconnexion',
    editProfile: 'Modifier le profil',
    
    // Voice
    voiceListening: 'Écoute...',
    voiceSpeak: 'Parlez maintenant',
    voiceTapToSpeak: 'Appuyez pour parler',
    voiceProcessing: 'Traitement...',
  },
  de: {
    // Common
    welcomeBack: 'Willkommen zurück!',
    aiOnline: 'KI Online',
    askKairo: 'Fragen Sie KAIRO...',
    tasksToday: 'Aufgaben heute',
    budgetLeft: 'Budget übrig',
    safetyStatus: 'Sicherheitsstatus',
    safe: 'Sicher ✓',
    
    // Features
    learnWise: 'LearnWise',
    learnWiseTagline: 'Notizen zusammenfassen, schnell vorbereiten.',
    spendWise: 'SpendWise',
    spendWiseTagline: 'Verfolgen, analysieren und intelligent sparen.',
    socioAware: 'SocioAware',
    socioAwareTagline: 'Falsche oder schädliche Inhalte erkennen.',
    womenAI: 'WomenAI',
    womenAITagline: 'Anleitung für Hausfrauen, berufstätige Frauen und Teenager.',
    menAI: 'MenAI',
    menAITagline: 'Routinen vereinfachen, Probleme lösen.',
    safetyWing: 'SafetyWing',
    safetyWingTagline: 'Notfall, Verfolgung und Kontakte.',
    talkZone: 'TalkZone',
    talkZoneTagline: 'Fühlen Sie sich gehört und unterstützt.',
    aiTools: 'KI-Tools',
    aiToolsTagline: 'Sprache-zu-Text, YouTube-Zusammenfassung usw.',
    
    // Onboarding
    onboardingTitle1: 'Ihr KI-Begleiter',
    onboardingDesc1: 'Lernen Sie KAIRO AI kennen - Ihr persönlicher Assistent für Lernen, Ausgaben, Sicherheit und mehr.',
    onboardingTitle2: 'Intelligente Funktionen',
    onboardingDesc2: 'Greifen Sie auf leistungsstarke Tools zu, die Ihren Alltag einfacher und effizienter machen.',
    onboardingTitle3: 'Loslegen',
    onboardingDesc3: 'Schließen Sie sich Tausenden an, die KAIRO AI für einen intelligenteren, sichereren Lebensstil vertrauen.',
    next: 'Weiter',
    skip: 'Überspringen',
    getStarted: 'Loslegen',
    
    // Auth
    login: 'Anmelden',
    signup: 'Registrieren',
    email: 'E-Mail',
    password: 'Passwort',
    confirmPassword: 'Passwort bestätigen',
    forgotPassword: 'Passwort vergessen?',
    dontHaveAccount: 'Kein Konto?',
    alreadyHaveAccount: 'Haben Sie bereits ein Konto?',
    
    // Profile
    profile: 'Profil',
    settings: 'Einstellungen',
    language: 'Sprache',
    notifications: 'Benachrichtigungen',
    privacy: 'Datenschutz',
    logout: 'Abmelden',
    editProfile: 'Profil bearbeiten',
    
    // Voice
    voiceListening: 'Hört zu...',
    voiceSpeak: 'Jetzt sprechen',
    voiceTapToSpeak: 'Tippen zum Sprechen',
    voiceProcessing: 'Verarbeitung...',
  },
  hi: {
    // Common
    welcomeBack: 'वापसी पर स्वागत है!',
    aiOnline: 'AI ऑनलाइन',
    askKairo: 'KAIRO से कुछ भी पूछें...',
    tasksToday: 'आज के कार्य',
    budgetLeft: 'बचा हुआ बजट',
    safetyStatus: 'सुरक्षा स्थिति',
    safe: 'सुरक्षित ✓',
    
    // Features
    learnWise: 'LearnWise',
    learnWiseTagline: 'नोट्स सारांशित करें, तेजी से तैयार करें।',
    spendWise: 'SpendWise',
    spendWiseTagline: 'ट्रैक करें, विश्लेषण करें और स्मार्ट बचत करें।',
    socioAware: 'SocioAware',
    socioAwareTagline: 'नकली या हानिकारक सामग्री का पता लगाएं।',
    womenAI: 'WomenAI',
    womenAITagline: 'गृहिणियों, कामकाजी महिलाओं और किशोरियों के लिए मार्गदर्शन।',
    menAI: 'MenAI',
    menAITagline: 'दिनचर्या को सरल बनाएं, समस्याओं को ठीक करें।',
    safetyWing: 'SafetyWing',
    safetyWingTagline: 'आपातकाल, ट्रैकिंग और संपर्क।',
    talkZone: 'TalkZone',
    talkZoneTagline: 'सुना और समर्थित महसूस करें।',
    aiTools: 'AI टूल्स',
    aiToolsTagline: 'स्पीच-टू-टेक्स्ट, YouTube सारांश आदि का उपयोग करें।',
    
    // Onboarding
    onboardingTitle1: 'आपका AI साथी',
    onboardingDesc1: 'KAIRO AI से मिलें - सीखने, खर्च, सुरक्षा और अधिक के लिए आपका व्यक्तिगत सहायक।',
    onboardingTitle2: 'स्मार्ट सुविधाएँ',
    onboardingDesc2: 'शक्तिशाली उपकरणों तक पहुंचें जो आपके दैनिक जीवन को आसान और अधिक कुशल बनाने के लिए डिज़ाइन किए गए हैं।',
    onboardingTitle3: 'शुरू करें',
    onboardingDesc3: 'हजारों लोगों से जुड़ें जो स्मार्ट, सुरक्षित जीवनशैली के लिए KAIRO AI पर भरोसा करते हैं।',
    next: 'अगला',
    skip: 'छोड़ें',
    getStarted: 'शुरू करें',
    
    // Auth
    login: 'लॉगिन',
    signup: 'साइन अप',
    email: 'ईमेल',
    password: 'पासवर्ड',
    confirmPassword: 'पासवर्ड की पुष्टि करें',
    forgotPassword: 'पासवर्ड भूल गए?',
    dontHaveAccount: 'खाता नहीं है?',
    alreadyHaveAccount: 'पहले से खाता है?',
    
    // Profile
    profile: 'प्रोफ़ाइल',
    settings: 'सेटिंग्स',
    language: 'भाषा',
    notifications: 'सूचनाएं',
    privacy: 'गोपनीयता',
    logout: 'लॉगआउट',
    editProfile: 'प्रोफ़ाइल संपादित करें',
    
    // Voice
    voiceListening: 'सुन रहा है...',
    voiceSpeak: 'अभी बोलें',
    voiceTapToSpeak: 'बोलने के लिए टैप करें',
    voiceProcessing: 'प्रोसेसिंग...',
  },
  ta: {
    // Common
    welcomeBack: 'மீண்டும் வரவேற்கிறோம்!',
    aiOnline: 'AI ஆன்லைன்',
    askKairo: 'KAIRO-விடம் எதையும் கேளுங்கள்...',
    tasksToday: 'இன்றைய பணிகள்',
    budgetLeft: 'மீதமுள்ள பட்ஜெட்',
    safetyStatus: 'பாதுகாப்பு நிலை',
    safe: 'பாதுகாப்பானது ✓',
    
    // Features
    learnWise: 'LearnWise',
    learnWiseTagline: 'குறிப்புகளை சுருக்கவும், விரைவாக தயாரிக்கவும்.',
    spendWise: 'SpendWise',
    spendWiseTagline: 'கண்காணித்து, பகுப்பாய்வு செய்து, சேமிக்கவும்.',
    socioAware: 'SocioAware',
    socioAwareTagline: 'போலி அல்லது தீங்கு விளைவிக்கும் உள்ளடக்கத்தைக் கண்டறியவும்.',
    womenAI: 'WomenAI',
    womenAITagline: 'இல்லத்தரசிகள், பணிபுரியும் பெண்கள் மற்றும் இளம்பெண்களுக்கான வழிகாட்டுதல்.',
    menAI: 'MenAI',
    menAITagline: 'வழக்கத்தை எளிதாக்கவும், சிக்கல்களை சரிசெய்யவும்.',
    safetyWing: 'SafetyWing',
    safetyWingTagline: 'அவசரநிலை, கண்காணிப்பு மற்றும் தொடர்புகள்.',
    talkZone: 'TalkZone',
    talkZoneTagline: 'கேட்கப்பட்டதாக உணரவும், ஆதரவு பெறவும்.',
    aiTools: 'AI கருவிகள்',
    aiToolsTagline: 'பேச்சு-உரை, YouTube சுருக்கம் போன்றவை.',
    
    // Onboarding
    onboardingTitle1: 'உங்கள் AI துணை',
    onboardingDesc1: 'KAIRO AI-ஐ சந்திக்கவும் - கற்றல், செலவு, பாதுகாப்பு மற்றும் பலவற்றிற்கான உங்கள் தனிப்பட்ட உதவியாளர்.',
    onboardingTitle2: 'ஸ்மார்ட் அம்சங்கள்',
    onboardingDesc2: 'உங்கள் அன்றாட வாழ்க்கையை எளிதாகவும் திறமையாகவும் செய்ய வடிவமைக்கப்பட்ட சக்திவாய்ந்த கருவிகளை அணுகவும்.',
    onboardingTitle3: 'தொடங்குங்கள்',
    onboardingDesc3: 'ஸ்மார்ட், பாதுகாப்பான வாழ்க்கை முறைக்காக KAIRO AI-ஐ நம்பும் ஆயிரக்கணக்கானவர்களுடன் சேரவும்.',
    next: 'அடுத்து',
    skip: 'தவிர்க்கவும்',
    getStarted: 'தொடங்குங்கள்',
    
    // Auth
    login: 'உள்நுழைக',
    signup: 'பதிவு செய்க',
    email: 'மின்னஞ்சல்',
    password: 'கடவுச்சொல்',
    confirmPassword: 'கடவுச்சொல்லை உறுதிப்படுத்தவும்',
    forgotPassword: 'கடவுச்சொல்லை மறந்துவிட்டீர்களா?',
    dontHaveAccount: 'கணக்கு இல்லையா?',
    alreadyHaveAccount: 'ஏற்கனவே கணக்கு உள்ளதா?',
    
    // Profile
    profile: 'சுயவிவரம்',
    settings: 'அமைப்புகள்',
    language: 'மொழி',
    notifications: 'அறிவிப்புகள்',
    privacy: 'தனியுரிமை',
    logout: 'வெளியேறு',
    editProfile: 'சுயவிவரத்தைத் திருத்து',
    
    // Voice
    voiceListening: 'கேட்கிறது...',
    voiceSpeak: 'இப்போது பேசுங்கள்',
    voiceTapToSpeak: 'பேச தட்டவும்',
    voiceProcessing: 'செயலாக்கம்...',
  },
  ml: {
    // Common
    welcomeBack: 'തിരിച്ചു വരവ്!',
    aiOnline: 'AI ഓൺലൈൻ',
    askKairo: 'KAIRO-യോട് എന്തും ചോദിക്കൂ...',
    tasksToday: 'ഇന്നത്തെ ജോലികൾ',
    budgetLeft: 'ബാക്കി ബഡ്ജറ്റ്',
    safetyStatus: 'സുരക്ഷാ നില',
    safe: 'സുരക്ഷിതം ✓',
    
    // Features
    learnWise: 'LearnWise',
    learnWiseTagline: 'കുറിപ്പുകൾ സംഗ്രഹിക്കുക, വേഗത്തിൽ തയ്യാറാക്കുക.',
    spendWise: 'SpendWise',
    spendWiseTagline: 'ട്രാക്ക് ചെയ്യുക, വിശകലനം ചെയ്യുക, സമർത്ഥമായി സേവ് ചെയ്യുക.',
    socioAware: 'SocioAware',
    socioAwareTagline: 'വ്യാജ അല്ലെങ്കിൽ ഹാനികരമായ ഉള്ളടക്കം കണ്ടെത്തുക.',
    womenAI: 'WomenAI',
    womenAITagline: 'വീട്ടമ്മമാർ, ജോലി ചെയ്യുന്ന സ്ത്രീകൾ, കൗമാരക്കാർക്കുള്ള മാർഗനിർദേശം.',
    menAI: 'MenAI',
    menAITagline: 'ദിനചര്യകൾ ലളിതമാക്കുക, പ്രശ്നങ്ങൾ പരിഹരിക്കുക.',
    safetyWing: 'SafetyWing',
    safetyWingTagline: 'അടിയന്തിര, ട്രാക്കിംഗ്, കോൺടാക്റ്റുകൾ.',
    talkZone: 'TalkZone',
    talkZoneTagline: 'കേട്ടതായും പിന്തുണയുണ്ടെന്നും തോന്നുക.',
    aiTools: 'AI ഉപകരണങ്ങൾ',
    aiToolsTagline: 'സ്പീച്ച്-ടു-ടെക്സ്റ്റ്, YouTube സംഗ്രഹം മുതലായവ.',
    
    // Onboarding
    onboardingTitle1: 'നിങ്ങളുടെ AI കൂട്ടാളി',
    onboardingDesc1: 'KAIRO AI കണ്ടുമുട്ടുക - പഠനം, ചെലവ്, സുരക്ഷ എന്നിവയ്ക്കുള്ള നിങ്ങളുടെ സ്വകാര്യ സഹായി.',
    onboardingTitle2: 'സ്മാർട്ട് ഫീച്ചറുകൾ',
    onboardingDesc2: 'നിങ്ങളുടെ ദൈനംദിന ജീവിതം എളുപ്പവും കാര്യക്ഷമവുമാക്കാൻ രൂപകൽപ്പന ചെയ്ത ശക്തമായ ഉപകരണങ്ങൾ ആക്സസ് ചെയ്യുക.',
    onboardingTitle3: 'ആരംഭിക്കുക',
    onboardingDesc3: 'സ്മാർട്ട്, സുരക്ഷിത ജീവിതശൈലിക്കായി KAIRO AI വിശ്വസിക്കുന്ന ആയിരക്കണക്കിന് ആളുകളോട് ചേരുക.',
    next: 'അടുത്തത്',
    skip: 'ഒഴിവാക്കുക',
    getStarted: 'ആരംഭിക്കുക',
    
    // Auth
    login: 'ലോഗിൻ',
    signup: 'സൈൻഅപ്പ്',
    email: 'ഇമെയിൽ',
    password: 'പാസ്വേഡ്',
    confirmPassword: 'പാസ്വേഡ് സ്ഥിരീകരിക്കുക',
    forgotPassword: 'പാസ്വേഡ് മറന്നോ?',
    dontHaveAccount: 'അക്കൗണ്ട് ഇല്ലേ?',
    alreadyHaveAccount: 'ഇതിനകം അക്കൗണ്ട് ഉണ്ടോ?',
    
    // Profile
    profile: 'പ്രൊഫൈൽ',
    settings: 'ക്രമീകരണങ്ങൾ',
    language: 'ഭാഷ',
    notifications: 'അറിയിപ്പുകൾ',
    privacy: 'സ്വകാര്യത',
    logout: 'ലോഗൗട്ട്',
    editProfile: 'പ്രൊഫൈൽ എഡിറ്റ് ചെയ്യുക',
    
    // Voice
    voiceListening: 'കേൾക്കുന്നു...',
    voiceSpeak: 'ഇപ്പോൾ സംസാരിക്കുക',
    voiceTapToSpeak: 'സംസാരിക്കാൻ ടാപ്പ് ചെയ്യുക',
    voiceProcessing: 'പ്രോസസ്സിംഗ്...',
  },
  te: {
    // Common
    welcomeBack: 'తిరిగి స్వాగతం!',
    aiOnline: 'AI ఆన్‌లైన్',
    askKairo: 'KAIRO ని ఏదైనా అడగండి...',
    tasksToday: 'నేటి పనులు',
    budgetLeft: 'మిగిలిన బడ్జెట్',
    safetyStatus: 'భద్రతా స్థితి',
    safe: 'సురక్షితం ✓',
    
    // Features
    learnWise: 'LearnWise',
    learnWiseTagline: 'నోట్స్ సారాంశం చేయండి, వేగంగా సిద్ధం చేయండి.',
    spendWise: 'SpendWise',
    spendWiseTagline: 'ట్రాక్ చేయండి, విశ్లేషించండి, స్మార్ట్‌గా సేవ్ చేయండి.',
    socioAware: 'SocioAware',
    socioAwareTagline: 'నకిలీ లేదా హానికరమైన కంటెంట్‌ను గుర్తించండి.',
    womenAI: 'WomenAI',
    womenAITagline: 'గృహిణులు, పని చేసే మహిళలు మరియు టీనేజ్ అమ్మాయిలకు మార్గదర్శకత్వం.',
    menAI: 'MenAI',
    menAITagline: 'రొటీన్‌లను సరళీకరించండి, సమస్యలను పరిష్కరించండి.',
    safetyWing: 'SafetyWing',
    safetyWingTagline: 'అత్యవసర, ట్రాకింగ్ మరియు పరిచయాలు.',
    talkZone: 'TalkZone',
    talkZoneTagline: 'వినిపించినట్లు మరియు మద్దతు పొందినట్లు అనిపించండి.',
    aiTools: 'AI సాధనాలు',
    aiToolsTagline: 'స్పీచ్-టు-టెక్స్ట్, YouTube సారాంశం మొదలైనవి.',
    
    // Onboarding
    onboardingTitle1: 'మీ AI సహచరుడు',
    onboardingDesc1: 'KAIRO AI ని కలవండి - నేర్చుకోవడం, ఖర్చు చేయడం, భద్రత మరియు మరిన్నింటి కోసం మీ వ్యక్తిగత సహాయకుడు.',
    onboardingTitle2: 'స్మార్ట్ ఫీచర్లు',
    onboardingDesc2: 'మీ రోజువారీ జీవితాన్ని సులభతరం మరియు సమర్థవంతంగా చేయడానికి రూపొందించిన శక్తివంతమైన సాధనాలను యాక్సెస్ చేయండి.',
    onboardingTitle3: 'ప్రారంభించండి',
    onboardingDesc3: 'స్మార్ట్, సురక్షిత జీవనశైలి కోసం KAIRO AI ని విశ్వసించే వేలాది మందితో చేరండి.',
    next: 'తదుపరి',
    skip: 'దాటవేయి',
    getStarted: 'ప్రారంభించండి',
    
    // Auth
    login: 'లాగిన్',
    signup: 'సైన్ అప్',
    email: 'ఇమెయిల్',
    password: 'పాస్‌వర్డ్',
    confirmPassword: 'పాస్‌వర్డ్ నిర్ధారించండి',
    forgotPassword: 'పాస్‌వర్డ్ మర్చిపోయారా?',
    dontHaveAccount: 'ఖాతా లేదా?',
    alreadyHaveAccount: 'ఇప్పటికే ఖాతా ఉందా?',
    
    // Profile
    profile: 'ప్రొఫైల్',
    settings: 'సెట్టింగులు',
    language: 'భాష',
    notifications: 'నోటిఫికేషన్లు',
    privacy: 'గోప్యత',
    logout: 'లాగ్అవుట్',
    editProfile: 'ప్రొఫైల్ సవరించండి',
    
    // Voice
    voiceListening: 'వింటోంది...',
    voiceSpeak: 'ఇప్పుడు మాట్లాడండి',
    voiceTapToSpeak: 'మాట్లాడటానికి ట్యాప్ చేయండి',
    voiceProcessing: 'ప్రాసెసింగ్...',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
