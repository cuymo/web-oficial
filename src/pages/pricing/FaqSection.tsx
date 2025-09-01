import { useRef, useState } from "react";

const FAQS = [
    {
        q: "¿Tengo que saber de tecnología para usarlo?",
        a: "Para nada 🙌 Nosotros configuramos y entrenamos el chatbot. Una vez en marcha, lo gestionas fácil y cuentas siempre con nuestro soporte para ajustes o mejoras.",
    },
    {
        q: "¿El chatbot suena natural o robótico?",
        a: "Suena como tú quieras 😎. Definimos el tono y estilo (cercano, profesional, formal o con emojis) para que hable con la voz de tu marca y tus clientes sientan que hablan contigo.",
    },
    {
        q: "¿Cómo saber si mi negocio necesita un chatbot en WhatsApp?",
        a: "Si recibes muchos mensajes, repites las mismas respuestas, pierdes clientes por falta de tiempo o dejas chats sin contestar 👉 es momento de un chatbot de IA.",
    },
];

export const FaqSection = () => {
    // Arranca con todo cerrado para evitar desajustes SSR
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

    const toggle = (idx: number) => setOpenIndex((prev) => (prev === idx ? null : idx));

    return (

        <section className="faq-section animate__animated animate__fadeIn">
            <div className="pb-40 xl:pb-[200px]">
                <div className="global-container">
                    <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">

                        {/* Columna izquierda */}
                        <div className="jos flex flex-col animate__animated animate__fadeInRight" data-jos_animation="fade-right">
                            <div className="mb-8 text-left lg:mb-16 xl:mb-6">
                                <div className="mx-auto md:mx-0 md:max-w-none">
                                    <h2 className="animate__animated animate__fadeInDown">Preguntas frecuentes</h2>
                                </div>
                            </div>
                            <div className="text-lg leading-[1.4] lg:text-[21px]">
                                <p className="mb-7 last:mb-0">
                                    Resolvemos tus dudas sobre cómo la <strong>IA puede automatizar tu atención y ventas</strong>.
                                    Nuestras soluciones se implementan en días, no en meses, para que empieces a ver resultados rápido 🚀.
                                </p>
                                <a
                                    href="https://api.whatsapp.com/send?phone=593939028131&text=%C2%A1Hola%21%2C+estoy+interesado+en+sus+servicios.+%0A%C2%BFMe+podr%C3%ADan+ayudar+m%C3%A1s+informaci%C3%B3n%3F+%F0%9F%98%84%F0%9F%92%BC"
                                    className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white animate__animated animate__fadeInUp"
                                >
                                    Haz tus preguntas
                                </a>
                            </div>
                        </div>

                        {/* Columna derecha: Acordeón */}
                        <div className="jos md:ml-10 lg:ml-20 xl:ml-32 animate__animated animate__fadeInLeft" data-jos_animation="fade-left">
                            <ul className="accordion">
                                {FAQS.map((item, i) => {
                                    const isOpen = openIndex === i;
                                    const panelId = `faq-panel-${i}`;
                                    const headerId = `faq-header-${i}`;
                                    const maxH = isOpen
                                        ? (panelsRef.current[i]?.scrollHeight || 0) + 24 // 24px extra por márgenes
                                        : 0;

                                    return (
                                        <li
                                            key={i}
                                            className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 animate__animated animate__fadeInUp ${i === 1 ? "animate__delay-1s" : i === 2 ? "animate__delay-2s" : i === 3 ? "animate__delay-3s" : ""}`}
                                        >
                                            {/* HEADER */}
                                            <button
                                                type="button"
                                                id={headerId}
                                                aria-controls={panelId}
                                                aria-expanded={isOpen}
                                                onClick={() => toggle(i)}
                                                className="group flex w-full items-center justify-between gap-6 text-left font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20"
                                            >
                                                <span className="flex-1">{item.q}</span>
                                                {/* Ícono inline */}
                                                <span className="grid h-8 w-8 place-items-center rounded-full border border-black/10">
                                                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="transition-transform duration-300">
                                                        <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={isOpen ? "opacity-0" : "opacity-100"} />
                                                        <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </span>
                                            </button>

                                            {/* CONTENT */}
                                            <div
                                                id={panelId}
                                                role="region"
                                                aria-labelledby={headerId}
                                                className={`faq-panel !block overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${isOpen ? "opacity-100 mt-3" : "opacity-0"}`}
                                                ref={(el: HTMLDivElement | null): void => {
                                                    panelsRef.current[i] = el;
                                                }}
                                                style={{ maxHeight: maxH }}
                                            >
                                                <p className="text-lg leading-[1.66] text-[#2C2C2C]">{item.a}</p>
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

/*
Si sigues sin verlo:
- Busca reglas globales que oculten el panel, p.ej.:
    .accordion-content { display:none; }           // eliminar o renombrar la clase
    .disappear { display:none !important; }        // no usamos esta clase
  Al renombrar a .faq-panel y usar !block, evitamos la mayoría de conflictos.

- Quita cualquier script de acordeón de plantillas que añada/quite clases automáticamente.

- Si Tailwind purga utilidades, no pasa nada porque no dependemos de clases arbitrarias para la altura: la controlamos con style={{maxHeight}}.
*/
