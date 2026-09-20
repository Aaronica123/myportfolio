import React from 'react';
import { 
  Scroll, 
  CheckCircle2, 
  Clock, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  MapPin, 
  ChevronRight,
  Zap
} from 'lucide-react';
import { QUEST_LOG, EDUCATION_AND_EXPERIENCE } from '../data/portfolioData';

export const QuestLog: React.FC = () => {
  return (
    <section id="quests" className="py-12 sm:py-16 bg-[#040916] border-t border-cyan-900/40 text-slate-100 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/60 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/40 bg-amber-950/40 text-amber-300 text-xs font-['JetBrains_Mono'] tracking-wide mb-2">
              <Scroll size={13} className="text-amber-400" />
              <span>CAMPAIGN OBJECTIVES & MILESTONES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Chakra_Petch'] text-white">
              Active Quests & <span className="text-amber-400">Career Campaign</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Track progress across professional certifications, low-level systems training, hackathon victories, and academic milestones.
            </p>
          </div>

          <div className="font-['JetBrains_Mono'] text-xs text-amber-300 bg-amber-950/40 border border-amber-600/40 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-bold">
            <Sparkles size={14} />
            <span>TOTAL XP POOL: +15,000 XP</span>
          </div>
        </div>

        {/* Quests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {QUEST_LOG.map((quest) => {
            const isCompleted = quest.status === 'Completed';
            return (
              <div
                key={quest.id}
                className="rounded-xl border border-cyan-900/40 bg-[#061224] p-5 space-y-3 relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-['JetBrains_Mono'] text-cyan-400 font-bold">
                      [{quest.type.toUpperCase()}]
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isCompleted 
                        ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300' 
                        : 'bg-amber-950/80 border-amber-500/60 text-amber-300'
                    }`}>
                      {quest.status}
                    </span>
                  </div>
                  <span className="text-xs font-['JetBrains_Mono'] text-amber-300 font-bold">
                    +{quest.xpReward} XP
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Chakra_Petch'] font-bold text-lg text-white">
                  {quest.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {quest.objective}
                </p>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-['JetBrains_Mono']">
                    <span className="text-slate-400">Campaign Completion:</span>
                    <span className="text-cyan-300 font-bold">{quest.progressPct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isCompleted
                          ? 'bg-emerald-400'
                          : 'bg-gradient-to-r from-amber-500 to-cyan-400'
                      }`}
                      style={{ width: `${quest.progressPct}%` }}
                    ></div>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="pt-2 border-t border-cyan-950/80 space-y-1 text-xs">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                    Key Objectives / Deliverables:
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-300">
                    {quest.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 size={12} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education & Experience Timeline */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-cyan-900/60 pb-3">
            <h3 className="text-xl font-bold font-['Chakra_Petch'] text-white flex items-center gap-2">
              <GraduationCap className="text-cyan-400" />
              <span>Academic Foundation & Industrial Attachments</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Verified timeline of academic degree and corporate enterprise experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {EDUCATION_AND_EXPERIENCE.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-cyan-900/40 bg-[#061224] p-5 space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-cyan-400">
                  <span className="flex items-center gap-1.5 font-bold">
                    {item.type === 'education' ? <GraduationCap size={15} /> : <Briefcase size={15} />}
                    {item.type === 'education' ? 'EDUCATION' : 'EXPERIENCE'}
                  </span>
                  <span className="text-slate-400 text-[11px]">{item.period}</span>
                </div>

                <h4 className="font-['Chakra_Petch'] font-bold text-white text-base">
                  {item.institution}
                </h4>

                <div className="text-xs font-mono text-cyan-300">
                  {item.role}
                </div>

                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <MapPin size={12} />
                  <span>{item.location}</span>
                </div>

                <ul className="pt-2 border-t border-cyan-950/80 space-y-1.5 text-xs text-slate-300">
                  {item.highlights.map((high, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-[11px] leading-relaxed">
                      <ChevronRight size={12} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{high}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
