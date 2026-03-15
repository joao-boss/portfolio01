import { motion } from "framer-motion";

const Fader = ({ name, shortName, value, delay = 0, inView }) => {
    const trackHeight = 140; // px
    const knobHeight = 22;
    const maxTravel = trackHeight - knobHeight;
    const targetY = maxTravel - (value / 100) * maxTravel;

    // Scale marks at 0%, 25%, 50%, 75%, 100%
    const marks = [0, 25, 50, 75, 100];

    return (
        <div className="flex flex-col items-center gap-3 w-[80px] md:w-[130px]">
            {/* Value display */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: delay + 0.8, duration: 0.4 }}
                className="text-[10px] font-bold text-surface-700 font-[family-name:var(--font-family-mono)]"
            >
                {value}
            </motion.span>

            {/* Fader track container */}
            <div
                className="relative rounded-md fader-track"
                style={{ width: 14, height: trackHeight }}
            >
                {/* Scale marks */}
                {marks.map((mark) => {
                    const markY = maxTravel - (mark / 100) * maxTravel + knobHeight / 2;
                    return (
                        <div
                            key={mark}
                            className="scale-mark"
                            style={{ top: markY }}
                        />
                    );
                })}

                {/* Center line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent" />

                {/* Knob */}
                <motion.div
                    className="fader-knob absolute left-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing rounded-sm"
                    style={{
                        width: 36,
                        height: knobHeight,
                        marginLeft: -1,
                    }}
                    initial={{ top: maxTravel }}
                    animate={inView ? { top: targetY } : { top: maxTravel }}
                    transition={{
                        duration: 1.4,
                        ease: [0.34, 1.56, 0.64, 1],
                        delay: delay,
                    }}
                />
            </div>

            {/* Label */}
            <div className="flex flex-col items-center gap-0.5">
                <span className="text-[10px] font-semibold tracking-wide uppercase text-surface-600 leading-tight text-center whitespace-nowrap">
                    {name}
                </span>
            </div>
        </div>
    );
};

export default Fader;
