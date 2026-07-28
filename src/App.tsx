import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Apps from './components/Apps';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#0a0f1d] text-white selection:bg-teal-500/30 selection:text-teal-200">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Apps />
          <TechStack />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}