import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { beatsGrid } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

const PlayIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const BeatCard = ({ beat, index, inView }) => {
    const { t } = useLanguage();
    const [isLoaded, setIsLoaded] = useState(false);
    const thumbnailUrl = `https://img.youtube.com/vi/${beat.videoId}/mqdefault.jpg`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 + index * 0.06 }}
            className="group relative rounded-xl overflow-hidden bg-surface-800/80 border border-metal-500/8 hover:border-accent-teal/15 transition-all"
        >
            {/* Video embed / thumbnail */}
            <div className="relative aspect-video w-full bg-surface-900">
                {isLoaded ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${beat.videoId}?autoplay=1&rel=0`}
                        title={beat.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        loading="lazy"
                    />
                ) : (
                    <button
                        onClick={() => setIsLoaded(true)}
                        className="absolute inset-0 w-full h-full cursor-pointer"
                        aria-label={`Play ${beat.title}`}
                    >
                        <img
                            src={thumbnailUrl}
                            alt={beat.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-black/40 group-hover:scale-110 transition-transform">
                                <PlayIcon />
                            </div>
                        </div>
                    </button>
                )}
            </div>

            {/* Info bar */}
            <div className="p-3">
                <h3 className="text-xs font-semibold text-metal-200 leading-tight truncate">
                    {beat.title}
                    <span className="text-metal-500 font-normal">{t.ui.instrumental}</span>
                </h3>
                <p className="text-[10px] text-metal-400 mt-0.5 font-[family-name:var(--font-family-mono)]">
                    {t.ui.prodBy}
                </p>
            </div>
        </motion.div>
    );
};

const BeatsSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div ref={ref}>
            {/* Video grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {beatsGrid.map((beat, i) => (
                    <BeatCard key={beat.id} beat={beat} index={i} inView={inView} />
                ))}
            </div>

        </div>
    );
};

export default BeatsSection;
