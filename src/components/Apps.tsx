import { useEffect, useRef } from 'react';
import { ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

function AppStoreBadge({ store, label }: { store: 'apple' | 'google'; label: string }) {
  return (
    <button
      type="button"
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0a0f1d] hover:bg-[#1a233b] transition-all duration-200 border border-white/10 hover:border-teal-500/30 group"
    >
      {store === 'apple' ? (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.76c.3.17.64.24.99.2l12.5-7.22-2.72-2.72-10.77 9.74zM.5 1.39C.19 1.71 0 2.2 0 2.84v18.32c0 .64.19 1.13.5 1.45l.08.08 10.26-10.26v-.24L.58 1.31.5 1.39zM20.43 10.36l-2.91-1.68-3.07 3.07 3.07 3.07 2.94-1.7c.84-.48.84-1.28-.03-1.76zM4.17.24l12.5 7.22-2.72 2.72L3.18.44C3.52.05 3.87-.06 4.17.24z" />
        </svg>
      )}
      <div className="flex flex-col items-start leading-tight">
        <span className="text-slate-400 text-[10px]">
          {store === 'apple' ? 'Download on the' : 'Get it on'}
        </span>
        <span className="text-white text-xs font-semibold">{label}</span>
      </div>
      <ExternalLink size={12} className="text-slate-500 group-hover:text-teal-400 transition-colors ms-auto" />
    </button>
  );
}

function AppCard({
  app,
  accent,
  index,
}: {
  app: { name: string; tagline: string; description: string; features: string[]; badge: string };
  accent: 'teal' | 'indigo';
  index: number;
}) {
  const { t } = useLang();
  const { apps } = t;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isTeal = accent === 'teal';
  const gradHeader = isTeal
    ? 'from-teal-900/40 via-teal-800/20 to-slate-900'
    : 'from-indigo-900/40 via-indigo-800/20 to-slate-900';
  const badgeBg = isTeal
    ? 'bg-teal-500/15 text-teal-300 border-teal-500/30'
    : 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30';
  const featureColor = isTeal ? 'text-teal-400' : 'text-indigo-400';
  const borderColor = isTeal
    ? 'border-teal-500/20 hover:border-teal-500/40'
    : 'border-indigo-500/20 hover:border-indigo-500/40';

  return (
    <div
      ref={ref}
      className={`reveal bg-[#12192e] rounded-3xl overflow-hidden border ${borderColor} transition-all duration-300 shadow-xl hover:-translate-y-1.5`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* App Visual Header */}
      <div className={`relative bg-gradient-to-b ${gradHeader} h-64 flex items-center justify-center overflow-hidden border-b border-white/5`}>
        {/* Glow orb */}
        <div className={`absolute w-48 h-48 rounded-full blur-3xl pointer-events-none ${isTeal ? 'bg-teal-500/20' : 'bg-indigo-500/20'}`} />

        {/* Real App Screenshot or Placeholder */}
        {isTeal ? (
          <div className="relative z-10 pt-8 transition-transform duration-500 hover:scale-105">
            <img
              src="/assets/images/rotina-hero.png"
              alt={app.name}
              className="w-44 h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
            />
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center gap-3 p-6 glass rounded-2xl border border-indigo-500/30 max-w-[200px] text-center shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Sparkles size={24} />
            </div>
            <p className="text-white font-bold text-sm">{app.name}</p>
            <p className="text-indigo-300/80 text-xs">Coming Soon</p>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-4 end-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-md">
            {app.badge}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${badgeBg}`}>
          {app.tagline}
        </span>
        <h3 className="text-2xl font-display font-bold text-white mb-3">{app.name}</h3>
        <p className="text-slate-300 leading-relaxed text-sm mb-6">{app.description}</p>

        {/* Features list */}
        <ul className="flex flex-col gap-2.5 mb-8">
          {app.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
              <CheckCircle2 size={16} className={`shrink-0 ${featureColor}`} />
              {feature}
            </li>
          ))}
        </ul>

        {/* Store Badges */}
        <div className="flex flex-col sm:flex-row gap-3">
          <AppStoreBadge store="apple" label={apps.appStore} />
          <AppStoreBadge store="google" label={apps.playStore} />
        </div>
      </div>
    </div>
  );
}

export default function Apps() {
  const { t } = useLang();
  const { apps } = t;
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="apps" className="py-28 bg-[#0a0f1d] relative overflow-hidden">
      {/* Clean Background Orbs - Teal & Indigo */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 mb-4">
            {apps.sectionBadge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-2 mb-5">
            {apps.title}{' '}
            <span className="text-teal-400">{apps.titleAccent}</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            {apps.subtitle}
          </p>
        </div>

        {/* App Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AppCard app={apps.routina} accent="teal" index={0} />
          <AppCard app={apps.plato} accent="indigo" index={1} />
        </div>
      </div>
    </section>
  );
}