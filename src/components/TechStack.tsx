import { useEffect, useRef } from 'react';
import {
  Code2,
  Database,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Rocket,
  Cloud,
} from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

const stackItems = [
  {
    name: 'React / TypeScript',
    description: 'Modern UI engineering with scalable component architecture.',
    icon: Code2,
    accent: 'from-cyan-400 to-sky-500',
  },
  {
    name: 'Node / APIs',
    description: 'Reliable backend services and fast integrations.',
    icon: Cloud,
    accent: 'from-indigo-400 to-violet-500',
  },
  {
    name: 'Firebase / Supabase',
    description: 'Realtime data, auth, and cloud infrastructure for production apps.',
    icon: Database,
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Mobile First',
    description: 'Polished experience design for iOS, Android, and web.',
    icon: Smartphone,
    accent: 'from-fuchsia-400 to-pink-500',
  },
  {
    name: 'Security First',
    description: 'Secure releases, privacy-ready flows, and production-grade practices.',
    icon: ShieldCheck,
    accent: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Launch Ready',
    description: 'From MVP to scale-up, we shape products with velocity and clarity.',
    icon: Rocket,
    accent: 'from-cyan-500 to-blue-600',
  },
];

export default function TechStack() {
  const { t } = useLang();
  const { techStack } = t;
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((node, index) => {
            setTimeout(() => node.classList.add('visible'), index * 90);
          });
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className="relative overflow-hidden py-28 bg-[#0a0f1d]"
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at top left, #14b8a6 0%, transparent 45%), radial-gradient(circle at bottom right, #f59e0b 0%, transparent 45%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="mb-14 text-center">
          <span className="section-badge mb-4">{techStack.badge}</span>
          <h2 className="mb-4 text-4xl font-display font-bold text-white md:text-5xl">
            {techStack.title}{' '}
            <span className="text-gradient-teal">{techStack.titleAccent}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {techStack.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stackItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="reveal group rounded-3xl border border-white/10 bg-[#12192e]/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-teal-500/40 hover:bg-[#12192e]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`inline-flex rounded-2xl bg-gradient-to-br ${item.accent} p-3 text-white shadow-lg`}>
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-12 rounded-3xl border border-teal-500/20 bg-gradient-to-r from-teal-500/10 via-[#12192e]/80 to-amber-500/10 p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-sm font-semibold text-teal-300">
                <Sparkles size={14} />
                {techStack.highlightLabel}
              </div>
              <h3 className="text-2xl font-semibold text-white">{techStack.highlightTitle}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                {techStack.highlightText}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}