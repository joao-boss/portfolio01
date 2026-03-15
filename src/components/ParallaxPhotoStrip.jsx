import { motion } from "framer-motion";

const photos = [
    { src: "/photos/studio-session.png", alt: "Studio session", position: "center 15%" },
    { src: "/photos/live-stage.png", alt: "Live stage performance", position: "center 22%" },
    { src: "/photos/teaching.png", alt: "Teaching production", position: "center 38%" },
    { src: "/photos/virada-cultural.jpg", alt: "Virada Cultural", position: "center 12%" },
    { src: "/photos/duo-session.jpg", alt: "Duo session", position: "center 25%" },
];

const ParallaxPhotoStrip = () => {
    // Duplicate photos even more for a seamless loop
    const displayPhotos = [...photos, ...photos, ...photos, ...photos];

    return (
        <div
            className="relative w-full overflow-hidden py-6"
            style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
        >
            {/* Cinematic vignette overlay */}
            <div className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background: "linear-gradient(180deg, rgba(13,15,25,0.6) 0%, transparent 30%, transparent 70%, rgba(13,15,25,0.6) 100%)",
                }}
            />

            {/* Infinite Marquee Strip */}
            <motion.div
                className="flex gap-4 items-center"
                animate={{
                    x: [0, -1000],
                }}
                transition={{
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{
                    width: "fit-content",
                    willChange: "transform",
                }}
            >
                {displayPhotos.map((photo, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 relative rounded-lg overflow-hidden select-none"
                        style={{
                            width: `${160 + (i % 3) * 40}px`,
                            height: "120px",
                        }}
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover pointer-events-none opacity-60 hover:opacity-100 transition-opacity duration-700"
                            style={{ objectPosition: photo.position || "center" }}
                            draggable={false}
                            loading="lazy"
                        />
                        {/* Film grain/depth overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)",
                            }}
                        />
                    </div>
                ))}
            </motion.div>

            {/* Subtle film strip perforations (decorative) */}
            <div className="absolute top-0 left-0 right-0 h-px bg-metal-500/5" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-metal-500/5" />
        </div>
    );
};

export default ParallaxPhotoStrip;
