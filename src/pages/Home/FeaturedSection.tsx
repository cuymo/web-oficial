import "animate.css";

export const FeaturedSection = () => {
    return (
        <>
            <section id="feature-section" className="animate__animated animate__fadeIn">
                <div className="pb-20 pt-1 xl:pb-[130px] xl:pt-[53px]">
                    <div className="global-container">
                        <div
                            className="jos mb-10 text-left sm:mx-auto sm:text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px] animate__animated animate__fadeInDown">
                            <h2
                                className="font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                                Atiende mejor, responde más rápido, vende más
                            </h2>
                        </div>
                        <ul className="grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
                            <li className="jos flex flex-col gap-x-[30px] gap-y-6 sm:flex-row animate__animated animate__fadeInUp" data-jos_delay="0.1">
                                <div
                                    className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-4 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]">
                                    <img src="/images/th-2/icon-feature-1.svg" alt="icon-feature-1" width="49"
                                        height="45" />
                                </div>
                                <div className="flex flex-1 flex-col gap-y-5">
                                    <div
                                        className="font-clashDisplay text-[22px] font-medium leading-6 lg:text-[28px] lg:leading-5">
                                        Multimodalidad
                                    </div>
                                    <p>
                                        Entiende textos, imágenes, audios, documentos y más.
                                    </p>
                                </div>
                            </li>
                            <li className="jos flex flex-col gap-x-[30px] gap-y-6 sm:flex-row animate__animated animate__fadeInUp" data-jos_delay="0.2">
                                <div
                                    className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-4 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]">
                                    <img src="/images/th-2/icon-feature-2.svg" alt="icon-feature-2" width="45"
                                        height="45" />
                                </div>
                                <div className="flex flex-1 flex-col gap-y-5">
                                    <div
                                        className="font-clashDisplay text-[22px] font-medium leading-6 lg:text-[28px] lg:leading-5">
                                        Detección de intención
                                    </div>
                                    <p>
                                        Nuestra IA entiende cualquier mensaje de tus clientes.
                                    </p>
                                </div>
                            </li>
                            <li className="jos flex flex-col gap-x-[30px] gap-y-6 sm:flex-row animate__animated animate__fadeInUp" data-jos_delay="0.3">
                                <div
                                    className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-4 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]">
                                    <img src="/images/th-2/icon-feature-3.svg" alt="icon-feature-3" width="36"
                                        height="45" />
                                </div>
                                <div className="flex flex-1 flex-col gap-y-5">
                                    <div
                                        className="font-clashDisplay text-[22px] font-medium leading-6 lg:text-[28px] lg:leading-5">
                                        Respuestas rápidas
                                    </div>
                                    <p>
                                        Conoce toda la información de tu negocio y responde inteligentemente.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="global-container">
                <div className="h-[1px] w-full bg-[#EAEDF0]"></div>
            </div>
            <section id="content-section-1" className="animate__animated animate__fadeIn">
                <div className="pb-20 sm:pb-10 pt-20 md:pb-36 md:pt-32 lg:pb-28 xl:pb-[220px] xl:pt-[130px] xxl:pt-[200px]">
                    <div className="global-container">
                        <div
                            className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_.8fr)_1fr] xl:gap-28 xxl:gap-[134px]">
                            <div className="jos order-2 mt-16 rounded-md md:order-1 md:mt-0 animate__animated animate__zoomIn" data-jos_animation="fade-up">
                                <div
                                    className="relative h-[494px] rounded-tl-[20px] rounded-tr-[20px] bg-[url('images/th-2/content-shape.jpg')] bg-cover bg-no-repeat">
                                    <img src="/images/phone_chat_3.png" alt="th2-content-img-1.png" width="500"
                                        height="564" className="absolute bottom-0 left-[100%] w-[520px] -translate-x-1/2"
                                        draggable="false" />
                                </div>
                            </div>
                            <div className="jos order-1 md:order-2 animate__animated animate__fadeInRight" data-jos_animation="fade-right">
                                <div className="mb-6">
                                    <h2
                                        className="font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                                        ⚡ Responde en segundos
                                    </h2>
                                </div>
                                <div className="text-lg leading-[1.66]">
                                    <p className="mb-7 last:mb-0">
                                        Atiende a tus clientes al instante y sin esfuerzo con una IA que entiende todo
                                        tipo de mensajes.
                                    </p>
                                    <ul
                                        className="mt-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] font-medium leading-[1.28] tracking-[1px] lg:text-[28px]">
                                        <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%]">
                                            Disponible 24/7
                                        </li>
                                        <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%]">
                                            Respuestas humanas y rápidas
                                        </li>
                                        <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%]">
                                            Mejora la satisfacción del cliente
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="content-section-2" className="animate__animated animate__fadeIn">
                <div className="pb-20 md:pb-36 lg:pb-28 xl:pb-[220px]">
                    <div className="global-container">
                        <div
                            className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1fr)_.8fr] xl:gap-28 xxl:gap-[134px]">
                            <div className="jos order-2 mt-16 rounded-md md:mt-0 animate__animated animate__zoomIn" data-jos_animation="fade-up">
                                <div
                                    className="relative h-[494px] rounded-tl-[20px] rounded-tr-[20px] bg-[url('/images/th-2/content-shape.jpg')] bg-cover bg-no-repeat">
                                    <img src="/images/phone_chat_2.png" alt="th2-content-img-2.png" width="500"
                                        height="564" className="absolute bottom-0 left-[100%] w-[520px] -translate-x-1/2" />
                                </div>
                            </div>
                            <div className="jos order-1 animate__animated animate__fadeInRight" data-jos_animation="fade-right">
                                <div className="mb-6">
                                    <h2
                                        className="font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                                        🚀 Más que respuestas: un chatbot que actúa
                                    </h2>
                                </div>
                                <div className="text-lg leading-[1.66]">
                                    <p className="mb-7 last:mb-0">
                                        Nuestro chatbot no solo conversa, también agenda, confirma y gestiona citas
                                        automáticamente para impulsar tus ventas.
                                    </p>
                                    <ul
                                        className="mt-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] font-medium leading-[1.28] tracking-[1px] lg:text-[28px]">
                                        <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%]">
                                            Convierte consultas en citas confirmadas
                                        </li>
                                        <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%]">
                                            Asegura más clientes sin perder oportunidades
                                        </li>
                                        <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%]">
                                            Calendario de agendas en tiempo real
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="content-section-3" className="animate__animated animate__fadeIn">
                <div className="pb-20 md:pb-36 lg:pb-28 xl:pb-[150px]">
                    <div className="global-container">
                        <div
                            className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_.8fr)_1fr] xl:gap-28 xxl:gap-[134px]">
                            <div className="jos order-2 mt-16 rounded-md md:order-1 md:mt-0 animate__animated animate__zoomIn" data-jos_animation="fade-up">
                                <div
                                    className="relative h-[494px] rounded-tl-[20px] rounded-tr-[20px] bg-[url('/images/th-2/content-shape.jpg')] bg-cover bg-no-repeat">
                                    <img src="/images/phone_chat_1.png" alt="th2-content-img-3.png" width="500"
                                        height="564" className="absolute bottom-0 left-[100%] w-[520px] -translate-x-1/2" />
                                </div>
                                <a target="_blank"
                                    href="https://api.whatsapp.com/send?phone=593939028131&text=%C2%A1Hola%21%2C+estoy+interesado..."
                                    className="button relative z-[1] mt-6 mx-auto inline-flex items-center gap-3 rounded-[50px] border-none py-[18px] text-white hover:text-white animate__animated animate__fadeInUp cta-last-mobile">
                                    Quiero mi prueba gratuita
                                    <img src="/images/th-2/icon-white-long-arrow-right.svg"
                                        alt="icon-white-long-arrow-right" /></a>
                            </div>
                            <div className="jos order-1 md:order-2 animate__animated animate__fadeInRight" data-jos_animation="fade-right">
                                <div className="mb-6">
                                    <h2
                                        className="font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                                        🧠 Un chatbot que sabe todo de tu negocio
                                    </h2>
                                </div>
                                <div className="mb-12 text-lg leading-[1.66]">
                                    <p className="mb-7 last:mb-0">
                                        Nuestra IA responde en tiempo real sobre tus productos y servicios, como si
                                        fuera parte de tu equipo.
                                    </p>
                                </div>
                                <a target="_blank"
                                    href="https://api.whatsapp.com/send?phone=593939028131&text=%C2%A1Hola%21%2C+estoy+interesado..."
                                    className="button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none py-[18px] text-white hover:text-white animate__animated animate__fadeInUp cta-last-desktop">
                                    Quiero mi prueba gratuita
                                    <img src="/images/th-2/icon-white-long-arrow-right.svg"
                                        alt="icon-white-long-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
