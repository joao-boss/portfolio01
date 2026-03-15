import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const ChevronIcon = ({ isOpen }) => (
    <motion.svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-metal-400"
    >
        <path d="M6 9l6 6 6-6" />
    </motion.svg>
);

const CollapsibleSection = ({ id, title, subtitle, children, defaultOpen = true }) => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(defaultOpen);

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === `#${id}`) {
                setIsOpen(true);
            }
        };

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        
        // Check on initial mount in case we landed on a hash
        handleHashChange();

        // Also intercept clicks on links that point to this ID to force open even if hash hasn't changed
        const handleLinkClick = (e) => {
            const link = e.target.closest('a');
            if (link && link.getAttribute('href') === `#${id}`) {
                setIsOpen(true);
            }
        };

        document.addEventListener('click', handleLinkClick);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            document.removeEventListener('click', handleLinkClick);
        };
    }, [id]);

    return (
        <section id={id} className="px-6 scroll-mt-16">
            <div className="max-w-6xl mx-auto py-4">
                {/* Header with toggle */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between group cursor-pointer mb-1"
                >
                    <div className="text-left">
                        <h2 className="text-sm md:text-base font-bold tracking-[0.4em] uppercase text-accent-teal mb-1 font-[family-name:var(--font-family-mono)] opacity-95">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-metal-300 text-xs md:text-sm font-light tracking-wide">{subtitle}</p>
                        )}
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                        <span className="text-[9px] uppercase tracking-widest text-metal-500 font-[family-name:var(--font-family-mono)] hidden sm:inline">
                            {isOpen ? t.ui.collapse : t.ui.expand}
                        </span>
                        <div className="w-8 h-8 rounded-full border border-metal-500/15 flex items-center justify-center group-hover:border-accent-teal/30 transition-colors">
                            <ChevronIcon isOpen={isOpen} />
                        </div>
                    </div>
                </button>

                {/* Collapsible content */}
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6">
                                {children}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CollapsibleSection;
