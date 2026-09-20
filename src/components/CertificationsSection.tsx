import React, { useState } from 'react';
import { 
  Award, 
  ShieldAlert, 
  Globe, 
  Cpu, 
  Code2, 
  Cloud, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  ChevronRight, 
  ShieldCheck, 
  Zap,
  Filter
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';
import { soundManager } from '../utils/audio';

export const CertificationsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'verified' | 'aspiring'>('all');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert size={22} />;
      case 'Globe': return <Globe size={22} />;
      case 'Cpu': return <Cpu size={22} />;
      case 'Code2': return <Code2 size={22} />;
      case 'Cloud': return <Cloud size={22} />;
      default: return <Award size={22} />;
    }
  };

  const getIssuerStyle = (issuerShort: string) => {
    switch (issuerShort) {
      case 'Cisco':
        return {
          badge: 'bg-sky-950/80 border-sky-400 text-sky-300',
          cardBorder: 'border-sky-500/40 hover:border-sky-400',
          glow: 'group-hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]',
          iconBg: 'bg-sky-950 border-sky-500/70 text-sky-400',
        };
      case 'IBM':
        return {
          badge: 'bg-blue-950/80 border-blue-400 text-blue-300',
          cardBorder: 'border-blue-500/40 hover:border-blue-400',
          glow: 'group-hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]',
          iconBg: 'bg-blue-950 border-blue-500/70 text-blue-400',
        };
      case 'PLP':
        return {
          badge: 'bg-emerald-950/80 border-emerald-400 text-emerald-300',
          cardBorder: 'border-emerald-500/40 hover:border-emerald-400',
          glow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]',
          iconBg: 'bg-emerald-950 border-emerald-500/70 text-emerald-400',
        };
      case 'Microsoft':
      default:
        return {
          badge: 'bg-amber-950/80 border-amber-400 text-amber-300',
          cardBorder: 'border-amber-500/40 hover:border-amber-400',
          glow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]',
          iconBg: 'bg-amber-950 border-amber-500/70 text-amber-400',
        };
    }
  };

  const filteredCerts = CERTIFICATIONS_DATA.filter((c) => {
    if (filter === 'verified') return c.status === 'Verified & Active';
    if (filter === 'aspiring') return c.status === 'Target Objective';
    return true;
  });

  const verifiedCount = CERTIFICATIONS_DATA.filter((c) => c.status === 'Verified & Active').length;

  return (
    <section id="certifications" className="py-12 sm:py-16 bg-[#030814] border-t border-cyan-900/40 text-slate-100 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Ribbon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/60 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-xs font-['JetBrains_Mono'] tracking-wide mb-2">
              <Award size={13} className="text-cyan-400" />
              <span>ACCREDITED CREDENTIALS & INDUSTRY BADGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Chakra_Petch'] text-white">
              Official Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">Credentials</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Industry-standard certifications validating expertise in cybersecurity, enterprise web architecture, core IT systems, and software engineering.
            </p>
          </div>

          {/* Quick Counter Badges */}
          <div className="flex items-center gap-3 font-['JetBrains_Mono'] text-xs">
            <div className="p-2.5 rounded-lg bg-[#061224] border border-cyan-900/60 flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400" />
              <div>
                <span className="text-slate-400 block text-[10px]">VERIFIED CREDENTIALS</span>
                <strong className="text-emerald-300 font-bold">{verifiedCount} Active Badges</strong>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#061224] border border-amber-900/60 flex items-center gap-2">
              <Cloud size={16} className="text-amber-400" />
              <div>
                <span className="text-slate-400 block text-[10px]">CLOUD TRACK</span>
                <strong className="text-amber-300 font-bold">Azure Speedrun</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'All Credentials' },
              { id: 'verified', label: 'Verified & Active (Cisco, IBM, PLP)' },
              { id: 'aspiring', label: 'Target Cloud (Azure)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundManager.playClick();
                  setFilter(tab.id as unknown as typeof filter);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-['Chakra_Petch'] font-bold tracking-wide uppercase transition-all ${
                  filter === tab.id
                    ? 'bg-cyan-500 text-black shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-[11px] font-['JetBrains_Mono'] text-slate-500 hidden sm:inline">
            CLICK CARD TO EXPAND SYLLABUS & VALIDATED SKILLS
          </span>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredCerts.map((cert) => {
            const styles = getIssuerStyle(cert.issuerShort);
            const isVerified = cert.status === 'Verified & Active';

            return (
              <div
                key={cert.id}
                onClick={() => {
                  soundManager.playAchievement();
                  setSelectedCert(cert);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`rounded-2xl border-2 bg-gradient-to-b from-[#061224] to-[#040b17] p-6 space-y-4 cursor-pointer transition-all duration-200 hover:-translate-y-1 group relative overflow-hidden ${styles.cardBorder} ${styles.glow}`}
              >
                {/* Top Row: Issuer & Status Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 ${styles.iconBg}`}>
                      {getIcon(cert.badgeIcon)}
                    </div>
                    <div>
                      <span className={`text-[10px] font-['JetBrains_Mono'] font-bold uppercase px-2 py-0.5 rounded border inline-block ${styles.badge}`}>
                        {cert.issuer}
                      </span>
                      <div className="text-xs font-['JetBrains_Mono'] text-slate-400 mt-1 flex items-center gap-1">
                        {isVerified ? (
                          <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                            <CheckCircle2 size={12} /> {cert.status}
                          </span>
                        ) : (
                          <span className="text-amber-400 flex items-center gap-1 font-semibold">
                            <Sparkles size={12} /> {cert.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-['Chakra_Petch'] font-bold text-cyan-300 block">
                      MASTERY {cert.level}%
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {cert.rarity}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-['Chakra_Petch'] font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1.5 line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                {/* Verified Skills Preview */}
                <div className="space-y-1.5 pt-2 border-t border-cyan-950/80">
                  <span className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-slate-400 block font-semibold">
                    Core Competencies Validated:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsVerified.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-cyan-900/40"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                    {cert.skillsVerified.length > 3 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        +{cert.skillsVerified.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-['JetBrains_Mono'] text-slate-500 border-t border-slate-900">
                  <span>CREDENTIAL ID: VERIFIED</span>
                  <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform font-semibold">
                    VIEW SYLLABUS <ChevronRight size={13} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Credential Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="w-full max-w-lg rounded-2xl border-2 border-cyan-500/80 bg-[#061224] p-6 shadow-[0_0_40px_rgba(6,182,212,0.35)] relative overflow-hidden font-['Plus_Jakarta_Sans']">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    {getIcon(selectedCert.badgeIcon)}
                  </div>
                  <div>
                    <span className="text-[10px] font-['JetBrains_Mono'] font-bold uppercase px-2 py-0.5 rounded border bg-cyan-950 text-cyan-300 border-cyan-500/60 inline-block">
                      {selectedCert.issuer}
                    </span>
                    <h3 className="font-['Chakra_Petch'] font-bold text-xl text-white mt-1">
                      {selectedCert.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Status Ribbon */}
              <div className="p-3 rounded-xl bg-[#020610] border border-cyan-950 mb-4 flex items-center justify-between text-xs font-['JetBrains_Mono']">
                <span className="text-slate-400">ACCURATE STATUS:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={14} /> {selectedCert.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {selectedCert.description}
              </p>

              {/* All Validated Skills */}
              <div className="space-y-2 mb-5">
                <span className="text-xs font-['Chakra_Petch'] font-bold uppercase text-cyan-300 block">
                  All Validated Subject Areas & Competencies:
                </span>
                <div className="space-y-1.5 text-xs font-['JetBrains_Mono']">
                  {selectedCert.skillsVerified.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded bg-slate-900/80 border border-slate-800 text-slate-300"
                    >
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-['Chakra_Petch'] font-bold text-xs uppercase tracking-wider"
              >
                Close Credential Dossier
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
