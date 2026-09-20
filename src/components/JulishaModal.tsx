import React, { useState } from 'react';
import { 
  Award, 
  X, 
  Activity, 
  Pill, 
  HeartPulse, 
  TrendingDown, 
  ShieldCheck, 
  CheckCircle2, 
  Play, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { soundManager } from '../utils/audio';

interface JulishaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JulishaModal: React.FC<JulishaModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'triage' | 'stockout'>('analytics');
  const [triageInput, setTriageInput] = useState('Homa kali kwa siku tatu na kifua kinabana wakati wa usiku');
  const [triageResult, setTriageResult] = useState<{
    urgency: string;
    condition: string;
    adviceSwahili: string;
    adviceEnglish: string;
    vitalsSuggested: string;
  } | null>({
    urgency: 'URGENT (Level 2 Triage)',
    condition: 'Acute Bronchial Spasm / Severe Respiratory Infection',
    adviceSwahili: 'Mgonjwa anahitaji kupimwa kiwango cha oksijeni (SpO2) mara moja na kupewa nebulization.',
    adviceEnglish: 'Immediate SpO2 assessment and nebulization required. Correlate with Salbutamol inventory.',
    vitalsSuggested: 'BP: 120/80 | SpO2: 91% | Temp: 38.6°C',
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn font-['Plus_Jakarta_Sans']">
      <div className="w-full max-w-4xl max-h-[90vh] rounded-2xl border-2 border-amber-500/70 bg-[#061224] shadow-[0_0_50px_rgba(245,158,11,0.35)] flex flex-col overflow-hidden text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#030917] border-b border-amber-900/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-950 border border-amber-500 flex items-center justify-center text-amber-300 font-bold">
              <Award size={18} />
            </div>
            <div>
              <h3 className="font-['Chakra_Petch'] font-bold text-base text-white flex items-center gap-2">
                <span>JULISHA HEALTHCARE AI PLATFORM</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/60">
                  GDG PWANI 2026 WINNER
                </span>
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                Primary Healthcare Intelligence • Stockout Predictor • Swahili NLP Triage
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 px-6 pt-4 pb-2 bg-[#040c1a] border-b border-cyan-950">
          {[
            { id: 'analytics', label: 'Stockout Correlation Engine' },
            { id: 'triage', label: 'Multilingual Voice & NLP Triage' },
            { id: 'stockout', label: 'Inter-Facility Redistribution' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundManager.playClick();
                setActiveTab(tab.id as unknown as typeof activeTab);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-['Chakra_Petch'] font-bold uppercase transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-black shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Body Content */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6 custom-scrollbar text-xs sm:text-sm bg-[#040c1a]">
          {activeTab === 'analytics' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-[#061224] border border-cyan-900/60 space-y-2">
                <h4 className="font-['Chakra_Petch'] font-bold text-base text-white flex items-center gap-2">
                  <TrendingDown size={18} className="text-amber-400" />
                  Pearson Correlation Formula (r = -0.742)
                </h4>
                <p className="text-slate-300 leading-relaxed text-xs">
                  Proving scientifically that essential medicine stockouts (e.g. Amoxicillin, Artemether) directly cause a collapse in clinic patient return rates and clinical satisfaction across sub-county dispensaries.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-['JetBrains_Mono']">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase">Stockout Incidents</span>
                  <strong className="text-xl font-bold text-red-400 font-['Chakra_Petch']">142 Days</strong>
                  <span className="text-[10px] text-slate-500 block mt-1">Across 8 dispensaries</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase">Satisfaction Impact</span>
                  <strong className="text-xl font-bold text-amber-400 font-['Chakra_Petch']">-38.5%</strong>
                  <span className="text-[10px] text-slate-500 block mt-1">Patient satisfaction plunge</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase">Redistribution Time</span>
                  <strong className="text-xl font-bold text-emerald-400 font-['Chakra_Petch']">4.2 Hours</strong>
                  <span className="text-[10px] text-slate-500 block mt-1">Automated dispatch loop</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#030917] border border-cyan-950 space-y-2">
                <h5 className="font-['Chakra_Petch'] font-bold text-xs uppercase text-cyan-300">
                  Automated Balancing Logic
                </h5>
                <p className="text-slate-400 text-xs leading-relaxed">
                  When Facility A has a 45-day supply surplus of Amoxicillin while neighboring Facility B hits critical reserve (&lt;3 days), Julisha triggers a cryptographic transfer voucher notifying county logistics officers in real-time.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'triage' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-['JetBrains_Mono'] text-slate-300 uppercase block font-semibold">
                  Patient Complaint Input (English, Swahili, or Sheng):
                </label>
                <textarea
                  rows={3}
                  value={triageInput}
                  onChange={(e) => setTriageInput(e.target.value)}
                  className="w-full bg-[#061224] border border-cyan-900/60 rounded-xl p-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400 font-mono"
                />
              </div>

              {triageResult && (
                <div className="p-4 rounded-xl bg-[#061224] border border-amber-500/50 space-y-3">
                  <div className="flex items-center justify-between border-b border-cyan-950 pb-2">
                    <span className="font-['Chakra_Petch'] font-bold text-amber-400 text-sm">
                      {triageResult.urgency}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400">{triageResult.vitalsSuggested}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400">Diagnosis Assessment:</span>
                    <strong className="text-white block font-['Chakra_Petch'] text-sm mt-0.5">
                      {triageResult.condition}
                    </strong>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800">
                      <strong className="text-amber-300 block font-mono text-[11px]">Mwongozo kwa Kiswahili:</strong>
                      <p className="text-slate-300 mt-1">{triageResult.adviceSwahili}</p>
                    </div>
                    <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800">
                      <strong className="text-cyan-300 block font-mono text-[11px]">Clinical Action (English):</strong>
                      <p className="text-slate-300 mt-1">{triageResult.adviceEnglish}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'stockout' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#061224] border border-cyan-900/60">
                <h4 className="font-['Chakra_Petch'] font-bold text-white text-sm mb-1">
                  Active Sub-County Transfer Manifest
                </h4>
                <p className="text-xs text-slate-400">
                  Dynamic routing preventing maternal and pediatric medication stockouts.
                </p>
              </div>

              <div className="space-y-2 font-['JetBrains_Mono'] text-xs">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div>
                    <strong className="text-white block">Amoxicillin 250mg Suspension (200 Units)</strong>
                    <span className="text-slate-400 text-[11px]">From: Likoni Sub-County Dispensary → To: Mtongwe Health Centre</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500 font-bold text-[10px]">
                    IN TRANSIT (ETA 45 MIN)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div>
                    <strong className="text-white block">Artemether-Lumefantrine (AL 20/120) (500 Doses)</strong>
                    <span className="text-slate-400 text-[11px]">From: Coast General Hospital Depot → To: Kisauni Dispensary</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500 font-bold text-[10px]">
                    APPROVED BY PHARMACIST
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
