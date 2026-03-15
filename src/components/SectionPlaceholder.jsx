import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SectionPlaceholder = ({ title, subtitle, count = 4 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-16 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-accent-teal mb-2 font-[family-name:var(--font-family-mono)]">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-metal-400 text-sm">{subtitle}</p>
                    )}
                </motion.div>

                {/* Placeholder grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Array.from({ length: count }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                            className="group relative rounded-xl border border-dashed border-metal-500/15 bg-surface-700/30 backdrop-blur-sm p-6 h-44 flex flex-col justify-between transition-all hover:border-accent-teal/20 hover:bg-surface-700/50"
                        >
                            {/* Placeholder content */}
                            <div>
                                <div className="w-24 h-2 rounded bg-surface-500/40 mb-3" />
                                <div className="w-16 h-1.5 rounded bg-surface-500/20" />
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-surface-500/20" />
                                <div className="w-20 h-1.5 rounded bg-surface-500/15" />
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-accent-teal/10 group-hover:bg-accent-teal/30 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionPlaceholder;
