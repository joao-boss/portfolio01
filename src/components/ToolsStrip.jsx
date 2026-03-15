import { tools } from "../data/content";

const WrenchIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-metal-400"
    >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);

const ToolIcon = ({ tool }) => {
    const isRainbow = tool.color === "rainbow";

    return (
        <div
            className="w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-xs font-bold transition-transform hover:scale-110 hover:-translate-y-1 cursor-default select-none"
            style={{
                background: isRainbow
                    ? "conic-gradient(from 0deg, #FF0000, #FF9A00, #FFFF00, #00FF00, #0000FF, #9B00FF, #FF0000)"
                    : tool.bg,
                color: isRainbow ? "#fff" : tool.color,
                border: `1px solid ${isRainbow ? "rgba(255,255,255,0.15)" : tool.color + "33"}`,
                boxShadow: `0 2px 8px ${isRainbow ? "rgba(150,100,255,0.2)" : tool.color + "22"}`,
                fontSize: tool.abbr.length > 2 ? "9px" : "14px",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: tool.abbr.length > 2 ? "0.5px" : "0",
            }}
            title={tool.name}
        >
            {tool.abbr}
        </div>
    );
};

const ToolsStrip = () => {
    return (
        <div className="tools-strip rounded-xl px-5 py-4 flex items-center gap-6 flex-wrap">
            {/* Tools label */}
            <div className="flex items-center gap-2 mr-2">
                <WrenchIcon />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-metal-400 font-[family-name:var(--font-family-mono)]">
                    Tools
                </span>
            </div>

            {/* Design group */}
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    {tools.design.map((tool) => (
                        <ToolIcon key={tool.abbr} tool={tool} />
                    ))}
                </div>
                <span className="text-[8px] tracking-[0.2em] uppercase text-metal-500 font-[family-name:var(--font-family-mono)] hidden md:block">
                    Design
                </span>
            </div>

            {/* Separator */}
            <div className="hidden md:block w-px h-8 bg-metal-500/20" />

            {/* Production group */}
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    {tools.production.map((tool) => (
                        <ToolIcon key={tool.abbr} tool={tool} />
                    ))}
                </div>
                <span className="text-[8px] tracking-[0.2em] uppercase text-metal-500 font-[family-name:var(--font-family-mono)] hidden md:block">
                    Produção Musical
                </span>
            </div>
        </div>
    );
};

export default ToolsStrip;
