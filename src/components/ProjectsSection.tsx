import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Zap,
  Play,
  Compass,
  MapPin
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectDetail } from '../types';
import { soundManager } from '../utils/audio';

interface ProjectsSectionProps {
  onOpenVeneva: () => void;
  onOpenJulishaDemo: () => void;
  onOpenGeoHousing: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenVeneva,
  onOpenJulishaDemo,
  onOpenGeoHousing,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Ongoing Project':
      case 'Active Development':
        return 'bg-emerald-950/80 border-emerald-400 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)] animate-pulse';
      case 'Active Overhaul':
        return 'bg-cyan-950/80 border-cyan-400 text-cyan-300';
      case 'Production / Hackathon':
        return 'bg-amber-950/80 border-amber-400 text-amber-300';
      default:
        return 'bg-blue-950/80 border-blue-400 text-blue-300';
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 text-slate-100 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/60 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/40 bg-blue-950/40 text-blue-300 text-xs font-['JetBrains_Mono'] tracking-wide mb-2">
              <FolderGit2 size={13} className="text-cyan-400" />
              <span>DEPLOYED MISSIONS & ARCHITECTURES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Chakra_Petch'] text-white">
              Featured Systems & <span className="text-cyan-400">Engineering Projects</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Real-world systems solving critical operational bottlenecks, enterprise flow flaws, and healthcare delivery across Kenya.
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            <button
              onClick={() => {
                soundManager.playAchievement();
                onOpenGeoHousing();
              }}
              className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-black font-['Chakra_Petch'] font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all"
            >
              <Compass size={15} />
              <span>GEOMAKAZI HOUSING AI</span>
            </button>

            <button
              onClick={() => {
                soundManager.playAchievement();
                onOpenJulishaDemo();
              }}
              className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-['Chakra_Petch'] font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all"
            >
              <Award size={15} />
              <span>JULISHA LIVE DEMO</span>
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="rounded-2xl border-2 border-cyan-900/50 hover:border-cyan-500/80 bg-[#061224] p-6 space-y-4 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] group"
            >
              <div className="space-y-3">
                {/* Top Status & Category */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-['JetBrains_Mono'] font-bold uppercase px-2 py-0.5 rounded border ${getStatusBadge(proj.status)}`}>
                    {proj.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {proj.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-['Chakra_Petch'] font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs font-['JetBrains_Mono'] text-cyan-400 font-medium">
                  {proj.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {proj.summary}
                </p>

                {/* Architecture Highlights */}
                <div className="p-3 rounded-xl bg-[#030a16] border border-cyan-950 space-y-1.5 text-xs text-slate-300">
                  <strong className="text-cyan-300 block font-['Chakra_Petch'] text-xs uppercase">
                    Core Engineering Highlights:
                  </strong>
                  <ul className="space-y-1 text-slate-400 text-[11px] list-disc list-inside">
                    {proj.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="leading-normal">{feat}</li>
                    ))}
                  </ul>
                </div>

                {/* Metrics Badges */}
                {proj.metrics && (
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {proj.metrics.map((m, i) => (
                      <div key={i} className="p-2 rounded bg-slate-900/80 border border-slate-800 text-center font-['JetBrains_Mono']">
                        <span className="text-[10px] text-slate-400 block">{m.label}</span>
                        <strong className="text-cyan-300 font-bold text-xs sm:text-sm">{m.value}</strong>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Tech Stack & Action Links */}
              <div className="pt-4 border-t border-cyan-950/80 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-cyan-900/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  {proj.id === 'geospatial-housing' ? (
                    <button
                      onClick={() => {
                        soundManager.playAchievement();
                        onOpenGeoHousing();
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-['Chakra_Petch'] font-bold text-emerald-400 hover:text-white group-hover:translate-x-1 transition-transform"
                    >
                      <Compass size={14} className="text-emerald-400" />
                      <span>LAUNCH GEOMAKAZI SIMULATOR & BLUEPRINT</span>
                      <ArrowRight size={14} />
                    </button>
                  ) : proj.id === 'veneva-2' ? (
                    <button
                      onClick={() => {
                        soundManager.playClick();
                        onOpenVeneva();
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-['Chakra_Petch'] font-bold text-cyan-300 hover:text-white group-hover:translate-x-1 transition-transform"
                    >
                      <span>OPEN 2.0 OVERHAUL LAB</span>
                      <ArrowRight size={14} />
                    </button>
                  ) : proj.id === 'julisha-system' ? (
                    <button
                      onClick={() => {
                        soundManager.playClick();
                        onOpenJulishaDemo();
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-['Chakra_Petch'] font-bold text-amber-300 hover:text-white group-hover:translate-x-1 transition-transform"
                    >
                      <Play size={13} />
                      <span>LAUNCH INTERACTIVE DEMO</span>
                    </button>
                  ) : (
                    <a
                      href="https://github.com/Aaronica123/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-['Chakra_Petch'] font-bold text-cyan-400 hover:text-white transition-colors"
                    >
                      <Github size={13} />
                      <span>INSPECT SOURCE CODE</span>
                    </a>
                  )}

                  {proj.gameLootUnlocked && (
                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                      <Sparkles size={11} className="text-amber-400" />
                      <span>{proj.gameLootUnlocked}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
