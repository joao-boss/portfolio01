import { useRef } from "react";
import { useInView } from "framer-motion";
import Hero from "./components/Hero";
import SkillsPanel from "./components/FaderBank";
import ToolsPanel from "./components/ToolsFaderBank";
import AudioPlacements from "./components/AudioPlacements";
import BeatsSection from "./components/BeatsSection";
import CollapsibleSection from "./components/CollapsibleSection";
import DesignPortfolio from "./components/DesignPortfolio";
import ContactSection from "./components/ContactSection";
import { useLanguage } from "./context/LanguageContext";

function App() {
  const { language, toggleLanguage, t } = useLanguage();
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-80px" });
  const toolsRef = useRef(null);
  const toolsInView = useInView(toolsRef, { once: true, margin: "-80px" });

  return (
    <main className="noise-overlay relative min-h-screen scroll-smooth">
      {/* Navigation bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-4 bg-surface-900/80 backdrop-blur-md border-b border-metal-500/5">
        <div className="flex items-center gap-4 md:gap-6">
          <a href="#top" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-3 h-3 rounded-full bg-surface-600" />
            <span className="text-sm font-semibold text-metal-200 tracking-wide">
              João Boss
            </span>
          </a>
          <div className="hidden md:flex items-center gap-5">
            <a href="#audio-placements" className="text-xs text-metal-400 tracking-widest uppercase font-[family-name:var(--font-family-mono)] hover:text-accent-teal transition-colors">
              {t.nav.productions}
            </a>
            <a href="#instrumentais" className="text-xs text-metal-400 tracking-widest uppercase font-[family-name:var(--font-family-mono)] hover:text-accent-teal transition-colors">
              {t.nav.beats}
            </a>
            <a href="#design" className="text-xs text-metal-400 tracking-widest uppercase font-[family-name:var(--font-family-mono)] hover:text-accent-teal transition-colors">
              {t.nav.design}
            </a>
            <a href="#skills-tools" className="text-xs text-metal-400 tracking-widest uppercase font-[family-name:var(--font-family-mono)] hover:text-accent-teal transition-colors">
              {t.nav.skills}
            </a>
            <a href="#contato" className="text-xs text-metal-400 tracking-widest uppercase font-[family-name:var(--font-family-mono)] border-l border-metal-400/20 pl-5 hover:text-accent-teal transition-colors">
              {t.nav.contact}
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 hover:opacity-80 transition-all p-1 group"
            title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          >
            <div className={`w-5 h-3.5 overflow-hidden rounded-sm border ${language === 'pt' ? 'opacity-100' : 'opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100'} border-metal-500/20 transition-all`}>
              <img src="https://flagcdn.com/br.svg" alt="PT" className="w-full h-full object-cover" title="Português" />
            </div>
            <div className={`w-5 h-3.5 overflow-hidden rounded-sm border ${language === 'en' ? 'opacity-100' : 'opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100'} border-metal-500/20 transition-all`}>
              <img src="https://flagcdn.com/gb.svg" alt="EN" className="w-full h-full object-cover" title="English" />
            </div>
          </button>
          <span className="text-xs text-metal-400 font-[family-name:var(--font-family-mono)]">
            2026
          </span>
        </div>
      </nav>

      {/* Hero */}
      <div id="top" />
      <Hero />

      {/* Audio Placements */}
      <CollapsibleSection
        id="audio-placements"
        title={t.sections.audioPlacements.title}
        subtitle={t.sections.audioPlacements.subtitle}
      >
        <AudioPlacements />
      </CollapsibleSection>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-metal-500/5 to-transparent my-2" />

      {/* Beats */}
      <CollapsibleSection
        id="instrumentais"
        title={t.sections.beats.title}
        subtitle={t.sections.beats.subtitle}
      >
        <BeatsSection />
      </CollapsibleSection>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-metal-500/5 to-transparent my-2" />

      {/* Design Portfolio */}
      <CollapsibleSection
        id="design"
        title={t.sections.design.title}
        subtitle={t.sections.design.subtitle}
      >
        <DesignPortfolio />
      </CollapsibleSection>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-metal-500/5 to-transparent my-2" />

      {/* Skills & Tools */}
      <CollapsibleSection
        id="skills-tools"
        title={t.sections.skills.title}
        subtitle={t.sections.skills.subtitle}
      >
        <div className="max-w-5xl mx-auto space-y-6" ref={skillsRef}>
          <SkillsPanel inView={skillsInView} />
          <div ref={toolsRef}>
            <ToolsPanel inView={toolsInView} />
          </div>
        </div>
      </CollapsibleSection>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-metal-500/5 to-transparent my-2" />

      {/* Contact Section */}
      <CollapsibleSection
        id="contato"
        title={t.sections.contact.title}
        subtitle={t.sections.contact.subtitle}
      >
        <ContactSection />
      </CollapsibleSection>

      {/* Footer */}
      <footer className="py-10 px-6 text-center border-t border-metal-500/5">
        <p className="text-xs text-metal-500 font-[family-name:var(--font-family-mono)]">
          © 2026 João Boss / Ponthe — {t.footer.rights}
        </p>
      </footer>
    </main>
  );
}

export default App;
