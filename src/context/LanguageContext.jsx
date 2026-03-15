import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
    pt: {
        nav: {
            productions: "Produções",
            beats: "Beats",
            design: "Design",
            skills: "Skills",
            contact: "Contato"
        },
        sections: {
            audioPlacements: {
                title: "Produção de Áudio",
                subtitle: "Beats, produções, mix & master."
            },
            beats: {
                title: "Instrumentais",
                subtitle: "Beats originais — prod & artwork by Ponthe."
            },
            design: {
                title: "Design Portfolio",
                subtitle: "Branding, identidade visual e motion graphics."
            },
            skills: {
                title: "Skills & Tools",
                subtitle: "Stack técnica — níveis de proficiência."
            },
            contact: {
                title: "Contato",
                subtitle: "Vamos construir a sua próxima ideia.",
                heading: "Inicie um projeto",
                description: "Envie uma mensagem direta sem precisar de apps ou cadastros, apenas escreva abaixo.",
                fields: {
                    name: "Seu Nome / Marca",
                    subject: "Assunto / Projeto",
                    message: "Mensagem Principal"
                },
                placeholders: {
                    name: "Ex: Daft Punk...",
                    subject: "Ex: Produção de EP, Identidade Visual...",
                    message: "Fale um pouco sobre o que tem em mente..."
                },
                sendButton: "ABRIR E-MAIL DE CONTATO"
            }
        },
        hero: {
            tagline: "Produção de Áudio · Mix & Master · Design Gráfico",
            bio: "Mais de uma década esculpindo projetos de áudio e arquitetando conceitos visuais — de palcos de festivais a estúdios e empresas. Hoje, integro fluxos inteligentes, automação e IA para levar a criatividade e a produtividade a um novo patamar."
        },
        ui: {
            expand: "Expandir",
            collapse: "Recolher",
            openPortfolio: "Abrir Portfólio",
            gostou: "Gostou deste projeto?",
            verBehance: "VER PROJETO COMPLETO NO BEHANCE",
            instrumental: " x Instrumental",
            prodBy: "Prod/Artwork por Ponthe"
        },
        footer: {
            rights: "Todos os direitos reservados."
        }
    },
    en: {
        nav: {
            productions: "Productions",
            beats: "Beats",
            design: "Design",
            skills: "Skills",
            contact: "Contact"
        },
        sections: {
            audioPlacements: {
                title: "Audio Placements",
                subtitle: "Beats, productions, mix & master."
            },
            beats: {
                title: "Instrumentals",
                subtitle: "Original beats — prod & artwork by Ponthe."
            },
            design: {
                title: "Design Portfolio",
                subtitle: "Branding, visual identity, and motion graphics."
            },
            skills: {
                title: "Skills & Tools",
                subtitle: "Technical stack — proficiency levels."
            },
            contact: {
                title: "Contact",
                subtitle: "Let's build your next idea.",
                heading: "Start a project",
                description: "Send a direct message without needing apps or signups, just write below.",
                fields: {
                    name: "Your Name / Brand",
                    subject: "Subject / Project Scope",
                    message: "Main Message"
                },
                placeholders: {
                    name: "Ex: Daft Punk...",
                    subject: "Ex: EP Production, Visual Identity...",
                    message: "Tell me a bit about what's on your mind..."
                },
                sendButton: "OPEN CONTACT EMAIL"
            }
        },
        hero: {
            tagline: "Audio Production · Mix & Master · Graphic Design",
            bio: "Over a decade sculpting soundscapes and architecting visual concepts — from festival stages to studios and corporate settings. Today, I integrate intelligent workflows, automation, and AI to take creativity and productivity to a new level."
        },
        ui: {
            expand: "Expand",
            collapse: "Collapse",
            openPortfolio: "Open Portfolio",
            gostou: "Liked this project?",
            verBehance: "VIEW FULL PROJECT ON BEHANCE",
            instrumental: " x Instrumental",
            prodBy: "Prod/Artwork by Ponthe"
        },
        footer: {
            rights: "All rights reserved."
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('pt');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new LanguageError('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
