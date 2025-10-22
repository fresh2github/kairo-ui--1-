import { useState, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./components/Onboarding";
import LoginSignup from "./components/LoginSignup";
import Dashboard from "./components/Dashboard";
import LearnWise from "./components/LearnWise";
import SpendWise from "./components/SpendWise";
import SocioAware from "./components/SocioAware";
import WomenAI from "./components/WomenAI";
import MenAI from "./components/MenAI";
import SafetyWing from "./components/SafetyWing";
import TalkZone from "./components/TalkZone";
import AITools from "./components/AITools";
import Profile from "./components/Profile";
import BottomNav from "./components/BottomNav";

type AppState = "splash" | "onboarding" | "login" | "app";
type Page =
  | "dashboard"
  | "learnwise"
  | "spendwise"
  | "socioaware"
  | "womenai"
  | "menai"
  | "safetywing"
  | "talkzone"
  | "aitools"
  | "profile";

function AppContent() {
  const [appState, setAppState] = useState<AppState>("splash");
  const [currentPage, setCurrentPage] =
    useState<Page>("dashboard");

  const handleSplashComplete = () => {
    setAppState("onboarding");
  };

  const handleOnboardingComplete = () => {
    setAppState("login");
  };

  const handleLogin = () => {
    setAppState("app");
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setAppState("login");
    setCurrentPage("dashboard");
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleBack = () => {
    setCurrentPage("dashboard");
  };

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard onNavigate={handleNavigate} />;
      case "learnwise":
        return <LearnWise onBack={handleBack} />;
      case "spendwise":
        return <SpendWise onBack={handleBack} />;
      case "socioaware":
        return <SocioAware onBack={handleBack} />;
      case "womenai":
        return <WomenAI onBack={handleBack} />;
      case "menai":
        return <MenAI onBack={handleBack} />;
      case "safetywing":
        return <SafetyWing onBack={handleBack} />;
      case "talkzone":
        return <TalkZone onBack={handleBack} />;
      case "aitools":
        return <AITools onBack={handleBack} />;
      case "profile":
        return (
          <Profile
            onBack={handleBack}
            onLogout={handleLogout}
          />
        );
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  // Render based on app state
  if (appState === "splash") {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  if (appState === "onboarding") {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  if (appState === "login") {
    return <LoginSignup onLogin={handleLogin} />;
  }

  // Main app
  return (
    <div className="relative">
      {renderPage()}
      <BottomNav
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}