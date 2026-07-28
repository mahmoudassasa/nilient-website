import { useEffect, useRef } from 'react';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

const socialLinks = [
  { icon: Twitter, href: 'https://x.com/', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram' },
  { icon: Github, href: 'https://github.com/', label: 'GitHub' },
];

export default function Footer() {
  const { t } = useLang();
  const { footer, nav } = t;

  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((node, i) => {
            setTimeout(() => node.classList.add('visible'), i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: nav.home, href: '#home' },
    { label: nav.apps, href: '#apps' },
    { label: nav.about, href: '#about' },
    { label: nav.contact, href: '#contact' },
  ];

  return (
    <footer ref={footerRef} className="bg-[#0a0f1d] border-t border-white/10 relative overflow-hidden text-white">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        {/* Main footer content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2 reveal">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/images/logo-transparent.png"
                alt="Nilient"
                className="h-10 w-10 rounded-xl object-contain bg-[#12192e] border border-white/10 p-1"
              />
              <span className="text-white font-display font-bold text-xl tracking-wide">NILIENT</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              {footer.tagline}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-[#12192e] hover:bg-[#1a233b] border border-white/10 hover:border-teal-500/40 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-200 shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="reveal">
            <h4 className="text-slate-200 text-xs font-bold uppercase tracking-widest mb-5">
              {footer.links}
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors duration-200 text-start"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="reveal">
            <h4 className="text-slate-200 text-xs font-bold uppercase tracking-widest mb-5">
              {footer.legal}
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/pages/privacy.html" className="text-slate-400 hover:text-teal-400 text-sm transition-colors duration-200">
                  {footer.privacy}
                </a>
              </li>
              <li>
                <a href="/pages/terms.html" className="text-slate-400 hover:text-teal-400 text-sm transition-colors duration-200">
                  {footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">{footer.copyright}</p>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12192e] border border-white/5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-slate-400 text-xs font-medium">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}