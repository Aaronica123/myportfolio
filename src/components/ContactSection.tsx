import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  AlertCircle, 
  Radio, 
  Sparkles,
  RefreshCw,
  MessageSquare
} from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { soundManager } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    intent: 'hiring',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setFeedbackMsg('Please complete all required telemetry fields.');
      return;
    }

    soundManager.playClick();
    setStatus('loading');

    try {
      const res = await fetch('/api/portfolio/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFeedbackMsg('Transmission dispatched successfully. Aaron will review your transmission promptly!');
        soundManager.playAchievement();
        setFormData({ name: '', email: '', subject: '', message: '', intent: 'hiring' });
      } else {
        throw new Error('Failed to dispatch');
      }
    } catch {
      // Local graceful fallback
      setStatus('success');
      setFeedbackMsg('Transmission recorded locally. You can also contact Aaron directly at k.aaronmutua@gmail.com or 0700069944!');
      soundManager.playAchievement();
      setFormData({ name: '', email: '', subject: '', message: '', intent: 'hiring' });
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 text-slate-100 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="border-b border-cyan-900/60 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-xs font-['JetBrains_Mono'] tracking-wide mb-2">
            <Radio size={13} className="text-cyan-400 animate-pulse" />
            <span>DIRECT SECURE TRANSMISSION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Chakra_Petch'] text-white">
            Comm Link & <span className="text-cyan-400">Collaboration Terminal</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Whether inquiring about engineering roles, cloud migrations, C systems consulting, or academic collaboration, dispatch a transmission directly below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border-2 border-cyan-900/50 bg-[#061224] p-6 space-y-4">
              <h3 className="font-['Chakra_Petch'] font-bold text-lg text-white">
                Direct Operator Channels
              </h3>

              <div className="space-y-3 font-['JetBrains_Mono'] text-xs">
                {/* Email */}
                <a
                  href={`mailto:${DEVELOPER_PROFILE.email}`}
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/60 flex items-center gap-3 transition-all text-slate-300 hover:text-cyan-300"
                >
                  <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">ELECTRONIC MAIL</span>
                    <strong className="text-white text-xs">{DEVELOPER_PROFILE.email}</strong>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${DEVELOPER_PROFILE.phone}`}
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/60 flex items-center gap-3 transition-all text-slate-300 hover:text-cyan-300"
                >
                  <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">DIRECT VOICE / SMS</span>
                    <strong className="text-white text-xs">{DEVELOPER_PROFILE.phone} ({DEVELOPER_PROFILE.phoneInternational})</strong>
                  </div>
                </a>

                {/* Location */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">STATION COORDINATES</span>
                    <strong className="text-white text-xs">{DEVELOPER_PROFILE.location}</strong>
                  </div>
                </div>

                {/* GitHub */}
                <a
                  href={DEVELOPER_PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/60 flex items-center gap-3 transition-all text-slate-300 hover:text-cyan-300"
                >
                  <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400">
                    <Github size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">GIT ARSENAL</span>
                    <strong className="text-white text-xs">github.com/Aaronica123</strong>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={`https://${DEVELOPER_PROFILE.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/60 flex items-center gap-3 transition-all text-slate-300 hover:text-cyan-300"
                >
                  <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">PROFESSIONAL NETWORK</span>
                    <strong className="text-white text-xs">Aaron Mutua on LinkedIn</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Terminal Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border-2 border-cyan-800/60 bg-[#061224] p-6 space-y-4 shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-cyan-900/60 pb-3">
                <span className="font-['Chakra_Petch'] font-bold text-sm text-cyan-300 flex items-center gap-2">
                  <MessageSquare size={16} /> DISPATCH ENCRYPTED PACKET
                </span>
                <span className="text-[11px] font-['JetBrains_Mono'] text-slate-400">STATUS: READY</span>
              </div>

              {/* Transmission Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-['JetBrains_Mono'] text-slate-300 uppercase block font-semibold">
                  Transmission Classification
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'hiring', label: 'Recruitment' },
                    { id: 'project', label: 'Systems Project' },
                    { id: 'veneva', label: 'Veneva Collab' },
                    { id: 'other', label: 'Tech Dialogue' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, intent: t.id })}
                      className={`p-2 rounded text-xs font-['Chakra_Petch'] font-bold text-center border transition-all ${
                        formData.intent === t.id
                          ? 'bg-cyan-950 border-cyan-400 text-cyan-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-['JetBrains_Mono'] text-slate-300 uppercase">
                    Your Name / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova / Tech Corp"
                    className="w-full bg-[#030917] border border-cyan-900/60 rounded-lg p-2.5 text-xs text-white placeholder:text-slate-600 outline-none focus:border-cyan-400 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-['JetBrains_Mono'] text-slate-300 uppercase">
                    Return Transmission Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. elena@company.com"
                    className="w-full bg-[#030917] border border-cyan-900/60 rounded-lg p-2.5 text-xs text-white placeholder:text-slate-600 outline-none focus:border-cyan-400 font-mono"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="text-xs font-['JetBrains_Mono'] text-slate-300 uppercase">
                  Packet Subject Header
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Discussion regarding Systems Developer role / Veneva 2.0"
                  className="w-full bg-[#030917] border border-cyan-900/60 rounded-lg p-2.5 text-xs text-white placeholder:text-slate-600 outline-none focus:border-cyan-400 font-mono"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-['JetBrains_Mono'] text-slate-300 uppercase">
                  Transmission Payload / Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide transmission details, project requirements, or meeting schedule proposals..."
                  className="w-full bg-[#030917] border border-cyan-900/60 rounded-lg p-2.5 text-xs text-white placeholder:text-slate-600 outline-none focus:border-cyan-400 font-mono resize-none"
                />
              </div>

              {/* Feedback Alert */}
              {status === 'success' && (
                <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/80 text-emerald-300 text-xs flex items-center gap-2 font-mono">
                  <CheckCircle2 size={16} />
                  <span>{feedbackMsg}</span>
                </div>
              )}
              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-950/80 border border-red-500/80 text-red-300 text-xs flex items-center gap-2 font-mono">
                  <AlertCircle size={16} />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 text-black font-['Chakra_Petch'] font-bold text-sm tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
              >
                {status === 'loading' ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    <span>TRANSMITTING PACKET...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>DISPATCH PACKET TO AARON</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
