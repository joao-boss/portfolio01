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
        <div className="panel-surface rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-2xl overflow-hidden relative">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-6">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-metal-100 tracking-tight">
                        {t.sections.contact.heading}
                    </h3>
                    <p className="text-sm text-metal-400 mt-2">
                        {t.sections.contact.description}
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Name Field */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-semibold tracking-wider text-metal-400 uppercase font-[family-name:var(--font-family-mono)]">
                            {t.sections.contact.fields.name}
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-surface-900/50 border border-metal-500/20 rounded-lg px-4 py-3 text-metal-100 focus:outline-none focus:border-accent-teal/50 transition-colors"
                            placeholder={t.sections.contact.placeholders.name}
                        />
                    </div>

                    {/* Subject Field */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="subject" className="text-xs font-semibold tracking-wider text-metal-400 uppercase font-[family-name:var(--font-family-mono)]">
                            {t.sections.contact.fields.subject}
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="bg-surface-900/50 border border-metal-500/20 rounded-lg px-4 py-3 text-metal-100 focus:outline-none focus:border-accent-teal/50 transition-colors"
                            placeholder={t.sections.contact.placeholders.subject}
                        />
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-xs font-semibold tracking-wider text-metal-400 uppercase font-[family-name:var(--font-family-mono)]">
                            {t.sections.contact.fields.message}
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                            className="bg-surface-900/50 border border-metal-500/20 rounded-lg px-4 py-3 text-metal-100 focus:outline-none focus:border-accent-teal/50 transition-colors resize-none"
                            placeholder={t.sections.contact.placeholders.message}
                        />
                    </div>

                    {/* Send Action */}
                    <div className="pt-2">
                        <button
                            onClick={handleEmailClick}
                            className="w-full md:w-auto px-8 py-3.5 bg-accent-teal text-surface-900 font-bold rounded-lg hover:bg-accent-cyan transition-colors hover:-translate-y-0.5 transform shadow-[0_0_20px_rgba(69,162,188,0.2)] hover:shadow-[0_0_25px_rgba(107,213,229,0.4)] flex items-center justify-center gap-2"
                        >
                            <span>{t.sections.contact.sendButton}</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
