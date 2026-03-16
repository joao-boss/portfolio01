import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const ContactSection = () => {
    const { t } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // Status can be: 'idle', 'submitting', 'success', 'error'
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("Por favor, preencha as informações obrigatórias (Nome, Email e Mensagem).");
            return;
        }

        setStatus("submitting");

        // Web3Forms API
        // REPLACE THE ACCESS KEY BELOW WITH YOUR OWN FROM https://web3forms.com/
        const accessKey = "8c37b3ef-42fe-499c-90b4-c905996dc521";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: name,
                    email: email,
                    subject: subject || "Contato via Portfólio",
                    message: message,
                })
            });

            const result = await response.json();
            if (result.success) {
                setStatus("success");
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");

                // Reset success message after 4 seconds
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                console.error(result);
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus("error");
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto py-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold tracking-widest text-metal-300 uppercase font-[family-name:var(--font-family-mono)]">
                        {t.sections.contact.fields.name} *
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent border-b border-metal-500/50 py-2 text-metal-100 focus:outline-none focus:border-accent-teal transition-colors text-base font-medium"
                    />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold tracking-widest text-metal-300 uppercase font-[family-name:var(--font-family-mono)]">
                        {t.sections.contact.fields.email} *
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        {t.sections.contact.fields.message} *
                    </label>
                    <textarea
                        id="message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                        className="w-full bg-transparent border-b border-metal-500/50 py-2 text-metal-100 focus:outline-none focus:border-accent-teal transition-colors text-base font-medium resize-none"
                    />
                </div>

                {/* Send Action */}
                <div className="pt-4 flex items-center justify-between">
                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="px-8 py-3 bg-metal-100 text-surface-900 font-bold tracking-wide uppercase text-sm hover:bg-white transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span>
                            {status === "submitting" ? "Enviando..." : t.sections.contact.sendButton}
                        </span>
                        {status !== "submitting" && (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        )}
                    </button>

                    {/* Status Messages */}
                    {status === "success" && (
                        <span className="text-green-500 font-medium text-sm">Mensagem enviada!</span>
                    )}
                    {status === "error" && (
                        <span className="text-red-500 font-medium text-sm">Erro ao enviar. Tente novamente.</span>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ContactSection;
