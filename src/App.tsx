import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VenevaOverhaulLab } from './components/VenevaOverhaulLab';
import { CertificationsSection } from './components/CertificationsSection';
import { DevLoadout } from './components/DevLoadout';
import { SkillTree } from './components/SkillTree';
import { ProjectsSection } from './components/ProjectsSection';
import { QuestLog } from './components/QuestLog';
import { ContactSection } from './components/ContactSection';
import { TerminalConsole } from './components/TerminalConsole';
import { AICopilotModal } from './components/AICopilotModal';
import { ResumeModal } from './components/ResumeModal';
import { JulishaModal } from './components/JulishaModal';
import { DEVELOPER_PROFILE } from './data/portfolioData';
import { soundManager } from './utils/audio';
import { Terminal, Sparkles, FileText, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Modals state
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [aiOpen, setAiOpen] = useState<boolean>(false);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [julishaOpen, setJulishaOpen] = useState<boolean>(false);

  const scrollToVeneva = () => {
    setActiveTab('veneva');
    const el = document.getElementById('veneva');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020713] text-slate-100 cyber-grid relative selection:bg-cyan-500 selection:text-black font-['Plus_Jakarta_Sans']">
      {/* Scanline effect layer */}
      <div className="scanline"></div>

      {/* Top Gamer Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenAI={() => setAiOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Sections Flow */}
      <main className="relative z-10">
        {/* Hero Section / Character Dossier */}
        <HeroSection
          onOpenVeneva={scrollToVeneva}
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
          onOpenAI={() => setAiOpen(true)}
        />

        {/* Flagship Centerpiece: The Veneva Project 2.0 Overhaul Lab */}
        <VenevaOverhaulLab />

        {/* Accredited Industry Certifications & Credentials */}
        <CertificationsSection />

        {/* Tactical Developer Loadout & Inventory */}
        <DevLoadout />

        {/* Combat Proficiencies & Skill Tree */}
        <SkillTree />

        {/* Featured Projects & Systems Showcase */}
        <ProjectsSection
          onOpenVeneva={scrollToVeneva}
          onOpenJulishaDemo={() => setJulishaOpen(true)}
        />

        {/* Active Quests, Milestones & Education Timeline */}
        <QuestLog />

        {/* Direct Transmission / Contact Terminal */}
        <ContactSection />
      </main>

      {/* Floating Quick Gamer Hub (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-auto">
        <button
          onClick={() => {
            soundManager.playTerminal();
            setTerminalOpen(true);
          }}
          title="Toggle Command Line Terminal"
          className="p-3 rounded-xl bg-[#061224]/95 border-2 border-cyan-500/70 text-cyan-400 hover:text-white hover:bg-cyan-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-105"
        >
          <Terminal size={18} />
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setAiOpen(true);
          }}
          title="Open A.A.R.O.N. AI Systems Copilot"
          className="p-3 rounded-xl bg-gradient-to-r from-blue-900 to-cyan-900 border-2 border-blue-400/80 text-cyan-200 hover:text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105"
        >
          <Sparkles size={18} className="text-cyan-300 animate-pulse" />
        </button>

        <button
          onClick={scrollToTop}
          title="Scroll to Top"
          className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-all text-xs"
        >
          <ArrowUp size={16} />
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-cyan-950/80 bg-[#02050e] text-slate-400 py-10 px-4 sm:px-6 lg:px-8 font-['JetBrains_Mono'] text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-cyan-500/50 bg-cyan-950/80 flex items-center justify-center font-bold text-cyan-400 text-sm">
              AM
            </div>
            <div>
              <span className="text-slate-200 font-['Chakra_Petch'] font-bold text-sm block">
                {DEVELOPER_PROFILE.name.toUpperCase()} // {DEVELOPER_PROFILE.callsign}
              </span>
              <span className="text-[11px] text-slate-500">
                Low-Level C • Azure Cloud • Machine Learning • Masinde Muliro University
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href={`https://${DEVELOPER_PROFILE.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href={`mailto:${DEVELOPER_PROFILE.email}`}
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <Mail size={14} /> Email
            </a>
          </div>

          <div className="text-[11px] text-slate-600">
            SYSTEM ENGINE v2.4.0 • HIGH-CONTRAST GAMER HUD
          </div>
        </div>
      </footer>

      {/* Interactive Overlays & Modals */}
      <TerminalConsole
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenVeneva={scrollToVeneva}
      />

      <AICopilotModal
        isOpen={aiOpen}
        onClose={() => setAiOpen(false)}
        onOpenVeneva={scrollToVeneva}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <JulishaModal
        isOpen={julishaOpen}
        onClose={() => setJulishaOpen(false)}
      />
    </div>
  );
}
