import { useState, useRef } from "react";

// Datos de ejemplo para cada pestaña y sus FAQs
const FAQ_TABS = {
    "general-questions": [
        {
            q: "¿Qué es un chatbot con IA y cómo me ayuda?",
            a: "Es un asistente virtual que entiende a tus clientes y responde con información de tu negocio en canales como WhatsApp o tu web. Reduce tiempos de respuesta y aumenta la conversión.",
        },
        {
            q: "¿Qué beneficios concretos obtengo?",
            a: "Atención 24/7, menos carga operativa para tu equipo, más ventas y mejor experiencia de cliente.",
        },
        {
            q: "¿Se conecta con mis sistemas actuales?",
            a: "Sí. Integramos con tu CRM, helpdesk y canales como WhatsApp, Instagram, Facebook o webchat para que todo quede unificado.",
        },
        {
            q: "¿Es seguro?",
            a: "Claro. Cumplimos buenas prácticas de seguridad y privacidad, adaptadas a tu sector.",
        },
    ],
    "about-the-company": [
        {
            q: "¿Qué hace Cüymo?",
            a: "Diseñamos e implementamos chatbots con IA e integraciones para ventas, soporte y automatización de procesos, conectados a tus sistemas.",
        },
        {
            q: "¿Con qué herramientas trabajan?",
            a: "CRM como HubSpot o Salesforce, helpdesk como Zendesk o Freshdesk, y canales como WhatsApp, Instagram, Facebook y web. También hacemos integraciones a medida.",
        },
        {
            q: "¿Cómo es el proceso de implementación?",
            a: "Definimos objetivos, integramos canales y sistemas, cargamos conocimiento, probamos y lanzamos. Luego seguimos mejorando mes a mes.",
        },
        {
            q: "¿Qué soporte ofrecen después?",
            a: "Monitoreo continuo, mejoras de flujos, entrenamiento del bot y reportes con recomendaciones.",
        },
        {
            q: "¿En cuánto tiempo veo resultados?",
            a: "El primer bot (MVP) puede estar en 1 a 3 semanas. Desde ahí, mejoramos mes a mes.",
        },
    ],
    "about-artificial-intelligence": [
        {
            q: "¿Qué aplicaciones de IA se usan en negocios hoy?",
            a: "Chatbots, clasificación de tickets, recomendadores, detección de fraude y análisis predictivo.",
        },
        {
            q: "¿Qué limitaciones tiene la IA?",
            a: "Puede cometer errores si los datos son malos o si la consulta es muy ambigua. Por eso combinamos supervisión humana con la IA.",
        },
    ],
    "about-the-team": [
        {
            q: "¿La IA reemplaza a mi equipo?",
            a: "No, lo potencia. La IA atiende lo repetitivo y tu equipo se enfoca en lo complejo y humano.",
        },
        {
            q: "¿Cómo aseguran calidad y seguridad?",
            a: "Con pruebas, monitoreo continuo y auditorías de conversaciones para mejorar la precisión y el cumplimiento.",
        },
        {
            q: "¿Cómo miden resultados?",
            a: "Con KPIs claros como tiempo de respuesta, resolución en primer contacto y conversión. Te damos dashboards y reportes.",
        },
    ],
};


export const FaqSection = () => {
    const [activeTab, setActiveTab] = useState<keyof typeof FAQ_TABS>("general-questions");
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

    const toggleAccordion = (idx: number) => setOpenIndex((prev) => (prev === idx ? null : idx));

    const faqs = FAQ_TABS[activeTab];

    return (

        <section className="faq-section mb-32 animate__animated animate__fadeIn">
            <div className="pb-20 xl:pb-[130px]">
                <div className="global-container">
                    <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-[minmax(0,_auto)_1fr] lg:grid-cols-[minmax(354px,_auto)_1fr] lg:gap-x-[86px]">

                        {/* Tabs */}
                        <div className="flex flex-col gap-y-6 animate__animated animate__fadeInLeft">
                            {Object.keys(FAQ_TABS).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => {
                                        setActiveTab(tab as keyof typeof FAQ_TABS);
                                        setOpenIndex(null);
                                    }}
                                    className={`tab-button faq-button ${activeTab === tab ? "active" : ""}`}
                                >
                                    {tab === "general-questions"
                                        ? "Preguntas generales"
                                        : tab === "about-the-company"
                                            ? "Sobre la empresa"
                                            : tab === "about-artificial-intelligence"
                                                ? "Sobre inteligencia artificial"
                                                : "Sobre el equipo"}
                                </button>
                            ))}
                        </div>

                        {/* Accordion content */}
                        <div className="animate__animated animate__fadeInUp">
                            <ul className="flex flex-col gap-y-6">
                                {faqs.map((item, i) => {
                                    const isOpen = openIndex === i;
                                    const maxH = isOpen ? (panelsRef.current[i]?.scrollHeight || 0) + 24 : 0;

                                    return (
                                        <li
                                            key={i}
                                            className="rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] animate__animated animate__fadeInUp"
                                        >
                                            <button
                                                type="button"
                                                aria-expanded={isOpen}
                                                onClick={() => toggleAccordion(i)}
                                                className="flex w-full items-center justify-between text-left text-xl leading-[1.2] -tracking-[0.5px] lg:text-[28px]"
                                            >
                                                <span className="font-semibold">{item.q}</span>
                                                <span className="grid h-8 w-8 place-items-center rounded-full border border-black/10">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        width="16"
                                                        height="16"
                                                        aria-hidden="true"
                                                        className="transition-transform duration-300"
                                                    >
                                                        <path
                                                            d="M12 5v14"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            className={isOpen ? "opacity-0" : "opacity-100"}
                                                        />
                                                        <path
                                                            d="M5 12h14"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>

                                            <div
                                                ref={(el: HTMLDivElement | null): void => {
                                                    panelsRef.current[i] = el;
                                                }}
                                                className={`faq-panel overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${isOpen ? "opacity-100 mt-3" : "opacity-0"}`}
                                                style={{ maxHeight: maxH }}
                                            >
                                                <p className="text-[#2C2C2C]">{item.a}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}
