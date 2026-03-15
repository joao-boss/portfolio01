import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const ContactSection = () => {
    const { t } = useLanguage();
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleEmailClick = () => {
        // Construct the mailto link dynamically
        const recipient = "joaoguilhermeboss@gmail.com";
        const emailSubject = subject ? encodeURIComponent(subject) : encodeURIComponent("Contato via Portfólio");
        const bodyContent = `Nome: ${name}\n\n${message}`;
        const emailBody = encodeURIComponent(bodyContent);

        // Open user's default email client
        window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
    };

    return (
        <div className="w-full max-w-lg mx-auto py-2">
            <div className="flex flex-col gap-8">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold tracking-widest text-metal-300 uppercase font-[family-name:var(--font-family-mono)]">
                        {t.sections.contact.fields.name}
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent border-b border-metal-500/50 py-2 text-metal-100 focus:outline-none focus:border-accent-teal transition-colors text-base font-medium"
                    />
                </div>

                {/* Subject Field */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-bold tracking-widest text-metal-300 uppercase font-[family-name:var(--font-family-mono)]">
                        {t.sections.contact.fields.subject}
                    </label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-transparent border-b border-metal-500/50 py-2 text-metal-100 focus:outline-none focus:border-accent-teal transition-colors text-base font-medium"
                    />
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold tracking-widest text-metal-300 uppercase font-[family-name:var(--font-family-mono)]">
                        {t.sections.contact.fields.message}
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                        className="w-full bg-transparent border-b border-metal-500/50 py-2 text-metal-100 focus:outline-none focus:border-accent-teal transition-colors text-base font-medium resize-none"
                    />
                </div>

                {/* Send Action */}
                <div className="pt-4">
                    <button
                        onClick={handleEmailClick}
                        className="px-8 py-3 bg-metal-100 text-surface-900 font-bold tracking-wide uppercase text-sm hover:bg-white transition-colors flex items-center justify-center gap-3"
                    >
                        <span>{t.sections.contact.sendButton}</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
