import { useState, useEffect, useRef, FormEvent } from 'react';
import { Send, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLang();
  const { contact } = t;

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [newsletter, setNewsletter] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1400));
    setSending(false);
    setSubmitted(true);
  };

  const handleNewsletter = async (e: FormEvent) => {
    e.preventDefault();
    if (!newsletter) return;
    await new Promise(r => setTimeout(r, 800));
    setNewsletterDone(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#0a0f1d] relative overflow-hidden text-white">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 mb-4">
            <Mail size={14} />
            {contact.sectionBadge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            {contact.title}{' '}
            <span className="text-teal-400">{contact.titleAccent}</span>
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto leading-relaxed text-base">{contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="reveal">
            <div className="bg-[#12192e] rounded-3xl p-8 h-full border border-teal-500/20 shadow-xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-5 py-8">
                  <div className="w-20 h-20 rounded-2xl bg-teal-500/20 flex items-center justify-center border border-teal-500/30">
                    <CheckCircle size={40} className="text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">{contact.successTitle}</h3>
                    <p className="text-slate-300 leading-relaxed">{contact.successMsg}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <input
                      type="text"
                      placeholder={contact.namePlaceholder}
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0a0f1d] border border-white/10 text-white placeholder-slate-400 outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-200 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={contact.emailPlaceholder}
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0a0f1d] border border-white/10 text-white placeholder-slate-400 outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-200 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      rows={5}
                      placeholder={contact.messagePlaceholder}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0a0f1d] border border-white/10 text-white placeholder-slate-400 outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-200 text-sm resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary justify-center w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-semibold flex items-center gap-2 transition-all shadow-lg shadow-teal-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        {contact.sending}
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        {contact.send}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Newsletter + Info */}
          <div className="reveal flex flex-col gap-6">
            {/* Newsletter card */}
            <div className="bg-[#12192e] rounded-3xl p-8 border border-amber-500/20 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 flex items-center justify-center mb-5 border border-amber-500/20">
                <Mail size={22} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">{contact.newsletter.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">{contact.newsletter.sub}</p>

              {newsletterDone ? (
                <div className="flex items-center gap-3 text-teal-400">
                  <CheckCircle size={18} />
                  <span className="text-sm font-semibold">{contact.newsletter.success}</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-3">
                  <input
                    type="email"
                    placeholder={contact.newsletter.placeholder}
                    value={newsletter}
                    onChange={e => setNewsletter(e.target.value)}
                    className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-[#0a0f1d] border border-white/10 text-white placeholder-slate-400 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all text-sm"
                    required
                  />
                  <button type="submit" className="shrink-0 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all text-sm flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact details */}
            <div className="bg-[#12192e] rounded-3xl p-8 flex-1 border border-white/10 shadow-xl">
              <h3 className="text-lg font-display font-bold text-white mb-5">Quick Contact</h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: '📧', label: 'Email', value: 'support@nilient.com' },
                  { icon: '🌍', label: 'Website', value: 'https://nilient.com' },
                  { icon: '📍', label: 'Location', value: 'Global, Remote-First' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-lg p-2 rounded-xl bg-[#0a0f1d] border border-white/5">{item.icon}</span>
                    <div>
                      <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider">{item.label}</p>
                      <p className="text-slate-200 font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}