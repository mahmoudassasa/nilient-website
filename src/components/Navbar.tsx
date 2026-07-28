import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

export default function Navbar() {
  const { t, toggleLang, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.apps, href: '#apps' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0f1d]/85 backdrop-blur-md border-b border-white/10 shadow-xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
          onClick={e => {
            e.preventDefault();
            handleNav('#home');
          }}
        >
          <div className="relative">
            <img
              src="/assets/images/logo-transparent.png"
              alt="Nilient Logo"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-teal-400 border-2 border-[#0a0f1d]" />
          </div>
          <span className="text-white font-display font-bold text-xl tracking-wide">
            NILIENT
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-medium text-white/75 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Language Switcher + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-teal-400 hover:text-teal-300 transition-all duration-200 bg-white/5 hover:bg-white/10"
            aria-label="Switch language"
          >
            <Globe size={15} className="shrink-0" />
            <span>{t.nav.langLabel}</span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#12192e]/95 backdrop-blur-xl border border-white/10 mx-4 mt-2 mb-2 rounded-2xl p-4 flex flex-col gap-1 shadow-2xl">
          {links.map(link => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`px-4 py-3 text-sm font-medium text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-all ${
                lang === 'ar' ? 'text-end' : 'text-start'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}