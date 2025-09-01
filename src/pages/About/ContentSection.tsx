export const ContentSection = () => {
    return (
        <section id="content-section-2" className="animate__animated animate__fadeIn">
            <div className="pb-20 xl:pb-[150px]">
                <div className="global-container">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.3fr)_1fr]">

                        {/* Imagen */}
                        <div className="jos order-2 overflow-hidden rounded-md animate__animated animate__fadeInLeft" data-jos_animation="fade-left">
                            <img src="/images/th-2/hero-img-2.png" alt="content-image-2" width="626" draggable="false" />
                        </div>

                        {/* Texto */}
                        <div className="jos order-1 animate__animated animate__fadeInRight" data-jos_animation="fade-right">
                            <div className="mb-6">
                                <h1 className="text-5xl animate__animated animate__fadeInDown">
                                    Transformamos tu negocio con IA
                                </h1>
                            </div>
                            <div className="text-lg leading-[1.4] lg:text-[21px]">
                                <p className="mb-7 last:mb-0">
                                    En <strong>Cüymo</strong> implementamos{" "}
                                    <strong>automatización con Inteligencia Artificial</strong> para
                                    gestionar esas tareas repetitivas que consumen tiempo y energía:
                                    responder preguntas frecuentes, atender mensajes en WhatsApp o
                                    clasificar solicitudes.
                                </p>
                                <p className="mb-7 last:mb-0">
                                    Así, tu equipo puede enfocarse en lo que realmente genera valor:
                                    cerrar más ventas, crear mejores experiencias y construir
                                    relaciones con tus clientes.
                                </p>
                                <a
                                    target="_blank"
                                    href="https://api.whatsapp.com/send?phone=593939028131&text=%C2%A1Hola%21%2C+estoy+interesado+en+sus+servicios.+%0A%C2%BFMe+podr%C3%ADan+ayudar+m%C3%A1s+informaci%C3%B3n%3F+%F0%9F%98%84%F0%9F%92%BC"
                                    className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white animate__animated animate__fadeInUp"
                                >
                                    Contáctanos
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
