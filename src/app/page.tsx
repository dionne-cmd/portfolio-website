"use client";

import React, { useState } from "react";

// Clean, lightweight SVG Icons (Zero external dependencies)
const Icons = {
  ArrowUpRight: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  ),
  Mail: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L1 7" />
    </svg>
  ),
  Linkedin: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.67-.75 1.67-1.67A1.67 1.67 0 0 0 6.46 5.42a1.67 1.67 0 0 0-1.67 1.67c0 .92.75 1.67 1.67 1.67m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  ),
  Github: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Check: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Copy: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  ),
  Sparkles: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  ),
  Compass: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  Layers: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Brain: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04" />
    </svg>
  ),
  Palette: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  ExternalLink: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  ),
};

export default function Home() {
  const [copied, setCopied] = useState(false);
  const email = "dionnesetien@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/dionne-setien-a3a658186";
  const githubUrl = "https://github.com/dionne-cmd";
  const blogUrl = "https://kingluminar.com";
  const corporateUrl = "https://dionnesetien.online";

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#dedad3] text-[#0a0a0a] selection:bg-[#256f82] selection:text-white font-sans">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-[#dedad3]/90 backdrop-blur-md border-b border-[#0a0a0a]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#intro"
            className="font-serif text-2xl tracking-tight text-[#0a0a0a] hover:opacity-75 transition-opacity"
          >
            Dionne Setien
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5c5852]">
            <a href="#about" className="hover:text-[#0a0a0a] transition-colors">
              About
            </a>
            <a
              href="#featured-work"
              className="hover:text-[#0a0a0a] transition-colors"
            >
              Featured Work
            </a>
            <a
              href="#experience"
              className="hover:text-[#0a0a0a] transition-colors"
            >
              Experience
            </a>
            <a href="#skills" className="hover:text-[#0a0a0a] transition-colors">
              Skills
            </a>
            <a
              href="#education"
              className="hover:text-[#0a0a0a] transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="hover:text-[#0a0a0a] transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-[#5c5852] hover:text-[#0a0a0a] hover:bg-[#d3cec6] rounded-full transition-colors"
            >
              <Icons.Linkedin className="w-4 h-4" />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-[#5c5852] hover:text-[#0a0a0a] hover:bg-[#d3cec6] rounded-full transition-colors"
            >
              <Icons.Github className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#256f82] hover:bg-[#1b5564] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors shadow-sm"
            >
              <span>Get In Touch</span>
              <Icons.ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        {/* Intro / Hero Section */}
        <section id="intro" className="scroll-mt-24 pb-16 border-b border-[#0a0a0a]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#d3cec6] text-[#5c5852] rounded-full text-xs font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#256f82] animate-pulse" />
                <span>Miami, Florida · Available for Strategic Advisory</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#0a0a0a]">
                Dionne Setien
              </h1>

              <p className="text-xl sm:text-2xl font-light text-[#2c2a27] leading-snug max-w-2xl">
                Chief Attention Engineer & Brand Architect · Certified AI Generalist · Executive Wellness Coach
              </p>

              <div className="pt-2">
                <blockquote className="border-l-2 border-[#256f82] pl-4 text-base italic text-[#5c5852]">
                  “Human Intention × Machine Intelligence = Amplified Creation.”
                </blockquote>
              </div>

              <p className="text-base sm:text-lg text-[#5c5852] leading-relaxed max-w-2xl">
                Before intelligence scales outward, it must first build something worth standing on.
                I don’t produce content—I engineer attention. Synthesizing behavioral science, luxury strategy,
                and technical AI systems to scale operations for founders, creators, and premium brands.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#256f82] hover:bg-[#1b5564] text-white font-medium text-sm rounded-full transition-colors shadow-sm"
                >
                  <Icons.Mail className="w-4 h-4" />
                  <span>Connect With Me</span>
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#d3cec6] hover:bg-[#c6c0b6] text-[#0a0a0a] font-medium text-sm rounded-full transition-colors"
                >
                  <Icons.Linkedin className="w-4 h-4 text-[#256f82]" />
                  <span>LinkedIn Profile</span>
                  <Icons.ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#d3cec6] hover:bg-[#c6c0b6] text-[#0a0a0a] font-medium text-sm rounded-full transition-colors"
                >
                  <Icons.Github className="w-4 h-4" />
                  <span>GitHub (@dionne-cmd)</span>
                  <Icons.ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Side Identity Rail */}
            <div className="lg:col-span-4 bg-[#d3cec6]/60 rounded-2xl p-6 sm:p-8 border border-[#0a0a0a]/5 space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#5c5852]">
                Executive Snapshot
              </h2>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs text-[#5c5852]">Primary Divisions</div>
                  <div className="font-semibold text-[#0a0a0a]">King Luminar Studio</div>
                  <div className="font-semibold text-[#0a0a0a]">Abund Terra Academy</div>
                </div>

                <div>
                  <div className="text-xs text-[#5c5852]">Education Foundation</div>
                  <div className="text-[#0a0a0a] font-medium">M.S. in Psychology (Carlos Albizu)</div>
                  <div className="text-[#0a0a0a] font-medium">Bachelor’s in Interior Design</div>
                </div>

                <div>
                  <div className="text-xs text-[#5c5852]">Key Capabilities</div>
                  <div className="text-[#0a0a0a]">Autonomous Content Moats</div>
                  <div className="text-[#0a0a0a]">Real-Time AI Voice Agents</div>
                  <div className="text-[#0a0a0a]">High-Ticket Brand Architecture</div>
                </div>

                <div>
                  <div className="text-xs text-[#5c5852]">Location</div>
                  <div className="text-[#0a0a0a]">Miami, Florida, United States</div>
                </div>

                <div className="pt-2 border-t border-[#0a0a0a]/10 flex flex-col gap-2">
                  <a
                    href={blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-xs font-semibold text-[#256f82] hover:underline"
                  >
                    <span>Visit King Luminar Studio</span>
                    <Icons.ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={corporateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-xs font-semibold text-[#256f82] hover:underline"
                  >
                    <span>Direct Estate: DionneSetien.online</span>
                    <Icons.ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: About Me */}
        <section id="about" className="scroll-mt-24 py-16 border-b border-[#0a0a0a]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#256f82]">
                01 / Background
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0a0a0a] mt-2">
                Behavioral Science Meets Luxury Design
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-[#2c2a27] text-base sm:text-lg leading-relaxed">
              <p>
                My professional architecture leverages a rare synthesis of behavioral science and premium design:
                a <strong>Master of Science (M.S.) in Psychology</strong> and a <strong>Bachelor&apos;s Degree in Interior Design</strong>.
                I apply this deep background strictly within the space of High-Ticket Business Consulting, Luxury Strategy,
                and Executive Wellness Coaching.
              </p>
              <p>
                Today, as a <strong>Certified AI Generalist</strong>, I build autonomous digital content moats, real-time voice agents,
                and next-generation multimedia architectures. I help founders, creators, and premium brands capture every lead,
                scale their workflows, and tell their stories beautifully across global markets.
              </p>
              <p>
                My late mentor, <strong>Bob Proctor</strong>, taught me that abundance is everywhere you look.
                I built <em>Abund Terra</em> as a manifestation of that truth—a premium wellness and mindset collective where the Earth meets the Soul,
                and your ultimate potential awakens.
              </p>
              <p className="font-medium text-[#0a0a0a]">
                If you are ready to stop running on friction and begin scaling your business backend with the velocity of a spaceship, let’s connect. ¡Vamos con todo!
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Work & Corporate Divisions */}
        <section id="featured-work" className="scroll-mt-24 py-16 border-b border-[#0a0a0a]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#256f82]">
                02 / Ventures & Portfolios
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#0a0a0a] mt-1">
                Featured Work
              </h2>
            </div>
            <p className="text-sm text-[#5c5852] max-w-sm">
              Proprietary operational frameworks deployed across specialized corporate divisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Division 1: King Luminar Studio */}
            <div className="bg-[#d3cec6]/40 hover:bg-[#d3cec6]/70 transition-colors rounded-2xl p-8 border border-[#0a0a0a]/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#256f82] mb-3">
                  <span>Creative AI Production House</span>
                  <Icons.Sparkles className="w-4 h-4 text-[#256f82]" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0a0a0a] mb-3">
                  King Luminar Studio
                </h3>
                <p className="text-sm sm:text-base text-[#5c5852] leading-relaxed mb-6">
                  Advanced AI creative production house delivering cinematic video, custom sound design,
                  and proprietary corporate Prompt Engineering Libraries. Transforming raw ideas into compelling, high-converting multimedia assets.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#dedad3] text-xs font-medium text-[#0a0a0a] rounded-full">
                    Cinematic AI Video
                  </span>
                  <span className="px-3 py-1 bg-[#dedad3] text-xs font-medium text-[#0a0a0a] rounded-full">
                    Custom Sound Design
                  </span>
                  <span className="px-3 py-1 bg-[#dedad3] text-xs font-medium text-[#0a0a0a] rounded-full">
                    Prompt Engineering Libraries
                  </span>
                </div>
              </div>
              <div>
                <a
                  href={blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#256f82] hover:text-[#1b5564] transition-colors"
                >
                  <span>Explore kingluminar.com</span>
                  <Icons.ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Division 2: Abund Terra Academy */}
            <div className="bg-[#d3cec6]/40 hover:bg-[#d3cec6]/70 transition-colors rounded-2xl p-8 border border-[#0a0a0a]/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#256f82] mb-3">
                  <span>Executive Mindset Collective</span>
                  <Icons.Compass className="w-4 h-4 text-[#256f82]" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0a0a0a] mb-3">
                  Abund Terra Academy
                </h3>
                <p className="text-sm sm:text-base text-[#5c5852] leading-relaxed mb-6">
                  Premium bilingual wellness collective focused on executive mindset, alignment, and subconscious recoding.
                  Where the Earth meets the Soul, enabling leaders to eliminate internal friction and awaken their highest potential.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#dedad3] text-xs font-medium text-[#0a0a0a] rounded-full">
                    Subconscious Recoding
                  </span>
                  <span className="px-3 py-1 bg-[#dedad3] text-xs font-medium text-[#0a0a0a] rounded-full">
                    Executive Mindset Alignment
                  </span>
                  <span className="px-3 py-1 bg-[#dedad3] text-xs font-medium text-[#0a0a0a] rounded-full">
                    Bilingual Programs
                  </span>
                </div>
              </div>
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#256f82] hover:text-[#1b5564] transition-colors"
                >
                  <span>Inquire for Executive Coaching</span>
                  <Icons.ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Work Experience */}
        <section id="experience" className="scroll-mt-24 py-16 border-b border-[#0a0a0a]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#256f82]">
                03 / Career
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0a0a0a] mt-2">
                Work Experience
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <div className="p-8 bg-[#d3cec6]/30 rounded-2xl border border-[#0a0a0a]/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-serif text-2xl text-[#0a0a0a]">
                    Dionne Setien LLC
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 bg-[#d3cec6] text-[#2c2a27] rounded-full w-fit">
                    September 2024 – Present (2+ yrs)
                  </span>
                </div>
                <div className="text-sm font-medium text-[#256f82] mb-4">
                  Founder & Principal Brand Architect · United States (Miami, FL)
                </div>
                <p className="text-sm sm:text-base text-[#5c5852] leading-relaxed mb-4">
                  Directing the master corporate estate and premium digital portfolio at <strong>DionneSetien.online</strong>.
                  Overseeing the high-level synthesis of behavioral science, luxury asset strategy, and technical AI systems to scale operations for founders, creators, and high-end brands.
                </p>
                <ul className="space-y-2 text-sm text-[#2c2a27]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#256f82] font-bold">―</span>
                    <span>Deploys proprietary operational frameworks across specialized corporate divisions (King Luminar Studio & Abund Terra Academy).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#256f82] font-bold">―</span>
                    <span>Directs autonomous digital content moats and real-time voice agent workflows for enterprise-level lead capture.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#256f82] font-bold">―</span>
                    <span>Operates on a non-negotiable standard of absolute excellence: <em>Human Intention × Machine Intelligence = Amplified Creation</em>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Core Skills & Systems */}
        <section id="skills" className="scroll-mt-24 py-16 border-b border-[#0a0a0a]/10">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#256f82]">
              04 / Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0a0a0a] mt-1">
              Skills & Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Skill Block 1 */}
            <div className="p-6 bg-[#d3cec6]/30 rounded-2xl border border-[#0a0a0a]/5 flex flex-col justify-between">
              <div>
                <div className="p-2.5 w-fit rounded-lg bg-[#dedad3] text-[#256f82] mb-4">
                  <Icons.Brain className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-[#0a0a0a] text-lg mb-2">
                  Artificial Intelligence
                </h3>
                <p className="text-xs text-[#5c5852] leading-relaxed mb-4">
                  Autonomous AI frameworks, prompt engineering, and conversational intelligence.
                </p>
              </div>
              <ul className="text-xs space-y-1.5 text-[#2c2a27] font-medium border-t border-[#0a0a0a]/10 pt-3">
                <li>• Certified AI Generalist</li>
                <li>• Real-Time Voice Agents</li>
                <li>• Prompt Engineering Libraries</li>
                <li>• Autonomous Content Moats</li>
                <li>• Bi Coding & Behavioral Prompts</li>
              </ul>
            </div>

            {/* Skill Block 2 */}
            <div className="p-6 bg-[#d3cec6]/30 rounded-2xl border border-[#0a0a0a]/5 flex flex-col justify-between">
              <div>
                <div className="p-2.5 w-fit rounded-lg bg-[#dedad3] text-[#256f82] mb-4">
                  <Icons.Layers className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-[#0a0a0a] text-lg mb-2">
                  Brand Architecture
                </h3>
                <p className="text-xs text-[#5c5852] leading-relaxed mb-4">
                  High-ticket strategy, brand positioning, and audience attention engineering.
                </p>
              </div>
              <ul className="text-xs space-y-1.5 text-[#2c2a27] font-medium border-t border-[#0a0a0a]/10 pt-3">
                <li>• Attention Engineering</li>
                <li>• Luxury Asset Strategy</li>
                <li>• High-Ticket Business Consulting</li>
                <li>• Digital Publishing Infrastructure</li>
                <li>• Global Workflow Scaling</li>
              </ul>
            </div>

            {/* Skill Block 3 */}
            <div className="p-6 bg-[#d3cec6]/30 rounded-2xl border border-[#0a0a0a]/5 flex flex-col justify-between">
              <div>
                <div className="p-2.5 w-fit rounded-lg bg-[#dedad3] text-[#256f82] mb-4">
                  <Icons.Compass className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-[#0a0a0a] text-lg mb-2">
                  Behavioral Science
                </h3>
                <p className="text-xs text-[#5c5852] leading-relaxed mb-4">
                  Psychology, mindset recalibration, and subconscious performance recoding.
                </p>
              </div>
              <ul className="text-xs space-y-1.5 text-[#2c2a27] font-medium border-t border-[#0a0a0a]/10 pt-3">
                <li>• M.S. Psychology & Counseling</li>
                <li>• Executive Mindset Coaching</li>
                <li>• Subconscious Recoding</li>
                <li>• 6-Phase Meditation Trainer</li>
                <li>• Certified Hypnotherapy</li>
              </ul>
            </div>

            {/* Skill Block 4 */}
            <div className="p-6 bg-[#d3cec6]/30 rounded-2xl border border-[#0a0a0a]/5 flex flex-col justify-between">
              <div>
                <div className="p-2.5 w-fit rounded-lg bg-[#dedad3] text-[#256f82] mb-4">
                  <Icons.Palette className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-[#0a0a0a] text-lg mb-2">
                  Design & Production
                </h3>
                <p className="text-xs text-[#5c5852] leading-relaxed mb-4">
                  Aesthetic harmony, multimedia storytelling, and spatial refinement.
                </p>
              </div>
              <ul className="text-xs space-y-1.5 text-[#2c2a27] font-medium border-t border-[#0a0a0a]/10 pt-3">
                <li>• Interior Design Principles</li>
                <li>• Cinematic Video Direction</li>
                <li>• Custom Sound Architecture</li>
                <li>• Editorial Visual Hierarchy</li>
                <li>• Luxury Experience Design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Education & Certifications */}
        <section id="education" className="scroll-mt-24 py-16 border-b border-[#0a0a0a]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#256f82]">
                05 / Credentials
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0a0a0a] mt-2">
                Education & Certifications
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Outskill */}
                <div className="p-5 bg-[#d3cec6]/30 rounded-xl border border-[#0a0a0a]/5">
                  <div className="text-xs text-[#256f82] font-semibold">2026 – 2027</div>
                  <div className="font-serif text-lg text-[#0a0a0a] font-medium mt-1">Outskill</div>
                  <div className="text-xs text-[#5c5852] mt-0.5">AI Generalist · Artificial Intelligence</div>
                </div>

                {/* Mindvalley - Marketing */}
                <div className="p-5 bg-[#d3cec6]/30 rounded-xl border border-[#0a0a0a]/5">
                  <div className="text-xs text-[#256f82] font-semibold">2025</div>
                  <div className="font-serif text-lg text-[#0a0a0a] font-medium mt-1">Mindvalley</div>
                  <div className="text-xs text-[#5c5852] mt-0.5">Social Media Mastery · Marketing</div>
                </div>

                {/* Mindvalley - Life Coach */}
                <div className="p-5 bg-[#d3cec6]/30 rounded-xl border border-[#0a0a0a]/5">
                  <div className="text-xs text-[#256f82] font-semibold">2024</div>
                  <div className="font-serif text-lg text-[#0a0a0a] font-medium mt-1">Mindvalley</div>
                  <div className="text-xs text-[#5c5852] mt-0.5">Certified Life Coach & 6-Phase Meditation Trainer</div>
                </div>

                {/* Miami International Institute of Clinical Sexology */}
                <div className="p-5 bg-[#d3cec6]/30 rounded-xl border border-[#0a0a0a]/5">
                  <div className="text-xs text-[#256f82] font-semibold">2022 – 2023</div>
                  <div className="font-serif text-lg text-[#0a0a0a] font-medium mt-1">MIICS</div>
                  <div className="text-xs text-[#5c5852] mt-0.5">Certified Hypnotherapy</div>
                </div>

                {/* Carlos Albizu University */}
                <div className="p-5 bg-[#d3cec6]/30 rounded-xl border border-[#0a0a0a]/5">
                  <div className="text-xs text-[#256f82] font-semibold">2018 – 2021</div>
                  <div className="font-serif text-lg text-[#0a0a0a] font-medium mt-1">Carlos Albizu University</div>
                  <div className="text-xs text-[#5c5852] mt-0.5">Master of Science of Psychology (Mental Health Counseling)</div>
                </div>

                {/* Interior Design */}
                <div className="p-5 bg-[#d3cec6]/30 rounded-xl border border-[#0a0a0a]/5">
                  <div className="text-xs text-[#256f82] font-semibold">Foundation Degree</div>
                  <div className="font-serif text-lg text-[#0a0a0a] font-medium mt-1">Interior Design</div>
                  <div className="text-xs text-[#5c5852] mt-0.5">Bachelor&apos;s Degree in Interior Design</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Contact Section */}
        <section id="contact" className="scroll-mt-24 py-16">
          <div className="bg-[#d3cec6]/70 rounded-3xl p-8 sm:p-14 border border-[#0a0a0a]/10 text-center max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#256f82]">
              Initiate Dialogue
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#0a0a0a] tracking-tight">
              Ready to scale your backend with the velocity of a spaceship?
            </h2>

            <p className="text-base sm:text-lg text-[#5c5852] max-w-xl mx-auto leading-relaxed">
              Whether you need strategic brand architecture, autonomous AI voice workflows,
              or executive performance coaching, let’s connect.
            </p>

            {/* Email Box */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`mailto:${email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#256f82] hover:bg-[#1b5564] text-white font-semibold rounded-full transition-colors shadow-sm text-sm"
              >
                <Icons.Mail className="w-4 h-4" />
                <span>Send Email directly</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#dedad3] hover:bg-[#c9c4bc] text-[#0a0a0a] font-medium rounded-full transition-colors text-sm border border-[#0a0a0a]/10 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Icons.Check className="w-4 h-4 text-[#256f82]" />
                    <span className="text-[#256f82] font-semibold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Icons.Copy className="w-4 h-4 text-[#5c5852]" />
                    <span>Copy: {email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Links Row */}
            <div className="pt-8 border-t border-[#0a0a0a]/10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#5c5852]">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#0a0a0a] transition-colors"
              >
                <Icons.Linkedin className="w-4 h-4 text-[#256f82]" />
                <span>LinkedIn</span>
                <Icons.ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#0a0a0a] transition-colors"
              >
                <Icons.Github className="w-4 h-4" />
                <span>GitHub (@dionne-cmd)</span>
                <Icons.ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#0a0a0a] transition-colors"
              >
                <Icons.ExternalLink className="w-4 h-4 text-[#256f82]" />
                <span>kingluminar.com</span>
              </a>

              <a
                href={corporateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#0a0a0a] transition-colors"
              >
                <Icons.ExternalLink className="w-4 h-4 text-[#256f82]" />
                <span>DionneSetien.online</span>
              </a>
            </div>

            <div className="text-xs text-[#5c5852] italic pt-2">
              ¡Vamos con todo!
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#0a0a0a]/10 py-8 text-center text-xs text-[#5c5852]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Dionne Setien LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Human Intention × Machine Intelligence</span>
            <span>Miami, FL</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
