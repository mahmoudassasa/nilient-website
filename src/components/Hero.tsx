import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLang();
  const { hero } = t;

  const scrollToApps = () => {
    document.querySelector('#apps')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0a0f1d] flex flex-col justify-center overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(20, 184, 166, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 184, 166, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-amber-500/8 blur-3xl animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl" />

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-teal-500/20 to-transparent" />

        {/* Seamless bottom blend gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0a0f1d]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-16 z-10">
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Badge */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-teal-500/15 text-teal-300 border border-teal-500/25">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              {hero.badge}
            </span>
          </div>

          {/* Headline */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-800 leading-tight text-white">
              {hero.headline1}
              <br />
              <span className="text-gradient-teal">{hero.headline2}</span>
              <br />
              {hero.headline3}
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            {hero.sub}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <button
              type="button"
              onClick={scrollToApps}
              className="btn-primary text-sm flex items-center gap-2"
            >
              {hero.cta1}
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={scrollToContact}
              className="btn-outline text-sm"
            >
              {hero.cta2}
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 pt-4 border-t border-white/10 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            {[hero.stat1, hero.stat2, hero.stat3].map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="text-2xl md:text-3xl font-display font-700 text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-white/45 font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Floating App Mockup Visual */}
        <div
          className="flex-1 flex justify-center items-center animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="relative">
            {/* Soft Glow behind the phone */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500/20 to-teal-300/10 blur-3xl scale-125 pointer-events-none" />

            {/* App Screen Container */}
            <div className="relative z-10 animate-float drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]">
              <img
                src="/assets/images/rotina-hero.png"
                alt="Rotina App Screenshot"
                className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px] h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Floating badge card - Bottom Right */}
            <div
              className="absolute -bottom-4 -right-4 z-20 glass rounded-2xl p-3 sm:p-4 shadow-2xl animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shrink-0">
                  <span className="text-white text-lg font-display font-700">R</span>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Rotina App</p>
                  <p className="text-teal-300/80 text-[11px]">Habit Tracker</p>
                </div>
              </div>
            </div>

            {/* Floating rating card - Top Left */}
            <div
              className="absolute top-8 -left-6 z-20 glass rounded-2xl px-4 py-2.5 shadow-2xl animate-float"
              style={{ animationDelay: '2s' }}
            >
              <p className="text-amber-400 text-xs font-bold flex items-center gap-1">
                ⭐ <span>4.9</span>
              </p>
              <p className="text-white/60 text-[10px] font-medium">Top Rated App</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <button
          type="button"
          onClick={scrollToApps}
          aria-label="Scroll to Apps"
          className="p-1 focus:outline-none cursor-pointer"
        >
          <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
}