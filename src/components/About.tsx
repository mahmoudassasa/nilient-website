import { useEffect, useRef } from 'react';
import { Paintbrush2, ShieldCheck, Users, Lightbulb } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

const valueIcons = [Paintbrush2, ShieldCheck, Users, Lightbulb];

export default function About() {
  const { t } = useLang();
  const { about } = t;
  const sectionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 bg-[#0a0f1d] relative overflow-hidden text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-copper-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Visual Area */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-3xl scale-125" />

              {/* Floating App Preview */}
              <div className="relative z-10 reveal drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]">
                <img
                  src="/assets/images/rotina-hero.png"
                  alt="Nilient Showcase"
                  className="w-full max-w-[260px] sm:max-w-[290px] h-auto object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Floating Logo Badge */}
              <div className="absolute -top-4 -right-6 z-20 bg-[#12192e] border border-teal-500/30 rounded-2xl p-3 shadow-2xl reveal flex items-center justify-center w-16 h-16">
                <img src="/assets/images/logo-transparent.png" alt="Nilient Logo" className="w-full h-full object-contain" />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-4 -left-6 z-20 bg-[#12192e]/90 border border-white/10 rounded-2xl px-5 py-3 shadow-2xl reveal backdrop-blur-md">
                <p className="text-2xl font-display font-bold text-teal-400">2026</p>
                <p className="text-slate-400 text-xs font-medium">Est. Year</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 mb-4">
                {about.sectionBadge}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                {about.title}{' '}
                <span className="text-teal-400">{about.titleAccent}</span>
                {about.titleEnd}{' '}
                <span className="text-amber-400">{about.titleEnd2}</span>
              </h2>
            </div>
            
            <p className="reveal text-slate-300 leading-relaxed text-base md:text-lg">
              {about.p1}
            </p>
            
            <p className="reveal text-slate-300 leading-relaxed text-base md:text-lg">
              {about.p2}
            </p>

            {/* Divider with Logo */}
            <div className="reveal flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-gradient-to-r from-teal-500/40 to-transparent" />
              <img src="/assets/images/logo-transparent.png" alt="Nilient" className="h-7 w-7 object-contain opacity-70" />
              <div className="h-px flex-1 bg-gradient-to-l from-amber-500/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Values Grid Section */}
        <div ref={valuesRef}>
          <div className="text-center mb-12 reveal">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              What We Stand For
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((value, i) => {
              const Icon = valueIcons[i];
              const styles = [
                { iconBg: 'bg-teal-500/10', iconColor: 'text-teal-400', borderColor: 'border-teal-500/20' },
                { iconBg: 'bg-amber-500/10', iconColor: 'text-amber-400', borderColor: 'border-amber-500/20' },
                { iconBg: 'bg-teal-500/10', iconColor: 'text-teal-400', borderColor: 'border-teal-500/20' },
                { iconBg: 'bg-amber-500/10', iconColor: 'text-amber-400', borderColor: 'border-amber-500/20' },
              ];
              const st = styles[i];

              return (
                <div
                  key={i}
                  className={`reveal group bg-[#111827] rounded-2xl p-6 border ${st.borderColor} hover:border-teal-400/50 transition-all duration-300 shadow-lg hover:shadow-teal-500/5 hover:-translate-y-1`}
                >
                  <div className={`w-12 h-12 rounded-xl ${st.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={24} className={st.iconColor} />
                  </div>
                  <h4 className="font-display font-bold text-white text-lg mb-2">{value.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}