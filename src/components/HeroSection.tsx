import React from 'react';
import { Shield, Terminal, ArrowRight, Github, Linkedin, Mail, Phone, MapPin, Cpu, CheckCircle2, Award, Zap, Code2, Sparkles, ExternalLink, Download } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { soundManager } from '../utils/audio';

interface HeroSectionProps {
  onOpenVeneva: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  onOpenAI: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenVeneva,
  onOpenTerminal,
  onOpenResume,
  onOpenAI,
}) => {
  return (
    <section id="overview" className="relative pt-6 pb-12 sm:pb-16 text-slate-100 overflow-hidden font-['Plus_Jakarta_Sans']">
      {/* High-tech background glow & grid elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-900/20 via-blue-950/30 to-indigo-950/20 blur-[130px] rounded-full"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Gamer Status Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg border border-cyan-900/50 bg-[#050e1d]/90 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/60 text-cyan-300 text-xs font-['JetBrains_Mono'] font-bold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              CLASS: SYSTEMS PALADIN
            </div>
            <span className="text-xs text-slate-300 font-['Chakra_Petch'] hidden md:inline">
              OPERATIONAL HUB • RE-ENGINEERING RESILIENT ARCHITECTURES
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-slate-400">
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 size={13} /> READY FOR HIRE & COLLABORATION
            </span>
          </div>
        </div>

        {/* Main Grid: Left Dossier / Right Holographic Stats HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio & Core Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/40 bg-blue-950/40 text-blue-300 text-xs font-['JetBrains_Mono'] tracking-wide">
                <Sparkles size={14} className="text-cyan-400" />
                <span>MEET AARON MUTUA • @Aaronica123</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Chakra_Petch'] text-white leading-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Secure Systems</span> at High Scale.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                I am <strong className="text-white font-semibold">Aaron Mutua</strong>, an adaptable developer undertaking active training in <strong className="text-cyan-300">AI & Machine Learning</strong>, engineering <strong className="text-cyan-300">low-level C</strong> for memory-safe scalable systems, and speedrunning <strong className="text-cyan-300">Microsoft Azure & DevOps</strong> cloud automation.
              </p>
            </div>

            {/* Current Active Mission Banner */}
            <div className="p-4 rounded-xl border border-cyan-700/50 bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-blue-950/40 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all"></div>
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/60 text-cyan-400 mt-0.5 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-['Chakra_Petch'] font-bold text-cyan-300 tracking-wider">
                      PRIMARY OBJECTIVE // THE VENEVA PROJECT 2.0
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-600/50 font-bold">
                      IN OVERHAUL
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-normal">
                    Transforming Veneva by eliminating legacy process bottlenecks, benchmarking a high-throughput C micro-daemon against modern JavaScript, hardening with Zero-Trust authentication, and deploying a responsive cyber interface.
                  </p>
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      onOpenVeneva();
                    }}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-['Chakra_Petch'] font-bold text-cyan-300 hover:text-white group-hover:translate-x-1 transition-all"
                  >
                    <span>Inspect Architectural Blueprint & Live Benchmark</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenVeneva();
                }}
                className="px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-['Chakra_Petch'] font-bold text-sm tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>EXPLORE VENEVA 2.0</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  soundManager.playTerminal();
                  onOpenTerminal();
                }}
                className="px-4 py-3 rounded-lg bg-slate-900 hover:bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 font-['JetBrains_Mono'] font-semibold text-sm flex items-center gap-2 transition-all hover:border-cyan-400"
              >
                <Terminal size={16} />
                <span>$ launch_cli</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenAI();
                }}
                className="px-4 py-3 rounded-lg bg-blue-950/80 hover:bg-blue-900 border border-blue-500/50 text-blue-200 font-['Chakra_Petch'] font-bold text-sm flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]"
              >
                <Sparkles size={16} className="text-cyan-400" />
                <span>ASK A.A.R.O.N. AI</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenResume();
                }}
                className="px-4 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-['Chakra_Petch'] font-bold text-sm flex items-center gap-2 transition-all"
              >
                <Download size={16} />
                <span>RESUME</span>
              </button>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-['JetBrains_Mono'] text-slate-400">
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Github size={15} />
                <span>Aaronica123</span>
              </a>
              <a
                href={`https://${DEVELOPER_PROFILE.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Linkedin size={15} />
                <span>Aaron Mutua</span>
              </a>
              <a
                href={`mailto:${DEVELOPER_PROFILE.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Mail size={15} />
                <span>{DEVELOPER_PROFILE.email}</span>
              </a>
              <a
                href={`tel:${DEVELOPER_PROFILE.phone}`}
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Phone size={15} />
                <span>{DEVELOPER_PROFILE.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Holographic Gamer Dossier & Attributes Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border-2 border-cyan-800/60 bg-[#061224]/95 p-5 shadow-[0_0_30px_rgba(0,180,216,0.15)] relative overflow-hidden backdrop-blur-md">
              {/* Scanline & grid overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent opacity-60"></div>

              {/* Dossier Header */}
              <div className="flex items-center justify-between border-b border-cyan-900/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
                  <span className="font-['Chakra_Petch'] font-bold text-sm text-cyan-300 tracking-wider">
                    OPERATOR DOSSIER // ID: 2026-AM
                  </span>
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] px-2 py-0.5 rounded bg-blue-950 text-cyan-400 border border-blue-700/60">
                  BUILD 2.4.0
                </span>
              </div>

              {/* Character Identity & Education Snapshot */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl border-2 border-cyan-400 bg-gradient-to-tr from-cyan-950 via-slate-900 to-blue-900 flex items-center justify-center font-['Chakra_Petch'] font-extrabold text-2xl text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    AM
                  </div>
                  <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 bg-cyan-500 text-black text-[9px] font-bold font-mono rounded">
                    LV.24
                  </span>
                </div>
                <div>
                  <h3 className="font-['Chakra_Petch'] font-bold text-lg text-white">
                    {DEVELOPER_PROFILE.name}
                  </h3>
                  <p className="text-xs font-['JetBrains_Mono'] text-cyan-400">
                    BSc IT • Masinde Muliro University
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                    <MapPin size={12} className="text-slate-500" />
                    <span>Kakamega & Nairobi, Kenya</span>
                  </p>
                </div>
              </div>

              {/* Core Attributes & Skill Radar */}
              <div className="space-y-2.5 font-['JetBrains_Mono'] text-xs">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="text-slate-300 font-bold uppercase">Attribute Matrix</span>
                  <span className="text-cyan-400">COMBAT EFFECTIVENESS</span>
                </div>

                {/* Attribute Bars */}
                <div className="space-y-2 pt-1">
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <Cpu size={12} className="text-cyan-400" /> C & Systems Programming (Secure Scale)
                      </span>
                      <span className="text-cyan-400 font-bold">82%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded" style={{ width: '82%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <Shield size={12} className="text-blue-400" /> Azure Cloud & DevOps (Docker, CI/CD)
                      </span>
                      <span className="text-blue-400 font-bold">85%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <Sparkles size={12} className="text-amber-400" /> AI & ML Pipelines (Gemini / Triage)
                      </span>
                      <span className="text-amber-400 font-bold">80%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-600 to-yellow-400 rounded" style={{ width: '80%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <Code2 size={12} className="text-emerald-400" /> Full-Stack (Python/Django, Node, React)
                      </span>
                      <span className="text-emerald-400 font-bold">88%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Battle Achievements Pill Box */}
              <div className="mt-4 pt-4 border-t border-cyan-900/60 space-y-2">
                <span className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-slate-400 block">
                  VERIFIED MILESTONES & ACHIEVEMENTS
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded bg-cyan-950/60 border border-cyan-800/40 flex items-start gap-2">
                    <Award size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-['Chakra_Petch'] text-xs">GDG Pwani 2026</strong>
                      <span className="text-[11px] text-slate-400">Julisha AI Healthcare Platform</span>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-blue-950/60 border border-blue-800/40 flex items-start gap-2">
                    <Shield size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-['Chakra_Petch'] text-xs">KMFRI Attache</strong>
                      <span className="text-[11px] text-slate-400">Ticketing System & Process Fix</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gamer Quirk Box */}
              <div className="mt-3 p-2.5 rounded bg-slate-900/90 border border-slate-800 text-[11px] font-['JetBrains_Mono'] text-slate-400 flex items-center justify-between">
                <span>FAVORITE GENRES: Tactical RPGs, Cyberpunk, Strategy</span>
                <span className="text-cyan-400 font-bold">GAMER & DEV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
