import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Sparkles, Shield, Cpu, ExternalLink, Menu, X, FileText, Send } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenTerminal: () => void;
  onOpenAI: () => void;
  onOpenResume: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenTerminal,
  onOpenAI,
  onOpenResume,
  soundEnabled,
  setSoundEnabled,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [systemTime, setSystemTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { id: 'overview', label: 'Dossier', icon: '👤' },
    { id: 'veneva', label: 'Veneva 2.0 Overhaul', icon: '⚡', highlight: true },
    { id: 'certifications', label: 'Certs & Badges', icon: '🏆' },
    { id: 'inventory', label: 'Loadout & Items', icon: '🎒' },
    { id: 'skills', label: 'Skill Matrix', icon: '⚔️' },
    { id: 'projects', label: 'Projects & Julisha', icon: '🚀' },
    { id: 'quests', label: 'Quest Log', icon: '📜' },
    { id: 'contact', label: 'Comm Link', icon: '📡' },
  ];

  const handleNavClick = (id: string) => {
    soundManager.playClick();
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    soundManager.enabled = next;
    setSoundEnabled(next);
    if (next) soundManager.playAchievement();
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#030712]/95 backdrop-blur-md border-b border-cyan-900/40 text-slate-100 font-['Chakra_Petch'] selection:bg-cyan-500 selection:text-black">
      {/* Top HUD Telemetry Ribbon */}
      <div className="hidden sm:flex items-center justify-between px-4 py-1 bg-gradient-to-r from-blue-950/80 via-[#071328] to-slate-950 text-xs border-b border-cyan-950/60 font-['JetBrains_Mono']">
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            SYSTEM STATUS: ONLINE
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-300">
            LOC: MMUST / KAKAMEGA & NAIROBI, KENYA
          </span>
          <span className="hidden lg:inline text-slate-500">|</span>
          <span className="hidden lg:inline text-amber-400">
            TRAINING: LOW-LEVEL C • AZURE CLOUD • AI/ML
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <span className="hidden sm:inline text-slate-400">
            SYS TIME: <strong className="text-cyan-300 font-mono">{systemTime}</strong>
          </span>
          <div className="flex items-center gap-2 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded text-[11px] text-cyan-300">
            <span>LVL {DEVELOPER_PROFILE.level}</span>
            <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full"
                style={{ width: `${(DEVELOPER_PROFILE.currentXP / DEVELOPER_PROFILE.maxXP) * 100}%` }}
              ></div>
            </div>
            <span className="text-slate-400">XP {DEVELOPER_PROFILE.currentXP}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Callsign */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('overview')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded border-2 border-cyan-500/70 bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-900 flex items-center justify-center font-bold text-cyan-400 text-lg shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:border-cyan-400 group-hover:scale-105 transition-all">
                AM
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                    {DEVELOPER_PROFILE.name.toUpperCase()}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 rounded">
                    {DEVELOPER_PROFILE.callsign}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-['JetBrains_Mono'] hidden sm:block">
                  Systems Developer • DevOps Enthusiast
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1.5 font-medium text-sm">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`px-3 py-1.5 rounded transition-all duration-150 flex items-center gap-1.5 text-xs tracking-wider uppercase ${
                    link.highlight
                      ? isActive
                        ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(6,182,212,0.6)]'
                        : 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-900/70 hover:border-cyan-400'
                      : isActive
                      ? 'bg-blue-900/60 text-cyan-300 border border-cyan-500/50 shadow-[0_0_8px_rgba(6,182,212,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Interactive Utility Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Audio FX: Enabled' : 'Audio FX: Muted'}
              className={`p-2 rounded border text-xs transition-colors ${
                soundEnabled
                  ? 'border-cyan-500/60 bg-cyan-950/70 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                  : 'border-slate-800 bg-slate-900/70 text-slate-400 hover:text-slate-200'
              }`}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Terminal Drawer Button */}
            <button
              onClick={() => {
                soundManager.playTerminal();
                onOpenTerminal();
              }}
              title="Open Developer Console / Terminal"
              className="p-2 rounded border border-cyan-800/60 bg-slate-900/90 text-cyan-400 hover:bg-cyan-950 hover:border-cyan-400 transition-all text-xs flex items-center gap-1.5"
            >
              <Terminal size={16} />
              <span className="hidden md:inline font-['JetBrains_Mono'] text-xs font-semibold">CLI</span>
            </button>

            {/* AI Copilot Button */}
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenAI();
              }}
              className="px-2.5 py-1.5 rounded border border-blue-500/60 bg-gradient-to-r from-blue-900/80 to-cyan-900/70 text-cyan-200 hover:text-white hover:border-cyan-400 transition-all text-xs font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(14,165,233,0.3)]"
            >
              <Sparkles size={15} className="text-cyan-400 animate-pulse" />
              <span className="hidden sm:inline">A.A.R.O.N. AI</span>
            </button>

            {/* Resume Modal Button */}
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenResume();
              }}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded border border-amber-500/50 bg-amber-950/40 text-amber-300 hover:bg-amber-900/60 hover:border-amber-400 text-xs font-bold transition-all"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded border border-slate-700 bg-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#050b14] border-b border-cyan-900/60 px-4 pt-3 pb-5 space-y-2">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`p-2.5 rounded text-left text-xs font-semibold uppercase flex items-center gap-2 border ${
                  activeTab === link.id
                    ? 'bg-cyan-950 border-cyan-400 text-cyan-300'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300'
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded bg-amber-950/50 border border-amber-500/50 text-amber-300 font-bold"
            >
              <FileText size={15} />
              <span>View Resume</span>
            </button>
            <a
              href={`mailto:${DEVELOPER_PROFILE.email}`}
              className="flex items-center gap-1.5 px-3 py-2 rounded bg-cyan-950/60 border border-cyan-500/50 text-cyan-300 font-bold"
            >
              <Send size={15} />
              <span>Direct Email</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
