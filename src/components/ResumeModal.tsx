import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Award, Briefcase, GraduationCap, FolderGit2 } from 'lucide-react';
import { DEVELOPER_PROFILE, EDUCATION_AND_EXPERIENCE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn font-['Plus_Jakarta_Sans']">
      <div className="w-full max-w-4xl max-h-[90vh] rounded-2xl border-2 border-cyan-500/70 bg-[#061224] shadow-[0_0_50px_rgba(6,182,212,0.35)] flex flex-col overflow-hidden text-slate-100">
        {/* Header Ribbon */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#030917] border-b border-cyan-900/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-500 flex items-center justify-center text-cyan-300 font-bold font-mono">
              CV
            </div>
            <div>
              <h3 className="font-['Chakra_Petch'] font-bold text-base text-white">
                AARON MUTUA // OFFICIAL CURRICULUM VITAE
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                Masinde Muliro University • Maseno / Kakamega / Nairobi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 text-xs font-mono"
            >
              <Printer size={15} />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6 custom-scrollbar text-xs sm:text-sm bg-[#040c1a]">
          {/* Header Info */}
          <div className="border-b border-cyan-900/60 pb-5 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold font-['Chakra_Petch'] text-white">
              AARON MUTUA
            </h1>
            <p className="text-cyan-400 font-['JetBrains_Mono'] font-semibold text-sm">
              Junior Systems & DevOps Developer • AI/ML Trainee
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <Mail size={13} className="text-cyan-400" /> {DEVELOPER_PROFILE.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={13} className="text-cyan-400" /> {DEVELOPER_PROFILE.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-cyan-400" /> Kakamega / Nairobi, Kenya
              </span>
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <Github size={13} /> github.com/Aaronica123
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="font-['Chakra_Petch'] font-bold text-sm uppercase text-cyan-300 tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div> PROFESSIONAL PROFILE
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Adaptable, high-agency developer pursuing a Bachelor of Science in Information Technology at Masinde Muliro University. Rigorously training in low-level C programming for high-scale, memory-safe system architectures, speedrunning Microsoft Azure Cloud & DevOps certification tracks, and engineering intelligent AI pipelines. Proven experience from enterprise attachment at Kenya Marine and Fisheries Research Institute (KMFRI) streamlining operational workflows and ticketing systems. Champion of the GDG Pwani Hackathon 2026.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-['Chakra_Petch'] font-bold text-sm uppercase text-cyan-300 tracking-wider flex items-center gap-2">
              <GraduationCap size={16} className="text-cyan-400" /> EDUCATION
            </h2>
            <div className="p-4 rounded-xl bg-[#061224] border border-cyan-950 space-y-1">
              <div className="flex justify-between font-semibold text-white">
                <span>Masinde Muliro University of Science and Technology</span>
                <span className="font-mono text-xs text-cyan-400">Sep 2023 - Nov 2027 (Expected)</span>
              </div>
              <p className="text-cyan-300 text-xs font-mono">
                Bachelor of Science in Information Technology (BSc IT)
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Coursework: Systems Programming, Operating Systems, Database Management Systems, Data Structures & Algorithms, Network Security, Cloud Architectures.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="font-['Chakra_Petch'] font-bold text-sm uppercase text-cyan-300 tracking-wider flex items-center gap-2">
              <Briefcase size={16} className="text-cyan-400" /> WORK & ATTACHMENT EXPERIENCE
            </h2>
            <div className="p-4 rounded-xl bg-[#061224] border border-cyan-950 space-y-2">
              <div className="flex justify-between font-semibold text-white">
                <span>Kenya Marine and Fisheries Research Institute (KMFRI)</span>
                <span className="font-mono text-xs text-cyan-400">May 2026 - Aug 2026</span>
              </div>
              <p className="text-cyan-300 text-xs font-mono">
                Information Technology Attache & Systems Assistant
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                <li>Analyzed legacy IT ticketing workflows, identifying process bottlenecks causing 3-day turnaround delays.</li>
                <li>Designed automated SLA alerting and triage routing, reducing unresolved support tickets by 45%.</li>
                <li>Managed internal network nodes, equipment inventory tracking, and secure database backups.</li>
              </ul>
            </div>
          </div>

          {/* Core Technical Proficiencies */}
          <div className="space-y-3">
            <h2 className="font-['Chakra_Petch'] font-bold text-sm uppercase text-cyan-300 tracking-wider flex items-center gap-2">
              <Award size={16} className="text-cyan-400" /> TECHNICAL EXPERTISE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#061224] border border-cyan-950 space-y-1">
                <strong className="text-cyan-300 block font-mono">Systems & Low-Level:</strong>
                <span className="text-slate-300">C (POSIX, pthreads, memory safety, socket daemons, Valgrind, GDB), Linux Kernel Interfaces.</span>
              </div>
              <div className="p-3 rounded-lg bg-[#061224] border border-cyan-950 space-y-1">
                <strong className="text-cyan-300 block font-mono">Cloud & DevOps:</strong>
                <span className="text-slate-300">Microsoft Azure (AZ-900, AZ-104 prep), Docker, GitHub Actions CI/CD, Nginx, Linux CLI.</span>
              </div>
              <div className="p-3 rounded-lg bg-[#061224] border border-cyan-950 space-y-1">
                <strong className="text-cyan-300 block font-mono">Web & Backend:</strong>
                <span className="text-slate-300">Python (Django, FastAPI), TypeScript/Node.js, PostgreSQL, Supabase, REST APIs, GraphQL.</span>
              </div>
              <div className="p-3 rounded-lg bg-[#061224] border border-cyan-950 space-y-1">
                <strong className="text-cyan-300 block font-mono">Frontend & Interactions:</strong>
                <span className="text-slate-300">React 19, Tailwind CSS, Responsive Viewports (Mobile to 4K TV), Sound Synthesis, Cyber UI.</span>
              </div>
            </div>
          </div>

          {/* Industry Certifications & Credentials */}
          <div className="space-y-3">
            <h2 className="font-['Chakra_Petch'] font-bold text-sm uppercase text-cyan-300 tracking-wider flex items-center gap-2">
              <Award size={16} className="text-cyan-400" /> INDUSTRY CERTIFICATIONS & CREDENTIALS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#061224] border border-cyan-950 space-y-1">
                <div className="flex justify-between items-start">
                  <strong className="text-white block font-semibold">Introduction to Cybersecurity</strong>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-500/50">Cisco</span>
                </div>
                <p className="text-slate-400 text-[11px]">Cisco Networking Academy • Verified</p>
                <p className="text-slate-300 text-[11px] mt-0.5">Threat analysis, cryptography, network vulnerabilities & CIA confidentiality frameworks.</p>
              </div>

              <div className="p-3 rounded-lg bg-[#061224] border border-cyan-950 space-y-1">
                <div className="flex justify-between items-start">
                  <strong className="text-white block font-semibold">Web Fundamentals</strong>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-500/50">IBM</span>
                </div>
                <p className="text-slate-400 text-[11px]">IBM SkillsBuild • Verified</p>
                <p className="text-slate-300 text-[11px] mt-0.5">Client-server architecture, HTTP/S protocols, DOM lifecycle, responsive layouts & web security.</p>
              </div>

              <div className="p-3 rounded-lg bg-[#061224] border border-cyan-950 space-y-1">
                <div className="flex justify-between items-start">
                  <strong className="text-white block font-semibold">IT Fundamentals</strong>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-500/50">IBM</span>
                </div>
                <p className="text-slate-400 text-[11px]">IBM SkillsBuild • Verified</p>
                <p className="text-slate-300 text-[11px] mt-0.5">Operating system architecture, TCP/IP networking, memory management & cloud virtualization.</p>
              </div>

              <div className="p-3 rounded-lg bg-[#061224] border border-cyan-950 space-y-1">
                <div className="flex justify-between items-start">
                  <strong className="text-white block font-semibold">Software Development</strong>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/50">PLP</span>
                </div>
                <p className="text-slate-400 text-[11px]">Power Learn Project • Verified</p>
                <p className="text-slate-300 text-[11px] mt-0.5">Full-stack systems, OOP, relational database schemas, Git workflow & API deployments.</p>
              </div>
            </div>
          </div>

          {/* Key Projects & Active Systems */}
          <div className="space-y-3">
            <h2 className="font-['Chakra_Petch'] font-bold text-sm uppercase text-cyan-300 tracking-wider flex items-center gap-2">
              <FolderGit2 size={16} className="text-cyan-400" /> KEY PROJECTS & ACTIVE ARCHITECTURES
            </h2>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-[#061224] border border-cyan-950 space-y-1">
                <div className="flex justify-between items-center">
                  <strong className="text-emerald-300 font-semibold">GeoMakazi: Geographical AI Housing Platform</strong>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40">Active Ongoing Project</span>
                </div>
                <p className="text-slate-300 text-[11px]">
                  Tackling Kenya's 1.36 Trillion KES housing deficit by eliminating blind door-to-door room hunts for campus comrades. Built with React, Supabase Auth/DB (users, houses, profiles), MinIO S3 object buckets, Redis static cache, Google Maps satellite GIS, Express.js microservice layer (App.js, Index.js, Supabase.js), Nginx reverse proxy, and Railway container orchestration.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#061224] border border-cyan-950 space-y-1">
                <div className="flex justify-between items-center">
                  <strong className="text-cyan-300 font-semibold">The Veneva Project 2.0: Deep Systems Overhaul</strong>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40">Active Systems Overhaul</span>
                </div>
                <p className="text-slate-300 text-[11px]">
                  Engineered dual-core C/JavaScript daemon engine benchmarking sub-2ms transaction throughput, zero-trust ed25519 token rotation, and non-blocking asynchronous pipeline replacing flawed legacy workflows.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#061224] border border-cyan-950 space-y-1">
                <div className="flex justify-between items-center">
                  <strong className="text-amber-300 font-semibold">Julisha Healthcare AI Platform</strong>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/40">GDG Pwani Winner</span>
                </div>
                <p className="text-slate-300 text-[11px]">
                  Primary healthcare intelligence platform featuring automated medicine stockout prediction, biometric verification, and native Swahili NLP triage.
                </p>
              </div>
            </div>
          </div>

          {/* Honors & Hackathons */}
          <div className="space-y-2">
            <h2 className="font-['Chakra_Petch'] font-bold text-sm uppercase text-amber-300 tracking-wider flex items-center gap-2">
              <Award size={16} className="text-amber-400" /> HONORS & AWARDS
            </h2>
            <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/40 text-xs space-y-1">
              <strong className="text-white block font-semibold">1st Place Champion - GDG Pwani Hackathon 2026</strong>
              <p className="text-slate-300">
                Engineered the Julisha Healthcare AI platform, tackling medicine stockouts, biometric patient verification, and Swahili NLP triage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
