import "animate.css";

export const CoreValue = () => {
    return (
        <section id="core-value" className="mb-32 animate__animated animate__fadeIn">
            <div
                className="jos mx-5 rounded-[50px] bg-black px-[20px] py-20 sm:px-[50px] md:mx-[50px] lg:px-[100px] xl:py-[130px]">
                <div className="global-container">

                    {/* Título */}
                    <div className="mb-10 text-center lg:mb-12 xl:mb-20 animate__animated animate__fadeInDown">
                        <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[745px]">
                            <h2 className="text-white">Nuestros valores fundamentales</h2>
                        </div>
                    </div>

                    {/* Línea divisoria */}
                    <div className="mb-6 h-[4px] w-full rounded bg-colorCodGray sm:mb-0 animate__animated animate__fadeIn"></div>

                    {/* Lista de valores */}
                    <ul className="grid grid-cols-1 justify-between gap-6 md:grid-cols-2 xxl:flex xxl:flex-nowrap">
                        <li className="animate__animated animate__fadeInUp" >
                            <div className="mb-3 flex items-center gap-x-3 md:mb-6">
                                <h4 className="flex-1 text-white">Innovación Constante</h4>
                            </div>
                            <p className="text-lg text-white lg:text-[21px]">
                                Usamos IA de vanguardia para llevar tu negocio al siguiente nivel.
                            </p>
                        </li>
                        <li className="animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="mb-3 flex items-center gap-x-3 md:mb-6">
                                <h4 className="flex-1 text-white">Cercanía Humana</h4>
                            </div>
                            <p className="text-lg text-white lg:text-[21px]">
                                Creemos en conversaciones naturales que generan confianza.
                            </p>
                        </li>
                        <li className="animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="mb-3 flex items-center gap-x-3 md:mb-6">
                                <h4 className="flex-1 text-white">Disponibilidad Total</h4>
                            </div>
                            <p className="text-lg text-white lg:text-[21px]">
                                Siempre activos, siempre listos: 24/7 sin perder clientes.
                            </p>
                        </li>
                        <li className="animate__animated animate__fadeInUp animate__delay-3s">
                            <div className="mb-3 flex items-center gap-x-3 md:mb-6">
                                <h4 className="flex-1 text-white">Resultados Reales</h4>
                            </div>
                            <p className="text-lg text-white lg:text-[21px]">
                                Nuestro éxito se mide en tus ventas y la satisfacción de tus clientes.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
