import { motion } from "framer-motion";
import { designTools, productionTools } from "../data/content";

const WrenchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-surface-600">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);

const allTools = [...designTools, ...productionTools];

const ToolFader = ({ tool, delay, inView }) => {
    const trackHeight = 140;
    const knobHeight = 22;
    const maxTravel = trackHeight - knobHeight;
    const targetY = maxTravel - (tool.value / 100) * maxTravel;
    const marks = [0, 25, 50, 75, 100];

    return (
        <div className="flex flex-col items-center gap-2 w-[60px] md:w-[68px]">
            {/* Tool icon box */}
            <div
                className="w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center transition-all hover:scale-110 overflow-hidden"
                style={{
                    background: tool.bg,
                    border: `1px solid ${tool.color}55`,
                    boxShadow: `0 4px 12px ${tool.color}33`,
                }}
                title={tool.name}
            >
                {tool.logoUrl ? (
                    <img
                        src={tool.logoUrl}
                        alt={tool.name}
                        className={`w-full h-full object-contain ${
                             tool.name.includes('FL Studio') || tool.name.includes('RX') || tool.name.includes('Ableton')
                             ? 'p-2' 
                             : 'p-0'
                        }`}
                    />
                ) : (
                    <span
                        className="flex items-center justify-center font-black tracking-tighter"
                        style={{
                            color: tool.color,
                            fontSize: 
                                tool.abbr.length <= 2 ? "18px" : 
                                tool.abbr.length <= 3 ? "14px" : 
                                tool.abbr.length <= 4 ? "12px" : "10px",
                            fontFamily: "'Inter', sans-serif",
                            lineHeight: 1,
                        }}
                    >
                        {tool.abbr}
                    </span>
                )}
            </div>

            {/* Fader track */}
            <div className="relative rounded-md fader-track" style={{ width: 14, height: trackHeight }}>
                {marks.map((mark) => {
                    const markY = maxTravel - (mark / 100) * maxTravel + knobHeight / 2;
                    return <div key={mark} className="scale-mark" style={{ top: markY }} />;
                })}
                <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent" />
                <motion.div
                    className="fader-knob absolute left-1/2 -translate-x-1/2 rounded-sm"
                    style={{ width: 36, height: knobHeight, marginLeft: -1 }}
                    initial={{ top: maxTravel }}
                    animate={inView ? { top: targetY } : { top: maxTravel }}
                    transition={{ duration: 1.4, ease: [0.34, 1.56, 0.64, 1], delay }}
                />
            </div>

            {/* Label */}
            <span className="text-[8px] font-medium tracking-wide text-surface-600 text-center mt-0.5 max-w-[65px] leading-tight truncate">
                {tool.name}
            </span>
        </div>
    );
};

/* ToolsPanel — all tool faders side by side in one row */
const ToolsPanel = ({ inView }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="panel-surface rounded-2xl p-5 md:p-6 relative overflow-hidden"
        >
            {/* Brushed metal texture lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                {Array.from({ length: 80 }).map((_, i) => (
                    <div key={i} className="absolute left-0 right-0 h-px bg-black" style={{ top: `${i * 1.25}%` }} />
                ))}
            </div>

            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <WrenchIcon />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-surface-600 font-[family-name:var(--font-family-mono)]">
                    Tools
                </span>
            </div>

            {/* All tool faders — side by side in a single row */}
            <div className="flex justify-between items-end py-3 w-full max-w-[760px] mx-auto overflow-x-auto">
                {allTools.map((tool, i) => (
                    <ToolFader key={tool.abbr} tool={tool} delay={0.3 + i * 0.06} inView={inView} />
                ))}
            </div>

            {/* Bottom edge highlight */}
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
    );
};

export default ToolsPanel;
