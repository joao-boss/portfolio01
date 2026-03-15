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
                subtitle: "Entre em contato",
                fields: {
                    name: "Nome",
                    subject: "Assunto",
                    message: "Mensagem"
                },
                sendButton: "ENVIAR"
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
                subtitle: "Get in touch",
                fields: {
                    name: "Name",
                    subject: "Subject",
                    message: "Message"
                },
                sendButton: "SEND"
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
