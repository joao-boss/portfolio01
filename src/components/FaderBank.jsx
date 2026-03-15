import { motion } from "framer-motion";
import Fader from "./Fader";
import { skills } from "../data/content";

import { useLanguage } from "../context/LanguageContext";

/* Skill-type icons rendered inline */
const SkillIcon = ({ type }) => {
    const { language } = useLanguage();

    const icons = {
        mix: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M2 20h2V8h-2zM6 20h2V4H6zM10 20h2v-6h-2zM14 20h2V10h-2zM18 20h2V6h-2zM22 20h2v-8h-2z" />
            </svg>
        ),
        audio: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
            </svg>
        ),
        design: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
            </svg>
        ),
        ux: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
            </svg>
        ),
        ai: (
            <span className="text-[12px] font-bold font-[family-name:var(--font-family-mono)] h-4 flex items-center">
                {language === 'pt' ? 'IA' : 'AI'}
            </span>
        ),
        lang: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
            </svg>
        ),
    };
    return <span className="text-surface-500/70 flex justify-center items-center">{icons[type] || null}</span>;
};

const BrainGearIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-surface-600">
        <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
        <path d="M9 21h6M10 17v4M14 17v4" />
        <circle cx="12" cy="9" r="1.5" fill="currentColor" opacity="0.4" />
        <path d="M12 6v1M12 11v1M9.5 7.5l.7.7M13.8 11.8l.7.7M9 9.5h1M14 9.5h1M9.5 11.5l.7-.7M13.8 7.2l.7-.7" opacity="0.5" />
    </svg>
);

/* SkillsPanel — renders as a panel card */
const SkillsPanel = ({ inView }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="panel-surface rounded-2xl p-5 md:p-6 relative overflow-hidden h-full flex flex-col"
        >
            {/* Brushed metal texture lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                {Array.from({ length: 80 }).map((_, i) => (
                    <div key={i} className="absolute left-0 right-0 h-px bg-black" style={{ top: `${i * 1.25}%` }} />
                ))}
            </div>

            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <BrainGearIcon />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-surface-600 font-[family-name:var(--font-family-mono)]">
                    Skills
                </span>
            </div>

            {/* Faders — distributed to align extremes with tools */}
            <div className="flex-1 flex items-center justify-center w-full">
                <div className="flex justify-between md:justify-around items-end py-3 w-full max-w-[760px] mx-auto overflow-x-auto pb-4 snap-x">
                    {skills.map((skill, index) => (
                        <div key={skill.name} className="flex flex-col items-center gap-2 md:gap-1 w-[70px] md:w-[130px] flex-shrink-0 snap-center">
                            <Fader
                                name={skill.name}
                                shortName={skill.shortName}
                                value={skill.value}
                                delay={0.3 + index * 0.08}
                                inView={inView}
                            />
                            <div className="scale-125 md:scale-100 text-surface-600 mt-1 md:mt-0">
                                <SkillIcon type={skill.icon} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom panel edge highlight */}
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
    );
};

export default SkillsPanel;
