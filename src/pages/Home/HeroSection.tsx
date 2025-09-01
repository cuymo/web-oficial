import "animate.css";

export const HeroSection = () => {
    return (
        <section id="hero-section" className="animate__animated animate__fadeIn">
            <div className="relative overflow-hidden bg-black text-white">
                <div className="pb-28 pt-28 md:pb-40 lg:pt-28 xl:pb-[90px] xl:pt-[122px]">
                    <div className="global-container">
                        <div
                            className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,_1fr)_0.7fr]"
                            id="heading-hero-content"
                        >
                            <div>
                                <h1
                                    className="jos mb-6 max-w-md break-words font-clashDisplay text-5xl font-medium leading-none text-white md:max-w-full md:text-6xl lg:text-7xl xl:text-8xl xxl:text-[100px] animate__animated animate__fadeInDown"
                                >
                                    Tu mejor vendedor por WhatsApp
                                </h1>
                                <p className="jos mb-11 animate__animated animate__fadeInUp">
                                    Automatiza tus ventas y atención al cliente con inteligencia artificial. Nuestro
                                    chatbot para WhatsApp responde al instante, conoce tu negocio y convierte más
                                    conversaciones en clientes, sin que pierdas tiempo ni oportunidades.
                                </p>
                                <a
                                    target="_blank"
                                    href="https://api.whatsapp.com/send?phone=593939028131&text=%C2%A1Hola%21%2C+estoy+interesado+en+sus+servicios.+%0A%C2%BFMe+podr%C3%ADan+ayudar+m%C3%A1s+informaci%C3%B3n%3F+%F0%9F%98%84%F0%9F%92%BC"
                                    className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none py-[18px] text-white hover:text-white animate__animated animate__fadeInUp"
                                >
                                    Probar demo
                                    <img
                                        src="/images/th-2/icon-white-long-arrow-right.svg"
                                        alt="icon-white-long-arrow-right"
                                    />
                                </a>
                            </div>
                            <div className="hero-img animate__animated animate__fadeInRight animate-pulse overflow-hidden rounded-2xl bg-black text-right">
                                <img
                                    src="/images/th-2/hero-img-2.png"
                                    alt="hero-img-2"
                                    width="1296"
                                    height="640"
                                    draggable="false"
                                    className="h-auto w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-[80%] top-[80%] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t blur-[250px]"></div>
                <div className="absolute bottom-0 left-[100%] h-[77px] w-full -translate-x-1/2 bg-[url(/images/th-2/arc-top-shape-1.svg)] bg-cover bg-center bg-no-repeat"></div>
            </div>
        </section>
    )
}
