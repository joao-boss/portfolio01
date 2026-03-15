import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const ProjectModal = ({ project, isOpen, onClose }) => {
    const { t } = useLanguage();
    
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-surface-950/95 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-6xl max-h-[90vh] bg-surface-900 border border-metal-500/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-metal-500/5 bg-surface-900/50 backdrop-blur-md sticky top-0 z-10">
                            <div>
                                <p className="text-[10px] text-accent-teal font-medium tracking-[0.2em] uppercase mb-1 font-[family-name:var(--font-family-mono)]">
                                    {project.category}
                                </p>
                                <h2 className="text-xl font-bold text-metal-100">{project.title}</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-surface-800 text-metal-400 hover:text-white hover:bg-surface-700 transition-all"
                                aria-label="Close modal"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Scrollable Body */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
                            {project.projectImages && project.projectImages.map((imgUrl, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="w-full rounded-lg overflow-hidden bg-surface-800 shadow-xl"
                                >
                                    <img
                                        src={imgUrl}
                                        alt={`${project.title} - image ${i + 1}`}
                                        className="w-full h-auto block"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}

                            {/* CTA to Behance */}
                            <div className="pt-8 pb-12 flex flex-col items-center text-center space-y-4">
                                <p className="text-metal-400 text-sm italic">{t.ui.gostou}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-accent-teal text-surface-900 font-bold rounded-full hover:bg-accent-teal/90 transition-all transform hover:scale-105 shadow-lg shadow-accent-teal/20"
                                >
                                    {t.ui.verBehance}
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
