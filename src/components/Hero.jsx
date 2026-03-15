import { motion } from "framer-motion";
import { profile } from "../data/content";
import ParallaxPhotoStrip from "./ParallaxPhotoStrip";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
    const { t } = useLanguage();
    
    return (
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-6 pb-12">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-teal/[0.06] blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-metal-500/15 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-metal-500/20 bg-surface-700/50 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-metal-300 tracking-widest uppercase font-[family-name:var(--font-family-mono)]">
                        {profile.location}
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="text-6xl md:text-8xl font-black tracking-tighter mb-4"
                >
                    <span className="text-metal-100 drop-shadow-sm">{profile.name}</span>
                </motion.h1>

                {/* Alias */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-2xl md:text-3xl font-light text-accent-teal tracking-[0.2em] uppercase mb-8 font-[family-name:var(--font-family-mono)]"
                >
                    {profile.alias}
                </motion.p>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.55 }}
                    className="text-lg md:text-xl text-metal-300 font-medium tracking-tight mb-8"
                >
                    {t.hero.tagline}
                </motion.p>

                {/* Bio */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="text-base md:text-lg text-metal-400 max-w-2xl mx-auto leading-relaxed font-light"
                >
                    {t.hero.bio}
                </motion.p>
            </div>

            {/* Cinematic photo strip */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="mt-8 w-full"
            >
                <ParallaxPhotoStrip />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-8 flex justify-center"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-5 h-8 rounded-full border-2 border-metal-500/30 flex items-start justify-center p-1"
                >
                    <div className="w-1 h-2 rounded-full bg-accent-teal/60" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
