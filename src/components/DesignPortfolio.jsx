import { motion } from "framer-motion";
import { useState } from "react";
import { designPortfolio } from "../data/content";
import ProjectModal from "./ProjectModal";
import { useLanguage } from "../context/LanguageContext";

const ExternalLinkIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const DesignCard = ({ project, index, onClick }) => {
    const { t } = useLanguage();
    
    return (
        <motion.button
            onClick={() => onClick(project)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative block w-full text-left rounded-xl overflow-hidden bg-surface-800/80 border border-metal-500/8 hover:border-accent-teal/15 transition-all outline-none"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full bg-surface-900 overflow-hidden">
                <img
                    src={project.coverImageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white bg-accent-teal/80 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <span className="text-xs font-semibold uppercase tracking-widest">{t.ui.openPortfolio}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="9" y1="3" x2="9" y2="21" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="p-4 bg-surface-800">
                <p className="text-[10px] text-accent-teal font-medium tracking-[0.2em] uppercase mb-1 font-[family-name:var(--font-family-mono)]">
                    {project.category}
                </p>
                <h2 className="text-sm font-semibold text-metal-100 leading-snug group-hover:text-white transition-colors">
                    {project.title}
                </h2>
            </div>
        </motion.button>
    );
};

const DesignPortfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {designPortfolio.map((project, i) => (
                    <DesignCard
                        key={project.id}
                        project={project}
                        index={i}
                        onClick={handleProjectClick}
                    />
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default DesignPortfolio;
